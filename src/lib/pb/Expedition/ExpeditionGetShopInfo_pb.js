// source: Expedition/ExpeditionGetShopInfo.proto
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

goog.exportSymbol('proto.PbModel.Expedition.ExpeditionGetShopInfoReq', null, global);
goog.exportSymbol('proto.PbModel.Expedition.ExpeditionGetShopInfoRes', null, global);
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
proto.PbModel.Expedition.ExpeditionGetShopInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Expedition.ExpeditionGetShopInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Expedition.ExpeditionGetShopInfoReq.displayName = 'proto.PbModel.Expedition.ExpeditionGetShopInfoReq';
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
proto.PbModel.Expedition.ExpeditionGetShopInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Expedition.ExpeditionGetShopInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Expedition.ExpeditionGetShopInfoRes.displayName = 'proto.PbModel.Expedition.ExpeditionGetShopInfoRes';
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
proto.PbModel.Expedition.ExpeditionGetShopInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Expedition.ExpeditionGetShopInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Expedition.ExpeditionGetShopInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoReq}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Expedition.ExpeditionGetShopInfoReq;
  return proto.PbModel.Expedition.ExpeditionGetShopInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Expedition.ExpeditionGetShopInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoReq}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Expedition.ExpeditionGetShopInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Expedition.ExpeditionGetShopInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Expedition.ExpeditionGetShopInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Expedition.ExpeditionGetShopInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    buydicMap: (f = msg.getBuydicMap()) ? f.toObject(includeInstance, undefined) : [],
    accumulate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accumulatereward: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isaccumulatereward: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    accumulatetime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    refreshtime: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Expedition.ExpeditionGetShopInfoRes;
  return proto.PbModel.Expedition.ExpeditionGetShopInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBuydicMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readInt32, null, 0, 0);
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccumulate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccumulatereward(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsaccumulatereward(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccumulatetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefreshtime(value);
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
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Expedition.ExpeditionGetShopInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuydicMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getAccumulate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccumulatereward();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsaccumulatereward();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAccumulatetime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getRefreshtime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * map<int32, int32> BuyDic = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.getBuydicMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.clearBuydicMap = function() {
  this.getBuydicMap().clear();
  return this;};


/**
 * optional string Accumulate = 2;
 * @return {string}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.getAccumulate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.setAccumulate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string AccumulateReward = 3;
 * @return {string}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.getAccumulatereward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.setAccumulatereward = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool IsAccumulateReward = 4;
 * @return {boolean}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.getIsaccumulatereward = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.setIsaccumulatereward = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 AccumulateTime = 5;
 * @return {number}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.getAccumulatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.setAccumulatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 RefreshTime = 6;
 * @return {number}
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.getRefreshtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Expedition.ExpeditionGetShopInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetShopInfoRes.prototype.setRefreshtime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.PbModel.Expedition);
