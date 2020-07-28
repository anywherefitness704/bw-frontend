import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { UserContext } from "./contexts/UserContext";

import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Locations from "./components/Locations";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="main-nav">
            <div>
              <h1>Anywhere Fitness</h1>
              <p>Grow Together, Be Connected</p>
            </div>
            <nav className="nav-links">
              <StyledLink to="/">
                <Button variant="outlined">Home</Button>
              </StyledLink>
              <StyledLink to="/registration" name="registration">
                <Button variant="outlined">Sign Up</Button>
              </StyledLink>
              <StyledLink to="/login" name="login">
                <Button variant="outlined">Login</Button>
              </StyledLink>
              <StyledLink to="/dashboard" name="dashboard">
                <Button variant="outlined">My Dashboard</Button>
              </StyledLink>
            </nav>
          </nav>

          <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/courses" render={() => <Courses />} />
            <Route path="/instructors" render={() => <Instructors />} />
            <Route path="/locations" render={() => <Locations />} />

            <Route
              path="/registration"
              render={() => (
                <div className="app-container">
                  <p>Registration.js placeholder</p>
                  <Registration />
                </div>
              )}
            />
            <Route
              path="/login"
              render={() => (
                <div className="app-container">
                  <p>Login.js placeholder</p>
                  <Login />
                </div>
              )}
            />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
`;
