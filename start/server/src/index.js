require("dotenv").config();
const { ApolloServer } = require("applo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });
