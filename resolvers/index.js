const nodeData = require('../data/node.json');
const triggerData = require('../data/trigger.json');
const responseData = require('../data/response.json');
const actionData = require('../data/action.json');
const templateData = require('../data/resourceTemplate.json');

const { GraphQLJSON } = require('graphql-type-json');
const { GraphQLLong } = require('graphql-scalars');

const resolvers = {
  JSON: GraphQLJSON,
  Long: GraphQLLong,

  Query: {
    Node: (_, { input }) => {
      const findNodeData = nodeData.find(n => n._id === input);
      return {
        ...findNodeData,
        responses: findNodeData.responses?.map(id => responseData.find(r => r._id === id)) || [],
        actions: findNodeData.actions?.map(id => actionData.find(a => a._id === id)) || [],
        trigger: triggerData.find(t => t._id === findNodeData.trigger) || null
      };
    },

    AllNode: () => {
      
      const allNodes = nodeData.map(findNodeData => ({
        ...findNodeData,
        responses: !findNodeData.responses ? [] : findNodeData.responses?.map(id => responseData.find(r => r._id === id)) || [],
        actions: findNodeData.actions?.map(id => actionData.find(a => a._id === id)) || [],
        trigger: triggerData.find(t => t._id === findNodeData.trigger) || null
      }));
  
      return allNodes;
    },

    Action: (_, { input }) => {
      const findData = actionData.find(n => n._id === input);
      return findData
    },

    AllAction: () => {
      return actionData
    },

    Response: (_, { input }) => {
      const findData = responseData.find(n => n._id === input);
      return findData
    },

    AllResponse: () => {
      return responseData
    },

    Trigger: (_, { input }) => {
      const findData = triggerData.find(n => n._id === input);
      return findData
    },

    AllTrigger: () => {
      
      return triggerData
    },

  },

};

module.exports = resolvers;
