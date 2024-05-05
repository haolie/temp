// source: GVGServer/GVGServerPushCountDownHint.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.GameEnd', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.PushCountDownHint', null, global);
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
proto.PbModel.GvGServer.PushCountDownHint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.PushCountDownHint.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.PushCountDownHint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.PushCountDownHint.displayName = 'proto.PbModel.GvGServer.PushCountDownHint';
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
proto.PbModel.GvGServer.GameEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GameEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GameEnd.displayName = 'proto.PbModel.GvGServer.GameEnd';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.PushCountDownHint.repeatedFields_ = [2];



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
proto.PbModel.GvGServer.PushCountDownHint.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.PushCountDownHint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.PushCountDownHint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.PushCountDownHint.toObject = function(includeInstance, msg) {
  var f, obj = {
    playeridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    gameend: (f = msg.getGameend()) && proto.PbModel.GvGServer.GameEnd.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.GvGServer.PushCountDownHint}
 */
proto.PbModel.GvGServer.PushCountDownHint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.PushCountDownHint;
  return proto.PbModel.GvGServer.PushCountDownHint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.PushCountDownHint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.PushCountDownHint}
 */
proto.PbModel.GvGServer.PushCountDownHint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlayerids(value);
      break;
    case 9:
      var value = new proto.PbModel.GvGServer.GameEnd;
      reader.readMessage(value,proto.PbModel.GvGServer.GameEnd.deserializeBinaryFromReader);
      msg.setGameend(value);
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
proto.PbModel.GvGServer.PushCountDownHint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.PushCountDownHint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.PushCountDownHint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.PushCountDownHint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayeridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getGameend();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.PbModel.GvGServer.GameEnd.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string PlayerIds = 2;
 * @return {!Array<string>}
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.getPlayeridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.GvGServer.PushCountDownHint} returns this
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.setPlayeridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.PushCountDownHint} returns this
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.addPlayerids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.PushCountDownHint} returns this
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.clearPlayeridsList = function() {
  return this.setPlayeridsList([]);
};


/**
 * optional GameEnd GameEnd = 9;
 * @return {?proto.PbModel.GvGServer.GameEnd}
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.getGameend = function() {
  return /** @type{?proto.PbModel.GvGServer.GameEnd} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GvGServer.GameEnd, 9));
};


/**
 * @param {?proto.PbModel.GvGServer.GameEnd|undefined} value
 * @return {!proto.PbModel.GvGServer.PushCountDownHint} returns this
*/
proto.PbModel.GvGServer.PushCountDownHint.prototype.setGameend = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GvGServer.PushCountDownHint} returns this
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.clearGameend = function() {
  return this.setGameend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GvGServer.PushCountDownHint.prototype.hasGameend = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.PbModel.GvGServer.GameEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GameEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GameEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GameEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    minute: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.PbModel.GvGServer.GameEnd}
 */
proto.PbModel.GvGServer.GameEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GameEnd;
  return proto.PbModel.GvGServer.GameEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GameEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GameEnd}
 */
proto.PbModel.GvGServer.GameEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinute(value);
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
proto.PbModel.GvGServer.GameEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GameEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GameEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GameEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinute();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 Minute = 1;
 * @return {number}
 */
proto.PbModel.GvGServer.GameEnd.prototype.getMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.GameEnd} returns this
 */
proto.PbModel.GvGServer.GameEnd.prototype.setMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);