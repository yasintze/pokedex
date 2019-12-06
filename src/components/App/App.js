// @flow
import React from "react";

import Template from "../Template";
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
      <Template>
        <Routes />
      </Template>
    </div>
  );
};

export default App;
