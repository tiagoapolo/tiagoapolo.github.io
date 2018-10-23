import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Articles from './components/Articles/Articles';
import Jobs from './components/Jobs/Jobs';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
          {/* <Intro></Intro> */}
        <div>
          {/* <Jobs></Jobs> */}
          <Articles></Articles>
        </div>
      </div>
    );
  }
}

export default App;
