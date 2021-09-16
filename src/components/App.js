import React from "react";
import "../App.css";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase/init";

import Home from "./Home";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Home user={user} />
    </div>
  );
}

export default App;
