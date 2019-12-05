import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders change name button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/change name/i);
  expect(linkElement).toBeInTheDocument();
});
