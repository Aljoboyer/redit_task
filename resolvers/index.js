const ActionResolvers = require("./Action_Resolvers");
const NodeResolvers = require("./node_resolvers");
const ResourceResolvers = require("./Resourse_Resolvers");
const ResponseResolvers = require("./Response_Resolvers");
const TriggerResolvers = require("./Trigger_Resolvers");

const { GraphQLJSON } = require('graphql-type-json');
const { GraphQLLong } = require('graphql-scalars');

module.exports = {
  JSON: GraphQLJSON,
  Long: GraphQLLong,
  Query: {
    ...NodeResolvers.Query,
    ...ActionResolvers.Query,
    ...ResponseResolvers.Query,
    ...TriggerResolvers.Query,
    ...ResourceResolvers.Query
  }
};
