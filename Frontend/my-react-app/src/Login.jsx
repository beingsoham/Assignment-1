import { useState } from "react";
import "./Login.css";

export default function Login({ onSuccess, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents Reloading

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      onSuccess();
    } else {
      setError(data.message);
    }
  };

  return (
  <div className="login-container">
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

      {error && <p className="error">{error}</p>}

      <p className="switch-text">
         Don’t have an account?
             <span className="switch-link" onClick={onSignup}>
                 Sign up
  </span>
</p>

    </form>
  </div>
);
}