import { user } from './../model/user.model';
import * as grpc from 'grpc';

import { RegistrationRequest, RegistrationResponse } from '../../proto_bin/user/user_pb';
import { UserService, IUserServer } from '../../proto_bin/user/user_grpc_pb';

class UserHandler implements IUserServer {
    // registration: grpc.handleUnaryCall<RegistrationRequest, RegistrationResponse>;

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