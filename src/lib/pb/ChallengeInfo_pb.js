// source: ChallengeInfo.proto
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

goog.exportSymbol('proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo', null, global);
goog.exportSymbol('proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq', null, global);
goog.exportSymbol('proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes', null, global);
goog.exportSymbol('proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo', null, global);
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
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.displayName = 'proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq';
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
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.displayName = 'proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes';
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
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.displayName = 'proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo';
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
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.displayName = 'proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo';
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
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq;
  return proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoReq.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    pvpinfo: (f = msg.getPvpinfo()) && proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.toObject(includeInstance, f),
    championinfo: (f = msg.getChampioninfo()) && proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes;
  return proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo;
      reader.readMessage(value,proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.deserializeBinaryFromReader);
      msg.setPvpinfo(value);
      break;
    case 2:
      var value = new proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo;
      reader.readMessage(value,proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.deserializeBinaryFromReader);
      msg.setChampioninfo(value);
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
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPvpinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.serializeBinaryToWriter
    );
  }
  f = message.getChampioninfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChallengeInfoPvpInfo PvpInfo = 1;
 * @return {?proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.getPvpinfo = function() {
  return /** @type{?proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo, 1));
};


/**
 * @param {?proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo|undefined} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} returns this
*/
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.setPvpinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.clearPvpinfo = function() {
  return this.setPvpinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.hasPvpinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChallengeInfoChampionInfo ChampionInfo = 2;
 * @return {?proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.getChampioninfo = function() {
  return /** @type{?proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo, 2));
};


/**
 * @param {?proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo|undefined} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} returns this
*/
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.setChampioninfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.clearChampioninfo = function() {
  return this.setChampioninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoGetInfoRes.prototype.hasChampioninfo = function() {
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
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endtimetick: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo;
  return proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtimetick(value);
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
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndtimetick();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int32 GroupId = 1;
 * @return {number}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Rank = 2;
 * @return {number}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 EndTimeTick = 3;
 * @return {number}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.getEndtimetick = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoPvpInfo.prototype.setEndtimetick = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    stage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endtimetick: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo;
  return proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtimetick(value);
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
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStage();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEndtimetick();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 Stage = 1;
 * @return {number}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.prototype.getStage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.prototype.setStage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 EndTimeTick = 2;
 * @return {number}
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.prototype.getEndtimetick = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo} returns this
 */
proto.PbModel.ChallengeInfo.ChallengeInfoChampionInfo.prototype.setEndtimetick = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.PbModel.ChallengeInfo);
