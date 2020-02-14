import { GetMyAccountRequest, UserData, LoginRequest, LoginRespond } from './../../proto_bin_web/user/user_pb.d';
import { user } from './../model/user.model';
import * as grpc from 'grpc';

import { RegistrationRequest, RegistrationResponse } from '../../proto_bin/user/user_pb';
import { UserService, IUserServer } from '../../proto_bin/user/user_grpc_pb';

class UserHandler implements IUserServer {
    // getMyAccount: grpc.handleUnaryCall<import("../../proto_bin/user/user_pb").GetMyAccountRequest, import("../../proto_bin/user/user_pb").UserData>;
    // login: grpc.handleUnaryCall<import("../../proto_bin/user/user_pb").LoginRequest, import("../../proto_bin/user/user_pb").LoginRespond>;
    // registration: grpc.handleUnaryCall<RegistrationRequest, RegistrationResponse>;

    login = async (data: grpc.ServerUnaryCall<LoginRequest>, callback: grpc.sendUnaryData<LoginRespond>) => {
        console.log('login data ' + JSON.stringify(data.request.toObject()))
        console.log('email fetch '+data.request.getEmail())
        var userDB = await user.findOne({
            where: {
                email: data.request.getEmail()
            }
        })
        console.log('user yee '+JSON.stringify(userDB))
        if (userDB !== null) {
            // var reply = new LoginRespond()
            // reply.setSuccess(true)
            // reply.setToken()
            // return callback(null, reply);
        } else {

        }

    }

    getMyAccount = (data: grpc.ServerUnaryCall<GetMyAccountRequest>, callback: grpc.sendUnaryData<UserData>): void => {

    }

    registration = (data: grpc.ServerUnaryCall<RegistrationRequest>, callback: grpc.sendUnaryData<RegistrationResponse>): void => {

        if (data.request.getPassword() === data.request.getConfirmpassword()) {
            user.create({
                username: data.request.getUsername(),
                password: data.request.getPassword(),
                email: data.request.getEmail(),
                gender: data.request.getGender()
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