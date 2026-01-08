import "./Header.css";

export default function Header({
  loggedIn,
  onLogin,
  onSignup,
  onHome,
  onAbout,
  onContact,
  onLogout
}) {
  return (
    <header className="header">
      <h2 className="logo">Student Portal</h2>

      <nav className="nav">
        {/* When NOT logged in */}
        {!loggedIn && (
          <>
            <button onClick={onLogin}>Login</button>
            <button onClick={onSignup}>Signup</button>
          </>
        )}

        {/* When logged in */}
        {loggedIn && (
          <>
            <button onClick={onHome}>Home</button>
            <button onClick={onAbout}>About</button>
            <button onClick={onContact}>Contact</button>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
