// source: Marquee.proto
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

goog.exportSymbol('proto.PbModel.Marquee.MarqueeMessage', null, global);
goog.exportSymbol('proto.PbModel.Marquee.MarqueeMessageParameter', null, global);
goog.exportSymbol('proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes', null, global);
goog.exportSymbol('proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes', null, global);
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
proto.PbModel.Marquee.MarqueeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Marquee.MarqueeMessage.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Marquee.MarqueeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Marquee.MarqueeMessage.displayName = 'proto.PbModel.Marquee.MarqueeMessage';
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
proto.PbModel.Marquee.MarqueeMessageParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Marquee.MarqueeMessageParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Marquee.MarqueeMessageParameter.displayName = 'proto.PbModel.Marquee.MarqueeMessageParameter';
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
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.displayName = 'proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes';
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
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.displayName = 'proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Marquee.MarqueeMessage.repeatedFields_ = [6];



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
proto.PbModel.Marquee.MarqueeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Marquee.MarqueeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Marquee.MarqueeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    templatename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    arisenum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    weight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    startime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contentList: jspb.Message.toObjectList(msg.getContentList(),
    proto.PbModel.Marquee.MarqueeMessageParameter.toObject, includeInstance)
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
 * @return {!proto.PbModel.Marquee.MarqueeMessage}
 */
proto.PbModel.Marquee.MarqueeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Marquee.MarqueeMessage;
  return proto.PbModel.Marquee.MarqueeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Marquee.MarqueeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Marquee.MarqueeMessage}
 */
proto.PbModel.Marquee.MarqueeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplatename(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setArisenum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndtime(value);
      break;
    case 6:
      var value = new proto.PbModel.Marquee.MarqueeMessageParameter;
      reader.readMessage(value,proto.PbModel.Marquee.MarqueeMessageParameter.deserializeBinaryFromReader);
      msg.addContent(value);
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
proto.PbModel.Marquee.MarqueeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Marquee.MarqueeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Marquee.MarqueeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplatename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArisenum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStartime();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.PbModel.Marquee.MarqueeMessageParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string TemplateName = 1;
 * @return {string}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.getTemplatename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.setTemplatename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 AriseNum = 2;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.getArisenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.setArisenum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Weight = 3;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 StarTime = 4;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.getStartime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.setStartime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 EndTime = 5;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated MarqueeMessageParameter Content = 6;
 * @return {!Array<!proto.PbModel.Marquee.MarqueeMessageParameter>}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.getContentList = function() {
  return /** @type{!Array<!proto.PbModel.Marquee.MarqueeMessageParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.Marquee.MarqueeMessageParameter, 6));
};


/**
 * @param {!Array<!proto.PbModel.Marquee.MarqueeMessageParameter>} value
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
*/
proto.PbModel.Marquee.MarqueeMessage.prototype.setContentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.PbModel.Marquee.MarqueeMessageParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Marquee.MarqueeMessageParameter}
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.PbModel.Marquee.MarqueeMessageParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Marquee.MarqueeMessage} returns this
 */
proto.PbModel.Marquee.MarqueeMessage.prototype.clearContentList = function() {
  return this.setContentList([]);
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
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Marquee.MarqueeMessageParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Marquee.MarqueeMessageParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueeMessageParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcetypesub: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.PbModel.Marquee.MarqueeMessageParameter}
 */
proto.PbModel.Marquee.MarqueeMessageParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Marquee.MarqueeMessageParameter;
  return proto.PbModel.Marquee.MarqueeMessageParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Marquee.MarqueeMessageParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Marquee.MarqueeMessageParameter}
 */
proto.PbModel.Marquee.MarqueeMessageParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResourcetypesub(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
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
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Marquee.MarqueeMessageParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Marquee.MarqueeMessageParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueeMessageParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcetypesub();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 ResourceTypeSub = 1;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.getResourcetypesub = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessageParameter} returns this
 */
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.setResourcetypesub = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Count = 2;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessageParameter} returns this
 */
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Value = 3;
 * @return {number}
 */
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Marquee.MarqueeMessageParameter} returns this
 */
proto.PbModel.Marquee.MarqueeMessageParameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.repeatedFields_ = [1];



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
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    marqueemessagelistList: jspb.Message.toObjectList(msg.getMarqueemessagelistList(),
    proto.PbModel.Marquee.MarqueeMessage.toObject, includeInstance)
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
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes;
  return proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.Marquee.MarqueeMessage;
      reader.readMessage(value,proto.PbModel.Marquee.MarqueeMessage.deserializeBinaryFromReader);
      msg.addMarqueemessagelist(value);
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
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarqueemessagelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.Marquee.MarqueeMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarqueeMessage MarqueeMessageList = 1;
 * @return {!Array<!proto.PbModel.Marquee.MarqueeMessage>}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.prototype.getMarqueemessagelistList = function() {
  return /** @type{!Array<!proto.PbModel.Marquee.MarqueeMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.Marquee.MarqueeMessage, 1));
};


/**
 * @param {!Array<!proto.PbModel.Marquee.MarqueeMessage>} value
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes} returns this
*/
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.prototype.setMarqueemessagelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Marquee.MarqueeMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Marquee.MarqueeMessage}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.prototype.addMarqueemessagelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Marquee.MarqueeMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes} returns this
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemRes.prototype.clearMarqueemessagelistList = function() {
  return this.setMarqueemessagelistList([]);
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
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes;
  return proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Content = 1;
 * @return {string}
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes} returns this
 */
proto.PbModel.Marquee.MarqueePushMarqueeForSystemChatRes.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.PbModel.Marquee);