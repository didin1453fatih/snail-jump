// package: grpc.user
// file: siput.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as siput_pb from "./siput_pb";

interface ISiputService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    push: ISiputService_IPush;
    uploadProtobuf: ISiputService_IUploadProtobuf;
}

interface ISiputService_IPush extends grpc.MethodDefinition<siput_pb.PushRequest, siput_pb.PushResponse> {
    path: string; // "/grpc.user.Siput/Push"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<siput_pb.PushRequest>;
    requestDeserialize: grpc.deserialize<siput_pb.PushRequest>;
    responseSerialize: grpc.serialize<siput_pb.PushResponse>;
    responseDeserialize: grpc.deserialize<siput_pb.PushResponse>;
}
interface ISiputService_IUploadProtobuf extends grpc.MethodDefinition<siput_pb.UploadProtobufRequest, siput_pb.UploadProtobufResponse> {
    path: string; // "/grpc.user.Siput/UploadProtobuf"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<siput_pb.UploadProtobufRequest>;
    requestDeserialize: grpc.deserialize<siput_pb.UploadProtobufRequest>;
    responseSerialize: grpc.serialize<siput_pb.UploadProtobufResponse>;
    responseDeserialize: grpc.deserialize<siput_pb.UploadProtobufResponse>;
}

export const SiputService: ISiputService;

export interface ISiputServer {
    push: grpc.handleClientStreamingCall<siput_pb.PushRequest, siput_pb.PushResponse>;
    uploadProtobuf: grpc.handleClientStreamingCall<siput_pb.UploadProtobufRequest, siput_pb.UploadProtobufResponse>;
}

export interface ISiputClient {
    push(callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    push(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    push(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    push(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    uploadProtobuf(callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
    uploadProtobuf(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
    uploadProtobuf(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
    uploadProtobuf(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
}

export class SiputClient extends grpc.Client implements ISiputClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public push(callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    public push(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    public push(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    public push(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.PushResponse) => void): grpc.ClientWritableStream<siput_pb.PushRequest>;
    public uploadProtobuf(callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
    public uploadProtobuf(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
    public uploadProtobuf(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
    public uploadProtobuf(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: siput_pb.UploadProtobufResponse) => void): grpc.ClientWritableStream<siput_pb.UploadProtobufRequest>;
}
