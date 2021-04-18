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

function App() {
  return (
    <div className="App">
      <span>
        <img src="/images/mountain.jpeg" alt="" />
      </span>
      <span>
        <Router>
          <Link to="login" >Login</Link>
          <Link to="list" >List</Link>
          <Switch>
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
      </span>
    </div>
  );
}

export default App;
