// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_grpc_user_GetMyAccountRequest(arg) {
  if (!(arg instanceof user_pb.GetMyAccountRequest)) {
    throw new Error('Expected argument of type grpc.user.GetMyAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_GetMyAccountRequest(buffer_arg) {
  return user_pb.GetMyAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_LoginRequest(arg) {
  if (!(arg instanceof user_pb.LoginRequest)) {
    throw new Error('Expected argument of type grpc.user.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_LoginRequest(buffer_arg) {
  return user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_LoginResponse(arg) {
  if (!(arg instanceof user_pb.LoginResponse)) {
    throw new Error('Expected argument of type grpc.user.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_LoginResponse(buffer_arg) {
  return user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_RegistrationRequest(arg) {
  if (!(arg instanceof user_pb.RegistrationRequest)) {
    throw new Error('Expected argument of type grpc.user.RegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_RegistrationRequest(buffer_arg) {
  return user_pb.RegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_RegistrationResponse(arg) {
  if (!(arg instanceof user_pb.RegistrationResponse)) {
    throw new Error('Expected argument of type grpc.user.RegistrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_RegistrationResponse(buffer_arg) {
  return user_pb.RegistrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_UserData(arg) {
  if (!(arg instanceof user_pb.UserData)) {
    throw new Error('Expected argument of type grpc.user.UserData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_UserData(buffer_arg) {
  return user_pb.UserData.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var UserService = exports.UserService = {
  // Sends a greeting
registration: {
    path: '/grpc.user.User/Registration',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegistrationRequest,
    responseType: user_pb.RegistrationResponse,
    requestSerialize: serialize_grpc_user_RegistrationRequest,
    requestDeserialize: deserialize_grpc_user_RegistrationRequest,
    responseSerialize: serialize_grpc_user_RegistrationResponse,
    responseDeserialize: deserialize_grpc_user_RegistrationResponse,
  },
  getMyAccount: {
    path: '/grpc.user.User/GetMyAccount',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetMyAccountRequest,
    responseType: user_pb.UserData,
    requestSerialize: serialize_grpc_user_GetMyAccountRequest,
    requestDeserialize: deserialize_grpc_user_GetMyAccountRequest,
    responseSerialize: serialize_grpc_user_UserData,
    responseDeserialize: deserialize_grpc_user_UserData,
  },
  login: {
    path: '/grpc.user.User/Login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginRequest,
    responseType: user_pb.LoginResponse,
    requestSerialize: serialize_grpc_user_LoginRequest,
    requestDeserialize: deserialize_grpc_user_LoginRequest,
    responseSerialize: serialize_grpc_user_LoginResponse,
    responseDeserialize: deserialize_grpc_user_LoginResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
