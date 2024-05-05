// source: Resource/ResourceObj.proto
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

goog.exportSymbol('proto.PbModel.Resource.ResourceObj', null, global);
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
proto.PbModel.Resource.ResourceObj = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Resource.ResourceObj, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Resource.ResourceObj.displayName = 'proto.PbModel.Resource.ResourceObj';
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
proto.PbModel.Resource.ResourceObj.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Resource.ResourceObj.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Resource.ResourceObj} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Resource.ResourceObj.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modelid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    num: jspb.Message.getFieldWithDefault(msg, 3, 0),
    entityid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fenjieid: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.PbModel.Resource.ResourceObj}
 */
proto.PbModel.Resource.ResourceObj.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Resource.ResourceObj;
  return proto.PbModel.Resource.ResourceObj.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Resource.ResourceObj} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Resource.ResourceObj}
 */
proto.PbModel.Resource.ResourceObj.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResourcetype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModelid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNum(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFenjieid(value);
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
proto.PbModel.Resource.ResourceObj.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Resource.ResourceObj.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Resource.ResourceObj} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Resource.ResourceObj.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcetype();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getModelid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFenjieid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 ResourceType = 1;
 * @return {number}
 */
proto.PbModel.Resource.ResourceObj.prototype.getResourcetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Resource.ResourceObj} returns this
 */
proto.PbModel.Resource.ResourceObj.prototype.setResourcetype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 ModelId = 2;
 * @return {number}
 */
proto.PbModel.Resource.ResourceObj.prototype.getModelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Resource.ResourceObj} returns this
 */
proto.PbModel.Resource.ResourceObj.prototype.setModelid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Num = 3;
 * @return {number}
 */
proto.PbModel.Resource.ResourceObj.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Resource.ResourceObj} returns this
 */
proto.PbModel.Resource.ResourceObj.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string EntityId = 4;
 * @return {string}
 */
proto.PbModel.Resource.ResourceObj.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Resource.ResourceObj} returns this
 */
proto.PbModel.Resource.ResourceObj.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string FenJieId = 5;
 * @return {string}
 */
proto.PbModel.Resource.ResourceObj.prototype.getFenjieid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Resource.ResourceObj} returns this
 */
proto.PbModel.Resource.ResourceObj.prototype.setFenjieid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.PbModel.Resource);
