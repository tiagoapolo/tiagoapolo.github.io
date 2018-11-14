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
            <section className="timeline_entry">
                <h1>TESTE 1</h1>
                <div className="multiline">
                    • Implemented DevOps strategies creating Kubernetes clusters and automated pipelines to reduce deployment time and friction. • Developed a support ticket activity monitoring mobile app to help managers reduce their time to action by 30% to assure the quality of service in the B2B internet provider sector. • Designed and implemented a project management dashboard to enable a distributed lab personnel work on remote projects and managers to track the project's daily activities Tech Stack: NodeJS, Angular 6, ReactJS, MongoDB, ParseDB, RabbitMQ, Docker, OpenStack, Docker, Swagger, Kubernetes.
                </div>
            </section>
            <section className="timeline_entry_2">
                <h1>TESTE 1</h1>
                <div className="multiline">
                    • Implemented DevOps strategies creating Kubernetes clusters and automated pipelines to reduce deployment time and friction. • Developed a support ticket activity monitoring mobile app to help managers reduce their time to action by 30% to assure the quality of service in the B2B internet provider sector. • Designed and implemented a project management dashboard to enable a distributed lab personnel work on remote projects and managers to track the project's daily activities Tech Stack: NodeJS, Angular 6, ReactJS, MongoDB, ParseDB, RabbitMQ, Docker, OpenStack, Docker, Swagger, Kubernetes.
                </div>
            </section>
        </div>
        {/* <div className="container">
            
        </div> */}
      </div>
    );
  }
}

export default Jobs;


