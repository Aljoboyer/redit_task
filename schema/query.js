const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    Node(input: ID): NodeObject
    AllNode: [NodeObject]
    Action(input: ID): Action
    AllAction: [Action]
    Response(input: ID): Response
    AllResponse: [Response]
    Trigger(input: ID): Trigger
    AllTrigger: [Trigger]
    ResourceTemplate(input: ID): ResourceTemplate
    AllResourceTemplate: [ResourceTemplate]
  }
`;
