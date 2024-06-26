// source: HornMessage.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.PbModel.HornMessage.HornMessagePushHornMessageRes', null, global);
goog.exportSymbol('proto.PbModel.HornMessage.HornMessageSendReq', null, global);
goog.exportSymbol('proto.PbModel.HornMessage.HornMessageSendRes', null, global);
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
proto.PbModel.HornMessage.HornMessageSendRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.HornMessage.HornMessageSendRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HornMessage.HornMessageSendRes.displayName = 'proto.PbModel.HornMessage.HornMessageSendRes';
}
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
proto.PbModel.HornMessage.HornMessageSendReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.HornMessage.HornMessageSendReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HornMessage.HornMessageSendReq.displayName = 'proto.PbModel.HornMessage.HornMessageSendReq';
}
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
proto.PbModel.HornMessage.HornMessagePushHornMessageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.HornMessage.HornMessagePushHornMessageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HornMessage.HornMessagePushHornMessageRes.displayName = 'proto.PbModel.HornMessage.HornMessagePushHornMessageRes';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.HornMessage.HornMessageSendRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HornMessage.HornMessageSendRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HornMessage.HornMessageSendRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HornMessage.HornMessageSendRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.HornMessage.HornMessageSendRes}
 */
proto.PbModel.HornMessage.HornMessageSendRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HornMessage.HornMessageSendRes;
  return proto.PbModel.HornMessage.HornMessageSendRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HornMessage.HornMessageSendRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HornMessage.HornMessageSendRes}
 */
proto.PbModel.HornMessage.HornMessageSendRes.deserializeBinaryFromReader = function(msg, reader) {
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.HornMessage.HornMessageSendRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HornMessage.HornMessageSendRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HornMessage.HornMessageSendRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HornMessage.HornMessageSendRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HornMessage.HornMessageSendReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HornMessage.HornMessageSendReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HornMessage.HornMessageSendReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hornfashionid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    iscross: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.PbModel.HornMessage.HornMessageSendReq}
 */
proto.PbModel.HornMessage.HornMessageSendReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HornMessage.HornMessageSendReq;
  return proto.PbModel.HornMessage.HornMessageSendReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HornMessage.HornMessageSendReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HornMessage.HornMessageSendReq}
 */
proto.PbModel.HornMessage.HornMessageSendReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHornfashionid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscross(value);
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HornMessage.HornMessageSendReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HornMessage.HornMessageSendReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HornMessage.HornMessageSendReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHornfashionid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIscross();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 HornFashionId = 1;
 * @return {number}
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.getHornfashionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.HornMessage.HornMessageSendReq} returns this
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.setHornfashionid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool IsCross = 2;
 * @return {boolean}
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.getIscross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.HornMessage.HornMessageSendReq} returns this
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.setIscross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string Message = 3;
 * @return {string}
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.HornMessage.HornMessageSendReq} returns this
 */
proto.PbModel.HornMessage.HornMessageSendReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HornMessage.HornMessagePushHornMessageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sendplayername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sendservername: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sendplayerid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    hornfashionid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    iscross: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HornMessage.HornMessagePushHornMessageRes;
  return proto.PbModel.HornMessage.HornMessagePushHornMessageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendplayername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendservername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendplayerid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHornfashionid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscross(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HornMessage.HornMessagePushHornMessageRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendplayername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendservername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendplayerid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHornfashionid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIscross();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string Message = 1;
 * @return {string}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} returns this
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string SendPlayerName = 2;
 * @return {string}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.getSendplayername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} returns this
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.setSendplayername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string SendServerName = 3;
 * @return {string}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.getSendservername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} returns this
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.setSendservername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string SendPlayerId = 4;
 * @return {string}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.getSendplayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} returns this
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.setSendplayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 HornFashionId = 5;
 * @return {number}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.getHornfashionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} returns this
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.setHornfashionid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool IsCross = 6;
 * @return {boolean}
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.getIscross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.HornMessage.HornMessagePushHornMessageRes} returns this
 */
proto.PbModel.HornMessage.HornMessagePushHornMessageRes.prototype.setIscross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


goog.object.extend(exports, proto.PbModel.HornMessage);
