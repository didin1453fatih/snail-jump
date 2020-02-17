/**
 * @fileoverview gRPC-Web generated client stub for grpc.user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  GetMyAccountRequest,
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
  UpdateAccountRequest,
  UpdateAccountResponse,
  UserData} from './user_pb';

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
    UserData,
    (request: GetMyAccountRequest) => {
      return request.serializeBinary();
    },
    UserData.deserializeBinary
  );

  getMyAccount(
    request: GetMyAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserData) => void) {
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

