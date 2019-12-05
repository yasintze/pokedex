import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";

// The component AND the query need to be exported
import { GET_POKEMON_INFO } from "../../queries";
import App from "./App";

const mocks = [
  {
    request: {
      query: GET_POKEMON_INFO
    },
    result: {
      data: {
        pokemons: {
          id: "UG9rZW1vbjowMDE=",
          number: "001",
          name: "Bulbasaur",
          image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
          evolutions: [
            {
              id: "UG9rZW1vbjowMDI=",
              number: "002",
              name: "Ivysaur",
              image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
            },
            {
              id: "UG9rZW1vbjowMDM=",
              number: "003",
              name: "Venusaur",
              image: "https://img.pokemondb.net/artwork/venusaur.jpg"
            }
          ]
        }
      }
    }
  }
];

it("renders without error", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
});
