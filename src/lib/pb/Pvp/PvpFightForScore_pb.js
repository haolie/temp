// source: Pvp/PvpFightForScore.proto
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
goog.exportSymbol('proto.PbModel.Pvp.PvpFightForScoreReq', null, global);
goog.exportSymbol('proto.PbModel.Pvp.PvpFightForScoreRes', null, global);
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
proto.PbModel.Pvp.PvpFightForScoreReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Pvp.PvpFightForScoreReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Pvp.PvpFightForScoreReq.displayName = 'proto.PbModel.Pvp.PvpFightForScoreReq';
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
proto.PbModel.Pvp.PvpFightForScoreRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Pvp.PvpFightForScoreRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Pvp.PvpFightForScoreRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Pvp.PvpFightForScoreRes.displayName = 'proto.PbModel.Pvp.PvpFightForScoreRes';
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
proto.PbModel.Pvp.PvpFightForScoreReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Pvp.PvpFightForScoreReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Pvp.PvpFightForScoreReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pvp.PvpFightForScoreReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.PbModel.Pvp.PvpFightForScoreReq}
 */
proto.PbModel.Pvp.PvpFightForScoreReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Pvp.PvpFightForScoreReq;
  return proto.PbModel.Pvp.PvpFightForScoreReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Pvp.PvpFightForScoreReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Pvp.PvpFightForScoreReq}
 */
proto.PbModel.Pvp.PvpFightForScoreReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Pvp.PvpFightForScoreReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Pvp.PvpFightForScoreReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Pvp.PvpFightForScoreReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pvp.PvpFightForScoreReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.Pvp.PvpFightForScoreReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreReq} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Pvp.PvpFightForScoreRes.repeatedFields_ = [8,9];



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
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Pvp.PvpFightForScoreRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Pvp.PvpFightForScoreRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pvp.PvpFightForScoreRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    iswin: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    score: jspb.Message.getFieldWithDefault(msg, 2, 0),
    scorechange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tgtscore: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tgtscorechange: jspb.Message.getFieldWithDefault(msg, 5, 0),
    calcres: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientresourcemodel: (f = msg.getClientresourcemodel()) && Resource_ResourceToClientModel_pb.ResourceToClientModel.toObject(includeInstance, f),
    brandlistList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    brandpoolList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Pvp.PvpFightForScoreRes;
  return proto.PbModel.Pvp.PvpFightForScoreRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Pvp.PvpFightForScoreRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIswin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScorechange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTgtscore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTgtscorechange(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalcres(value);
      break;
    case 7:
      var value = new Resource_ResourceToClientModel_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_ResourceToClientModel_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setClientresourcemodel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addBrandlist(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addBrandpool(value);
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
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Pvp.PvpFightForScoreRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Pvp.PvpFightForScoreRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pvp.PvpFightForScoreRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIswin();
  if (f) {
    writer.writeBool(
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
  f = message.getScorechange();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTgtscore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTgtscorechange();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCalcres();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientresourcemodel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      Resource_ResourceToClientModel_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getBrandlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getBrandpoolList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional bool IsWin = 1;
 * @return {boolean}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getIswin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setIswin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 Score = 2;
 * @return {number}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 ScoreChange = 3;
 * @return {number}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getScorechange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setScorechange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 TgtScore = 4;
 * @return {number}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getTgtscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setTgtscore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 TgtScoreChange = 5;
 * @return {number}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getTgtscorechange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setTgtscorechange = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string CalcRes = 6;
 * @return {string}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getCalcres = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setCalcres = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional PbModel.Resource.ResourceToClientModel ClientResourceModel = 7;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getClientresourcemodel = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_ResourceToClientModel_pb.ResourceToClientModel, 7));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
*/
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setClientresourcemodel = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.clearClientresourcemodel = function() {
  return this.setClientresourcemodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.hasClientresourcemodel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string BrandList = 8;
 * @return {!Array<string>}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getBrandlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setBrandlistList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.addBrandlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.clearBrandlistList = function() {
  return this.setBrandlistList([]);
};


/**
 * repeated string BrandPool = 9;
 * @return {!Array<string>}
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.getBrandpoolList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.setBrandpoolList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.addBrandpool = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Pvp.PvpFightForScoreRes} returns this
 */
proto.PbModel.Pvp.PvpFightForScoreRes.prototype.clearBrandpoolList = function() {
  return this.setBrandpoolList([]);
};


goog.object.extend(exports, proto.PbModel.Pvp);
