const { gql } = require('apollo-server');

module.exports = gql`
  type Params {
    to: String
    from: String
    subject: String
    text: String
    keywords: [Keyword]
    payloads: [String]
  }

  type Keyword {
    caseSensitive: Boolean
    keyword: [String]
  }
`;
