import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import List from './components/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <div className="col-md-6">
              <img className="image" src="/images/mountain.jpeg" alt="" />
            </div>
            <div className="col-md-6">
            <Router>
              <Link to="registration">Registration</Link>
              <Link to="login">Login</Link>
              <Switch>
                  <Route path="/registration">
                      <Registration />
                  </Route>
                  <Route path="/login">
                      <Login />
                  </Route>
                  <Route path="/list">
                      <List />
                  </Route>
                  <Route path="/">
                      <Registration />
                  </Route>
              </Switch>
            </Router>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
