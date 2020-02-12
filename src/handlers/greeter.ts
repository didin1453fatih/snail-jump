import * as grpc from 'grpc';

import { HelloRequest, HelloResponse } from '../../proto_bin/greeter/greeter_pb';
import { GreeterService, IGreeterServer } from '../../proto_bin/greeter/greeter_grpc_pb';

class GreeterHandler implements IGreeterServer {
    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */
    sayHello = (call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloResponse>): void => {
        const reply: HelloResponse = new HelloResponse();

        reply.setMessage(`Hello, ${ call.request.getName() }`);

        callback(null, reply);
    };
}

export default {
    service: GreeterService,
    handler: new GreeterHandler(),
};