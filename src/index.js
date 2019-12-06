// @flow
import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import App from "./components/App";
import theme from "./theme";
import client from "./graphql";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

const ReactApp = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </MuiThemeProvider>
);

if (rootElement == null) {
  throw new Error("no root element");
} else {
  ReactDOM.render(<ReactApp />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
