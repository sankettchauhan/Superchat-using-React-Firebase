import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SignOut from "./SignOut";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#3B185F",
    height: "10vh",
  },
  title: {
    color: "white",
    margin: 10,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Chatting App
      </Typography>
      <SignOut />
    </Box>
  );
}
