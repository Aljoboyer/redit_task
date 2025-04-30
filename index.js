require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const auth = require('./utils/auth');
const typeDefs = require('./schema/typeDefs');
const Resolvers = require('./resolvers');


async function startServer() {
  const server = new ApolloServer({
    typeDefs: [typeDefs], 
    resolvers: Resolvers,
    
    context: ({ req }) => {
      auth(req);
      return { req };
    },

    formatError: (err) => {
      return {
        message: err.message,
        path: err.path,
        code: err.extensions?.code || 'INTERNAL_SERVER_ERROR'
      };
    }
  });

  const { url } = await server.listen({
    port: process.env.PORT || 4000,
    cors: {
      origin: process.env.FRONTEND_ORIGIN || 'http://localhost:3000',
      credentials: true,
    },
  });

  console.log(`🚀 Server ready at ${url}`);

}
startServer();

