const responseData = require('../data/response.json');

const { GraphQLJSON } = require('graphql-type-json');
const { GraphQLLong } = require('graphql-scalars');

const ResponseResolvers = {
  JSON: GraphQLJSON,
  Long: GraphQLLong,

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
