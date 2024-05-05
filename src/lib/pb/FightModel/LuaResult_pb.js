// source: FightModel/LuaResult.proto
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

var FightModel_RemainHp_pb = require('../FightModel/RemainHp_pb.js');
goog.object.extend(proto, FightModel_RemainHp_pb);
goog.exportSymbol('proto.PbModel.FightModel.LuaResult', null, global);
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
proto.PbModel.FightModel.LuaResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.FightModel.LuaResult.repeatedFields_, null);
};
goog.inherits(proto.PbModel.FightModel.LuaResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.FightModel.LuaResult.displayName = 'proto.PbModel.FightModel.LuaResult';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.FightModel.LuaResult.repeatedFields_ = [7];



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
proto.PbModel.FightModel.LuaResult.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.FightModel.LuaResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.FightModel.LuaResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.FightModel.LuaResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    clientver: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serverver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientsystemver: jspb.Message.getFieldWithDefault(msg, 4, ""),
    serversystemver: jspb.Message.getFieldWithDefault(msg, 5, ""),
    round: jspb.Message.getFieldWithDefault(msg, 6, 0),
    herolistList: jspb.Message.toObjectList(msg.getHerolistList(),
    FightModel_RemainHp_pb.RemainHp.toObject, includeInstance),
    iserror: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    report: jspb.Message.getFieldWithDefault(msg, 9, ""),
    totalatkdmg: jspb.Message.getFieldWithDefault(msg, 10, 0),
    statdata: jspb.Message.getFieldWithDefault(msg, 11, ""),
    amvp: jspb.Message.getFieldWithDefault(msg, 12, ""),
    dmvp: jspb.Message.getFieldWithDefault(msg, 13, ""),
    atkhpper: jspb.Message.getFieldWithDefault(msg, 14, 0),
    defhpper: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.PbModel.FightModel.LuaResult}
 */
proto.PbModel.FightModel.LuaResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.FightModel.LuaResult;
  return proto.PbModel.FightModel.LuaResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.FightModel.LuaResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.FightModel.LuaResult}
 */
proto.PbModel.FightModel.LuaResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientver(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerver(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientsystemver(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setServersystemver(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 7:
      var value = new FightModel_RemainHp_pb.RemainHp;
      reader.readMessage(value,FightModel_RemainHp_pb.RemainHp.deserializeBinaryFromReader);
      msg.addHerolist(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIserror(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReport(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalatkdmg(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatdata(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmvp(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDmvp(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAtkhpper(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefhpper(value);
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
proto.PbModel.FightModel.LuaResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.FightModel.LuaResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.FightModel.LuaResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.FightModel.LuaResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getClientver();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServerver();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientsystemver();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getServersystemver();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHerolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      FightModel_RemainHp_pb.RemainHp.serializeBinaryToWriter
    );
  }
  f = message.getIserror();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getReport();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTotalatkdmg();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStatdata();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAmvp();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDmvp();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAtkhpper();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getDefhpper();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional bool Result = 1;
 * @return {boolean}
 */
proto.PbModel.FightModel.LuaResult.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string ClientVer = 2;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getClientver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setClientver = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ServerVer = 3;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getServerver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setServerver = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ClientSystemVer = 4;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getClientsystemver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setClientsystemver = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ServerSystemVer = 5;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getServersystemver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setServersystemver = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 Round = 6;
 * @return {number}
 */
proto.PbModel.FightModel.LuaResult.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated RemainHp HeroList = 7;
 * @return {!Array<!proto.PbModel.FightModel.RemainHp>}
 */
proto.PbModel.FightModel.LuaResult.prototype.getHerolistList = function() {
  return /** @type{!Array<!proto.PbModel.FightModel.RemainHp>} */ (
    jspb.Message.getRepeatedWrapperField(this, FightModel_RemainHp_pb.RemainHp, 7));
};


/**
 * @param {!Array<!proto.PbModel.FightModel.RemainHp>} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
*/
proto.PbModel.FightModel.LuaResult.prototype.setHerolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.PbModel.FightModel.RemainHp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.FightModel.RemainHp}
 */
proto.PbModel.FightModel.LuaResult.prototype.addHerolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.PbModel.FightModel.RemainHp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.clearHerolistList = function() {
  return this.setHerolistList([]);
};


/**
 * optional bool IsError = 8;
 * @return {boolean}
 */
proto.PbModel.FightModel.LuaResult.prototype.getIserror = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setIserror = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string Report = 9;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getReport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setReport = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 TotalAtkDmg = 10;
 * @return {number}
 */
proto.PbModel.FightModel.LuaResult.prototype.getTotalatkdmg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setTotalatkdmg = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string StatData = 11;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getStatdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setStatdata = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string AMvp = 12;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getAmvp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setAmvp = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string DMvp = 13;
 * @return {string}
 */
proto.PbModel.FightModel.LuaResult.prototype.getDmvp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setDmvp = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 AtkHPPer = 14;
 * @return {number}
 */
proto.PbModel.FightModel.LuaResult.prototype.getAtkhpper = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setAtkhpper = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 DefHPPer = 15;
 * @return {number}
 */
proto.PbModel.FightModel.LuaResult.prototype.getDefhpper = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.LuaResult} returns this
 */
proto.PbModel.FightModel.LuaResult.prototype.setDefhpper = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


goog.object.extend(exports, proto.PbModel.FightModel);