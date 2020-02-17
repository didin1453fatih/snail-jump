import * as jspb from "google-protobuf"

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
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
  }
}

export class UpdateAccountResponse extends jspb.Message {
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
  toObject(includeInstance?: boolean): UpdateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountResponse): UpdateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountResponse;
  static deserializeBinaryFromReader(message: UpdateAccountResponse, reader: jspb.BinaryReader): UpdateAccountResponse;
}

export namespace UpdateAccountResponse {
  export type AsObject = {
    id: number,
    username: string,
    email: string,
    password: string,
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

export class UserData extends jspb.Message {
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
  toObject(includeInstance?: boolean): UserData.AsObject;
  static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
  static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserData;
  static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

export namespace UserData {
  export type AsObject = {
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

