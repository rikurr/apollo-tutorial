import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
