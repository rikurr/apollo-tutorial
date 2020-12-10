require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const { createStore } = require('./utils');

const LaunchAPI = require("./datasources/launch");
const UserAPI = require("./datasources/user");
const typeDefs = require("./schema");

const store = createStore()

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store }),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
