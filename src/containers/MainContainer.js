// @flow
import React from "react";
import { useQuery } from "react-apollo";

import { GET_POKEMON_INFO } from "../queries";
import PokemonList from "../components/PokemonList";

const MainContainer = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="App">
      <h1>{data.pokemons.length}</h1>
      {data && data.pokemons && <PokemonList data={data.pokemons} />}
    </div>
  );
};

export default MainContainer;
