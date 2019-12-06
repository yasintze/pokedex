// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  breadcrumbIcon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  },
  breadcrumbPadding: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  center: {
    marginTop: "10%",
    textAlign: "center"
  }
}));

const NotFoundContainer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.breadcrumbPadding}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            <HomeIcon className={classes.breadcrumbIcon} />
            Home
          </Link>
          <Typography color="textPrimary">404</Typography>
        </Breadcrumbs>
      </div>

      <div className={classes.center}>
        <Typography variant="h1">404</Typography>
        <Typography variant="body1">Page not found</Typography>
      </div>
    </>
  );
};

export default NotFoundContainer;
