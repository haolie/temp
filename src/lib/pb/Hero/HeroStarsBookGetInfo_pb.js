// source: Hero/HeroStarsBookGetInfo.proto
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

var Hero_HeroStarsBookInfo_pb = require('../Hero/HeroStarsBookInfo_pb.js');
goog.object.extend(proto, Hero_HeroStarsBookInfo_pb);
goog.exportSymbol('proto.PbModel.Hero.HeroStarsBookGetInfoReq', null, global);
goog.exportSymbol('proto.PbModel.Hero.HeroStarsBookGetInfoRes', null, global);
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
proto.PbModel.Hero.HeroStarsBookGetInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Hero.HeroStarsBookGetInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.HeroStarsBookGetInfoReq.displayName = 'proto.PbModel.Hero.HeroStarsBookGetInfoReq';
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
proto.PbModel.Hero.HeroStarsBookGetInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Hero.HeroStarsBookGetInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.HeroStarsBookGetInfoRes.displayName = 'proto.PbModel.Hero.HeroStarsBookGetInfoRes';
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
proto.PbModel.Hero.HeroStarsBookGetInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.HeroStarsBookGetInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.HeroStarsBookGetInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroStarsBookGetInfoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Hero.HeroStarsBookGetInfoReq}
 */
proto.PbModel.Hero.HeroStarsBookGetInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.HeroStarsBookGetInfoReq;
  return proto.PbModel.Hero.HeroStarsBookGetInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.HeroStarsBookGetInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.HeroStarsBookGetInfoReq}
 */
proto.PbModel.Hero.HeroStarsBookGetInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Hero.HeroStarsBookGetInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.HeroStarsBookGetInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.HeroStarsBookGetInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroStarsBookGetInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.PbModel.Hero.HeroStarsBookGetInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.HeroStarsBookGetInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.HeroStarsBookGetInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroStarsBookGetInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    herostarsMap: (f = msg.getHerostarsMap()) ? f.toObject(includeInstance, proto.PbModel.Hero.HeroStarsBookInfo.toObject) : []
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
 * @return {!proto.PbModel.Hero.HeroStarsBookGetInfoRes}
 */
proto.PbModel.Hero.HeroStarsBookGetInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.HeroStarsBookGetInfoRes;
  return proto.PbModel.Hero.HeroStarsBookGetInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.HeroStarsBookGetInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.HeroStarsBookGetInfoRes}
 */
proto.PbModel.Hero.HeroStarsBookGetInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHerostarsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.PbModel.Hero.HeroStarsBookInfo.deserializeBinaryFromReader, 0, new proto.PbModel.Hero.HeroStarsBookInfo());
         });
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
proto.PbModel.Hero.HeroStarsBookGetInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.HeroStarsBookGetInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.HeroStarsBookGetInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroStarsBookGetInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHerostarsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.PbModel.Hero.HeroStarsBookInfo.serializeBinaryToWriter);
  }
};


/**
 * map<int32, HeroStarsBookInfo> HeroStars = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.PbModel.Hero.HeroStarsBookInfo>}
 */
proto.PbModel.Hero.HeroStarsBookGetInfoRes.prototype.getHerostarsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.PbModel.Hero.HeroStarsBookInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.PbModel.Hero.HeroStarsBookInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PbModel.Hero.HeroStarsBookGetInfoRes} returns this
 */
proto.PbModel.Hero.HeroStarsBookGetInfoRes.prototype.clearHerostarsMap = function() {
  this.getHerostarsMap().clear();
  return this;};


goog.object.extend(exports, proto.PbModel.Hero);