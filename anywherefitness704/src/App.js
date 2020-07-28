import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import Instructors from './components/Instructors'
import Locations from './components/Locations'
import Registration from './components/Registration'
import Login from './components/Login'
import Alerts from './components/Alerts'

import './App.css';

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  
  return (
    <Router>
    <div className = "App">
      <header>  
          <nav className="main-nav">
            <div>
              <h1>Anywhere Fitness</h1>
              <p>Grow Together, Be Connected</p>
            </div>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/registration" name="registration">Sign Up</Link>
              <Link to="/login" name="login">Login</Link>
              <Link to="/dashboard" name="dashboard">My Dashboard</Link>
            </nav>
          </nav>
          <Switch>
            <Route path="/dashboard" render={() => (
              <Dashboard />
            )} />
            <Route path="/courses" render={() => (
              <Courses />
            )} />
            <Route path="/instructors" render={() => (
              <Instructors />
            )} />
            <Route path="/locations" render={() => (
              <Locations />
            )} />

            <Route path="/registration" render={() => (
              <div className='app-container'>
                <Registration showError={updateErrorMessage} />
              </div>
            )} />
            <Route path="/login" render={() => (
              <div className='app-container'>
                <Login showError={updateErrorMessage} />
              </div>
            )} />
          </Switch>
        </header>
        <span><Alerts errorMessage={errorMessage} hideError={updateErrorMessage}/></span>
      </div>
    </Router>
  );
}

export default App;
