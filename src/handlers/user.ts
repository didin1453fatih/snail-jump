import * as grpc from 'grpc';

import { RegistrationRequest, RegistrationResponse } from '../../proto_bin/user/user_pb';
import { UserService, IUserServer } from '../../proto_bin/user/user_grpc_pb';

class UserHandler implements IUserServer {
    // registration: grpc.handleUnaryCall<RegistrationRequest, RegistrationResponse>;

    registration = (call: grpc.ServerUnaryCall<RegistrationRequest>, callback: grpc.sendUnaryData<RegistrationResponse>): void => {
        
    }
}

export default {
    service: UserService,
    handler: new UserHandler(),
};