const responseData = require('../data/response.json');

const ResponseResolvers = {
  Query: {
    Response: (_, { input }) => {
      if(!input){
        throw new Error("ID Required");
      }
      const findData = responseData.find(n => n._id === input);
      if(!findData){
        throw new Error("Not Found");
      }
      return findData
    },

    AllResponse: () => {
      try {
        return responseData
      } catch (error) {
        throw new Error(error);
        
      }
    },

  },

};

module.exports = ResponseResolvers;
