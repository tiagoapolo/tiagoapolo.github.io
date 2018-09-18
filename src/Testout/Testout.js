import React, { Component } from 'react';
import './Testout.css';

class Testout extends Component {


    listImages = []

    constructor(props) {
        super(props);

        this.state = { 
            images: [1],            
        };

        this.listImages = this.state.images.map(image => <div key={image.toString()}>oaisdjaoijoiadsj</div>)
        
    }

    
    


    componentDidMount() {
        
    }
    
    componentWillUnmount() {
    }


    render() {
    return (
      <div>
        <div className="container">
            <div className="macbook">
                <img src="/images/1.png" />
            </div>
            
            <div className="macbook">
                <img src="/images/4.png" />
            </div>
            <div className="macbook">
                <img src="/images/3.png" />
            </div>
            <div className="gift">
                <img src="/images/kanban.gif"/>
            </div>
            
        </div>
        {/* <div className="container">
            
        </div> */}
      </div>
    );
  }
}

export default Testout;