// source: GVGServer/GVGServerPushMapTeamOnPoint.proto
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

var GVGServer_GVGServerBattleInfo_pb = require('../GVGServer/GVGServerBattleInfo_pb.js');
goog.object.extend(proto, GVGServer_GVGServerBattleInfo_pb);
goog.exportSymbol('proto.PushMapTeamOnPointRes', null, global);
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
proto.PushMapTeamOnPointRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PushMapTeamOnPointRes.repeatedFields_, null);
};
goog.inherits(proto.PushMapTeamOnPointRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PushMapTeamOnPointRes.displayName = 'proto.PushMapTeamOnPointRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PushMapTeamOnPointRes.repeatedFields_ = [2];



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
proto.PushMapTeamOnPointRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PushMapTeamOnPointRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PushMapTeamOnPointRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PushMapTeamOnPointRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    GVGServer_GVGServerBattleInfo_pb.TeamPoint.toObject, includeInstance)
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
 * @return {!proto.PushMapTeamOnPointRes}
 */
proto.PushMapTeamOnPointRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PushMapTeamOnPointRes;
  return proto.PushMapTeamOnPointRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PushMapTeamOnPointRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PushMapTeamOnPointRes}
 */
proto.PushMapTeamOnPointRes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new GVGServer_GVGServerBattleInfo_pb.TeamPoint;
      reader.readMessage(value,GVGServer_GVGServerBattleInfo_pb.TeamPoint.deserializeBinaryFromReader);
      msg.addPoints(value);
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
proto.PushMapTeamOnPointRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PushMapTeamOnPointRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PushMapTeamOnPointRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PushMapTeamOnPointRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      GVGServer_GVGServerBattleInfo_pb.TeamPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PushMapTeamOnPointRes.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PushMapTeamOnPointRes} returns this
 */
proto.PushMapTeamOnPointRes.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PbModel.GvGServer.TeamPoint Points = 2;
 * @return {!Array<!proto.PbModel.GvGServer.TeamPoint>}
 */
proto.PushMapTeamOnPointRes.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.TeamPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, GVGServer_GVGServerBattleInfo_pb.TeamPoint, 2));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.TeamPoint>} value
 * @return {!proto.PushMapTeamOnPointRes} returns this
*/
proto.PushMapTeamOnPointRes.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GvGServer.TeamPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.TeamPoint}
 */
proto.PushMapTeamOnPointRes.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GvGServer.TeamPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PushMapTeamOnPointRes} returns this
 */
proto.PushMapTeamOnPointRes.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


goog.object.extend(exports, proto);
