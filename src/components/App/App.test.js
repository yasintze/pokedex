import React from "react";
import { render } from "@testing-library/react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import App from "./App";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});

const client = new ApolloClient({
  cache,
  link
});

test("renders change name button", () => {
  const { getByText } = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const linkElement = getByText(/change name/i);
  expect(linkElement).toBeInTheDocument();
});
