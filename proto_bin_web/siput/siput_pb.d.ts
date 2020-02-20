import * as jspb from "google-protobuf"

export class PushRequest extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PushRequest): PushRequest.AsObject;
  static serializeBinaryToWriter(message: PushRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushRequest;
  static deserializeBinaryFromReader(message: PushRequest, reader: jspb.BinaryReader): PushRequest;
}

export namespace PushRequest {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class PushResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PushResponse): PushResponse.AsObject;
  static serializeBinaryToWriter(message: PushResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushResponse;
  static deserializeBinaryFromReader(message: PushResponse, reader: jspb.BinaryReader): PushResponse;
}

export namespace PushResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UploadProtobufRequest extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadProtobufRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadProtobufRequest): UploadProtobufRequest.AsObject;
  static serializeBinaryToWriter(message: UploadProtobufRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadProtobufRequest;
  static deserializeBinaryFromReader(message: UploadProtobufRequest, reader: jspb.BinaryReader): UploadProtobufRequest;
}

export namespace UploadProtobufRequest {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class UploadProtobufResponse extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadProtobufResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadProtobufResponse): UploadProtobufResponse.AsObject;
  static serializeBinaryToWriter(message: UploadProtobufResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadProtobufResponse;
  static deserializeBinaryFromReader(message: UploadProtobufResponse, reader: jspb.BinaryReader): UploadProtobufResponse;
}

export namespace UploadProtobufResponse {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

