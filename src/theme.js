// @flow
import { createMuiTheme } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00abb7",
      main: "#008087",
      dark: "#006368"
    },
    secondary: {
      light: deepOrange[500],
      main: deepOrange[700],
      dark: deepOrange[900]
    }
  }
});

export default theme;
