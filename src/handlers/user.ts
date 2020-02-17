import { token } from './../model/token.model';
import random from 'crypto-random-string'
import { GetMyAccountRequest, UserData, LoginRequest, LoginResponse } from './../../proto_bin/user/user_pb';
import { user } from './../model/user.model';
import * as grpc from 'grpc';

import { RegistrationRequest, RegistrationResponse } from '../../proto_bin/user/user_pb';
import { UserService, IUserServer } from '../../proto_bin/user/user_grpc_pb';
import bcrypt from "bcrypt"

class UserHandler implements IUserServer {
    // getMyAccount: grpc.handleUnaryCall<import("../../proto_bin/user/user_pb").GetMyAccountRequest, import("../../proto_bin/user/user_pb").UserData>;
    // login: grpc.handleUnaryCall<import("../../proto_bin/user/user_pb").LoginRequest, import("../../proto_bin/user/user_pb").LoginRespond>;
    // registration: grpc.handleUnaryCall<RegistrationRequest, RegistrationResponse>;

    login = async (data: grpc.ServerUnaryCall<LoginRequest>, callback: grpc.sendUnaryData<LoginResponse>) => {
        console.log('login data ' + JSON.stringify(data.request.toObject()))
        console.log('email fetch ' + data.request.getEmail())
        var userDB = await user.findOne({
            where: {
                email: data.request.getEmail()
            }
        })
        console.log('user yee ' + JSON.stringify(userDB))
        if (userDB !== null) {
            var comparedToken = bcrypt.compareSync(data.request.getPassword(), userDB.password);
            if (comparedToken === true) {
                var keyToken = random({ length: 20 })
                await token.create({
                    token: keyToken,
                    userId: userDB.id
                })
                const reply = new LoginResponse()
                reply.setSuccess(true)
                reply.setToken(keyToken)
                return callback(null, reply);
            } else {
                const reply = new LoginResponse()
                reply.setSuccess(false)
                reply.setToken("")
                reply.setMessage('something failure')
                return callback(null, reply);
            }
        } else {
            const reply = new LoginResponse()
            reply.setSuccess(false)
            reply.setToken("")
            reply.setMessage('something failure')
            return callback(null, reply);

        }

    }

    getMyAccount = async (data: grpc.ServerUnaryCall<GetMyAccountRequest>, callback: grpc.sendUnaryData<UserData>): Promise<void> => {

        var authToken = data.metadata.get('authToken')
        const tokenDB = await token.findOne({
            where: {
                token: authToken
            }
        })
        const userDB = await user.findByPk(tokenDB.userId);
        var userData = new UserData();
        userData.setCreatedat(new Date(userDB.createdAt).toISOString());
        userData.setUpdatedat(new Date(userDB.updatedAt).toISOString());
        userData.setEmail(userDB.email);
        userData.setUsername(userDB.username);
        userData.setId(userDB.id);
        userData.setGender(userDB.gender);
        return callback(null, userData);

    }

    registration = (data: grpc.ServerUnaryCall<RegistrationRequest>, callback: grpc.sendUnaryData<RegistrationResponse>): void => {

        if (data.request.getPassword() === data.request.getConfirmpassword()) {
            var hadPassword = bcrypt.hashSync(data.request.getPassword(), 10);
            user.create({
                username: data.request.getUsername(),
                password: hadPassword,
                email: data.request.getEmail(),
                gender: data.request.getGender(),
            })
            console.log(JSON.stringify(data.request.toObject()))
            const reply = new RegistrationResponse();
            reply.setSuccess(true)
            reply.setMessage('Registration success')
            return callback(null, reply);
        } else {
            const reply = new RegistrationResponse();
            reply.setSuccess(false)
            reply.setMessage('Registration Failure. Check your confirmation password')
            return callback(null, reply);
        }
    }
}

export default {
    service: UserService,
    handler: new UserHandler(),
};