// import { UpdateAccountResponse } from './../../proto_bin/user/user_pb.d';
import { token } from './../model/token.model';
import random from 'crypto-random-string'
import {
    GetMyAccountRequest,
    UserData,
    LoginRequest,
    LoginResponse,
    UpdateAccountRequest,
    UpdateAccountResponse,
    LogOutRequest,
    LogOutResponse,
    GetMyAccountResponse,
    FindUserResponse,
    FindUserRequest,
} from './../../proto_bin/user/user_pb';
import { user } from './../model/user.model';
import * as grpc from 'grpc';

import { RegistrationRequest, RegistrationResponse, ChangePasswordRequest, ChangePasswordResponse } from '../../proto_bin/user/user_pb';
import { UserService, IUserServer } from '../../proto_bin/user/user_grpc_pb';
import bcrypt from "bcrypt"
import { Op } from 'sequelize';

class UserHandler implements IUserServer {
    findUser = async (data: grpc.ServerUnaryCall<FindUserRequest>, callback: grpc.sendUnaryData<FindUserResponse>): Promise<void> => {
        var userDB = await user.findAndCountAll({
            where: {
                username: {
                    [Op.like]: `%${data.request.getKeyword()}%`
                }
            },
            limit: 10
        })
        console.log('\r\n*************\r\nUser found\r\n')
        console.log(JSON.stringify(userDB.rows))
        const reply = new FindUserResponse()
        reply.setSuccess(true)
        reply.setTotal(userDB.count)

        var list: UserData[] = []
        await userDB.rows.forEach(item => {
            var userDataTMP = new UserData()
            userDataTMP.setUsername(item.username);
            userDataTMP.setEmail(item.username);
            list.push(userDataTMP);
        })
        reply.setPayloadList(list)
        return callback(null, reply)
        // reply.setPayloadList()
    }
    logOut = async (data: grpc.ServerUnaryCall<LogOutRequest>, callback: grpc.sendUnaryData<LogOutResponse>): Promise<void> => {
        var authToken = data.metadata.get('authToken')
        console.log(authToken)
        var tokenResponse = await token.destroy({
            where: {
                token: authToken
            }
        })
        console.log(JSON.stringify(tokenResponse))
        const reply = new LogOutResponse()
        reply.setSuccess(true);
        reply.setMessage('Logout success')
        return callback(null, reply)
    }

    changePassword = async (data: grpc.ServerUnaryCall<ChangePasswordRequest>, callback: grpc.sendUnaryData<ChangePasswordResponse>): Promise<void> => {
        console.log('\r\n----------------------------Data coming\r\n')
        console.log(JSON.stringify(data.request.toObject()))

        var authToken = data.metadata.get('authToken')
        const tokenDB = await token.findOne({
            where: {
                token: authToken
            }
        })

        if (authToken === null) {
            const reply = new ChangePasswordResponse()
            reply.setSuccess(false);
            reply.setMessage('Auth error. Please login again.')
            return callback(null, reply)
        }

        const userDB = await user.findByPk(tokenDB.userId);
        if (userDB === null) {
            const reply = new ChangePasswordResponse()
            reply.setSuccess(false);
            reply.setMessage('Authentication problem')
            return callback(null, reply)
        }

        if (data.request.getPassword() !== data.request.getConfirmpassword()) {
            const reply = new ChangePasswordResponse()
            reply.setSuccess(false);
            reply.setMessage('Confirmation password not match')
            return callback(null, reply)
        }

        var hashedPassword = bcrypt.hashSync(data.request.getPassword(), 10);
        user.update({
            password: hashedPassword
        }, {
            where: {
                id: userDB.id
            }
        })
        const reply = new ChangePasswordResponse()
        reply.setSuccess(true);
        return callback(null, reply)

    }

    updateAccount = async (data: grpc.ServerUnaryCall<UpdateAccountRequest>, callback: grpc.sendUnaryData<UpdateAccountResponse>): Promise<void> => {
        console.log('\r\n----------------------------Data coming\r\n')
        console.log(JSON.stringify(data.request.toObject()))

        var authToken = data.metadata.get('authToken')
        const tokenDB = await token.findOne({
            where: {
                token: authToken
            }
        })

        if (tokenDB === null) {
            const reply = new UpdateAccountResponse()
            reply.setSuccess(false);
            reply.setMessage('Problem auth')
            return callback(null, reply);
        }

        const userDB = await user.findByPk(tokenDB.userId);
        if (userDB === null) {
            const reply = new UpdateAccountResponse()
            reply.setSuccess(false);
            reply.setMessage('Internal error')
            return callback(null, reply);
        }


        var updatedData: {
            username?: string,
            email?: string,
            gender?: string,
        } = {}

        if (data.request.getUsername() !== null) {
            updatedData.username = data.request.getUsername()
        }

        if (data.request.getEmail() !== null) {
            updatedData.email = data.request.getEmail()
        }

        if (data.request.getGender() !== null) {
            updatedData.gender = data.request.getGender()
        }

        const userUpdatingRespond = await user.update(updatedData, {
            where: {
                id: userDB.id
            }
        })

        console.log('updated user DB')
        console.log(JSON.stringify(userUpdatingRespond))
        const reply = new UpdateAccountResponse()

        if (userUpdatingRespond[0] === 1) {
            const userUpdatedDB = await user.findByPk(userDB.id);
            reply.setSuccess(true);
            reply.setId(userUpdatedDB.id);
            reply.setUsername(userUpdatedDB.username);
            reply.setEmail(userUpdatedDB.email);
            reply.setGender(userUpdatedDB.gender);
            reply.setCreatedat(new Date(userUpdatedDB.createdAt).toISOString())
            reply.setUpdatedat(new Date(userUpdatedDB.updatedAt).toISOString())
            return callback(null, reply);
        } else {
            reply.setSuccess(false);
            reply.setMessage('Internal update error')
            return callback(null, reply);
        }



    }
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

    getMyAccount = async (data: grpc.ServerUnaryCall<GetMyAccountRequest>, callback: grpc.sendUnaryData<GetMyAccountResponse>): Promise<void> => {

        var authToken = data.metadata.get('authToken')
        const tokenDB = await token.findOne({
            where: {
                token: authToken
            }
        })
        if (tokenDB === null) {
            const reply = new GetMyAccountResponse();
            reply.setSuccess(false);
            reply.setMessage('You are not authenticated')
            return callback(null, reply);
        }

        const userDB = await user.findByPk(tokenDB.userId);
        if (userDB === null) {
            const reply = new GetMyAccountResponse();
            reply.setSuccess(false);
            reply.setMessage('User not found')
            return callback(null, reply);
        }

        const reply = new GetMyAccountResponse();
        reply.setSuccess(true);
        reply.setCreatedat(new Date(userDB.createdAt).toISOString());
        reply.setUpdatedat(new Date(userDB.updatedAt).toISOString());
        reply.setEmail(userDB.email);
        reply.setUsername(userDB.username);
        reply.setId(userDB.id);
        reply.setGender(userDB.gender);
        return callback(null, reply);

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