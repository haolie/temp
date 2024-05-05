// source: WorldBoss/WorldBossAttentionBoss.proto
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

var WorldBoss_WorldBossGetBoss_pb = require('../WorldBoss/WorldBossGetBoss_pb.js');
goog.object.extend(proto, WorldBoss_WorldBossGetBoss_pb);
goog.exportSymbol('proto.PbModel.WorldBoss.WorldBossAttentionBossReq', null, global);
goog.exportSymbol('proto.PbModel.WorldBoss.WorldBossAttentionBossRes', null, global);
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
proto.PbModel.WorldBoss.WorldBossAttentionBossReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.WorldBoss.WorldBossAttentionBossReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.WorldBoss.WorldBossAttentionBossReq.displayName = 'proto.PbModel.WorldBoss.WorldBossAttentionBossReq';
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
proto.PbModel.WorldBoss.WorldBossAttentionBossRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.WorldBoss.WorldBossAttentionBossRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.WorldBoss.WorldBossAttentionBossRes.displayName = 'proto.PbModel.WorldBoss.WorldBossAttentionBossRes';
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
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.WorldBoss.WorldBossAttentionBossReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    bossid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isattention: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.WorldBoss.WorldBossAttentionBossReq;
  return proto.PbModel.WorldBoss.WorldBossAttentionBossReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBossid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsattention(value);
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
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.WorldBoss.WorldBossAttentionBossReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBossid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIsattention();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 BossId = 1;
 * @return {number}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.prototype.getBossid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq} returns this
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.prototype.setBossid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool IsAttention = 2;
 * @return {boolean}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.prototype.getIsattention = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossReq} returns this
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossReq.prototype.setIsattention = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.WorldBoss.WorldBossAttentionBossRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerdata: (f = msg.getPlayerdata()) && WorldBoss_WorldBossGetBoss_pb.PlayerData.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.WorldBoss.WorldBossAttentionBossRes;
  return proto.PbModel.WorldBoss.WorldBossAttentionBossRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new WorldBoss_WorldBossGetBoss_pb.PlayerData;
      reader.readMessage(value,WorldBoss_WorldBossGetBoss_pb.PlayerData.deserializeBinaryFromReader);
      msg.setPlayerdata(value);
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
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.WorldBoss.WorldBossAttentionBossRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerdata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      WorldBoss_WorldBossGetBoss_pb.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayerData PlayerData = 1;
 * @return {?proto.PbModel.WorldBoss.PlayerData}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.prototype.getPlayerdata = function() {
  return /** @type{?proto.PbModel.WorldBoss.PlayerData} */ (
    jspb.Message.getWrapperField(this, WorldBoss_WorldBossGetBoss_pb.PlayerData, 1));
};


/**
 * @param {?proto.PbModel.WorldBoss.PlayerData|undefined} value
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes} returns this
*/
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.prototype.setPlayerdata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.WorldBoss.WorldBossAttentionBossRes} returns this
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.prototype.clearPlayerdata = function() {
  return this.setPlayerdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.WorldBoss.WorldBossAttentionBossRes.prototype.hasPlayerdata = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PbModel.WorldBoss);