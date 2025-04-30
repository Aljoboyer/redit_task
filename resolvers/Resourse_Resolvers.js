const templateData = require('../data/resourceTemplate.json');

const ResourceResolvers = {
  Query: {
    ResourceTemplate: (_, { input }) => {
      const findData = templateData.find(n => n._id === input);
      return findData
    },
    AllResourceTemplate: () => {
      return templateData
    },

  },

};

module.exports = ResourceResolvers;

