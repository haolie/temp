// source: GVGServer/GVGServerPushRankReport.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.PushRankReport', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.RankReport', null, global);
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
proto.PbModel.GvGServer.PushRankReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.PushRankReport.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.PushRankReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.PushRankReport.displayName = 'proto.PbModel.GvGServer.PushRankReport';
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
proto.PbModel.GvGServer.RankReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.RankReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.RankReport.displayName = 'proto.PbModel.GvGServer.RankReport';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.PushRankReport.repeatedFields_ = [2];



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
proto.PbModel.GvGServer.PushRankReport.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.PushRankReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.PushRankReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.PushRankReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    playeridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    rankreport: (f = msg.getRankreport()) && proto.PbModel.GvGServer.RankReport.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.GvGServer.PushRankReport}
 */
proto.PbModel.GvGServer.PushRankReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.PushRankReport;
  return proto.PbModel.GvGServer.PushRankReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.PushRankReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.PushRankReport}
 */
proto.PbModel.GvGServer.PushRankReport.deserializeBinaryFromReader = function(msg, reader) {
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
    case 8:
      var value = new proto.PbModel.GvGServer.RankReport;
      reader.readMessage(value,proto.PbModel.GvGServer.RankReport.deserializeBinaryFromReader);
      msg.setRankreport(value);
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
proto.PbModel.GvGServer.PushRankReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.PushRankReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.PushRankReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.PushRankReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayeridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRankreport();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.PbModel.GvGServer.RankReport.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string PlayerIds = 2;
 * @return {!Array<string>}
 */
proto.PbModel.GvGServer.PushRankReport.prototype.getPlayeridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.GvGServer.PushRankReport} returns this
 */
proto.PbModel.GvGServer.PushRankReport.prototype.setPlayeridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.PushRankReport} returns this
 */
proto.PbModel.GvGServer.PushRankReport.prototype.addPlayerids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.PushRankReport} returns this
 */
proto.PbModel.GvGServer.PushRankReport.prototype.clearPlayeridsList = function() {
  return this.setPlayeridsList([]);
};


/**
 * optional RankReport RankReport = 8;
 * @return {?proto.PbModel.GvGServer.RankReport}
 */
proto.PbModel.GvGServer.PushRankReport.prototype.getRankreport = function() {
  return /** @type{?proto.PbModel.GvGServer.RankReport} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GvGServer.RankReport, 8));
};


/**
 * @param {?proto.PbModel.GvGServer.RankReport|undefined} value
 * @return {!proto.PbModel.GvGServer.PushRankReport} returns this
*/
proto.PbModel.GvGServer.PushRankReport.prototype.setRankreport = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GvGServer.PushRankReport} returns this
 */
proto.PbModel.GvGServer.PushRankReport.prototype.clearRankreport = function() {
  return this.setRankreport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GvGServer.PushRankReport.prototype.hasRankreport = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.PbModel.GvGServer.RankReport.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.RankReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.RankReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.RankReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    guildid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.GvGServer.RankReport}
 */
proto.PbModel.GvGServer.RankReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.RankReport;
  return proto.PbModel.GvGServer.RankReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.RankReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.RankReport}
 */
proto.PbModel.GvGServer.RankReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
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
proto.PbModel.GvGServer.RankReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.RankReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.RankReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.RankReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildname();
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
};


/**
 * optional string GuildName = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.RankReport.prototype.getGuildname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.RankReport} returns this
 */
proto.PbModel.GvGServer.RankReport.prototype.setGuildname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GuildId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.RankReport.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.RankReport} returns this
 */
proto.PbModel.GvGServer.RankReport.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.PbModel.GvGServer);
