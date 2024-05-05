// source: WorldBoss/WorldBossAcceptAward.proto
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

var Resource_ResourceToClientModel_pb = require('../Resource/ResourceToClientModel_pb.js');
goog.object.extend(proto, Resource_ResourceToClientModel_pb);
var WorldBoss_WorldBossGetBoss_pb = require('../WorldBoss/WorldBossGetBoss_pb.js');
goog.object.extend(proto, WorldBoss_WorldBossGetBoss_pb);
goog.exportSymbol('proto.PbModel.WorldBoss.WorldBossAcceptAwardReq', null, global);
goog.exportSymbol('proto.PbModel.WorldBoss.WorldBossAcceptAwardRes', null, global);
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
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.WorldBoss.WorldBossAcceptAwardReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.displayName = 'proto.PbModel.WorldBoss.WorldBossAcceptAwardReq';
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
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.WorldBoss.WorldBossAcceptAwardRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.displayName = 'proto.PbModel.WorldBoss.WorldBossAcceptAwardRes';
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
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.WorldBoss.WorldBossAcceptAwardReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    bossid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardReq}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.WorldBoss.WorldBossAcceptAwardReq;
  return proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.WorldBoss.WorldBossAcceptAwardReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardReq}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.WorldBoss.WorldBossAcceptAwardReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBossid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 BossId = 1;
 * @return {number}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.prototype.getBossid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardReq} returns this
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardReq.prototype.setBossid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerdata: (f = msg.getPlayerdata()) && WorldBoss_WorldBossGetBoss_pb.PlayerData.toObject(includeInstance, f),
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_ResourceToClientModel_pb.ResourceToClientModel.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.WorldBoss.WorldBossAcceptAwardRes;
  return proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = new Resource_ResourceToClientModel_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_ResourceToClientModel_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
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
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerdata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      WorldBoss_WorldBossGetBoss_pb.PlayerData.serializeBinaryToWriter
    );
  }
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Resource_ResourceToClientModel_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayerData PlayerData = 1;
 * @return {?proto.PbModel.WorldBoss.PlayerData}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.getPlayerdata = function() {
  return /** @type{?proto.PbModel.WorldBoss.PlayerData} */ (
    jspb.Message.getWrapperField(this, WorldBoss_WorldBossGetBoss_pb.PlayerData, 1));
};


/**
 * @param {?proto.PbModel.WorldBoss.PlayerData|undefined} value
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} returns this
*/
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.setPlayerdata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} returns this
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.clearPlayerdata = function() {
  return this.setPlayerdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.hasPlayerdata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 2;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_ResourceToClientModel_pb.ResourceToClientModel, 2));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} returns this
*/
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.WorldBoss.WorldBossAcceptAwardRes} returns this
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.WorldBoss.WorldBossAcceptAwardRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.PbModel.WorldBoss);