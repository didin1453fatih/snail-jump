// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var echo_pb = require('./echo_pb.js');

function serialize_grpc_gateway_testing_ClientStreamingEchoRequest(arg) {
  if (!(arg instanceof echo_pb.ClientStreamingEchoRequest)) {
    throw new Error('Expected argument of type grpc.gateway.testing.ClientStreamingEchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_ClientStreamingEchoRequest(buffer_arg) {
  return echo_pb.ClientStreamingEchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_gateway_testing_ClientStreamingEchoResponse(arg) {
  if (!(arg instanceof echo_pb.ClientStreamingEchoResponse)) {
    throw new Error('Expected argument of type grpc.gateway.testing.ClientStreamingEchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_ClientStreamingEchoResponse(buffer_arg) {
  return echo_pb.ClientStreamingEchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_gateway_testing_EchoRequest(arg) {
  if (!(arg instanceof echo_pb.EchoRequest)) {
    throw new Error('Expected argument of type grpc.gateway.testing.EchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_EchoRequest(buffer_arg) {
  return echo_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_gateway_testing_EchoResponse(arg) {
  if (!(arg instanceof echo_pb.EchoResponse)) {
    throw new Error('Expected argument of type grpc.gateway.testing.EchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_EchoResponse(buffer_arg) {
  return echo_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_gateway_testing_Empty(arg) {
  if (!(arg instanceof echo_pb.Empty)) {
    throw new Error('Expected argument of type grpc.gateway.testing.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_Empty(buffer_arg) {
  return echo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_gateway_testing_ServerStreamingEchoRequest(arg) {
  if (!(arg instanceof echo_pb.ServerStreamingEchoRequest)) {
    throw new Error('Expected argument of type grpc.gateway.testing.ServerStreamingEchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_ServerStreamingEchoRequest(buffer_arg) {
  return echo_pb.ServerStreamingEchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_gateway_testing_ServerStreamingEchoResponse(arg) {
  if (!(arg instanceof echo_pb.ServerStreamingEchoResponse)) {
    throw new Error('Expected argument of type grpc.gateway.testing.ServerStreamingEchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_gateway_testing_ServerStreamingEchoResponse(buffer_arg) {
  return echo_pb.ServerStreamingEchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A simple echo service.
var EchoServiceService = exports.EchoServiceService = {
  // One request followed by one response
// The server returns the client message as-is.
echo: {
    path: '/grpc.gateway.testing.EchoService/Echo',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_EchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_EchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_EchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_EchoResponse,
  },
  // Sends back abort status.
echoAbort: {
    path: '/grpc.gateway.testing.EchoService/EchoAbort',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_EchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_EchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_EchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_EchoResponse,
  },
  // One empty request, ZERO processing, followed by one empty response
// (minimum effort to do message serialization).
noOp: {
    path: '/grpc.gateway.testing.EchoService/NoOp',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.Empty,
    responseType: echo_pb.Empty,
    requestSerialize: serialize_grpc_gateway_testing_Empty,
    requestDeserialize: deserialize_grpc_gateway_testing_Empty,
    responseSerialize: serialize_grpc_gateway_testing_Empty,
    responseDeserialize: deserialize_grpc_gateway_testing_Empty,
  },
  // One request followed by a sequence of responses (streamed download).
// The server will return the same client message repeatedly.
serverStreamingEcho: {
    path: '/grpc.gateway.testing.EchoService/ServerStreamingEcho',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.ServerStreamingEchoRequest,
    responseType: echo_pb.ServerStreamingEchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_ServerStreamingEchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_ServerStreamingEchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_ServerStreamingEchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_ServerStreamingEchoResponse,
  },
  // One request followed by a sequence of responses (streamed download).
// The server abort directly.
serverStreamingEchoAbort: {
    path: '/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.ServerStreamingEchoRequest,
    responseType: echo_pb.ServerStreamingEchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_ServerStreamingEchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_ServerStreamingEchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_ServerStreamingEchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_ServerStreamingEchoResponse,
  },
  // A sequence of requests followed by one response (streamed upload).
// The server returns the total number of messages as the result.
clientStreamingEcho: {
    path: '/grpc.gateway.testing.EchoService/ClientStreamingEcho',
    requestStream: true,
    responseStream: false,
    requestType: echo_pb.ClientStreamingEchoRequest,
    responseType: echo_pb.ClientStreamingEchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_ClientStreamingEchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_ClientStreamingEchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_ClientStreamingEchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_ClientStreamingEchoResponse,
  },
  // A sequence of requests with each message echoed by the server immediately.
// The server returns the same client messages in order.
// E.g. this is how the speech API works.
fullDuplexEcho: {
    path: '/grpc.gateway.testing.EchoService/FullDuplexEcho',
    requestStream: true,
    responseStream: true,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_EchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_EchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_EchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_EchoResponse,
  },
  // A sequence of requests followed by a sequence of responses.
// The server buffers all the client messages and then returns the same
// client messages one by one after the client half-closes the stream.
// This is how an image recognition API may work.
halfDuplexEcho: {
    path: '/grpc.gateway.testing.EchoService/HalfDuplexEcho',
    requestStream: true,
    responseStream: true,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_grpc_gateway_testing_EchoRequest,
    requestDeserialize: deserialize_grpc_gateway_testing_EchoRequest,
    responseSerialize: serialize_grpc_gateway_testing_EchoResponse,
    responseDeserialize: deserialize_grpc_gateway_testing_EchoResponse,
  },
};

exports.EchoServiceClient = grpc.makeGenericClientConstructor(EchoServiceService);
