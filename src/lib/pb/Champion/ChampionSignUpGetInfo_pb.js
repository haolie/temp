// source: Champion/ChampionSignUpGetInfo.proto
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

var Champion_ChampionModel_pb = require('../Champion/ChampionModel_pb.js');
goog.object.extend(proto, Champion_ChampionModel_pb);
goog.exportSymbol('proto.PbModel.Champion.ChampionSignUpGetInfoReq', null, global);
goog.exportSymbol('proto.PbModel.Champion.ChampionSignUpGetInfoRes', null, global);
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
proto.PbModel.Champion.ChampionSignUpGetInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Champion.ChampionSignUpGetInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Champion.ChampionSignUpGetInfoReq.displayName = 'proto.PbModel.Champion.ChampionSignUpGetInfoReq';
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
proto.PbModel.Champion.ChampionSignUpGetInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Champion.ChampionSignUpGetInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Champion.ChampionSignUpGetInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Champion.ChampionSignUpGetInfoRes.displayName = 'proto.PbModel.Champion.ChampionSignUpGetInfoRes';
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
proto.PbModel.Champion.ChampionSignUpGetInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Champion.ChampionSignUpGetInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Champion.ChampionSignUpGetInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionSignUpGetInfoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoReq}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Champion.ChampionSignUpGetInfoReq;
  return proto.PbModel.Champion.ChampionSignUpGetInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Champion.ChampionSignUpGetInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoReq}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Champion.ChampionSignUpGetInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Champion.ChampionSignUpGetInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Champion.ChampionSignUpGetInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionSignUpGetInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.repeatedFields_ = [2];



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
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Champion.ChampionSignUpGetInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    championinfo: (f = msg.getChampioninfo()) && Champion_ChampionModel_pb.ChampionPlayerInfo.toObject(includeInstance, f),
    topplayerinfoList: jspb.Message.toObjectList(msg.getTopplayerinfoList(),
    Champion_ChampionModel_pb.ChampionPlayerInfo.toObject, includeInstance),
    issignup: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Champion.ChampionSignUpGetInfoRes;
  return proto.PbModel.Champion.ChampionSignUpGetInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Champion_ChampionModel_pb.ChampionPlayerInfo;
      reader.readMessage(value,Champion_ChampionModel_pb.ChampionPlayerInfo.deserializeBinaryFromReader);
      msg.setChampioninfo(value);
      break;
    case 2:
      var value = new Champion_ChampionModel_pb.ChampionPlayerInfo;
      reader.readMessage(value,Champion_ChampionModel_pb.ChampionPlayerInfo.deserializeBinaryFromReader);
      msg.addTopplayerinfo(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssignup(value);
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
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Champion.ChampionSignUpGetInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChampioninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Champion_ChampionModel_pb.ChampionPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getTopplayerinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      Champion_ChampionModel_pb.ChampionPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getIssignup();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional ChampionPlayerInfo ChampionInfo = 1;
 * @return {?proto.PbModel.Champion.ChampionPlayerInfo}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.getChampioninfo = function() {
  return /** @type{?proto.PbModel.Champion.ChampionPlayerInfo} */ (
    jspb.Message.getWrapperField(this, Champion_ChampionModel_pb.ChampionPlayerInfo, 1));
};


/**
 * @param {?proto.PbModel.Champion.ChampionPlayerInfo|undefined} value
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} returns this
*/
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.setChampioninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} returns this
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.clearChampioninfo = function() {
  return this.setChampioninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.hasChampioninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ChampionPlayerInfo TopPlayerInfo = 2;
 * @return {!Array<!proto.PbModel.Champion.ChampionPlayerInfo>}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.getTopplayerinfoList = function() {
  return /** @type{!Array<!proto.PbModel.Champion.ChampionPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, Champion_ChampionModel_pb.ChampionPlayerInfo, 2));
};


/**
 * @param {!Array<!proto.PbModel.Champion.ChampionPlayerInfo>} value
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} returns this
*/
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.setTopplayerinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.Champion.ChampionPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Champion.ChampionPlayerInfo}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.addTopplayerinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.Champion.ChampionPlayerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} returns this
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.clearTopplayerinfoList = function() {
  return this.setTopplayerinfoList([]);
};


/**
 * optional bool IsSignUp = 3;
 * @return {boolean}
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.getIssignup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Champion.ChampionSignUpGetInfoRes} returns this
 */
proto.PbModel.Champion.ChampionSignUpGetInfoRes.prototype.setIssignup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.PbModel.Champion);