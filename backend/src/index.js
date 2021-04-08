const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema");
const resolvers = require("./resolver");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
  })
);
app.listen(4000);

console.log("You are now live. wooHEJ!");
