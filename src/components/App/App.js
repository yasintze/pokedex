// @flow
import React from "react";
import Container from "@material-ui/core/Container";

import Routes from "../../routes";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    const element = document.getElementById("initLoader");
    window.onload = () => {
      if (element) {
        element.remove();
      }
    };
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Routes />
      </Container>
    </div>
  );
};

export default App;
