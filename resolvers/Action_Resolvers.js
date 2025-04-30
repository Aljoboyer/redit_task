const actionData = require('../data/action.json');

const ActionResolvers = {
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
