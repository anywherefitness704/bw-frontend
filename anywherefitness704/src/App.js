import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { InstructorsContext } from "./contexts/InstructorsContext";
import { LocationsContext } from "./contexts/LocationsContext";
import { UserContext } from "./contexts/UserContext";

import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import AddCourse from "./components/AddCourse";
import Instructors from "./components/Instructors";
import Locations from "./components/Locations";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Alerts from "./components/Alerts";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import "./App.css";

const dummyAuthData = {
  username: "",
  userType: "",
};

const initialInstructorListData = [
  {
    name: "",
    location: "",
    id: 1,
  },
];

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  const [tokenState, setTokenState] = useState();

  useEffect(() => {
    setTokenState(localStorage.getItem("token"));
  }, []);

  return (
    <Router>
      <InstructorsContext.Provider value={initialInstructorListData}>
        <LocationsContext.Provider>
          <UserContext.Provider value={dummyAuthData}>
            <div className="App">
              <header>
                <nav className="main-nav">
                  <div>
                    <h1>Anywhere Fitness</h1>
                    <p>Grow Together, Be Connected</p>
                  </div>
                  <nav className="nav-links">
                    {!localStorage.getItem("token") && (
                      <StyledLink to="/registration" name="registration">
                        <Button variant="outlined">Sign Up</Button>
                      </StyledLink>
                    )}
                    {!localStorage.getItem("token") && (
                      <StyledLink to="/login" name="login">
                        <Button variant="outlined">Login</Button>
                      </StyledLink>
                    )}
                    {localStorage.getItem("token") && (
                      <StyledLink to="/" name="dashboard">
                        <Button variant="outlined">My Dashboard</Button>
                      </StyledLink>
                    )}
                  </nav>
                </nav>
                <Switch>
                  <Route exact path="/" render={() => <Dashboard />} />
                  <Route exact path="/courses" render={() => <Courses />} />
                  <Route path="/courses/add" render={() => <AddCourse />} />
                  <Route path="/instructors" render={() => <Instructors />} />
                  <Route path="/locations" render={() => <Locations />} />

                  <Route
                    path="/registration"
                    render={() => (
                      <div className="app-container">
                        <Registration showError={updateErrorMessage} />
                      </div>
                    )}
                  />
                  <Route
                    path="/login"
                    render={() => (
                      <div className="app-container">
                        <Login
                          setTokenState={setTokenState}
                          showError={updateErrorMessage}
                        />
                      </div>
                    )}
                  />
                </Switch>
              </header>
              <span>
                <Alerts
                  errorMessage={errorMessage}
                  hideError={updateErrorMessage}
                />
              </span>
            </div>
          </UserContext.Provider>
        </LocationsContext.Provider>
      </InstructorsContext.Provider>
    </Router>
  );
}

export default App;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
`;
