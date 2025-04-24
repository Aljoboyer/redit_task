require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');
const auth = require('./utils/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    auth(req);
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
