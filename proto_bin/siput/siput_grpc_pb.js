// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var siput_pb = require('./siput_pb.js');

function serialize_grpc_user_PushRequest(arg) {
  if (!(arg instanceof siput_pb.PushRequest)) {
    throw new Error('Expected argument of type grpc.user.PushRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_PushRequest(buffer_arg) {
  return siput_pb.PushRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_PushResponse(arg) {
  if (!(arg instanceof siput_pb.PushResponse)) {
    throw new Error('Expected argument of type grpc.user.PushResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_PushResponse(buffer_arg) {
  return siput_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_UploadProtobufRequest(arg) {
  if (!(arg instanceof siput_pb.UploadProtobufRequest)) {
    throw new Error('Expected argument of type grpc.user.UploadProtobufRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_UploadProtobufRequest(buffer_arg) {
  return siput_pb.UploadProtobufRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_user_UploadProtobufResponse(arg) {
  if (!(arg instanceof siput_pb.UploadProtobufResponse)) {
    throw new Error('Expected argument of type grpc.user.UploadProtobufResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_user_UploadProtobufResponse(buffer_arg) {
  return siput_pb.UploadProtobufResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var SiputService = exports.SiputService = {
  // Sends a greeting
push: {
    path: '/grpc.user.Siput/Push',
    requestStream: true,
    responseStream: false,
    requestType: siput_pb.PushRequest,
    responseType: siput_pb.PushResponse,
    requestSerialize: serialize_grpc_user_PushRequest,
    requestDeserialize: deserialize_grpc_user_PushRequest,
    responseSerialize: serialize_grpc_user_PushResponse,
    responseDeserialize: deserialize_grpc_user_PushResponse,
  },
  uploadProtobuf: {
    path: '/grpc.user.Siput/UploadProtobuf',
    requestStream: true,
    responseStream: false,
    requestType: siput_pb.UploadProtobufRequest,
    responseType: siput_pb.UploadProtobufResponse,
    requestSerialize: serialize_grpc_user_UploadProtobufRequest,
    requestDeserialize: deserialize_grpc_user_UploadProtobufRequest,
    responseSerialize: serialize_grpc_user_UploadProtobufResponse,
    responseDeserialize: deserialize_grpc_user_UploadProtobufResponse,
  },
};

exports.SiputClient = grpc.makeGenericClientConstructor(SiputService);
