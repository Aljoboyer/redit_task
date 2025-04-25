const { gql } = require('apollo-server');

module.exports = gql`
  scalar JSON
  scalar Long
  
  type Action {
    _id: ID!
    createdAt: Long!
    updatedAt: Long
    name: String!
    description: String
    functionString: String
    resourceTemplateId: ID
    resourceTemplate: ResourceTemplate
    params: params
  }

  type Trigger {
    _id: ID!
    createdAt: Long!
    updatedAt: Long
    name: String!
    description: String
    functionString: String
    resourceTemplateId: ID
    resourceTemplate: ResourceTemplate
    params: params
  }

  type Response {
    _id: ID!
    createdAt: Long!
    updatedAt: Long
    name: String!
    description: String
    platforms: [ResponsePlatform]
  }

  type ResponsePlatform {
    integrationId: ID
    build: Int
    localeGroups: [ResponseLocaleGroup]
  }

  type ResponseLocaleGroup {
    localeGroupId: ID
    variations: [ResponseVariation]
  }

  type ResponseVariation {
    name: String!
    responses: JSON
  }

  type ResourceTemplate {
    _id: ID!
    createdAt: Long!
    updatedAt: Long
    name: String!
    description: String
    schema: JSON
    integrationId: String
    functionString: String
    key: String
  }

  type NodeObject {
    _id: ID!
    createdAt: Long!
    updatedAt: Long
    name: String!
    description: String
    parents: [NodeObject]
    parentIds: [ID]
    root: Boolean
    trigger: Trigger
    triggerId: ID
    responses: [Response]
    responseIds: [ID]
    actions: [Action]
    actionIds: [ID]
    priority: Float
    compositeId: ID
    global: Boolean
    colour: String
  }
  type params{
            to: String
            from: String,
            subject: String
            text: String
            keywords: [keywords]
            payloads: [String]
        }
  type keywords{
          caseSensitive: Boolean
          keyword: [String]
      }

  type Query {
    Node(input: ID): NodeObject
    AllNode:[NodeObject]
    Action(input: ID): Action
    AllAction:[Action]
    Response(input: ID): Response
    AllResponse: [Response]
    Trigger(input: ID): Trigger
    AllTrigger: [Trigger]
    ResourceTemplate(input: ID): ResourceTemplate
    AllResourceTemplate: [ResourceTemplate]
  }
`;
