import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Loading.css";

const useStyles = makeStyles({
  loader: {
    marginTop: "10%",
    marginLeft: "calc(50% - 20px)"
  }
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
