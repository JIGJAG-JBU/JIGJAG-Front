import React from "react";
import "../css/App.css";
import { Box, Button, Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <div>About Page</div>
          </Route>
          <Route path="/users">
            <div>Users Page</div>
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
