const templateData = require('../data/resourceTemplate.json');

const ResourceResolvers = {
  Query: {
    ResourceTemplate: (_, { input }) => {
      try {
        if(!input){
          throw new Error("ID Required");
        }
        const findData = templateData.find(n => n._id === input);
        if(!findData){
          throw new Error("Not Found");
        }
        return findData
      } catch (error) {
        throw new Error(error);
      }
    },
    AllResourceTemplate: () => {
      try {
        return templateData;
      } catch (error) {
        throw new Error(error);
        
      }
    },

  },

};

module.exports = ResourceResolvers;

