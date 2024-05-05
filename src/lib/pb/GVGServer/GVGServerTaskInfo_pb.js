// source: GVGServer/GVGServerTaskInfo.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.GetTaskListReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetTaskListRes', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.ShowTaskInfo', null, global);
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
proto.PbModel.GvGServer.ShowTaskInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.ShowTaskInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.ShowTaskInfo.displayName = 'proto.PbModel.GvGServer.ShowTaskInfo';
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
proto.PbModel.GvGServer.GetTaskListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetTaskListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetTaskListReq.displayName = 'proto.PbModel.GvGServer.GetTaskListReq';
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
proto.PbModel.GvGServer.GetTaskListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.GetTaskListRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.GetTaskListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetTaskListRes.displayName = 'proto.PbModel.GvGServer.GetTaskListRes';
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
proto.PbModel.GvGServer.ShowTaskInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.ShowTaskInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.ShowTaskInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.ShowTaskInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    openday: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endday: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isfinished: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo}
 */
proto.PbModel.GvGServer.ShowTaskInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.ShowTaskInfo;
  return proto.PbModel.GvGServer.ShowTaskInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.ShowTaskInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo}
 */
proto.PbModel.GvGServer.ShowTaskInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTaskid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpenday(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndday(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfinished(value);
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
proto.PbModel.GvGServer.ShowTaskInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.ShowTaskInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.ShowTaskInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.ShowTaskInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOpenday();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEndday();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsfinished();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int32 TaskId = 1;
 * @return {number}
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.getTaskid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo} returns this
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.setTaskid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Value = 2;
 * @return {number}
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo} returns this
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 OpenDay = 3;
 * @return {number}
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.getOpenday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo} returns this
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.setOpenday = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 EndDay = 4;
 * @return {number}
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.getEndday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo} returns this
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.setEndday = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool IsFinished = 5;
 * @return {boolean}
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.getIsfinished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo} returns this
 */
proto.PbModel.GvGServer.ShowTaskInfo.prototype.setIsfinished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.PbModel.GvGServer.GetTaskListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetTaskListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetTaskListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetTaskListReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.GvGServer.GetTaskListReq}
 */
proto.PbModel.GvGServer.GetTaskListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetTaskListReq;
  return proto.PbModel.GvGServer.GetTaskListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetTaskListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetTaskListReq}
 */
proto.PbModel.GvGServer.GetTaskListReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.GvGServer.GetTaskListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetTaskListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetTaskListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetTaskListReq.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.GvGServer.GetTaskListReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetTaskListReq} returns this
 */
proto.PbModel.GvGServer.GetTaskListReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.GetTaskListRes.repeatedFields_ = [1,2];



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
proto.PbModel.GvGServer.GetTaskListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetTaskListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetTaskListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetTaskListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildtasklistList: jspb.Message.toObjectList(msg.getGuildtasklistList(),
    proto.PbModel.GvGServer.ShowTaskInfo.toObject, includeInstance),
    playertasklistList: jspb.Message.toObjectList(msg.getPlayertasklistList(),
    proto.PbModel.GvGServer.ShowTaskInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.GetTaskListRes}
 */
proto.PbModel.GvGServer.GetTaskListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetTaskListRes;
  return proto.PbModel.GvGServer.GetTaskListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetTaskListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetTaskListRes}
 */
proto.PbModel.GvGServer.GetTaskListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GvGServer.ShowTaskInfo;
      reader.readMessage(value,proto.PbModel.GvGServer.ShowTaskInfo.deserializeBinaryFromReader);
      msg.addGuildtasklist(value);
      break;
    case 2:
      var value = new proto.PbModel.GvGServer.ShowTaskInfo;
      reader.readMessage(value,proto.PbModel.GvGServer.ShowTaskInfo.deserializeBinaryFromReader);
      msg.addPlayertasklist(value);
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
proto.PbModel.GvGServer.GetTaskListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetTaskListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetTaskListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetTaskListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildtasklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GvGServer.ShowTaskInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlayertasklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.PbModel.GvGServer.ShowTaskInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ShowTaskInfo GuildTaskList = 1;
 * @return {!Array<!proto.PbModel.GvGServer.ShowTaskInfo>}
 */
proto.PbModel.GvGServer.GetTaskListRes.prototype.getGuildtasklistList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.ShowTaskInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGServer.ShowTaskInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.ShowTaskInfo>} value
 * @return {!proto.PbModel.GvGServer.GetTaskListRes} returns this
*/
proto.PbModel.GvGServer.GetTaskListRes.prototype.setGuildtasklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GvGServer.ShowTaskInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo}
 */
proto.PbModel.GvGServer.GetTaskListRes.prototype.addGuildtasklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GvGServer.ShowTaskInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.GetTaskListRes} returns this
 */
proto.PbModel.GvGServer.GetTaskListRes.prototype.clearGuildtasklistList = function() {
  return this.setGuildtasklistList([]);
};


/**
 * repeated ShowTaskInfo PlayerTaskList = 2;
 * @return {!Array<!proto.PbModel.GvGServer.ShowTaskInfo>}
 */
proto.PbModel.GvGServer.GetTaskListRes.prototype.getPlayertasklistList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.ShowTaskInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGServer.ShowTaskInfo, 2));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.ShowTaskInfo>} value
 * @return {!proto.PbModel.GvGServer.GetTaskListRes} returns this
*/
proto.PbModel.GvGServer.GetTaskListRes.prototype.setPlayertasklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GvGServer.ShowTaskInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.ShowTaskInfo}
 */
proto.PbModel.GvGServer.GetTaskListRes.prototype.addPlayertasklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GvGServer.ShowTaskInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.GetTaskListRes} returns this
 */
proto.PbModel.GvGServer.GetTaskListRes.prototype.clearPlayertasklistList = function() {
  return this.setPlayertasklistList([]);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
