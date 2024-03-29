import React, { useState } from "react";
import ReactDOM from "react-dom";
import { login } from "./utls";

import "./styles.css";

function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await login({ username, password });
      setIsLogin("true");
    } catch (error) {
      setError("Incorrect username or password!");
    }
    setIsLoading(false);
  };
  function logOut() {
    setUsername("");
    setPassword("");
    setError("");
    setIsLogin(false);
  }

  return (
    <div className="container">
      {isLogin ? (
        <>
          <h1>Hello {username} </h1>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <h2 className="loginTitle"> Please Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <button className="submint" type="submit" disabled={isLoading}>
            {isLoading ? "Login in.." : "log in"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <LogInForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
