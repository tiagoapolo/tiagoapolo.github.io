import React, { Component } from 'react';
import './App.css';
import Intro from './intro/Intro';
import Jobs from './Jobs/Jobs';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Intro></Intro>
        <div style={{marginBottom:"10em"}}>
          <Jobs></Jobs>
        </div>        
        <footer>
          <span>Tiago Paiva &copy; twenty eighteen</span>
        </footer>
      </div>      
    );
  }
}

export default App;
