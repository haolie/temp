// source: GVGServer/GVGServerGuildWarFinalInfo.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.GuildFinalInfo', null, global);
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
proto.PbModel.GvGServer.GuildFinalInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GuildFinalInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GuildFinalInfo.displayName = 'proto.PbModel.GvGServer.GuildFinalInfo';
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
proto.PbModel.GvGServer.GuildFinalInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GuildFinalInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GuildFinalInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GuildFinalInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    score: jspb.Message.getFieldWithDefault(msg, 2, 0),
    guildmanornum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    num: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo}
 */
proto.PbModel.GvGServer.GuildFinalInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GuildFinalInfo;
  return proto.PbModel.GvGServer.GuildFinalInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GuildFinalInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo}
 */
proto.PbModel.GvGServer.GuildFinalInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGuildmanornum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
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
proto.PbModel.GvGServer.GuildFinalInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GuildFinalInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GuildFinalInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GuildFinalInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGuildmanornum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string GuildName = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.getGuildname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo} returns this
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.setGuildname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 Score = 2;
 * @return {number}
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo} returns this
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 GuildManorNum = 3;
 * @return {number}
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.getGuildmanornum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo} returns this
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.setGuildmanornum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 Num = 4;
 * @return {number}
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo} returns this
 */
proto.PbModel.GvGServer.GuildFinalInfo.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
