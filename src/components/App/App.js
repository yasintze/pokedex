// @flow
import React from "react";
import "./App.css";

function App() {
  const [name, setName] = React.useState<string>("John Doe");

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
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <button type="button" onClick={() => setName("Foo")}>
          Change Name
        </button>
      </header>
    </div>
  );
}

export default App;
