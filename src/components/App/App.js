// @flow
import React from "react";
import { useQuery } from "react-apollo";
import Container from "@material-ui/core/Container";

import { GET_POKEMON_INFO } from "../../queries";
import PokemonList from "../PokemonList";
import "./App.css";

const App = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

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
    <Container maxWidth="sm">
      <div className="App">
        <h1>{data.pokemons.length}</h1>
        {data && data.pokemons && <PokemonList data={data.pokemons} />}
      </div>
    </Container>
  );
};

export default App;
