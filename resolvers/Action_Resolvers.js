const actionData = require('../data/action.json');

const { GraphQLJSON } = require('graphql-type-json');
const { GraphQLLong } = require('graphql-scalars');

const ActionResolvers = {
  JSON: GraphQLJSON,
  Long: GraphQLLong,

  Query: {
    Action: (_, { input }) => {
      const findData = actionData.find(n => n._id === input);
      return findData
    },

    AllAction: () => {
      return actionData
    },

  },

};

module.exports = ActionResolvers;
