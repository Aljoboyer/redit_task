const triggerData = require('../data/trigger.json');

const TriggerResolvers = {
  Query: {
    Trigger: (_, { input }) => {
      const findData = triggerData.find(n => n._id === input);
      return findData
    },

    AllTrigger: () => {
      
      return triggerData
    },

  },

};

module.exports = TriggerResolvers;

