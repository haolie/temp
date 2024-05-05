// source: GVGServer/GVGServerWarSituation.proto
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
goog.exportSymbol('proto.PbModel.GvGServer.GetWarSituationReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetWarSituationRes', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.WarSituationType', null, global);
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
proto.PbModel.GvGServer.GetWarSituationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetWarSituationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetWarSituationReq.displayName = 'proto.PbModel.GvGServer.GetWarSituationReq';
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
proto.PbModel.GvGServer.GetWarSituationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetWarSituationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetWarSituationRes.displayName = 'proto.PbModel.GvGServer.GetWarSituationRes';
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
proto.PbModel.GvGServer.GetWarSituationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetWarSituationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetWarSituationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetWarSituationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    point: (f = msg.getPoint()) && GVGServer_GVGServerPbPoint_pb.PbPoint.toObject(includeInstance, f),
    warsituationtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pagenum: jspb.Message.getFieldWithDefault(msg, 9, 0),
    length: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq}
 */
proto.PbModel.GvGServer.GetWarSituationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetWarSituationReq;
  return proto.PbModel.GvGServer.GetWarSituationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetWarSituationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq}
 */
proto.PbModel.GvGServer.GetWarSituationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 3:
      var value = new GVGServer_GVGServerPbPoint_pb.PbPoint;
      reader.readMessage(value,GVGServer_GVGServerPbPoint_pb.PbPoint.deserializeBinaryFromReader);
      msg.setPoint(value);
      break;
    case 4:
      var value = /** @type {!proto.PbModel.GvGServer.WarSituationType} */ (reader.readEnum());
      msg.setWarsituationtype(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenum(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLength(value);
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
proto.PbModel.GvGServer.GetWarSituationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetWarSituationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetWarSituationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetWarSituationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPoint();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      GVGServer_GVGServerPbPoint_pb.PbPoint.serializeBinaryToWriter
    );
  }
  f = message.getWarsituationtype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPagenum();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string GuildId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PlayerId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PbPoint Point = 3;
 * @return {?proto.PbModel.GvGServer.PbPoint}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.getPoint = function() {
  return /** @type{?proto.PbModel.GvGServer.PbPoint} */ (
    jspb.Message.getWrapperField(this, GVGServer_GVGServerPbPoint_pb.PbPoint, 3));
};


/**
 * @param {?proto.PbModel.GvGServer.PbPoint|undefined} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
*/
proto.PbModel.GvGServer.GetWarSituationReq.prototype.setPoint = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.clearPoint = function() {
  return this.setPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.hasPoint = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WarSituationType WarSituationType = 4;
 * @return {!proto.PbModel.GvGServer.WarSituationType}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.getWarsituationtype = function() {
  return /** @type {!proto.PbModel.GvGServer.WarSituationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.PbModel.GvGServer.WarSituationType} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.setWarsituationtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 PageNum = 9;
 * @return {number}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.getPagenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.setPagenum = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 Length = 10;
 * @return {number}
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationReq} returns this
 */
proto.PbModel.GvGServer.GetWarSituationReq.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
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
proto.PbModel.GvGServer.GetWarSituationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetWarSituationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetWarSituationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetWarSituationRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    warsituationlist: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.PbModel.GvGServer.GetWarSituationRes}
 */
proto.PbModel.GvGServer.GetWarSituationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetWarSituationRes;
  return proto.PbModel.GvGServer.GetWarSituationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetWarSituationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetWarSituationRes}
 */
proto.PbModel.GvGServer.GetWarSituationRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarsituationlist(value);
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
proto.PbModel.GvGServer.GetWarSituationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetWarSituationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetWarSituationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetWarSituationRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWarsituationlist();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string WarSituationList = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetWarSituationRes.prototype.getWarsituationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetWarSituationRes} returns this
 */
proto.PbModel.GvGServer.GetWarSituationRes.prototype.setWarsituationlist = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.PbModel.GvGServer.WarSituationType = {
  GUILD: 0,
  PLAYER: 1,
  POINT: 2
};

goog.object.extend(exports, proto.PbModel.GvGServer);