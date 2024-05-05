// source: GroupRoom/GroupRoomTurnAutoJoin.proto
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

goog.exportSymbol('proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq', null, global);
goog.exportSymbol('proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes', null, global);
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
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.displayName = 'proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq';
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
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.displayName = 'proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes';
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
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq}
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq;
  return proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq}
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
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
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq} returns this
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TeamId = 2;
 * @return {string}
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq} returns this
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinReq.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes}
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes;
  return proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes}
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GroupRoom.GroupRoomTurnAutoJoinRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.PbModel.GroupRoom);
