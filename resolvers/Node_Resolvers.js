const nodeData = require('../data/node.json');
const triggerData = require('../data/trigger.json');
const responseData = require('../data/response.json');
const actionData = require('../data/action.json');

const NodeResolvers = {
  Query: {
    Node: (_, { input }) => {
      try {
        if(input){
          const findNodeData = nodeData.find(n => n?._id === input);
          if(!findNodeData){
            throw new Error("Node not found");
          }
          return {
            ...findNodeData,
            responses: findNodeData.responses?.map(id => responseData.find(r => r._id === id)) || [],
            actions: findNodeData.actions?.map(id => actionData.find(a => a._id === id)) || [],
            trigger: triggerData.find(t => t._id === findNodeData.trigger) || null
          };
        }
        else{
          throw new Error("Please Provide Valid Node ID");
        }
      } catch (error) {
        throw new Error(error);
      }
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

  },

};

module.exports = NodeResolvers;
