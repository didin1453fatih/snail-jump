/**
 * @fileoverview gRPC-Web generated client stub for grpc.user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  FindUserRequest,
  FindUserResponse,
  GetMyAccountRequest,
  GetMyAccountResponse,
  LogOutRequest,
  LogOutResponse,
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
  UpdateAccountRequest,
  UpdateAccountResponse} from './user_pb';

export class UserClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoFindUser = new grpcWeb.AbstractClientBase.MethodInfo(
    FindUserResponse,
    (request: FindUserRequest) => {
      return request.serializeBinary();
    },
    FindUserResponse.deserializeBinary
  );

  findUser(
    request: FindUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FindUserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/FindUser',
      request,
      metadata || {},
      this.methodInfoFindUser,
      callback);
  }

  methodInfoLogOut = new grpcWeb.AbstractClientBase.MethodInfo(
    LogOutResponse,
    (request: LogOutRequest) => {
      return request.serializeBinary();
    },
    LogOutResponse.deserializeBinary
  );

  logOut(
    request: LogOutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogOutResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/LogOut',
      request,
      metadata || {},
      this.methodInfoLogOut,
      callback);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    ChangePasswordResponse,
    (request: ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    ChangePasswordResponse.deserializeBinary
  );

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChangePasswordResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoRegistration = new grpcWeb.AbstractClientBase.MethodInfo(
    RegistrationResponse,
    (request: RegistrationRequest) => {
      return request.serializeBinary();
    },
    RegistrationResponse.deserializeBinary
  );

  registration(
    request: RegistrationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RegistrationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/Registration',
      request,
      metadata || {},
      this.methodInfoRegistration,
      callback);
  }

  methodInfoGetMyAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    GetMyAccountResponse,
    (request: GetMyAccountRequest) => {
      return request.serializeBinary();
    },
    GetMyAccountResponse.deserializeBinary
  );

  getMyAccount(
    request: GetMyAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMyAccountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/GetMyAccount',
      request,
      metadata || {},
      this.methodInfoGetMyAccount,
      callback);
  }

  methodInfoupdateAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateAccountResponse,
    (request: UpdateAccountRequest) => {
      return request.serializeBinary();
    },
    UpdateAccountResponse.deserializeBinary
  );

  updateAccount(
    request: UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateAccountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/updateAccount',
      request,
      metadata || {},
      this.methodInfoupdateAccount,
      callback);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginResponse,
    (request: LoginRequest) => {
      return request.serializeBinary();
    },
    LoginResponse.deserializeBinary
  );

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.user.User/Login',
      request,
      metadata || {},
      this.methodInfoLogin,
      callback);
  }

}

