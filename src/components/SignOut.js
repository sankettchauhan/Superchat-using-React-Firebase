import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import { auth } from "../firebase/init";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: 10,
  },
}));

export default function SignOut() {
  const classes = useStyles();
  return (
    auth.currentUser && (
      <Box className={classes.container}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
      </Box>
    )
  );
}
