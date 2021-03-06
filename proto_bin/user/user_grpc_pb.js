// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_grpc_user_ChangePasswordRequest(arg) {
  if (!(arg instanceof user_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type grpc.user.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_ChangePasswordRequest(buffer_arg) {
  return user_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_ChangePasswordResponse(arg) {
  if (!(arg instanceof user_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type grpc.user.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_ChangePasswordResponse(buffer_arg) {
  return user_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_FindUserRequest(arg) {
  if (!(arg instanceof user_pb.FindUserRequest)) {
    throw new Error('Expected argument of type grpc.user.FindUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_FindUserRequest(buffer_arg) {
  return user_pb.FindUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_FindUserResponse(arg) {
  if (!(arg instanceof user_pb.FindUserResponse)) {
    throw new Error('Expected argument of type grpc.user.FindUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_FindUserResponse(buffer_arg) {
  return user_pb.FindUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_GetMyAccountRequest(arg) {
  if (!(arg instanceof user_pb.GetMyAccountRequest)) {
    throw new Error('Expected argument of type grpc.user.GetMyAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_GetMyAccountRequest(buffer_arg) {
  return user_pb.GetMyAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_GetMyAccountResponse(arg) {
  if (!(arg instanceof user_pb.GetMyAccountResponse)) {
    throw new Error('Expected argument of type grpc.user.GetMyAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_GetMyAccountResponse(buffer_arg) {
  return user_pb.GetMyAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_LogOutRequest(arg) {
  if (!(arg instanceof user_pb.LogOutRequest)) {
    throw new Error('Expected argument of type grpc.user.LogOutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_LogOutRequest(buffer_arg) {
  return user_pb.LogOutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_LogOutResponse(arg) {
  if (!(arg instanceof user_pb.LogOutResponse)) {
    throw new Error('Expected argument of type grpc.user.LogOutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_LogOutResponse(buffer_arg) {
  return user_pb.LogOutResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_grpc_user_UpdateAccountRequest(arg) {
  if (!(arg instanceof user_pb.UpdateAccountRequest)) {
    throw new Error('Expected argument of type grpc.user.UpdateAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_UpdateAccountRequest(buffer_arg) {
  return user_pb.UpdateAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_UpdateAccountResponse(arg) {
  if (!(arg instanceof user_pb.UpdateAccountResponse)) {
    throw new Error('Expected argument of type grpc.user.UpdateAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_UpdateAccountResponse(buffer_arg) {
  return user_pb.UpdateAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var UserService = exports.UserService = {
  // Sends a greeting
findUser: {
    path: '/grpc.user.User/FindUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindUserRequest,
    responseType: user_pb.FindUserResponse,
    requestSerialize: serialize_grpc_user_FindUserRequest,
    requestDeserialize: deserialize_grpc_user_FindUserRequest,
    responseSerialize: serialize_grpc_user_FindUserResponse,
    responseDeserialize: deserialize_grpc_user_FindUserResponse,
  },
  logOut: {
    path: '/grpc.user.User/LogOut',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LogOutRequest,
    responseType: user_pb.LogOutResponse,
    requestSerialize: serialize_grpc_user_LogOutRequest,
    requestDeserialize: deserialize_grpc_user_LogOutRequest,
    responseSerialize: serialize_grpc_user_LogOutResponse,
    responseDeserialize: deserialize_grpc_user_LogOutResponse,
  },
  changePassword: {
    path: '/grpc.user.User/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangePasswordRequest,
    responseType: user_pb.ChangePasswordResponse,
    requestSerialize: serialize_grpc_user_ChangePasswordRequest,
    requestDeserialize: deserialize_grpc_user_ChangePasswordRequest,
    responseSerialize: serialize_grpc_user_ChangePasswordResponse,
    responseDeserialize: deserialize_grpc_user_ChangePasswordResponse,
  },
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
    responseType: user_pb.GetMyAccountResponse,
    requestSerialize: serialize_grpc_user_GetMyAccountRequest,
    requestDeserialize: deserialize_grpc_user_GetMyAccountRequest,
    responseSerialize: serialize_grpc_user_GetMyAccountResponse,
    responseDeserialize: deserialize_grpc_user_GetMyAccountResponse,
  },
  updateAccount: {
    path: '/grpc.user.User/updateAccount',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateAccountRequest,
    responseType: user_pb.UpdateAccountResponse,
    requestSerialize: serialize_grpc_user_UpdateAccountRequest,
    requestDeserialize: deserialize_grpc_user_UpdateAccountRequest,
    responseSerialize: serialize_grpc_user_UpdateAccountResponse,
    responseDeserialize: deserialize_grpc_user_UpdateAccountResponse,
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
