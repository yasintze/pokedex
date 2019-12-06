// @flow
import gql from "graphql-tag";

// Get all pokemons data from graphql
const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 9999) {
      id
      name
      image
      types
    }
  }
`;

const GET_POKEMON_BY_ID = gql`
  query getPokemonById($pokeId: String!) {
    pokemon(id: $pokeId) {
      id
      number
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        number
        name
        image
      }
      maxHP
      image
    }
  }
`;

export { GET_POKEMON_INFO, GET_POKEMON_BY_ID };
