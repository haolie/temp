// source: Card/Card.proto
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
var Resource_ResourceObj_pb = require('../Resource/ResourceObj_pb.js');
goog.object.extend(proto, Resource_ResourceObj_pb);
goog.exportSymbol('proto.PbModel.Pve.CardItemInfo', null, global);
goog.exportSymbol('proto.PbModel.Pve.DrawDailyRewardReq', null, global);
goog.exportSymbol('proto.PbModel.Pve.GetCardInfoRes', null, global);
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
proto.PbModel.Pve.DrawDailyRewardReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Pve.DrawDailyRewardReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Pve.DrawDailyRewardReq.displayName = 'proto.PbModel.Pve.DrawDailyRewardReq';
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
proto.PbModel.Pve.GetCardInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Pve.GetCardInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Pve.GetCardInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Pve.GetCardInfoRes.displayName = 'proto.PbModel.Pve.GetCardInfoRes';
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
proto.PbModel.Pve.CardItemInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Pve.CardItemInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Pve.CardItemInfo.displayName = 'proto.PbModel.Pve.CardItemInfo';
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
proto.PbModel.Pve.DrawDailyRewardReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Pve.DrawDailyRewardReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Pve.DrawDailyRewardReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pve.DrawDailyRewardReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.PbModel.Pve.DrawDailyRewardReq}
 */
proto.PbModel.Pve.DrawDailyRewardReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Pve.DrawDailyRewardReq;
  return proto.PbModel.Pve.DrawDailyRewardReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Pve.DrawDailyRewardReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Pve.DrawDailyRewardReq}
 */
proto.PbModel.Pve.DrawDailyRewardReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCardid(value);
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
proto.PbModel.Pve.DrawDailyRewardReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Pve.DrawDailyRewardReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Pve.DrawDailyRewardReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pve.DrawDailyRewardReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 CardId = 1;
 * @return {number}
 */
proto.PbModel.Pve.DrawDailyRewardReq.prototype.getCardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pve.DrawDailyRewardReq} returns this
 */
proto.PbModel.Pve.DrawDailyRewardReq.prototype.setCardid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Pve.GetCardInfoRes.repeatedFields_ = [1];



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
proto.PbModel.Pve.GetCardInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Pve.GetCardInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Pve.GetCardInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pve.GetCardInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.PbModel.Pve.CardItemInfo.toObject, includeInstance),
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_ResourceToClientModel_pb.ResourceToClientModel.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.Pve.GetCardInfoRes}
 */
proto.PbModel.Pve.GetCardInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Pve.GetCardInfoRes;
  return proto.PbModel.Pve.GetCardInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Pve.GetCardInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Pve.GetCardInfoRes}
 */
proto.PbModel.Pve.GetCardInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.Pve.CardItemInfo;
      reader.readMessage(value,proto.PbModel.Pve.CardItemInfo.deserializeBinaryFromReader);
      msg.addList(value);
      break;
    case 2:
      var value = new Resource_ResourceToClientModel_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_ResourceToClientModel_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
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
proto.PbModel.Pve.GetCardInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Pve.GetCardInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Pve.GetCardInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pve.GetCardInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.Pve.CardItemInfo.serializeBinaryToWriter
    );
  }
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Resource_ResourceToClientModel_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CardItemInfo List = 1;
 * @return {!Array<!proto.PbModel.Pve.CardItemInfo>}
 */
proto.PbModel.Pve.GetCardInfoRes.prototype.getListList = function() {
  return /** @type{!Array<!proto.PbModel.Pve.CardItemInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.Pve.CardItemInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.Pve.CardItemInfo>} value
 * @return {!proto.PbModel.Pve.GetCardInfoRes} returns this
*/
proto.PbModel.Pve.GetCardInfoRes.prototype.setListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Pve.CardItemInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Pve.CardItemInfo}
 */
proto.PbModel.Pve.GetCardInfoRes.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Pve.CardItemInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Pve.GetCardInfoRes} returns this
 */
proto.PbModel.Pve.GetCardInfoRes.prototype.clearListList = function() {
  return this.setListList([]);
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 2;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.Pve.GetCardInfoRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_ResourceToClientModel_pb.ResourceToClientModel, 2));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.Pve.GetCardInfoRes} returns this
*/
proto.PbModel.Pve.GetCardInfoRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Pve.GetCardInfoRes} returns this
 */
proto.PbModel.Pve.GetCardInfoRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Pve.GetCardInfoRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.PbModel.Pve.CardItemInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Pve.CardItemInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Pve.CardItemInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pve.CardItemInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expiretime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    candrawtodayreward: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.PbModel.Pve.CardItemInfo}
 */
proto.PbModel.Pve.CardItemInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Pve.CardItemInfo;
  return proto.PbModel.Pve.CardItemInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Pve.CardItemInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Pve.CardItemInfo}
 */
proto.PbModel.Pve.CardItemInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCardid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiretime(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCandrawtodayreward(value);
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
proto.PbModel.Pve.CardItemInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Pve.CardItemInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Pve.CardItemInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Pve.CardItemInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getExpiretime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCandrawtodayreward();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int32 CardId = 1;
 * @return {number}
 */
proto.PbModel.Pve.CardItemInfo.prototype.getCardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pve.CardItemInfo} returns this
 */
proto.PbModel.Pve.CardItemInfo.prototype.setCardid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 ExpireTime = 2;
 * @return {number}
 */
proto.PbModel.Pve.CardItemInfo.prototype.getExpiretime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Pve.CardItemInfo} returns this
 */
proto.PbModel.Pve.CardItemInfo.prototype.setExpiretime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool CanDrawTodayReward = 3;
 * @return {boolean}
 */
proto.PbModel.Pve.CardItemInfo.prototype.getCandrawtodayreward = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Pve.CardItemInfo} returns this
 */
proto.PbModel.Pve.CardItemInfo.prototype.setCandrawtodayreward = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.PbModel.Pve);
