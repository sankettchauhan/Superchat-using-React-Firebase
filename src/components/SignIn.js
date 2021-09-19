import { Box, Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { signInWithGoogle } from "../firebase/init";

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
    height: "100%",
    backgroundColor: "#2a0944",
  },
  box: { textAlign: "center" },
  button: {
    marginBottom: "1em",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default function SignIn() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => signInWithGoogle(e)}
        >
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
}
