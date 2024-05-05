// source: Expedition/ExpeditionChoiceBuff.proto
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

goog.exportSymbol('proto.PbModel.Expedition.ExpeditionChoiceBuffReq', null, global);
goog.exportSymbol('proto.PbModel.Expedition.ExpeditionChoiceBuffRes', null, global);
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
proto.PbModel.Expedition.ExpeditionChoiceBuffReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Expedition.ExpeditionChoiceBuffReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Expedition.ExpeditionChoiceBuffReq.displayName = 'proto.PbModel.Expedition.ExpeditionChoiceBuffReq';
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
proto.PbModel.Expedition.ExpeditionChoiceBuffRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Expedition.ExpeditionChoiceBuffRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Expedition.ExpeditionChoiceBuffRes.displayName = 'proto.PbModel.Expedition.ExpeditionChoiceBuffRes';
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
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Expedition.ExpeditionChoiceBuffReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    buffid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Expedition.ExpeditionChoiceBuffReq;
  return proto.PbModel.Expedition.ExpeditionChoiceBuffReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuffid(value);
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
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Expedition.ExpeditionChoiceBuffReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBuffid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 NodeId = 1;
 * @return {number}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.prototype.getNodeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 BuffId = 2;
 * @return {number}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.prototype.getBuffid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffReq} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffReq.prototype.setBuffid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Expedition.ExpeditionChoiceBuffRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    passnodeinfo: jspb.Message.getFieldWithDefault(msg, 1, ""),
    curpassnodeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    curbuff: jspb.Message.getFieldWithDefault(msg, 3, ""),
    passcount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bossisopen: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Expedition.ExpeditionChoiceBuffRes;
  return proto.PbModel.Expedition.ExpeditionChoiceBuffRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassnodeinfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurpassnodeid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurbuff(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPasscount(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBossisopen(value);
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
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Expedition.ExpeditionChoiceBuffRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassnodeinfo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurpassnodeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCurbuff();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPasscount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBossisopen();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string PassNodeInfo = 1;
 * @return {string}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.getPassnodeinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.setPassnodeinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CurPassNodeId = 2;
 * @return {string}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.getCurpassnodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.setCurpassnodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string CurBuff = 3;
 * @return {string}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.getCurbuff = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.setCurbuff = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 PassCount = 4;
 * @return {number}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.getPasscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.setPasscount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool BossIsOpen = 5;
 * @return {boolean}
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.getBossisopen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Expedition.ExpeditionChoiceBuffRes} returns this
 */
proto.PbModel.Expedition.ExpeditionChoiceBuffRes.prototype.setBossisopen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


goog.object.extend(exports, proto.PbModel.Expedition);