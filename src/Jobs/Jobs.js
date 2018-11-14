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
        <div>
            <div style={{"margin-bottom":"1em"}}>
                <img alt="" src="https://d2sef4u61egoux.cloudfront.net/assets/shared/partner-profile/experience-26084a9aadcc733eee381f5850d8ba8b096a640303d7f99e6a8b9b5b5f04ede2.svg"/>
                <div>EXPERIENCE</div>
            </div>
        </div>
        <div className="container timeline">       
            <section className="timeline_entry">
                <h1 className="jobtitle">TESTE 1</h1>
                <div className="multiline">
                    <p>• Implemented DevOps strategies creating Kubernetes clusters and automated pipelines to reduce deployment time and friction.</p>
                    <p>• Developed a support ticket activity monitoring mobile app to help managers reduce their time to action by 30% to assure the quality of service in the B2B internet provider sector.</p>
                    <p>• Designed and implemented a project management dashboard to enable a distributed lab personnel work on remote projects and managers to track the project's daily activities</p>
                    <p>Tech Stack: NodeJS, Angular 6, ReactJS, MongoDB, ParseDB, RabbitMQ, Docker, OpenStack, Docker, Swagger, Kubernetes.</p>
                </div>
            </section>
            <section className="timeline_entry">
                <h1 className="jobtitle">TESTE 1 <span>– Software Developer</span></h1>
                <div className="jobdate">APR – NOV 2017</div>
                <div className="multiline">
                    <p>• Implemented DevOps strategies creating Kubernetes clusters and automated pipelines to reduce deployment time and friction.</p>
                    <p>• Developed a support ticket activity monitoring mobile app to help managers reduce their time to action by 30% to assure the quality of service in the B2B internet provider sector.</p>
                    <p>• Designed and implemented a project management dashboard to enable a distributed lab personnel work on remote projects and managers to track the project's daily activities</p>
                    <p>Tech Stack: NodeJS, Angular 6, ReactJS, MongoDB, ParseDB, RabbitMQ, Docker, OpenStack, Docker, Swagger, Kubernetes.</p>
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


