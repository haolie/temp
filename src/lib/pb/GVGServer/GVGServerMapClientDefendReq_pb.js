// source: GVGServer/GVGServerMapClientDefendReq.proto
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

var GVGServer_GVGServerPbPoint_pb = require('../GVGServer/GVGServerPbPoint_pb.js');
goog.object.extend(proto, GVGServer_GVGServerPbPoint_pb);
var GVGServer_GVGServerMapClientAttackReq_pb = require('../GVGServer/GVGServerMapClientAttackReq_pb.js');
goog.object.extend(proto, GVGServer_GVGServerMapClientAttackReq_pb);
var Common_ResultStatus_pb = require('../Common/ResultStatus_pb.js');
goog.object.extend(proto, Common_ResultStatus_pb);
goog.exportSymbol('proto.PbModel.GvGServer.BatchDefendTeamInfo', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.MapClientBatchDefendReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.MapClientBatchDefendRes', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.MapClientDefendReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.MapClientDefendRes', null, global);
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
proto.PbModel.GvGServer.MapClientDefendReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.MapClientDefendReq.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.MapClientDefendReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.MapClientDefendReq.displayName = 'proto.PbModel.GvGServer.MapClientDefendReq';
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
proto.PbModel.GvGServer.MapClientDefendRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.MapClientDefendRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.MapClientDefendRes.displayName = 'proto.PbModel.GvGServer.MapClientDefendRes';
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
proto.PbModel.GvGServer.MapClientBatchDefendReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.MapClientBatchDefendReq.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.MapClientBatchDefendReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.MapClientBatchDefendReq.displayName = 'proto.PbModel.GvGServer.MapClientBatchDefendReq';
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
proto.PbModel.GvGServer.MapClientBatchDefendRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.MapClientBatchDefendRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.MapClientBatchDefendRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.MapClientBatchDefendRes.displayName = 'proto.PbModel.GvGServer.MapClientBatchDefendRes';
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
proto.PbModel.GvGServer.BatchDefendTeamInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.BatchDefendTeamInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.BatchDefendTeamInfo.displayName = 'proto.PbModel.GvGServer.BatchDefendTeamInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.MapClientDefendReq.repeatedFields_ = [6];



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
proto.PbModel.GvGServer.MapClientDefendReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.MapClientDefendReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.MapClientDefendReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientDefendReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    teamid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    routespointsList: jspb.Message.toObjectList(msg.getRoutespointsList(),
    GVGServer_GVGServerPbPoint_pb.PbPoint.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq}
 */
proto.PbModel.GvGServer.MapClientDefendReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.MapClientDefendReq;
  return proto.PbModel.GvGServer.MapClientDefendReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.MapClientDefendReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq}
 */
proto.PbModel.GvGServer.MapClientDefendReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.PbModel.GvGServer.TeamType} */ (reader.readEnum());
      msg.setTeamtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 6:
      var value = new GVGServer_GVGServerPbPoint_pb.PbPoint;
      reader.readMessage(value,GVGServer_GVGServerPbPoint_pb.PbPoint.deserializeBinaryFromReader);
      msg.addRoutespoints(value);
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
proto.PbModel.GvGServer.MapClientDefendReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.MapClientDefendReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.MapClientDefendReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientDefendReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamtype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRoutespointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      GVGServer_GVGServerPbPoint_pb.PbPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TeamType teamType = 2;
 * @return {!proto.PbModel.GvGServer.TeamType}
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.getTeamtype = function() {
  return /** @type {!proto.PbModel.GvGServer.TeamType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.PbModel.GvGServer.TeamType} value
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.setTeamtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 teamId = 3;
 * @return {number}
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated PbPoint RoutesPoints = 6;
 * @return {!Array<!proto.PbModel.GvGServer.PbPoint>}
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.getRoutespointsList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.PbPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, GVGServer_GVGServerPbPoint_pb.PbPoint, 6));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.PbPoint>} value
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq} returns this
*/
proto.PbModel.GvGServer.MapClientDefendReq.prototype.setRoutespointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.PbModel.GvGServer.PbPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.PbPoint}
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.addRoutespoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.PbModel.GvGServer.PbPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.MapClientDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientDefendReq.prototype.clearRoutespointsList = function() {
  return this.setRoutespointsList([]);
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
proto.PbModel.GvGServer.MapClientDefendRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.MapClientDefendRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.MapClientDefendRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientDefendRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.GvGServer.MapClientDefendRes}
 */
proto.PbModel.GvGServer.MapClientDefendRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.MapClientDefendRes;
  return proto.PbModel.GvGServer.MapClientDefendRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.MapClientDefendRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.MapClientDefendRes}
 */
proto.PbModel.GvGServer.MapClientDefendRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.GvGServer.MapClientDefendRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.MapClientDefendRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.MapClientDefendRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientDefendRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.repeatedFields_ = [4,5];



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
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.MapClientBatchDefendReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.MapClientBatchDefendReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    guildid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    teamtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    teamidList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    routespointsList: jspb.Message.toObjectList(msg.getRoutespointsList(),
    GVGServer_GVGServerPbPoint_pb.PbPoint.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.MapClientBatchDefendReq;
  return proto.PbModel.GvGServer.MapClientBatchDefendReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.MapClientBatchDefendReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 3:
      var value = /** @type {!proto.PbModel.GvGServer.TeamType} */ (reader.readEnum());
      msg.setTeamtype(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setTeamidList(value);
      break;
    case 5:
      var value = new GVGServer_GVGServerPbPoint_pb.PbPoint;
      reader.readMessage(value,GVGServer_GVGServerPbPoint_pb.PbPoint.deserializeBinaryFromReader);
      msg.addRoutespoints(value);
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
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.MapClientBatchDefendReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.MapClientBatchDefendReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTeamtype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTeamidList();
  if (f.length > 0) {
    writer.writePackedInt32(
      4,
      f
    );
  }
  f = message.getRoutespointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      GVGServer_GVGServerPbPoint_pb.PbPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GuildId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TeamType TeamType = 3;
 * @return {!proto.PbModel.GvGServer.TeamType}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.getTeamtype = function() {
  return /** @type {!proto.PbModel.GvGServer.TeamType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.PbModel.GvGServer.TeamType} value
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.setTeamtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated int32 TeamId = 4;
 * @return {!Array<number>}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.getTeamidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.setTeamidList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.addTeamid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.clearTeamidList = function() {
  return this.setTeamidList([]);
};


/**
 * repeated PbPoint RoutesPoints = 5;
 * @return {!Array<!proto.PbModel.GvGServer.PbPoint>}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.getRoutespointsList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.PbPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, GVGServer_GVGServerPbPoint_pb.PbPoint, 5));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.PbPoint>} value
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
*/
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.setRoutespointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.PbModel.GvGServer.PbPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.PbPoint}
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.addRoutespoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.PbModel.GvGServer.PbPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendReq} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendReq.prototype.clearRoutespointsList = function() {
  return this.setRoutespointsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.repeatedFields_ = [1];



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
proto.PbModel.GvGServer.MapClientBatchDefendRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.MapClientBatchDefendRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.MapClientBatchDefendRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    resinfoList: jspb.Message.toObjectList(msg.getResinfoList(),
    proto.PbModel.GvGServer.BatchDefendTeamInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendRes}
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.MapClientBatchDefendRes;
  return proto.PbModel.GvGServer.MapClientBatchDefendRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.MapClientBatchDefendRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendRes}
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GvGServer.BatchDefendTeamInfo;
      reader.readMessage(value,proto.PbModel.GvGServer.BatchDefendTeamInfo.deserializeBinaryFromReader);
      msg.addResinfo(value);
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
proto.PbModel.GvGServer.MapClientBatchDefendRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.MapClientBatchDefendRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.MapClientBatchDefendRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GvGServer.BatchDefendTeamInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BatchDefendTeamInfo ResInfo = 1;
 * @return {!Array<!proto.PbModel.GvGServer.BatchDefendTeamInfo>}
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.prototype.getResinfoList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.BatchDefendTeamInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGServer.BatchDefendTeamInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.BatchDefendTeamInfo>} value
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendRes} returns this
*/
proto.PbModel.GvGServer.MapClientBatchDefendRes.prototype.setResinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GvGServer.BatchDefendTeamInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.BatchDefendTeamInfo}
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.prototype.addResinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GvGServer.BatchDefendTeamInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.MapClientBatchDefendRes} returns this
 */
proto.PbModel.GvGServer.MapClientBatchDefendRes.prototype.clearResinfoList = function() {
  return this.setResinfoList([]);
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
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.BatchDefendTeamInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.BatchDefendTeamInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errormsg: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.PbModel.GvGServer.BatchDefendTeamInfo}
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.BatchDefendTeamInfo;
  return proto.PbModel.GvGServer.BatchDefendTeamInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.BatchDefendTeamInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.BatchDefendTeamInfo}
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {!proto.PbModel.Common.ResultStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormsg(value);
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
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.BatchDefendTeamInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.BatchDefendTeamInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrormsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 TeamId = 1;
 * @return {number}
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BatchDefendTeamInfo} returns this
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PbModel.Common.ResultStatus Status = 2;
 * @return {!proto.PbModel.Common.ResultStatus}
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.getStatus = function() {
  return /** @type {!proto.PbModel.Common.ResultStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.PbModel.Common.ResultStatus} value
 * @return {!proto.PbModel.GvGServer.BatchDefendTeamInfo} returns this
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string ErrorMsg = 3;
 * @return {string}
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.getErrormsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.BatchDefendTeamInfo} returns this
 */
proto.PbModel.GvGServer.BatchDefendTeamInfo.prototype.setErrormsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
