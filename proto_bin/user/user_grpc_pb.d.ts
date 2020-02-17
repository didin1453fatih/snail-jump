// package: grpc.user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registration: IUserService_IRegistration;
    getMyAccount: IUserService_IGetMyAccount;
    updateAccount: IUserService_IupdateAccount;
    login: IUserService_ILogin;
}

interface IUserService_IRegistration extends grpc.MethodDefinition<user_pb.RegistrationRequest, user_pb.RegistrationResponse> {
    path: string; // "/grpc.user.User/Registration"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.RegistrationRequest>;
    requestDeserialize: grpc.deserialize<user_pb.RegistrationRequest>;
    responseSerialize: grpc.serialize<user_pb.RegistrationResponse>;
    responseDeserialize: grpc.deserialize<user_pb.RegistrationResponse>;
}
interface IUserService_IGetMyAccount extends grpc.MethodDefinition<user_pb.GetMyAccountRequest, user_pb.UserData> {
    path: string; // "/grpc.user.User/GetMyAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.GetMyAccountRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetMyAccountRequest>;
    responseSerialize: grpc.serialize<user_pb.UserData>;
    responseDeserialize: grpc.deserialize<user_pb.UserData>;
}
interface IUserService_IupdateAccount extends grpc.MethodDefinition<user_pb.UpdateAccountRequest, user_pb.UpdateAccountResponse> {
    path: string; // "/grpc.user.User/updateAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UpdateAccountRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateAccountRequest>;
    responseSerialize: grpc.serialize<user_pb.UpdateAccountResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UpdateAccountResponse>;
}
interface IUserService_ILogin extends grpc.MethodDefinition<user_pb.LoginRequest, user_pb.LoginResponse> {
    path: string; // "/grpc.user.User/Login"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<user_pb.LoginRequest>;
    responseSerialize: grpc.serialize<user_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<user_pb.LoginResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    registration: grpc.handleUnaryCall<user_pb.RegistrationRequest, user_pb.RegistrationResponse>;
    getMyAccount: grpc.handleUnaryCall<user_pb.GetMyAccountRequest, user_pb.UserData>;
    updateAccount: grpc.handleUnaryCall<user_pb.UpdateAccountRequest, user_pb.UpdateAccountResponse>;
    login: grpc.handleUnaryCall<user_pb.LoginRequest, user_pb.LoginResponse>;
}

export interface IUserClient {
    registration(request: user_pb.RegistrationRequest, callback: (error: grpc.ServiceError | null, response: user_pb.RegistrationResponse) => void): grpc.ClientUnaryCall;
    registration(request: user_pb.RegistrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.RegistrationResponse) => void): grpc.ClientUnaryCall;
    registration(request: user_pb.RegistrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.RegistrationResponse) => void): grpc.ClientUnaryCall;
    getMyAccount(request: user_pb.GetMyAccountRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserData) => void): grpc.ClientUnaryCall;
    getMyAccount(request: user_pb.GetMyAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserData) => void): grpc.ClientUnaryCall;
    getMyAccount(request: user_pb.GetMyAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserData) => void): grpc.ClientUnaryCall;
    updateAccount(request: user_pb.UpdateAccountRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateAccountResponse) => void): grpc.ClientUnaryCall;
    updateAccount(request: user_pb.UpdateAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateAccountResponse) => void): grpc.ClientUnaryCall;
    updateAccount(request: user_pb.UpdateAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateAccountResponse) => void): grpc.ClientUnaryCall;
    login(request: user_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: user_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: user_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public registration(request: user_pb.RegistrationRequest, callback: (error: grpc.ServiceError | null, response: user_pb.RegistrationResponse) => void): grpc.ClientUnaryCall;
    public registration(request: user_pb.RegistrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.RegistrationResponse) => void): grpc.ClientUnaryCall;
    public registration(request: user_pb.RegistrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.RegistrationResponse) => void): grpc.ClientUnaryCall;
    public getMyAccount(request: user_pb.GetMyAccountRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserData) => void): grpc.ClientUnaryCall;
    public getMyAccount(request: user_pb.GetMyAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserData) => void): grpc.ClientUnaryCall;
    public getMyAccount(request: user_pb.GetMyAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserData) => void): grpc.ClientUnaryCall;
    public updateAccount(request: user_pb.UpdateAccountRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateAccountResponse) => void): grpc.ClientUnaryCall;
    public updateAccount(request: user_pb.UpdateAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateAccountResponse) => void): grpc.ClientUnaryCall;
    public updateAccount(request: user_pb.UpdateAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateAccountResponse) => void): grpc.ClientUnaryCall;
    public login(request: user_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: user_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: user_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
