const actionData = require('../data/action.json');

const ActionResolvers = {
  Query: {
    Action: (_, { input }) => {
      try {
        if(!input){
          throw new Error("ID Required");
        }
        const findData = actionData.find(n => n._id === input);
        if(!findData){
          throw new Error("Action not found");
        }
        return findData
      } catch (error) {
        throw new Error(error);
        
      }
    },

    AllAction: () => {
     try {
       return actionData;
     } catch (error) {
      throw new Error(error);

     }
    },

  },

};

module.exports = ActionResolvers;
