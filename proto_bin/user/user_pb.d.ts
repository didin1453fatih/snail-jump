// package: grpc.user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FindUserRequest extends jspb.Message { 
    getKeyword(): string;
    setKeyword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserRequest): FindUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserRequest;
    static deserializeBinaryFromReader(message: FindUserRequest, reader: jspb.BinaryReader): FindUserRequest;
}

export namespace FindUserRequest {
    export type AsObject = {
        keyword: string,
    }
}

export class FindUserResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMessage(): string;
    setMessage(value: string): void;

    getTotal(): number;
    setTotal(value: number): void;

    clearPayloadList(): void;
    getPayloadList(): Array<UserData>;
    setPayloadList(value: Array<UserData>): void;
    addPayload(value?: UserData, index?: number): UserData;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserResponse): FindUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserResponse;
    static deserializeBinaryFromReader(message: FindUserResponse, reader: jspb.BinaryReader): FindUserResponse;
}

export namespace FindUserResponse {
    export type AsObject = {
        success: boolean,
        message: string,
        total: number,
        payloadList: Array<UserData.AsObject>,
    }
}

export class UserData extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getUsername(): string;
    setUsername(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getGender(): string;
    setGender(value: string): void;

    getCreatedat(): string;
    setCreatedat(value: string): void;

    getUpdatedat(): string;
    setUpdatedat(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserData.AsObject;
    static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserData;
    static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

export namespace UserData {
    export type AsObject = {
        id: number,
        username: string,
        email: string,
        gender: string,
        createdat: string,
        updatedat: string,
    }
}

export class LogOutRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogOutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogOutRequest): LogOutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogOutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogOutRequest;
    static deserializeBinaryFromReader(message: LogOutRequest, reader: jspb.BinaryReader): LogOutRequest;
}

export namespace LogOutRequest {
    export type AsObject = {
    }
}

export class LogOutResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogOutResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogOutResponse): LogOutResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogOutResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogOutResponse;
    static deserializeBinaryFromReader(message: LogOutResponse, reader: jspb.BinaryReader): LogOutResponse;
}

export namespace LogOutResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class ChangePasswordRequest extends jspb.Message { 
    getPassword(): string;
    setPassword(value: string): void;

    getConfirmpassword(): string;
    setConfirmpassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
    static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
    export type AsObject = {
        password: string,
        confirmpassword: string,
    }
}

export class ChangePasswordResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
    static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class RegistrationRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getConfirmpassword(): string;
    setConfirmpassword(value: string): void;

    getGender(): string;
    setGender(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegistrationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegistrationRequest): RegistrationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegistrationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegistrationRequest;
    static deserializeBinaryFromReader(message: RegistrationRequest, reader: jspb.BinaryReader): RegistrationRequest;
}

export namespace RegistrationRequest {
    export type AsObject = {
        username: string,
        email: string,
        password: string,
        confirmpassword: string,
        gender: string,
    }
}

export class UpdateAccountRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getGender(): string;
    setGender(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
    static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
    export type AsObject = {
        username: string,
        email: string,
        gender: string,
    }
}

export class UpdateAccountResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMessage(): string;
    setMessage(value: string): void;

    getId(): number;
    setId(value: number): void;

    getUsername(): string;
    setUsername(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getGender(): string;
    setGender(value: string): void;

    getCreatedat(): string;
    setCreatedat(value: string): void;

    getUpdatedat(): string;
    setUpdatedat(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccountResponse): UpdateAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccountResponse;
    static deserializeBinaryFromReader(message: UpdateAccountResponse, reader: jspb.BinaryReader): UpdateAccountResponse;
}

export namespace UpdateAccountResponse {
    export type AsObject = {
        success: boolean,
        message: string,
        id: number,
        username: string,
        email: string,
        gender: string,
        createdat: string,
        updatedat: string,
    }
}

export class RegistrationResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegistrationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegistrationResponse): RegistrationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegistrationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegistrationResponse;
    static deserializeBinaryFromReader(message: RegistrationResponse, reader: jspb.BinaryReader): RegistrationResponse;
}

export namespace RegistrationResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class GetMyAccountRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyAccountRequest): GetMyAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyAccountRequest;
    static deserializeBinaryFromReader(message: GetMyAccountRequest, reader: jspb.BinaryReader): GetMyAccountRequest;
}

export namespace GetMyAccountRequest {
    export type AsObject = {
    }
}

export class LoginRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class GetMyAccountResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMessage(): string;
    setMessage(value: string): void;

    getId(): number;
    setId(value: number): void;

    getUsername(): string;
    setUsername(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getGender(): string;
    setGender(value: string): void;

    getCreatedat(): string;
    setCreatedat(value: string): void;

    getUpdatedat(): string;
    setUpdatedat(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyAccountResponse): GetMyAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyAccountResponse;
    static deserializeBinaryFromReader(message: GetMyAccountResponse, reader: jspb.BinaryReader): GetMyAccountResponse;
}

export namespace GetMyAccountResponse {
    export type AsObject = {
        success: boolean,
        message: string,
        id: number,
        username: string,
        email: string,
        password: string,
        gender: string,
        createdat: string,
        updatedat: string,
    }
}

export class LoginResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getToken(): string;
    setToken(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        success: boolean,
        token: string,
        message: string,
    }
}
