var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

function graphqlMiddleware() {
  var app = express();

  var schema = buildSchema(`
    type User {
      id: String!
      name: String
    }
  `);

  var rootValue = {
    user({ id }) {
      return {};
    }
  };

  app.use(graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }));

  return app;
}

module.exports = exports = graphqlMiddleware;