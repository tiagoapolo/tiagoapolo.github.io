import React, { Component } from 'react';
import './Jobs.css';


class Jobs extends Component {


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
      <div className="full-header">
        <div className="container">
            <div className="card">
                <div className="logo">
                    <div>
                        <img src="/images/telefonica.png"/>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <div className="logo">
                    <div>
                        <img src="/images/facturedo.png"/>
                    </div>                
                </div>
            </div>
            <div className="card">
                <div className="logo">
                    <div>
                        <img className="unio" src="/images/unio.png"/>
                    </div>                
                </div>                
            </div>
            <div className="card">
                <div className="logo">
                    <div>
                        <img className="unio" style={{borderRadius: '0'}} src="/images/volvo.png"/>
                    </div>                
                </div>                
            </div>
            
        </div>
        {/* <div className="container">
            
        </div> */}
      </div>
    );
  }
}

export default Jobs;