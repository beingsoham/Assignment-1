import React from 'react'
import Login from './Login'
import Students from './Student'
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Students />;
  }

  return <Login onSuccess={() => setLoggedIn(true)} />;
}

export default App;