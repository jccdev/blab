import React from "react";
// import logo from "./logo.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Router, Link, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import BlabDashboard from "./components/BlabDashboard";

const history = createBrowserHistory();

function App(): JSX.Element {
  return (
    <div>
      <Router history={history}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <BlabDashboard />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
