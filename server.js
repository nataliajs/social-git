var express = require('express');
var graphqlMiddleware = require('./graphql');

var app = express();

app.use('/graphql', graphqlMiddleware());
if (require.main === module) {
  app.listen(3000, (error) => {
    if (error) return console.error(error);
    console.log('Running grapqhl server')
  });
}
