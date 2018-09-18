import React, { Component } from 'react';
import './App.css';
import Intro from './intro/Intro';
import Testout from './Testout/Testout';

class App extends Component {




  render() {
    return (
      <div className="App">
        <header>
          <Intro></Intro>
        </header>
        {/* <div style={{ height: 680, width: '100%' }}></div> */}
        <div>
          <Testout></Testout>
        </div>
      </div>
    );
  }
}

export default App;
