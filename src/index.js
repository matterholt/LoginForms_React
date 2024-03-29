import React, { Component } from "react";
import ReactDOM from "react-dom";
import { login } from "./utls";

import "./styles.css";
// use the class syntax to learn

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
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
