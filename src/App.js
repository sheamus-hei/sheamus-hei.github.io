import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './Home';
import {HashRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
