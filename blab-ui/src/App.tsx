import React from "react";
// import logo from "./logo.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import BlabDashboard from "./components/BlabDashboard";

const history = createBrowserHistory();

function App(): JSX.Element {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/not-found">
            <div>Not found</div>
          </Route>
          <Route path="/">
            <BlabDashboard />
          </Route>
          {/* <Redirect to="/not-found" /> */}
          <Redirect path="*" to="/not-found" />
        </Switch>
      </Router>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
