// source: GVGServer/GVGServerPushMapGuildScore.proto
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

var GVGServer_GVGServerGuildWarFinalInfo_pb = require('../GVGServer/GVGServerGuildWarFinalInfo_pb.js');
goog.object.extend(proto, GVGServer_GVGServerGuildWarFinalInfo_pb);
goog.exportSymbol('proto.PbModel.GvGServer.PushGuildFinalInfoRes', null, global);
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
proto.PbModel.GvGServer.PushGuildFinalInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.PushGuildFinalInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.PushGuildFinalInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.PushGuildFinalInfoRes.displayName = 'proto.PbModel.GvGServer.PushGuildFinalInfoRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.repeatedFields_ = [1,2];



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
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.PushGuildFinalInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    playeridsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    guildscoresList: jspb.Message.toObjectList(msg.getGuildscoresList(),
    GVGServer_GVGServerGuildWarFinalInfo_pb.GuildFinalInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes}
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.PushGuildFinalInfoRes;
  return proto.PbModel.GvGServer.PushGuildFinalInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes}
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlayerids(value);
      break;
    case 2:
      var value = new GVGServer_GVGServerGuildWarFinalInfo_pb.GuildFinalInfo;
      reader.readMessage(value,GVGServer_GVGServerGuildWarFinalInfo_pb.GuildFinalInfo.deserializeBinaryFromReader);
      msg.addGuildscores(value);
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
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.PushGuildFinalInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayeridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getGuildscoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      GVGServer_GVGServerGuildWarFinalInfo_pb.GuildFinalInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string PlayerIds = 1;
 * @return {!Array<string>}
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.getPlayeridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} returns this
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.setPlayeridsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} returns this
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.addPlayerids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} returns this
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.clearPlayeridsList = function() {
  return this.setPlayeridsList([]);
};


/**
 * repeated GuildFinalInfo GuildScores = 2;
 * @return {!Array<!proto.PbModel.GvGServer.GuildFinalInfo>}
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.getGuildscoresList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.GuildFinalInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, GVGServer_GVGServerGuildWarFinalInfo_pb.GuildFinalInfo, 2));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.GuildFinalInfo>} value
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} returns this
*/
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.setGuildscoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GvGServer.GuildFinalInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.GuildFinalInfo}
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.addGuildscores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GvGServer.GuildFinalInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.PushGuildFinalInfoRes} returns this
 */
proto.PbModel.GvGServer.PushGuildFinalInfoRes.prototype.clearGuildscoresList = function() {
  return this.setGuildscoresList([]);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
