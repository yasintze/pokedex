// @flow
import React from "react";
import { useQuery } from "react-apollo";

import uniqueId from "../../utils/helpers/unique";
import { GET_POKEMON_INFO } from "../../queries";
import "./App.css";

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);
  const [name, setName] = React.useState<string>("John Doe");

  // console.log(error);

  React.useEffect(() => {
    const element = document.getElementById("initLoader");
    window.onload = () => {
      if (element) {
        element.remove();
      }
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

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
        <h1>{data.pokemons.length}</h1>
        {data &&
          data.pokemons &&
          data.pokemons.map(pokemon => (
            <div key={uniqueId()} className="card">
              <img src={pokemon.image} alt={pokemon.name} />
              <div className="card-body">
                <h3>{pokemon.name}</h3>
                <p>
                  {pokemon.evolutions && pokemon.evolutions.length !== 0 && (
                    <span>
                      {"Evolutions:"}
                      {pokemon.evolutions.map(e => {
                        return <em key={uniqueId()}>{e.name}</em>;
                      })}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
