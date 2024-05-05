// source: FightModel/SupportUnits.proto
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

goog.exportSymbol('proto.PbModel.FightModel.SupportUnits', null, global);
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
proto.PbModel.FightModel.SupportUnits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.FightModel.SupportUnits.repeatedFields_, null);
};
goog.inherits(proto.PbModel.FightModel.SupportUnits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.FightModel.SupportUnits.displayName = 'proto.PbModel.FightModel.SupportUnits';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.FightModel.SupportUnits.repeatedFields_ = [3];



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
proto.PbModel.FightModel.SupportUnits.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.FightModel.SupportUnits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.FightModel.SupportUnits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.FightModel.SupportUnits.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lv: jspb.Message.getFieldWithDefault(msg, 2, 0),
    skilllistList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    order: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.PbModel.FightModel.SupportUnits}
 */
proto.PbModel.FightModel.SupportUnits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.FightModel.SupportUnits;
  return proto.PbModel.FightModel.SupportUnits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.FightModel.SupportUnits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.FightModel.SupportUnits}
 */
proto.PbModel.FightModel.SupportUnits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModelid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLv(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setSkilllistList(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
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
proto.PbModel.FightModel.SupportUnits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.FightModel.SupportUnits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.FightModel.SupportUnits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.FightModel.SupportUnits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLv();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSkilllistList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 ModelId = 1;
 * @return {number}
 */
proto.PbModel.FightModel.SupportUnits.prototype.getModelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.SupportUnits} returns this
 */
proto.PbModel.FightModel.SupportUnits.prototype.setModelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Lv = 2;
 * @return {number}
 */
proto.PbModel.FightModel.SupportUnits.prototype.getLv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.SupportUnits} returns this
 */
proto.PbModel.FightModel.SupportUnits.prototype.setLv = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated int32 SkillList = 3;
 * @return {!Array<number>}
 */
proto.PbModel.FightModel.SupportUnits.prototype.getSkilllistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.PbModel.FightModel.SupportUnits} returns this
 */
proto.PbModel.FightModel.SupportUnits.prototype.setSkilllistList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.FightModel.SupportUnits} returns this
 */
proto.PbModel.FightModel.SupportUnits.prototype.addSkilllist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.FightModel.SupportUnits} returns this
 */
proto.PbModel.FightModel.SupportUnits.prototype.clearSkilllistList = function() {
  return this.setSkilllistList([]);
};


/**
 * optional int32 Order = 4;
 * @return {number}
 */
proto.PbModel.FightModel.SupportUnits.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.FightModel.SupportUnits} returns this
 */
proto.PbModel.FightModel.SupportUnits.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.PbModel.FightModel);