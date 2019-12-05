// @flow
import gql from "graphql-tag";

// Get all pokemons data from graphql
const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 9999) {
      id
      number
      name
      image
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

export { GET_POKEMON_INFO };
