import React from "react";
import SignIn from "./SignIn";
import ChatRoom from "./ChatRoom";
import Header from "./Header";
import { Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  content: {
    height: "90vh",
  },
}));

export default function Home({ user }) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container} maxWidth="md">
        <Header />
        <Box className={classes.content}>
          {user ? <ChatRoom /> : <SignIn />}
        </Box>
      </Container>
    </>
  );
}
