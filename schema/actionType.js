const { gql } = require('apollo-server');

module.exports = gql`
  type Action {
    _id: ID!
    createdAt: Long!
    updatedAt: Long
    name: String!
    description: String
    functionString: String
    resourceTemplateId: ID
    resourceTemplate: ResourceTemplate
    params: Params
  }
`;
