// @flow
import React from "react";
import { render } from "@testing-library/react";

import PokemonList from "./PokemonList";

it("renders pokemon list without error", () => {
  render(<PokemonList />);
});
