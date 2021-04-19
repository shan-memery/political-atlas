import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Navbar from "./Navbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(1.125),
  },
}));

const Layout = ({ title, children }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <Container className={classes.main}>
          <br />
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          {children}
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
