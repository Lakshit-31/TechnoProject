import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (username.trim() === "") {
      alert("Username is required");
      return;
    }
    if (password.trim() === "") {
      alert("Password is required");
      return;
    }
    alert("Login Successful");
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="user">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Don't have an account? <Link to="/">Sign up</Link>
          </p>
          <div className="btn">
            <button className="button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
