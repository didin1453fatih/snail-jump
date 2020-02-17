// package: grpc.gateway.testing
// file: echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as echo_pb from "./echo_pb";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echo: IEchoServiceService_IEcho;
    echoAbort: IEchoServiceService_IEchoAbort;
    noOp: IEchoServiceService_INoOp;
    serverStreamingEcho: IEchoServiceService_IServerStreamingEcho;
    serverStreamingEchoAbort: IEchoServiceService_IServerStreamingEchoAbort;
    clientStreamingEcho: IEchoServiceService_IClientStreamingEcho;
    fullDuplexEcho: IEchoServiceService_IFullDuplexEcho;
    halfDuplexEcho: IEchoServiceService_IHalfDuplexEcho;
}

interface IEchoServiceService_IEcho extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/Echo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}
interface IEchoServiceService_IEchoAbort extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/EchoAbort"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}
interface IEchoServiceService_INoOp extends grpc.MethodDefinition<echo_pb.Empty, echo_pb.Empty> {
    path: string; // "/grpc.gateway.testing.EchoService/NoOp"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<echo_pb.Empty>;
    requestDeserialize: grpc.deserialize<echo_pb.Empty>;
    responseSerialize: grpc.serialize<echo_pb.Empty>;
    responseDeserialize: grpc.deserialize<echo_pb.Empty>;
}
interface IEchoServiceService_IServerStreamingEcho extends grpc.MethodDefinition<echo_pb.ServerStreamingEchoRequest, echo_pb.ServerStreamingEchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/ServerStreamingEcho"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<echo_pb.ServerStreamingEchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.ServerStreamingEchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.ServerStreamingEchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.ServerStreamingEchoResponse>;
}
interface IEchoServiceService_IServerStreamingEchoAbort extends grpc.MethodDefinition<echo_pb.ServerStreamingEchoRequest, echo_pb.ServerStreamingEchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<echo_pb.ServerStreamingEchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.ServerStreamingEchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.ServerStreamingEchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.ServerStreamingEchoResponse>;
}
interface IEchoServiceService_IClientStreamingEcho extends grpc.MethodDefinition<echo_pb.ClientStreamingEchoRequest, echo_pb.ClientStreamingEchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/ClientStreamingEcho"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<echo_pb.ClientStreamingEchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.ClientStreamingEchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.ClientStreamingEchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.ClientStreamingEchoResponse>;
}
interface IEchoServiceService_IFullDuplexEcho extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/FullDuplexEcho"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}
interface IEchoServiceService_IHalfDuplexEcho extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse> {
    path: string; // "/grpc.gateway.testing.EchoService/HalfDuplexEcho"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}

export const EchoServiceService: IEchoServiceService;

export interface IEchoServiceServer {
    echo: grpc.handleUnaryCall<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    echoAbort: grpc.handleUnaryCall<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    noOp: grpc.handleUnaryCall<echo_pb.Empty, echo_pb.Empty>;
    serverStreamingEcho: grpc.handleServerStreamingCall<echo_pb.ServerStreamingEchoRequest, echo_pb.ServerStreamingEchoResponse>;
    serverStreamingEchoAbort: grpc.handleServerStreamingCall<echo_pb.ServerStreamingEchoRequest, echo_pb.ServerStreamingEchoResponse>;
    clientStreamingEcho: grpc.handleClientStreamingCall<echo_pb.ClientStreamingEchoRequest, echo_pb.ClientStreamingEchoResponse>;
    fullDuplexEcho: grpc.handleBidiStreamingCall<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    halfDuplexEcho: grpc.handleBidiStreamingCall<echo_pb.EchoRequest, echo_pb.EchoResponse>;
}

export interface IEchoServiceClient {
    echo(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echoAbort(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echoAbort(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echoAbort(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    noOp(request: echo_pb.Empty, callback: (error: grpc.ServiceError | null, response: echo_pb.Empty) => void): grpc.ClientUnaryCall;
    noOp(request: echo_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.Empty) => void): grpc.ClientUnaryCall;
    noOp(request: echo_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.Empty) => void): grpc.ClientUnaryCall;
    serverStreamingEcho(request: echo_pb.ServerStreamingEchoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    serverStreamingEcho(request: echo_pb.ServerStreamingEchoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    serverStreamingEchoAbort(request: echo_pb.ServerStreamingEchoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    serverStreamingEchoAbort(request: echo_pb.ServerStreamingEchoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    clientStreamingEcho(callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    clientStreamingEcho(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    clientStreamingEcho(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    clientStreamingEcho(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    fullDuplexEcho(): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    fullDuplexEcho(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    fullDuplexEcho(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    halfDuplexEcho(): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    halfDuplexEcho(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    halfDuplexEcho(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
}

export class EchoServiceClient extends grpc.Client implements IEchoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public echo(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echoAbort(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echoAbort(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echoAbort(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public noOp(request: echo_pb.Empty, callback: (error: grpc.ServiceError | null, response: echo_pb.Empty) => void): grpc.ClientUnaryCall;
    public noOp(request: echo_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.Empty) => void): grpc.ClientUnaryCall;
    public noOp(request: echo_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.Empty) => void): grpc.ClientUnaryCall;
    public serverStreamingEcho(request: echo_pb.ServerStreamingEchoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    public serverStreamingEcho(request: echo_pb.ServerStreamingEchoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    public serverStreamingEchoAbort(request: echo_pb.ServerStreamingEchoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    public serverStreamingEchoAbort(request: echo_pb.ServerStreamingEchoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;
    public clientStreamingEcho(callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    public clientStreamingEcho(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    public clientStreamingEcho(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    public clientStreamingEcho(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.ClientStreamingEchoResponse) => void): grpc.ClientWritableStream<echo_pb.ClientStreamingEchoRequest>;
    public fullDuplexEcho(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    public fullDuplexEcho(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    public halfDuplexEcho(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    public halfDuplexEcho(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
}
