import React, { useRef, useState, useMemo } from "react";
import ChatMessage from "./ChatMessage";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../firebase/init";
import { Box, Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textarea: {
    height: "80vh",
    overflowY: "scroll",
    backgroundColor: "#2a0944",
  },
  formarea: {
    height: "10vh",
  },
  form: {
    width: "100%",
    backgroundColor: "#A12568",
    height: "100%",
  },
  button: {
    width: "25%",
    height: "100%",
  },
  textcontainer: {
    width: "75%",
    height: "100%",
    display: "inline-block",
  },
  input: {
    height: "100%",
    width: "100%",
    fontSize: "1.4em",
    padding: "0 1em",
    boxSizing: "border-box",
    "&:focus,&:active": {
      border: "none",
      outline: "none",
      borderRadius: 0,
    },
  },
}));

export default function ChatRoom() {
  const classes = useStyles();
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "desc").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const reverseMessage = useMemo(
    () => (messages ? messages.reverse() : null),
    [messages]
  );

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box className={classes.textarea}>
        {reverseMessage &&
          reverseMessage.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

        <span ref={dummy}></span>
      </Box>

      <Box className={classes.formarea}>
        <form onSubmit={sendMessage} className={classes.form}>
          <Box className={classes.textcontainer}>
            <input
              className={classes.input}
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="say something nice"
            />
          </Box>
          <Button
            className={classes.button}
            type="submit"
            disabled={!formValue}
          >
            Send
          </Button>
        </form>
      </Box>
    </>
  );
}
