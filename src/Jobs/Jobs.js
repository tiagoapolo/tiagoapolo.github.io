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
            <div className="experience-logo">
                <img alt="" src="https://d2sef4u61egoux.cloudfront.net/assets/shared/partner-profile/experience-26084a9aadcc733eee381f5850d8ba8b096a640303d7f99e6a8b9b5b5f04ede2.svg"/>
                <div>EXPERIENCE</div>
            </div>
        </div>
        <div className="container timeline">
            <div className="timeline_entry">
                <section className="">
                    <h1 className="jobtitle">Telefonica R&D Network & Services<span> – Software Developer</span></h1>
                    <div className="jobdate">NOV 2017 – PRESENT</div>
                    <div className="multiline">
                        <p>• Implemented DevOps strategies creating Kubernetes clusters and automated pipelines to reduce deployment time and friction.</p>
                        <p>• Developed a support ticket activity monitoring mobile app to help managers reduce their time to action by 30% to assure the quality of service in the B2B internet provider sector.</p>
                        <p>• Designed and implemented a project management dashboard to enable a distributed lab personnel work on remote projects and managers to track the project's daily activities</p>
                        <p>Tech Stack: NodeJS, Angular 6, ReactJS, MongoDB, ParseDB, RabbitMQ, Docker, OpenStack, Docker, Swagger, Kubernetes.</p>
                    </div>
                </section>
            </div>
            <div className="timeline_entry">
                <section className="">
                    <h1 className="jobtitle">Facturedo - Mobile apps & PWA<span>– Software Developer</span></h1>
                    <div className="jobdate">APR 2017 – NOV 2017</div>
                    <div className="multiline">
                        <p>• Led the remote development team while working on the Mexico rollout, managing activities and providing business requirements.</p>
                        <p>• Developed the first release of the mobile app responsible of creating a marketplace that helped sellers and investors get through factoring effectively and without hassle. Also managed the rollout of the app in Peru.</p>                             
                        <p>Tech Stack: NodeJS, Typescript, Angular 5, Ionic 3, RxJS, AWS SQS, AWS SNS, AWS Mobile HUB.</p>
                    </div>
                </section>
            </div>
            <div className="timeline_entry">
                <section className="">
                    <h1 className="jobtitle">Accounts payable automator<span>– Lead Software Developer</span></h1>
                    <div className="jobdate">AUG 2015 – FEB 2017</div>
                    <div className="multiline">
                        <p>• Prospected B2B clients leading to beta trials with business segment leaders Nextel, Magazine Luiza and Marista Group.</p>
                        <p>• Developed the bill collector robot enabling accounts payable analysts to be more efficient and focus on more intellectual demanding activities.</p>                        
                        <p>• Leveraged investments and partnerships, such as a sponsorship to pitch for investors in Amsterdam, USD 30K investment from the Chilean Government and a Microsoft partnership for USD 100K credits on Azure.</p>                        
                        <p>Tech Stack: NodeJS, Express, Python, Google Vision, AWS API Gateway, RabbitMQ, AWS SQS.</p>
                    </div>
                </section>
            </div>   
            <div className="timeline_entry">
                <section className="">
                    <h1 className="jobtitle">Volvo buses R&D<span>– Electrical Engineering Intern</span></h1>
                    <div className="jobdate">NOV 2015 – JUN 2016</div>
                    <div className="multiline">
                        <p>• Developed and maintained a software to automate electrical diagram verification, used by Volvo Sweden and Brazil, leading to important cost reduction by reducing the amount of time spent by the engineers in the electrical verification phase.</p>
                        <p>• Monitored buses electrical consumption on the field to solve battery consumption anomalies caused by unstable consumers.</p>                        
                        <p>• Designed electric load simulations along Volvo Sweden team for hybrid buses.</p>                        
                    </div>
                </section>
            </div>           
        </div>
        {/* <div className="container">
            
        </div> */}
      </div>
    );
  }
}

export default Jobs;


