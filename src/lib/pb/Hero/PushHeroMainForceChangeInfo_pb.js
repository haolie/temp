// source: Hero/PushHeroMainForceChangeInfo.proto
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

var Hero_Hero_pb = require('../Hero/Hero_pb.js');
goog.object.extend(proto, Hero_Hero_pb);
goog.exportSymbol('proto.PbModel.Hero.PushHeroMainForceChangeInfoRes', null, global);
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
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Hero.PushHeroMainForceChangeInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.displayName = 'proto.PbModel.Hero.PushHeroMainForceChangeInfoRes';
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
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && Hero_Hero_pb.HeroMainForceInfo.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes}
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.PushHeroMainForceChangeInfoRes;
  return proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes}
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Hero_Hero_pb.HeroMainForceInfo;
      reader.readMessage(value,Hero_Hero_pb.HeroMainForceInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Hero_Hero_pb.HeroMainForceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional HeroMainForceInfo Info = 1;
 * @return {?proto.PbModel.Hero.HeroMainForceInfo}
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.prototype.getInfo = function() {
  return /** @type{?proto.PbModel.Hero.HeroMainForceInfo} */ (
    jspb.Message.getWrapperField(this, Hero_Hero_pb.HeroMainForceInfo, 1));
};


/**
 * @param {?proto.PbModel.Hero.HeroMainForceInfo|undefined} value
 * @return {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes} returns this
*/
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Hero.PushHeroMainForceChangeInfoRes} returns this
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Hero.PushHeroMainForceChangeInfoRes.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PbModel.Hero);
