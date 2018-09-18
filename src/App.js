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
        {/* <div className="bottom-copy"> */}
          {/* <div className="copyright">
            Handcrafted by me &copy; twentyeighteen        
          </div>   */}
          {/* <div style={{ width:"100%", fontSize:"10px" }}> */}
            {/* <b>Made with </b>  <span style={{color: '#61dafb', fontSize:"large"}}><i class="fab fa-react"></i> React</span> */}
          {/* </div>                    */}
        {/* </div>        */}
      </div>
    );
  }
}

export default App;
