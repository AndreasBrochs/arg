const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;

const schema = require("./schema");
// const resolvers = require("./resolver");
const startDatabase = require("./database");

const context = async () => {
  const db = await startDatabase();
  return { db };
};

const resolvers = {
  events: async (_, context) => {
    const { db } = await context();
    return db.collection("events").find().toArray();
  },
  event: async ({ id }, context) => {
    const { db } = await context();
    return db.collection("events").findOne({ id });
  },
  editEvent: async ({ id, title, description }, context) => {
    const { db } = await context();

    return db
      .collection("events")
      .findOneAndUpdate(
        { id },
        { $set: { title, description } },
        { returnOriginal: false }
      )
      .then((res) => res.value);
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context,
  })
);
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
app.listen(4000);

console.log("You are now live. wooHEJ!");
