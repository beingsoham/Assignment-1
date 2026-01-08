import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Students from "./Student";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  let content;

  if (loggedIn && showAbout) {
    content = <About />;
  } else if (loggedIn) {
    content = <Students />;
  } else if (showSignup){
    content = <Signup onSwitch={() => setShowSignup(false)} />
  } else {
    content =
    (
      <Login
        onSuccess={() => setLoggedIn(true)}
        onSignup={() => setShowSignup(true)}
      />
    );
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        onLogin={() => {
          setLoggedIn(false);
          setShowSignup(false);
          setShowAbout(false);
        }}
        onSignup={() => {
          setLoggedIn(false);
          setShowSignup(true);
          setShowAbout(false);
        }}
        onHome={() => {
         setShowAbout(false);
         setLoggedIn(true);
       }}
       onAbout={() => {
         setShowAbout(true);
       }}
       onContact={() =>
         alert("Contact us at mokashisoham2007@gmail.com")
  }
       onLogout={() => {
         setLoggedIn(false);
         setShowSignup(false);
         setShowAbout(false);
  }}
/>
     
      <main style={{ minHeight: "80vh" }}>{content}</main>

      <Footer />
    </>
  );
}

export default App;
