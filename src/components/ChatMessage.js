import { Avatar, Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";
import { messageClass } from "../firebase/init";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  sent: {
    justifyContent: "flex-end",
  },
  receivedText: {
    order: 2,
  },
  sentText: {},
  flex: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#3B185F",
    borderRadius: 20,
    margin: "0 10px",
    color: "#FEC260",
    fontWeight: "bold",
    fontSize: "1.1em",
    padding: "10px 20px",
  },
}));

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const classMsg = messageClass(uid);
  const classes = useStyles();

  return (
    <>
      <Box
        component="span"
        className={`${classes.container} ${classes[classMsg]}`}
      >
        <Box className={classes.flex}>
          <Typography
            className={`${
              classMsg === "received" ? classes.receivedText : classes.sentText
            } ${classes.text}`}
          >
            {text}
          </Typography>
          <Avatar alt="profile" src={photoURL} />
        </Box>
      </Box>
    </>
  );
}
