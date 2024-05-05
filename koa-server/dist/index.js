'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefix = exports.lib = exports.queryAll = exports.deprecatedAll = exports.middlewaresAll = exports.responsesAll = exports.tagsAll = exports.SwaggerRouter = exports.deprecated = exports.errMsg = exports.okMsg = exports.responses = exports.formData = exports.middlewares = exports.wrapper = exports.tags = exports.body = exports.path = exports.query = exports.description = exports.desc = exports.params = exports.summary = exports.request = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _isTypeOf = require('is-type-of');

var _isTypeOf2 = _interopRequireDefault(_isTypeOf);

var _swaggerObject = require('./swaggerObject');

var _swaggerObject2 = _interopRequireDefault(_swaggerObject);

var _wrapper = require('./wrapper');

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _desc = (type, text) => (target, name, descriptor) => {
  descriptor.value[type] = text;
  _swaggerObject2.default.add(target, name, { [type]: text });
  return descriptor;
};

const _params = (type, parameters) => (target, name, descriptor) => {
  if (!descriptor.value.parameters) descriptor.value.parameters = {};
  descriptor.value.parameters[type] = parameters;

  // additional wrapper for body
  let swaggerParameters = parameters;
  if (type === 'body') {
    swaggerParameters = [{
      name: 'data',
      description: 'request body',
      schema: {
        type: 'object',
        properties: parameters
      }
    }];
  } else {
    swaggerParameters = Object.keys(swaggerParameters).map(key => Object.assign({ name: key }, swaggerParameters[key]));
  }
  swaggerParameters.forEach(item => {
    item.in = type;
  });

  _swaggerObject2.default.add(target, name, { [type]: swaggerParameters });
  return descriptor;
};

const request = (method, path) => (target, name, descriptor) => {
  method = _ramda2.default.toLower(method);
  descriptor.value.method = method;
  descriptor.value.path = path;
  _swaggerObject2.default.add(target, name, {
    request: { method, path },
    security: [{ ApiKeyAuth: [] }]
  });
  return descriptor;
};

const middlewares = middlewares => (target, name, descriptor) => {
  descriptor.value.middlewares = middlewares;
  return descriptor;
};

const deprecated = (target, name, descriptor) => {
  descriptor.value.deprecated = true;
  _swaggerObject2.default.add(target, name, { deprecated: true });
  return descriptor;
};

const responses = (responses = { 200: { description: 'success' } }) => (target, name, descriptor) => {
  descriptor.value.responses = responses;
  _swaggerObject2.default.add(target, name, { responses });
  return descriptor;
};
const desc = _ramda2.default.curry(_desc);

// description and summary
const description = desc('description');

const summary = desc('summary');

const tags = desc('tags');

const params = _ramda2.default.curry(_params);

// below are [parameters]

// query params
const query = params('query');

// path params
const path = params('path');

// body params
const body = params('body');

// formData params
const formData = params('formData');

const okMsg = {
  status: {
    code: 200,
    message: '系统请求成功！'
  },
  data: null
};

const errMsg = {
  status: {
    code: 500,
    message: '系统请求失败！'
  },
  data: null

  // class decorators
};const tagsAll = tags => target => {
  tags = _isTypeOf2.default.array(tags) ? tags : [tags];
  _swaggerObject2.default.addMulti(target, { tags });
};

const responsesAll = (responses = { 200: { description: 'success' } }) => target => {
  _swaggerObject2.default.addMulti(target, { responses });
};

const middlewaresAll = items => target => {
  items = _isTypeOf2.default.array(items) ? items : [items];
  target.middlewares = items;
};

const deprecatedAll = target => {
  _swaggerObject2.default.addMulti(target, { deprecated: true });
};

const prefix = prefix => target => {
  _swaggerObject2.default.addMulti(target, { prefix });
  target.prefix = prefix;
};

const queryAll = (parameters, filters = ['ALL']) => target => {
  if (!target.parameters) target.parameters = {};
  target.parameters.query = parameters; // used in wrapper.js for validation
  target.parameters.filters = filters; // used in wrapper.js for validation
  const swaggerParameters = Object.keys(parameters).map(key => Object.assign({ name: key }, parameters[key]));
  swaggerParameters.forEach(item => {
    item.in = 'query';
  });
  _swaggerObject2.default.addMulti(target, { query: swaggerParameters }, filters);
};
const Doc = {
  request,
  summary,
  params,
  desc,
  description,
  query,
  path,
  body,
  tags,
  wrapper: _wrapper.wrapper,
  middlewares,
  formData,
  responses,
  okMsg,
  errMsg,
  deprecated,
  SwaggerRouter: _wrapper.SwaggerRouter,
  tagsAll,
  responsesAll,
  middlewaresAll,
  deprecatedAll,
  queryAll,
  lib: _lib2.default,
  prefix
};

exports.default = Doc;
exports.request = request;
exports.summary = summary;
exports.params = params;
exports.desc = desc;
exports.description = description;
exports.query = query;
exports.path = path;
exports.body = body;
exports.tags = tags;
exports.wrapper = _wrapper.wrapper;
exports.middlewares = middlewares;
exports.formData = formData;
exports.responses = responses;
exports.okMsg = okMsg;
exports.errMsg = errMsg;
exports.deprecated = deprecated;
exports.SwaggerRouter = _wrapper.SwaggerRouter;
exports.tagsAll = tagsAll;
exports.responsesAll = responsesAll;
exports.middlewaresAll = middlewaresAll;
exports.deprecatedAll = deprecatedAll;
exports.queryAll = queryAll;
exports.lib = _lib2.default;
exports.prefix = prefix;