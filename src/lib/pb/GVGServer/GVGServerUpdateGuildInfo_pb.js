// source: GVGServer/GVGServerUpdateGuildInfo.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.UpdateGuildInfoReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.UpdateGuildInfoRes', null, global);
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
proto.PbModel.GvGServer.UpdateGuildInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.UpdateGuildInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.UpdateGuildInfoReq.displayName = 'proto.PbModel.GvGServer.UpdateGuildInfoReq';
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
proto.PbModel.GvGServer.UpdateGuildInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.UpdateGuildInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.UpdateGuildInfoRes.displayName = 'proto.PbModel.GvGServer.UpdateGuildInfoRes';
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
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.UpdateGuildInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.UpdateGuildInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bannerinfo: jspb.Message.getFieldWithDefault(msg, 2, ""),
    logo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    guildname: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoReq}
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.UpdateGuildInfoReq;
  return proto.PbModel.GvGServer.UpdateGuildInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.UpdateGuildInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoReq}
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBannerinfo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildname(value);
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
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.UpdateGuildInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.UpdateGuildInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBannerinfo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLogo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGuildname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string GuildId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoReq} returns this
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string BannerInfo = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.getBannerinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoReq} returns this
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.setBannerinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Logo = 3;
 * @return {string}
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoReq} returns this
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string GuildName = 4;
 * @return {string}
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.getGuildname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoReq} returns this
 */
proto.PbModel.GvGServer.UpdateGuildInfoReq.prototype.setGuildname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.PbModel.GvGServer.UpdateGuildInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.UpdateGuildInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.UpdateGuildInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.UpdateGuildInfoRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoRes}
 */
proto.PbModel.GvGServer.UpdateGuildInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.UpdateGuildInfoRes;
  return proto.PbModel.GvGServer.UpdateGuildInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.UpdateGuildInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.UpdateGuildInfoRes}
 */
proto.PbModel.GvGServer.UpdateGuildInfoRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.GvGServer.UpdateGuildInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.UpdateGuildInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.UpdateGuildInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.UpdateGuildInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.PbModel.GvGServer);
