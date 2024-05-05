// source: Champion/ChampionGuessGetRecord.proto
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
goog.exportSymbol('proto.PbModel.Champion.ChampionGuessGetRecordReq', null, global);
goog.exportSymbol('proto.PbModel.Champion.ChampionGuessGetRecordRes', null, global);
goog.exportSymbol('proto.PbModel.Champion.ChampionGuessRecord', null, global);
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
proto.PbModel.Champion.ChampionGuessGetRecordReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Champion.ChampionGuessGetRecordReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Champion.ChampionGuessGetRecordReq.displayName = 'proto.PbModel.Champion.ChampionGuessGetRecordReq';
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
proto.PbModel.Champion.ChampionGuessGetRecordRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Champion.ChampionGuessGetRecordRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Champion.ChampionGuessGetRecordRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Champion.ChampionGuessGetRecordRes.displayName = 'proto.PbModel.Champion.ChampionGuessGetRecordRes';
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
proto.PbModel.Champion.ChampionGuessRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Champion.ChampionGuessRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Champion.ChampionGuessRecord.displayName = 'proto.PbModel.Champion.ChampionGuessRecord';
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
proto.PbModel.Champion.ChampionGuessGetRecordReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Champion.ChampionGuessGetRecordReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Champion.ChampionGuessGetRecordReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionGuessGetRecordReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Champion.ChampionGuessGetRecordReq}
 */
proto.PbModel.Champion.ChampionGuessGetRecordReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Champion.ChampionGuessGetRecordReq;
  return proto.PbModel.Champion.ChampionGuessGetRecordReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Champion.ChampionGuessGetRecordReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Champion.ChampionGuessGetRecordReq}
 */
proto.PbModel.Champion.ChampionGuessGetRecordReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Champion.ChampionGuessGetRecordReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Champion.ChampionGuessGetRecordReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Champion.ChampionGuessGetRecordReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionGuessGetRecordReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.repeatedFields_ = [1];



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
proto.PbModel.Champion.ChampionGuessGetRecordRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Champion.ChampionGuessGetRecordRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Champion.ChampionGuessGetRecordRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guessrecordlistList: jspb.Message.toObjectList(msg.getGuessrecordlistList(),
    proto.PbModel.Champion.ChampionGuessRecord.toObject, includeInstance)
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
 * @return {!proto.PbModel.Champion.ChampionGuessGetRecordRes}
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Champion.ChampionGuessGetRecordRes;
  return proto.PbModel.Champion.ChampionGuessGetRecordRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Champion.ChampionGuessGetRecordRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Champion.ChampionGuessGetRecordRes}
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.Champion.ChampionGuessRecord;
      reader.readMessage(value,proto.PbModel.Champion.ChampionGuessRecord.deserializeBinaryFromReader);
      msg.addGuessrecordlist(value);
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
proto.PbModel.Champion.ChampionGuessGetRecordRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Champion.ChampionGuessGetRecordRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Champion.ChampionGuessGetRecordRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuessrecordlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.Champion.ChampionGuessRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChampionGuessRecord GuessRecordList = 1;
 * @return {!Array<!proto.PbModel.Champion.ChampionGuessRecord>}
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.prototype.getGuessrecordlistList = function() {
  return /** @type{!Array<!proto.PbModel.Champion.ChampionGuessRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.Champion.ChampionGuessRecord, 1));
};


/**
 * @param {!Array<!proto.PbModel.Champion.ChampionGuessRecord>} value
 * @return {!proto.PbModel.Champion.ChampionGuessGetRecordRes} returns this
*/
proto.PbModel.Champion.ChampionGuessGetRecordRes.prototype.setGuessrecordlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Champion.ChampionGuessRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Champion.ChampionGuessRecord}
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.prototype.addGuessrecordlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Champion.ChampionGuessRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Champion.ChampionGuessGetRecordRes} returns this
 */
proto.PbModel.Champion.ChampionGuessGetRecordRes.prototype.clearGuessrecordlistList = function() {
  return this.setGuessrecordlistList([]);
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
proto.PbModel.Champion.ChampionGuessRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Champion.ChampionGuessRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Champion.ChampionGuessRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionGuessRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    isguesswell: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    stage: jspb.Message.getFieldWithDefault(msg, 2, 0),
    num: jspb.Message.getFieldWithDefault(msg, 3, 0),
    odds: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    getnum: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isreceive: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    player1: (f = msg.getPlayer1()) && Champion_ChampionModel_pb.ChampionPlayerInfo.toObject(includeInstance, f),
    player2: (f = msg.getPlayer2()) && Champion_ChampionModel_pb.ChampionPlayerInfo.toObject(includeInstance, f),
    winplayerid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.PbModel.Champion.ChampionGuessRecord}
 */
proto.PbModel.Champion.ChampionGuessRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Champion.ChampionGuessRecord;
  return proto.PbModel.Champion.ChampionGuessRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Champion.ChampionGuessRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Champion.ChampionGuessRecord}
 */
proto.PbModel.Champion.ChampionGuessRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsguesswell(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOdds(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGetnum(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsreceive(value);
      break;
    case 7:
      var value = new Champion_ChampionModel_pb.ChampionPlayerInfo;
      reader.readMessage(value,Champion_ChampionModel_pb.ChampionPlayerInfo.deserializeBinaryFromReader);
      msg.setPlayer1(value);
      break;
    case 8:
      var value = new Champion_ChampionModel_pb.ChampionPlayerInfo;
      reader.readMessage(value,Champion_ChampionModel_pb.ChampionPlayerInfo.deserializeBinaryFromReader);
      msg.setPlayer2(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinplayerid(value);
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
proto.PbModel.Champion.ChampionGuessRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Champion.ChampionGuessRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Champion.ChampionGuessRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Champion.ChampionGuessRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsguesswell();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOdds();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getGetnum();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsreceive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPlayer1();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      Champion_ChampionModel_pb.ChampionPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlayer2();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      Champion_ChampionModel_pb.ChampionPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getWinplayerid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional bool IsGuessWell = 1;
 * @return {boolean}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getIsguesswell = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setIsguesswell = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 Stage = 2;
 * @return {number}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getStage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setStage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Num = 3;
 * @return {number}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float Odds = 4;
 * @return {number}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getOdds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setOdds = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 GetNum = 5;
 * @return {number}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getGetnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setGetnum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool IsReceive = 6;
 * @return {boolean}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getIsreceive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setIsreceive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional ChampionPlayerInfo Player1 = 7;
 * @return {?proto.PbModel.Champion.ChampionPlayerInfo}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getPlayer1 = function() {
  return /** @type{?proto.PbModel.Champion.ChampionPlayerInfo} */ (
    jspb.Message.getWrapperField(this, Champion_ChampionModel_pb.ChampionPlayerInfo, 7));
};


/**
 * @param {?proto.PbModel.Champion.ChampionPlayerInfo|undefined} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
*/
proto.PbModel.Champion.ChampionGuessRecord.prototype.setPlayer1 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.clearPlayer1 = function() {
  return this.setPlayer1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.hasPlayer1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ChampionPlayerInfo Player2 = 8;
 * @return {?proto.PbModel.Champion.ChampionPlayerInfo}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getPlayer2 = function() {
  return /** @type{?proto.PbModel.Champion.ChampionPlayerInfo} */ (
    jspb.Message.getWrapperField(this, Champion_ChampionModel_pb.ChampionPlayerInfo, 8));
};


/**
 * @param {?proto.PbModel.Champion.ChampionPlayerInfo|undefined} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
*/
proto.PbModel.Champion.ChampionGuessRecord.prototype.setPlayer2 = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.clearPlayer2 = function() {
  return this.setPlayer2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.hasPlayer2 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string WinPlayerId = 9;
 * @return {string}
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.getWinplayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Champion.ChampionGuessRecord} returns this
 */
proto.PbModel.Champion.ChampionGuessRecord.prototype.setWinplayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.PbModel.Champion);