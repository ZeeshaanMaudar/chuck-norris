const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type RandomJoke {
    icon_url: String
    value: String
  }

  type Query {
    categories: [String],
    getRandomJoke(category: String!): RandomJoke
  }
`;
