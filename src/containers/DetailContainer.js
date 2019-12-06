// @flow
import React from "react";
import { useQuery } from "react-apollo";

import { GET_POKEMON_BY_ID } from "../queries";

type Props = {
  pokeId: string
};

const DetailContainer = (props: Props) => {
  const { pokeId } = props;
  const { data, loading, error } = useQuery(GET_POKEMON_BY_ID, {
    variables: { pokeId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      DetailContainer
      <h3>{data && data.pokemon && <span>{data.pokemon.name}</span>}</h3>
    </div>
  );
};

export default DetailContainer;
