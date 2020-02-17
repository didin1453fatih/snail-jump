/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.grpc.user.GetMyAccountRequest', null, global);
goog.exportSymbol('proto.grpc.user.LoginRequest', null, global);
goog.exportSymbol('proto.grpc.user.LoginResponse', null, global);
goog.exportSymbol('proto.grpc.user.RegistrationRequest', null, global);
goog.exportSymbol('proto.grpc.user.RegistrationResponse', null, global);
goog.exportSymbol('proto.grpc.user.UserData', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.user.RegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.user.RegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.user.RegistrationRequest.displayName = 'proto.grpc.user.RegistrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.user.RegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.user.RegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.user.RegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.user.RegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: msg.getUsername(),
    email: msg.getEmail(),
    password: msg.getPassword(),
    confirmpassword: msg.getConfirmpassword(),
    gender: msg.getGender()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.user.RegistrationRequest}
 */
proto.grpc.user.RegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.user.RegistrationRequest;
  return proto.grpc.user.RegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.user.RegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.user.RegistrationRequest}
 */
proto.grpc.user.RegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmpassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGender(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.grpc.user.RegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.RegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.user.RegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.RegistrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getConfirmpassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getGender();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.grpc.user.RegistrationRequest} The clone.
 */
proto.grpc.user.RegistrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.grpc.user.RegistrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.grpc.user.RegistrationRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.grpc.user.RegistrationRequest.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.grpc.user.RegistrationRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.grpc.user.RegistrationRequest.prototype.setEmail = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.grpc.user.RegistrationRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.grpc.user.RegistrationRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string confirmPassword = 4;
 * @return {string}
 */
proto.grpc.user.RegistrationRequest.prototype.getConfirmpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.grpc.user.RegistrationRequest.prototype.setConfirmpassword = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string gender = 5;
 * @return {string}
 */
proto.grpc.user.RegistrationRequest.prototype.getGender = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.grpc.user.RegistrationRequest.prototype.setGender = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.user.RegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.user.RegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.user.RegistrationResponse.displayName = 'proto.grpc.user.RegistrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.user.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.user.RegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.user.RegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.user.RegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: msg.getSuccess(),
    message: msg.getMessage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.user.RegistrationResponse}
 */
proto.grpc.user.RegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.user.RegistrationResponse;
  return proto.grpc.user.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.user.RegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.user.RegistrationResponse}
 */
proto.grpc.user.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.grpc.user.RegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.user.RegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.RegistrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.grpc.user.RegistrationResponse} The clone.
 */
proto.grpc.user.RegistrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.grpc.user.RegistrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpc.user.RegistrationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.grpc.user.RegistrationResponse.prototype.setSuccess = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.grpc.user.RegistrationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.grpc.user.RegistrationResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.user.GetMyAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.user.GetMyAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.user.GetMyAccountRequest.displayName = 'proto.grpc.user.GetMyAccountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.user.GetMyAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.user.GetMyAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.user.GetMyAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.user.GetMyAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.user.GetMyAccountRequest}
 */
proto.grpc.user.GetMyAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.user.GetMyAccountRequest;
  return proto.grpc.user.GetMyAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.user.GetMyAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.user.GetMyAccountRequest}
 */
proto.grpc.user.GetMyAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.grpc.user.GetMyAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.GetMyAccountRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.user.GetMyAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.GetMyAccountRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.grpc.user.GetMyAccountRequest} The clone.
 */
proto.grpc.user.GetMyAccountRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.grpc.user.GetMyAccountRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.user.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.user.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.user.LoginRequest.displayName = 'proto.grpc.user.LoginRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.user.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.user.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.user.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.user.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: msg.getEmail(),
    password: msg.getPassword()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.user.LoginRequest}
 */
proto.grpc.user.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.user.LoginRequest;
  return proto.grpc.user.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.user.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.user.LoginRequest}
 */
proto.grpc.user.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.grpc.user.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.user.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.LoginRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.grpc.user.LoginRequest} The clone.
 */
proto.grpc.user.LoginRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.grpc.user.LoginRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.grpc.user.LoginRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.grpc.user.LoginRequest.prototype.setEmail = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.grpc.user.LoginRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.grpc.user.LoginRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.user.UserData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.user.UserData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.user.UserData.displayName = 'proto.grpc.user.UserData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.user.UserData.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.user.UserData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.user.UserData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.user.UserData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    username: msg.getUsername(),
    email: msg.getEmail(),
    password: msg.getPassword(),
    gender: msg.getGender(),
    createdat: msg.getCreatedat(),
    updatedat: msg.getUpdatedat()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.user.UserData}
 */
proto.grpc.user.UserData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.user.UserData;
  return proto.grpc.user.UserData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.user.UserData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.user.UserData}
 */
proto.grpc.user.UserData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGender(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.grpc.user.UserData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.UserData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.user.UserData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.UserData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getGender();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getCreatedat();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getUpdatedat();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.grpc.user.UserData} The clone.
 */
proto.grpc.user.UserData.prototype.cloneMessage = function() {
  return /** @type {!proto.grpc.user.UserData} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.grpc.user.UserData.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.grpc.user.UserData.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.grpc.user.UserData.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.grpc.user.UserData.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.grpc.user.UserData.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.grpc.user.UserData.prototype.setEmail = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.grpc.user.UserData.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.grpc.user.UserData.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string gender = 5;
 * @return {string}
 */
proto.grpc.user.UserData.prototype.getGender = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.grpc.user.UserData.prototype.setGender = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string createdAt = 6;
 * @return {string}
 */
proto.grpc.user.UserData.prototype.getCreatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.grpc.user.UserData.prototype.setCreatedat = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string updatedAt = 7;
 * @return {string}
 */
proto.grpc.user.UserData.prototype.getUpdatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 7, ""));
};


/** @param {string} value  */
proto.grpc.user.UserData.prototype.setUpdatedat = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.user.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.user.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.user.LoginResponse.displayName = 'proto.grpc.user.LoginResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.user.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.user.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.user.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.user.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: msg.getSuccess(),
    token: msg.getToken(),
    message: msg.getMessage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.user.LoginResponse}
 */
proto.grpc.user.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.user.LoginResponse;
  return proto.grpc.user.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.user.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.user.LoginResponse}
 */
proto.grpc.user.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.grpc.user.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.user.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.user.LoginResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.grpc.user.LoginResponse} The clone.
 */
proto.grpc.user.LoginResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.grpc.user.LoginResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpc.user.LoginResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.grpc.user.LoginResponse.prototype.setSuccess = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.grpc.user.LoginResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.grpc.user.LoginResponse.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.grpc.user.LoginResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.grpc.user.LoginResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, proto.grpc.user);
