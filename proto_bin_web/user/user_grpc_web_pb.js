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
 *   !proto.grpc.user.FindUserRequest,
 *   !proto.grpc.user.FindUserResponse>}
 */
const methodDescriptor_User_FindUser = new grpc.web.MethodDescriptor(
  '/grpc.user.User/FindUser',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.FindUserRequest,
  proto.grpc.user.FindUserResponse,
  /**
   * @param {!proto.grpc.user.FindUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.FindUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.FindUserRequest,
 *   !proto.grpc.user.FindUserResponse>}
 */
const methodInfo_User_FindUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.FindUserResponse,
  /**
   * @param {!proto.grpc.user.FindUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.FindUserResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.FindUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.FindUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.FindUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.findUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/FindUser',
      request,
      metadata || {},
      methodDescriptor_User_FindUser,
      callback);
};


/**
 * @param {!proto.grpc.user.FindUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.FindUserResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.findUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/FindUser',
      request,
      metadata || {},
      methodDescriptor_User_FindUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.user.LogOutRequest,
 *   !proto.grpc.user.LogOutResponse>}
 */
const methodDescriptor_User_LogOut = new grpc.web.MethodDescriptor(
  '/grpc.user.User/LogOut',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.LogOutRequest,
  proto.grpc.user.LogOutResponse,
  /**
   * @param {!proto.grpc.user.LogOutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.LogOutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.LogOutRequest,
 *   !proto.grpc.user.LogOutResponse>}
 */
const methodInfo_User_LogOut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.LogOutResponse,
  /**
   * @param {!proto.grpc.user.LogOutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.LogOutResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.LogOutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.LogOutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.LogOutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.logOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/LogOut',
      request,
      metadata || {},
      methodDescriptor_User_LogOut,
      callback);
};


/**
 * @param {!proto.grpc.user.LogOutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.LogOutResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.logOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/LogOut',
      request,
      metadata || {},
      methodDescriptor_User_LogOut);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.user.ChangePasswordRequest,
 *   !proto.grpc.user.ChangePasswordResponse>}
 */
const methodDescriptor_User_ChangePassword = new grpc.web.MethodDescriptor(
  '/grpc.user.User/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.ChangePasswordRequest,
  proto.grpc.user.ChangePasswordResponse,
  /**
   * @param {!proto.grpc.user.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.ChangePasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.ChangePasswordRequest,
 *   !proto.grpc.user.ChangePasswordResponse>}
 */
const methodInfo_User_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.ChangePasswordResponse,
  /**
   * @param {!proto.grpc.user.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.ChangePasswordResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.ChangePasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.ChangePasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.user.UserClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.user.User/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_User_ChangePassword,
      callback);
};


/**
 * @param {!proto.grpc.user.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.user.ChangePasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.user.UserPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.user.User/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_User_ChangePassword);
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
 *   !proto.grpc.user.GetMyAccountResponse>}
 */
const methodDescriptor_User_GetMyAccount = new grpc.web.MethodDescriptor(
  '/grpc.user.User/GetMyAccount',
  grpc.web.MethodType.UNARY,
  proto.grpc.user.GetMyAccountRequest,
  proto.grpc.user.GetMyAccountResponse,
  /**
   * @param {!proto.grpc.user.GetMyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.GetMyAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.user.GetMyAccountRequest,
 *   !proto.grpc.user.GetMyAccountResponse>}
 */
const methodInfo_User_GetMyAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.user.GetMyAccountResponse,
  /**
   * @param {!proto.grpc.user.GetMyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.user.GetMyAccountResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.user.GetMyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.user.GetMyAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.user.GetMyAccountResponse>|undefined}
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
 * @return {!Promise<!proto.grpc.user.GetMyAccountResponse>}
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

