const { ApolloServer, gql } = require('apollo-server');

const rootResolvers = require('./graphql/resolvers/index');
const rootSchema = require('./graphql/schema/index');


const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});