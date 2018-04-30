import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import About from './components/About'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
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
          </ul>

          <hr />

          <Route exact path="/" component={List} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;

