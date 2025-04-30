const triggerData = require('../data/trigger.json');

const TriggerResolvers = {
  Query: {
    Trigger: (_, { input }) => {
      if(!input){
        throw new Error("ID Required");
      }
      const findData = triggerData.find(n => n._id === input);
      if(!findData){
        throw new Error("Not Found");
      }
      return findData
    },

    AllTrigger: () => {
      try {
      return triggerData;
      } catch (error) {
        throw new Error(error);
        
      }
    },

  },

};

module.exports = TriggerResolvers;

