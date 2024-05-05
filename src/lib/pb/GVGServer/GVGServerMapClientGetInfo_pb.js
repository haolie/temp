// source: GVGServer/GVGServerMapClientGetInfo.proto
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

var GVGServer_GVGServerPbPoint_pb = require('../GVGServer/GVGServerPbPoint_pb.js');
goog.object.extend(proto, GVGServer_GVGServerPbPoint_pb);
var GVGServer_GVGServerTeamInfo_pb = require('../GVGServer/GVGServerTeamInfo_pb.js');
goog.object.extend(proto, GVGServer_GVGServerTeamInfo_pb);
var GVGServer_GVGServerBattleInfo_pb = require('../GVGServer/GVGServerBattleInfo_pb.js');
goog.object.extend(proto, GVGServer_GVGServerBattleInfo_pb);
goog.exportSymbol('proto.PbModel.GvGServer.MapClientGetInfoReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.MapClientGetInfoRes', null, global);
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
proto.PbModel.GvGServer.MapClientGetInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.MapClientGetInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.MapClientGetInfoReq.displayName = 'proto.PbModel.GvGServer.MapClientGetInfoReq';
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
proto.PbModel.GvGServer.MapClientGetInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.MapClientGetInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.MapClientGetInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.MapClientGetInfoRes.displayName = 'proto.PbModel.GvGServer.MapClientGetInfoRes';
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
proto.PbModel.GvGServer.MapClientGetInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.MapClientGetInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.MapClientGetInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    guildid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoReq}
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.MapClientGetInfoReq;
  return proto.PbModel.GvGServer.MapClientGetInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.MapClientGetInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoReq}
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGuildid(value);
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
proto.PbModel.GvGServer.MapClientGetInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.MapClientGetInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.MapClientGetInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGuildid();
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
proto.PbModel.GvGServer.MapClientGetInfoReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoReq} returns this
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GuildId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoReq} returns this
 */
proto.PbModel.GvGServer.MapClientGetInfoReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.repeatedFields_ = [2,3];



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
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.MapClientGetInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.MapClientGetInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    point: (f = msg.getPoint()) && GVGServer_GVGServerPbPoint_pb.PbPoint.toObject(includeInstance, f),
    guildbattleinfoList: jspb.Message.toObjectList(msg.getGuildbattleinfoList(),
    GVGServer_GVGServerBattleInfo_pb.GuildBattleInfo.toObject, includeInstance),
    teaminfoList: jspb.Message.toObjectList(msg.getTeaminfoList(),
    GVGServer_GVGServerTeamInfo_pb.GVGTeamInfo.toObject, includeInstance),
    battletime: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.MapClientGetInfoRes;
  return proto.PbModel.GvGServer.MapClientGetInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.MapClientGetInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new GVGServer_GVGServerPbPoint_pb.PbPoint;
      reader.readMessage(value,GVGServer_GVGServerPbPoint_pb.PbPoint.deserializeBinaryFromReader);
      msg.setPoint(value);
      break;
    case 2:
      var value = new GVGServer_GVGServerBattleInfo_pb.GuildBattleInfo;
      reader.readMessage(value,GVGServer_GVGServerBattleInfo_pb.GuildBattleInfo.deserializeBinaryFromReader);
      msg.addGuildbattleinfo(value);
      break;
    case 3:
      var value = new GVGServer_GVGServerTeamInfo_pb.GVGTeamInfo;
      reader.readMessage(value,GVGServer_GVGServerTeamInfo_pb.GVGTeamInfo.deserializeBinaryFromReader);
      msg.addTeaminfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBattletime(value);
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
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.MapClientGetInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.MapClientGetInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      GVGServer_GVGServerPbPoint_pb.PbPoint.serializeBinaryToWriter
    );
  }
  f = message.getGuildbattleinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      GVGServer_GVGServerBattleInfo_pb.GuildBattleInfo.serializeBinaryToWriter
    );
  }
  f = message.getTeaminfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      GVGServer_GVGServerTeamInfo_pb.GVGTeamInfo.serializeBinaryToWriter
    );
  }
  f = message.getBattletime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional PbPoint Point = 1;
 * @return {?proto.PbModel.GvGServer.PbPoint}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.getPoint = function() {
  return /** @type{?proto.PbModel.GvGServer.PbPoint} */ (
    jspb.Message.getWrapperField(this, GVGServer_GVGServerPbPoint_pb.PbPoint, 1));
};


/**
 * @param {?proto.PbModel.GvGServer.PbPoint|undefined} value
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
*/
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.setPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.clearPoint = function() {
  return this.setPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.hasPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GuildBattleInfo GuildBattleInfo = 2;
 * @return {!Array<!proto.PbModel.GvGServer.GuildBattleInfo>}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.getGuildbattleinfoList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.GuildBattleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, GVGServer_GVGServerBattleInfo_pb.GuildBattleInfo, 2));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.GuildBattleInfo>} value
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
*/
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.setGuildbattleinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GvGServer.GuildBattleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.GuildBattleInfo}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.addGuildbattleinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GvGServer.GuildBattleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.clearGuildbattleinfoList = function() {
  return this.setGuildbattleinfoList([]);
};


/**
 * repeated GVGTeamInfo TeamInfo = 3;
 * @return {!Array<!proto.PbModel.GvGServer.GVGTeamInfo>}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.getTeaminfoList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.GVGTeamInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, GVGServer_GVGServerTeamInfo_pb.GVGTeamInfo, 3));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.GVGTeamInfo>} value
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
*/
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.setTeaminfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PbModel.GvGServer.GVGTeamInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.GVGTeamInfo}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.addTeaminfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PbModel.GvGServer.GVGTeamInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.clearTeaminfoList = function() {
  return this.setTeaminfoList([]);
};


/**
 * optional int64 BattleTime = 4;
 * @return {number}
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.getBattletime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.MapClientGetInfoRes} returns this
 */
proto.PbModel.GvGServer.MapClientGetInfoRes.prototype.setBattletime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);