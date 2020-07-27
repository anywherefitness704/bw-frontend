import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Registration from './components/Registration'
import Login from './components/Login'

import './App.css';

function App() {
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
            <div className='app-container'>
            <p>Dashboard.js placeholder</p>
            <Dashboard />
          </div>
          )} />
          <Route path="/registration" render={() => (
            <div className='app-container'>
            <p>Registration.js placeholder</p>
            <Registration/>
          </div>
          )} />
          <Route path="/login" render={() => (
            <div className='app-container'>
            <p>Login.js placeholder</p>
            <Login />
          </div>
          )} />
          </Switch>
        </header>
      </div>
    </Router>
    
   
  );
}

export default App;
