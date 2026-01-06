import React from 'react'
import Login from './Login'
import Students from './Student'
import Signup from "./Signup";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  let content;

  if (loggedIn) {
    content = <Students />;
  } else if (showSignup) {
    content = <Signup onSwitch={() => setShowSignup(false)} />;
  } else {
    content = (
      <Login
        onSuccess={() => setLoggedIn(true)}
        onSignup={() => setShowSignup(true)}
      />
    );
  }
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>{content}</main>
      <Footer />
    </>
  );
}

export default App;