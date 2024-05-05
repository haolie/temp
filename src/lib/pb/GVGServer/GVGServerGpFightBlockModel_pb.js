// source: GVGServer/GVGServerGpFightBlockModel.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.AtkQueueModel', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.DefQueueModel', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GpFightBlockInfoModel', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel', null, global);
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
proto.PbModel.GvGServer.GpFightBlockInfoModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GpFightBlockInfoModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GpFightBlockInfoModel.displayName = 'proto.PbModel.GvGServer.GpFightBlockInfoModel';
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
proto.PbModel.GvGServer.DefQueueModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.DefQueueModel.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.DefQueueModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.DefQueueModel.displayName = 'proto.PbModel.GvGServer.DefQueueModel';
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
proto.PbModel.GvGServer.AtkQueueModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.AtkQueueModel.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.AtkQueueModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.AtkQueueModel.displayName = 'proto.PbModel.GvGServer.AtkQueueModel';
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
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.displayName = 'proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel';
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
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GpFightBlockInfoModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    defques: (f = msg.getDefques()) && proto.PbModel.GvGServer.DefQueueModel.toObject(includeInstance, f),
    atkques: (f = msg.getAtkques()) && proto.PbModel.GvGServer.AtkQueueModel.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GpFightBlockInfoModel;
  return proto.PbModel.GvGServer.GpFightBlockInfoModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GvGServer.DefQueueModel;
      reader.readMessage(value,proto.PbModel.GvGServer.DefQueueModel.deserializeBinaryFromReader);
      msg.setDefques(value);
      break;
    case 2:
      var value = new proto.PbModel.GvGServer.AtkQueueModel;
      reader.readMessage(value,proto.PbModel.GvGServer.AtkQueueModel.deserializeBinaryFromReader);
      msg.setAtkques(value);
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
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GpFightBlockInfoModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefques();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PbModel.GvGServer.DefQueueModel.serializeBinaryToWriter
    );
  }
  f = message.getAtkques();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.GvGServer.AtkQueueModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefQueueModel DefQues = 1;
 * @return {?proto.PbModel.GvGServer.DefQueueModel}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.getDefques = function() {
  return /** @type{?proto.PbModel.GvGServer.DefQueueModel} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GvGServer.DefQueueModel, 1));
};


/**
 * @param {?proto.PbModel.GvGServer.DefQueueModel|undefined} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel} returns this
*/
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.setDefques = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.clearDefques = function() {
  return this.setDefques(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.hasDefques = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtkQueueModel AtkQues = 2;
 * @return {?proto.PbModel.GvGServer.AtkQueueModel}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.getAtkques = function() {
  return /** @type{?proto.PbModel.GvGServer.AtkQueueModel} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GvGServer.AtkQueueModel, 2));
};


/**
 * @param {?proto.PbModel.GvGServer.AtkQueueModel|undefined} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel} returns this
*/
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.setAtkques = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.clearAtkques = function() {
  return this.setAtkques(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel.prototype.hasAtkques = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.DefQueueModel.repeatedFields_ = [3];



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
proto.PbModel.GvGServer.DefQueueModel.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.DefQueueModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.DefQueueModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.DefQueueModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    npcnum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    npcid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerdefquesList: jspb.Message.toObjectList(msg.getPlayerdefquesList(),
    proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.DefQueueModel}
 */
proto.PbModel.GvGServer.DefQueueModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.DefQueueModel;
  return proto.PbModel.GvGServer.DefQueueModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.DefQueueModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.DefQueueModel}
 */
proto.PbModel.GvGServer.DefQueueModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNpcnum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNpcid(value);
      break;
    case 3:
      var value = new proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel;
      reader.readMessage(value,proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.deserializeBinaryFromReader);
      msg.addPlayerdefques(value);
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
proto.PbModel.GvGServer.DefQueueModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.DefQueueModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.DefQueueModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.DefQueueModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNpcnum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNpcid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPlayerdefquesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 NpcNum = 1;
 * @return {number}
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.getNpcnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.DefQueueModel} returns this
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.setNpcnum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 NpcId = 2;
 * @return {number}
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.getNpcid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.DefQueueModel} returns this
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.setNpcid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated GpFightBlockInfoModel_QueueModel PlayerDefQues = 3;
 * @return {!Array<!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel>}
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.getPlayerdefquesList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel, 3));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel>} value
 * @return {!proto.PbModel.GvGServer.DefQueueModel} returns this
*/
proto.PbModel.GvGServer.DefQueueModel.prototype.setPlayerdefquesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel}
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.addPlayerdefques = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.DefQueueModel} returns this
 */
proto.PbModel.GvGServer.DefQueueModel.prototype.clearPlayerdefquesList = function() {
  return this.setPlayerdefquesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.AtkQueueModel.repeatedFields_ = [1];



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
proto.PbModel.GvGServer.AtkQueueModel.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.AtkQueueModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.AtkQueueModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.AtkQueueModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    playeratkquesList: jspb.Message.toObjectList(msg.getPlayeratkquesList(),
    proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.AtkQueueModel}
 */
proto.PbModel.GvGServer.AtkQueueModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.AtkQueueModel;
  return proto.PbModel.GvGServer.AtkQueueModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.AtkQueueModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.AtkQueueModel}
 */
proto.PbModel.GvGServer.AtkQueueModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel;
      reader.readMessage(value,proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.deserializeBinaryFromReader);
      msg.addPlayeratkques(value);
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
proto.PbModel.GvGServer.AtkQueueModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.AtkQueueModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.AtkQueueModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.AtkQueueModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayeratkquesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GpFightBlockInfoModel_QueueModel PlayerAtkQues = 1;
 * @return {!Array<!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel>}
 */
proto.PbModel.GvGServer.AtkQueueModel.prototype.getPlayeratkquesList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel, 1));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel>} value
 * @return {!proto.PbModel.GvGServer.AtkQueueModel} returns this
*/
proto.PbModel.GvGServer.AtkQueueModel.prototype.setPlayeratkquesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel}
 */
proto.PbModel.GvGServer.AtkQueueModel.prototype.addPlayeratkques = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.AtkQueueModel} returns this
 */
proto.PbModel.GvGServer.AtkQueueModel.prototype.clearPlayeratkquesList = function() {
  return this.setPlayeratkquesList([]);
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
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    debuff: jspb.Message.getFieldWithDefault(msg, 2, 0),
    guildid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fap: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isnpc: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    ismixteam: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    eventid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel;
  return proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDebuff(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFap(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsnpc(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsmixteam(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventid(value);
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
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDebuff();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFap();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getIsnpc();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsmixteam();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getEventid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 DeBuff = 2;
 * @return {number}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getDebuff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setDebuff = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string GuildId = 3;
 * @return {string}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 TeamId = 4;
 * @return {number}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Fap = 5;
 * @return {number}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getFap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setFap = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool IsNpc = 6;
 * @return {boolean}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getIsnpc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setIsnpc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool IsMixTeam = 7;
 * @return {boolean}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getIsmixteam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setIsmixteam = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string EventId = 8;
 * @return {string}
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.getEventid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel} returns this
 */
proto.PbModel.GvGServer.GpFightBlockInfoModel_QueueModel.prototype.setEventid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
