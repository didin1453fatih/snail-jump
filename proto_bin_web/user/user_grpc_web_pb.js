/**
 * @fileoverview gRPC-Web generated client stub for grpc.user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpc = {};
proto.grpc.user = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.user.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.user.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.user.RegistrationRequest,
 *   !proto.grpc.user.RegistrationResponse>}
 */
const methodDescriptor_User_Registration = new grpc.web.MethodDescriptor(
  '/grpc.user.User/Registration',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.RegistrationRequest,
  proto.grpc.user.RegistrationResponse,
  /**
   * @param {!proto.grpc.user.RegistrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.RegistrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.RegistrationRequest,
 *   !proto.grpc.user.RegistrationResponse>}
 */
const methodInfo_User_Registration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.RegistrationResponse,
  /**
   * @param {!proto.grpc.user.RegistrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.RegistrationResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.RegistrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.RegistrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.RegistrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.registration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/Registration',
      request,
      metadata || {},
      methodDescriptor_User_Registration,
      callback);
};


/**
 * @param {!proto.grpc.user.RegistrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.RegistrationResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.registration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/Registration',
      request,
      metadata || {},
      methodDescriptor_User_Registration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.user.GetMyAccountRequest,
 *   !proto.grpc.user.UserData>}
 */
const methodDescriptor_User_GetMyAccount = new grpc.web.MethodDescriptor(
  '/grpc.user.User/GetMyAccount',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.GetMyAccountRequest,
  proto.grpc.user.UserData,
  /**
   * @param {!proto.grpc.user.GetMyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.UserData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.GetMyAccountRequest,
 *   !proto.grpc.user.UserData>}
 */
const methodInfo_User_GetMyAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.UserData,
  /**
   * @param {!proto.grpc.user.GetMyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.UserData.deserializeBinary
);


/**
 * @param {!proto.grpc.user.GetMyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.UserData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.UserData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.getMyAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/GetMyAccount',
      request,
      metadata || {},
      methodDescriptor_User_GetMyAccount,
      callback);
};


/**
 * @param {!proto.grpc.user.GetMyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.UserData>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.getMyAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/GetMyAccount',
      request,
      metadata || {},
      methodDescriptor_User_GetMyAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.user.UpdateAccountRequest,
 *   !proto.grpc.user.UpdateAccountResponse>}
 */
const methodDescriptor_User_updateAccount = new grpc.web.MethodDescriptor(
  '/grpc.user.User/updateAccount',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.UpdateAccountRequest,
  proto.grpc.user.UpdateAccountResponse,
  /**
   * @param {!proto.grpc.user.UpdateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.UpdateAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.UpdateAccountRequest,
 *   !proto.grpc.user.UpdateAccountResponse>}
 */
const methodInfo_User_updateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.UpdateAccountResponse,
  /**
   * @param {!proto.grpc.user.UpdateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.UpdateAccountResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.UpdateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.UpdateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.updateAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/updateAccount',
      request,
      metadata || {},
      methodDescriptor_User_updateAccount,
      callback);
};


/**
 * @param {!proto.grpc.user.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.UpdateAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.updateAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/updateAccount',
      request,
      metadata || {},
      methodDescriptor_User_updateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.user.LoginRequest,
 *   !proto.grpc.user.LoginResponse>}
 */
const methodDescriptor_User_Login = new grpc.web.MethodDescriptor(
  '/grpc.user.User/Login',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.LoginRequest,
  proto.grpc.user.LoginResponse,
  /**
   * @param {!proto.grpc.user.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.LoginRequest,
 *   !proto.grpc.user.LoginResponse>}
 */
const methodInfo_User_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.LoginResponse,
  /**
   * @param {!proto.grpc.user.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/Login',
      request,
      metadata || {},
      methodDescriptor_User_Login,
      callback);
};


/**
 * @param {!proto.grpc.user.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/Login',
      request,
      metadata || {},
      methodDescriptor_User_Login);
};


module.exports = proto.grpc.user;

