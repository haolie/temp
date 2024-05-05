// source: GVGServer/GVGServerLandResource.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.GetLandResourceReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetLandResourceRes', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetLandResourceRewardReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetLandResourceRewardRes', null, global);
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
proto.PbModel.GvGServer.GetLandResourceRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetLandResourceRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetLandResourceRes.displayName = 'proto.PbModel.GvGServer.GetLandResourceRes';
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
proto.PbModel.GvGServer.GetLandResourceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetLandResourceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetLandResourceReq.displayName = 'proto.PbModel.GvGServer.GetLandResourceReq';
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
proto.PbModel.GvGServer.GetLandResourceRewardReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetLandResourceRewardReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetLandResourceRewardReq.displayName = 'proto.PbModel.GvGServer.GetLandResourceRewardReq';
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
proto.PbModel.GvGServer.GetLandResourceRewardRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetLandResourceRewardRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetLandResourceRewardRes.displayName = 'proto.PbModel.GvGServer.GetLandResourceRewardRes';
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
proto.PbModel.GvGServer.GetLandResourceRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetLandResourceRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetLandResourceRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    singeresource: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalnum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    landmapMap: (f = msg.getLandmapMap()) ? f.toObject(includeInstance, undefined) : [],
    curreward: jspb.Message.getFieldWithDefault(msg, 4, ""),
    usetime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hangupstarttime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hangupendtime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    receivedawardtime: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes}
 */
proto.PbModel.GvGServer.GetLandResourceRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetLandResourceRes;
  return proto.PbModel.GvGServer.GetLandResourceRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetLandResourceRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes}
 */
proto.PbModel.GvGServer.GetLandResourceRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSingeresource(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnum(value);
      break;
    case 3:
      var value = msg.getLandmapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readInt32, null, 0, 0);
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurreward(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHangupstarttime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHangupendtime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedawardtime(value);
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
proto.PbModel.GvGServer.GetLandResourceRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetLandResourceRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetLandResourceRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSingeresource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalnum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLandmapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getCurreward();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsetime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getHangupstarttime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getHangupendtime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getReceivedawardtime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string SingeResource = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getSingeresource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setSingeresource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 TotalNum = 2;
 * @return {number}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getTotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setTotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * map<int32, int32> LandMap = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getLandmapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.clearLandmapMap = function() {
  this.getLandmapMap().clear();
  return this;};


/**
 * optional string CurReward = 4;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getCurreward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setCurreward = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 UseTime = 5;
 * @return {number}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getUsetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setUsetime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 HangUpStartTime = 6;
 * @return {number}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getHangupstarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setHangupstarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 HangUpEndTime = 7;
 * @return {number}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getHangupendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setHangupendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 ReceivedAwardTime = 8;
 * @return {number}
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.getReceivedawardtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRes.prototype.setReceivedawardtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
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
proto.PbModel.GvGServer.GetLandResourceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetLandResourceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetLandResourceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.GvGServer.GetLandResourceReq}
 */
proto.PbModel.GvGServer.GetLandResourceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetLandResourceReq;
  return proto.PbModel.GvGServer.GetLandResourceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetLandResourceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetLandResourceReq}
 */
proto.PbModel.GvGServer.GetLandResourceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 2:
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
proto.PbModel.GvGServer.GetLandResourceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetLandResourceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetLandResourceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string GuildId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceReq} returns this
 */
proto.PbModel.GvGServer.GetLandResourceReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PlayerId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceReq} returns this
 */
proto.PbModel.GvGServer.GetLandResourceReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.PbModel.GvGServer.GetLandResourceRewardReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetLandResourceRewardReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetLandResourceRewardReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardReq}
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetLandResourceRewardReq;
  return proto.PbModel.GvGServer.GetLandResourceRewardReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetLandResourceRewardReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardReq}
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 2:
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
proto.PbModel.GvGServer.GetLandResourceRewardReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetLandResourceRewardReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetLandResourceRewardReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string GuildId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardReq} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PlayerId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardReq} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRewardReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.PbModel.GvGServer.GetLandResourceRewardRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetLandResourceRewardRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetLandResourceRewardRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    reward: jspb.Message.getFieldWithDefault(msg, 1, ""),
    receivedawardtime: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardRes}
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetLandResourceRewardRes;
  return proto.PbModel.GvGServer.GetLandResourceRewardRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetLandResourceRewardRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardRes}
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReward(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedawardtime(value);
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
proto.PbModel.GvGServer.GetLandResourceRewardRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetLandResourceRewardRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetLandResourceRewardRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReward();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceivedawardtime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string Reward = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.prototype.getReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.prototype.setReward = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ReceivedAwardTime = 2;
 * @return {number}
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.prototype.getReceivedawardtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GetLandResourceRewardRes} returns this
 */
proto.PbModel.GvGServer.GetLandResourceRewardRes.prototype.setReceivedawardtime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
