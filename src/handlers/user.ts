import * as grpc from 'grpc';

import { RegistrationRequest, RegistrationResponse } from '../../proto_bin/user/user_pb';
import { UserService, IUserServer } from '../../proto_bin/user/user_grpc_pb';

class UserHandler implements IUserServer {
    // registration: grpc.handleUnaryCall<RegistrationRequest, RegistrationResponse>;

    registration = (data: grpc.ServerUnaryCall<RegistrationRequest>, callback: grpc.sendUnaryData<RegistrationResponse>): void => {


        console.log(JSON.stringify(data.request.toObject()))
        const reply = new RegistrationResponse();

        reply.setSuccess(true)
        reply.setMessage('oke sudah di terima')

        callback(null, reply);
    }
}

export default {
    service: UserService,
    handler: new UserHandler(),
};