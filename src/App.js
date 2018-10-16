import React, { Component } from 'react';
import './App.css';
import Intro from './intro/Intro';
import Jobs from './Jobs/Jobs';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Intro></Intro>
        <div>
          <Jobs></Jobs>
        </div>
      </div>
    );
  }
}

export default App;
