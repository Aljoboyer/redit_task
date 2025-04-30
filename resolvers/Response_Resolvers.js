const responseData = require('../data/response.json');

const ResponseResolvers = {
  Query: {
    Response: (_, { input }) => {
      const findData = responseData.find(n => n._id === input);
      return findData
    },

    AllResponse: () => {
      return responseData
    },

  },

};

module.exports = ResponseResolvers;
