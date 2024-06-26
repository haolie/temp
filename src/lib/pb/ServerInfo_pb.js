// source: ServerInfo.proto
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

goog.exportSymbol('proto.PbModel.ServerInfo.ServerInfoGlobalInfo', null, global);
goog.exportSymbol('proto.PbModel.ServerInfo.ServerInfoModuleInfo', null, global);
goog.exportSymbol('proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos', null, global);
goog.exportSymbol('proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes', null, global);
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
proto.PbModel.ServerInfo.ServerInfoGlobalInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.ServerInfo.ServerInfoGlobalInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ServerInfo.ServerInfoGlobalInfo.displayName = 'proto.PbModel.ServerInfo.ServerInfoGlobalInfo';
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
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.repeatedFields_, null);
};
goog.inherits(proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.displayName = 'proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos';
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
proto.PbModel.ServerInfo.ServerInfoModuleInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.ServerInfo.ServerInfoModuleInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ServerInfo.ServerInfoModuleInfo.displayName = 'proto.PbModel.ServerInfo.ServerInfoModuleInfo';
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
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.displayName = 'proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes';
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
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ServerInfo.ServerInfoGlobalInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ServerInfo.ServerInfoGlobalInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    serveropendays: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.PbModel.ServerInfo.ServerInfoGlobalInfo}
 */
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ServerInfo.ServerInfoGlobalInfo;
  return proto.PbModel.ServerInfo.ServerInfoGlobalInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ServerInfo.ServerInfoGlobalInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ServerInfo.ServerInfoGlobalInfo}
 */
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServeropendays(value);
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
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ServerInfo.ServerInfoGlobalInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ServerInfo.ServerInfoGlobalInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServeropendays();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ServerOpenDays = 1;
 * @return {number}
 */
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.prototype.getServeropendays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ServerInfo.ServerInfoGlobalInfo} returns this
 */
proto.PbModel.ServerInfo.ServerInfoGlobalInfo.prototype.setServeropendays = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.repeatedFields_ = [1];



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
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.PbModel.ServerInfo.ServerInfoModuleInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos}
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos;
  return proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos}
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.ServerInfo.ServerInfoModuleInfo;
      reader.readMessage(value,proto.PbModel.ServerInfo.ServerInfoModuleInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
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
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.ServerInfo.ServerInfoModuleInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ServerInfoModuleInfo Infos = 1;
 * @return {!Array<!proto.PbModel.ServerInfo.ServerInfoModuleInfo>}
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.PbModel.ServerInfo.ServerInfoModuleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.ServerInfo.ServerInfoModuleInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.ServerInfo.ServerInfoModuleInfo>} value
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos} returns this
*/
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleInfo}
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.ServerInfo.ServerInfoModuleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos} returns this
 */
proto.PbModel.ServerInfo.ServerInfoModuleOpenInfos.prototype.clearInfosList = function() {
  return this.setInfosList([]);
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
proto.PbModel.ServerInfo.ServerInfoModuleInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ServerInfo.ServerInfoModuleInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    submoduleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ifopen: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleInfo}
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ServerInfo.ServerInfoModuleInfo;
  return proto.PbModel.ServerInfo.ServerInfoModuleInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleInfo}
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubmoduleid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfopen(value);
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
proto.PbModel.ServerInfo.ServerInfoModuleInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ServerInfo.ServerInfoModuleInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubmoduleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIfopen();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 SubModuleId = 1;
 * @return {number}
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.prototype.getSubmoduleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleInfo} returns this
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.prototype.setSubmoduleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool IfOpen = 2;
 * @return {boolean}
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.prototype.getIfopen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleInfo} returns this
 */
proto.PbModel.ServerInfo.ServerInfoModuleInfo.prototype.setIfopen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.repeatedFields_ = [1];



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
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.PbModel.ServerInfo.ServerInfoModuleInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes}
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes;
  return proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes}
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.ServerInfo.ServerInfoModuleInfo;
      reader.readMessage(value,proto.PbModel.ServerInfo.ServerInfoModuleInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
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
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.ServerInfo.ServerInfoModuleInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ServerInfoModuleInfo Infos = 1;
 * @return {!Array<!proto.PbModel.ServerInfo.ServerInfoModuleInfo>}
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.PbModel.ServerInfo.ServerInfoModuleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.ServerInfo.ServerInfoModuleInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.ServerInfo.ServerInfoModuleInfo>} value
 * @return {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes} returns this
*/
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.ServerInfo.ServerInfoModuleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.ServerInfo.ServerInfoModuleInfo}
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.ServerInfo.ServerInfoModuleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes} returns this
 */
proto.PbModel.ServerInfo.ServerInfoPushModuleOpenInfosRes.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};


goog.object.extend(exports, proto.PbModel.ServerInfo);
