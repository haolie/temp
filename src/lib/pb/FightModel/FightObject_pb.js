// source: FightModel/FightObject.proto
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

var FightModel_FightObjectTeamInfo_pb = require('../FightModel/FightObjectTeamInfo_pb.js');
goog.object.extend(proto, FightModel_FightObjectTeamInfo_pb);
goog.exportSymbol('proto.PbModel.FightModel.FightObject', null, global);
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
proto.PbModel.FightModel.FightObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.FightModel.FightObject.repeatedFields_, null);
};
goog.inherits(proto.PbModel.FightModel.FightObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.FightModel.FightObject.displayName = 'proto.PbModel.FightModel.FightObject';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.FightModel.FightObject.repeatedFields_ = [2,3];



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
proto.PbModel.FightModel.FightObject.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.FightModel.FightObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.FightModel.FightObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.FightModel.FightObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    randnum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    atkteaminfosList: jspb.Message.toObjectList(msg.getAtkteaminfosList(),
    FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo.toObject, includeInstance),
    defteaminfosList: jspb.Message.toObjectList(msg.getDefteaminfosList(),
    FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo.toObject, includeInstance),
    ispvp: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.PbModel.FightModel.FightObject}
 */
proto.PbModel.FightModel.FightObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.FightModel.FightObject;
  return proto.PbModel.FightModel.FightObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.FightModel.FightObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.FightModel.FightObject}
 */
proto.PbModel.FightModel.FightObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRandnum(value);
      break;
    case 2:
      var value = new FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo;
      reader.readMessage(value,FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo.deserializeBinaryFromReader);
      msg.addAtkteaminfos(value);
      break;
    case 3:
      var value = new FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo;
      reader.readMessage(value,FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo.deserializeBinaryFromReader);
      msg.addDefteaminfos(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspvp(value);
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
proto.PbModel.FightModel.FightObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.FightModel.FightObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.FightModel.FightObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.FightModel.FightObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRandnum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAtkteaminfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo.serializeBinaryToWriter
    );
  }
  f = message.getDefteaminfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo.serializeBinaryToWriter
    );
  }
  f = message.getIspvp();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int32 RandNum = 1;
 * @return {number}
 */
proto.PbModel.FightModel.FightObject.prototype.getRandnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.FightObject} returns this
 */
proto.PbModel.FightModel.FightObject.prototype.setRandnum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated FightObjectTeamInfo AtkTeamInfos = 2;
 * @return {!Array<!proto.PbModel.FightModel.FightObjectTeamInfo>}
 */
proto.PbModel.FightModel.FightObject.prototype.getAtkteaminfosList = function() {
  return /** @type{!Array<!proto.PbModel.FightModel.FightObjectTeamInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo, 2));
};


/**
 * @param {!Array<!proto.PbModel.FightModel.FightObjectTeamInfo>} value
 * @return {!proto.PbModel.FightModel.FightObject} returns this
*/
proto.PbModel.FightModel.FightObject.prototype.setAtkteaminfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.FightModel.FightObjectTeamInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.FightModel.FightObjectTeamInfo}
 */
proto.PbModel.FightModel.FightObject.prototype.addAtkteaminfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.FightModel.FightObjectTeamInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.FightModel.FightObject} returns this
 */
proto.PbModel.FightModel.FightObject.prototype.clearAtkteaminfosList = function() {
  return this.setAtkteaminfosList([]);
};


/**
 * repeated FightObjectTeamInfo DefTeamInfos = 3;
 * @return {!Array<!proto.PbModel.FightModel.FightObjectTeamInfo>}
 */
proto.PbModel.FightModel.FightObject.prototype.getDefteaminfosList = function() {
  return /** @type{!Array<!proto.PbModel.FightModel.FightObjectTeamInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, FightModel_FightObjectTeamInfo_pb.FightObjectTeamInfo, 3));
};


/**
 * @param {!Array<!proto.PbModel.FightModel.FightObjectTeamInfo>} value
 * @return {!proto.PbModel.FightModel.FightObject} returns this
*/
proto.PbModel.FightModel.FightObject.prototype.setDefteaminfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PbModel.FightModel.FightObjectTeamInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.FightModel.FightObjectTeamInfo}
 */
proto.PbModel.FightModel.FightObject.prototype.addDefteaminfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PbModel.FightModel.FightObjectTeamInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.FightModel.FightObject} returns this
 */
proto.PbModel.FightModel.FightObject.prototype.clearDefteaminfosList = function() {
  return this.setDefteaminfosList([]);
};


/**
 * optional bool IsPvp = 4;
 * @return {boolean}
 */
proto.PbModel.FightModel.FightObject.prototype.getIspvp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.FightModel.FightObject} returns this
 */
proto.PbModel.FightModel.FightObject.prototype.setIspvp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.PbModel.FightModel);