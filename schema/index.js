const { mergeTypeDefs } = require('@graphql-tools/merge');

const actionType = require('./actionType');
const triggerType = require('./triggerType');
const responseType = require('./responseType');
const resourceTemplateType = require('./resourceTemplateType');
const nodeType = require('./nodeType');
const commonScalars = require('./commonScalars');
const paramsType = require('./paramsType');
const queryType = require('./query');

const typeDefs = mergeTypeDefs([
  commonScalars,
  actionType,
  triggerType,
  responseType,
  resourceTemplateType,
  nodeType,
  paramsType,
  queryType
]);

module.exports = typeDefs;
