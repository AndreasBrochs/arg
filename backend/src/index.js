const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema");
const resolvers = require("./resolver");
const startDatabase = require("./database");

const context = async () => {
  const db = await startDatabase();
  return { db };
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context
  })
);
app.listen(4000);

console.log("You are now live. wooHEJ!");
