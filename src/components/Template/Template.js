// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./Template.css";

type Props = {
  children: React.Node
};

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2)
  }
}));

const Template = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Pokédex</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <div className={classes.content}>{children}</div>
      </Container>
    </>
  );
};

export default Template;
