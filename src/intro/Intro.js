import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            isAnimationActive: false,
            isNavbar: false,
        };
    }

    getNavTopDistance(el) {
        // console.log('isBottom ', el.getBoundingClientRect(), window.scrollY)
        return el.getBoundingClientRect().bottom;
    }
      
    componentDidMount() {
        
        document.addEventListener('scroll', this.trackScrolling.bind(this));                

    }
    
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling.bind(this));
    }

      
    trackScrolling = () => {

        const navbarElement = document.getElementById('marker');

        console.log(this.getNavTopDistance(navbarElement), window.scrollY)

        if(this.getNavTopDistance(navbarElement) <= 32){
            
            this.setState({ isAnimationActive: true })

            if(this.getNavTopDistance(navbarElement) <= 0){
                this.setState({ isNavbar: true })
            } else {
                this.setState({ isNavbar: false })
            }

        } else {
            this.setState({ isAnimationActive: false })
            this.setState({ isNavbar: false })
        }

    };

    render() {
    return (
      <section className="Intro">
        <div className="top bg" style={{ marginBottom: (this.state.isNavbar ? '12%': '0') }} id="marker"></div>
        <div className="middle">
            <div className="profile">
                <div className={[ 
                        "bar", 
                        this.state.isNavbar ? 'navbar': 'non-navbar'
                    ].join(' ')}
                    id="info-bar"
                >
                    <ul>
                        {/* <li><a href="" rel="noopener noreferrer">Recent Work</a></li> */}
                        {/* <li style={{cursor: 'pointer'}}>Contact</li> */}
                        <li>
                            <a href="https://github.com/tiagoapolo" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: 'large', paddingLeft: '1em' }} className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/tiagoapolo" target='_blank' rel="noopener noreferrer">
                                <i style={{ fontSize: 'large', color: '#1DA1F2' }} className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://linkedin.com/in/tiago-fonseca/" target='_blank' rel="noopener noreferrer">
                                <i style={{ fontSize: 'large', color: '#0077B5' }} className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={[ 
                        "avatar", 
                        "av-left", 
                        this.state.isAnimationActive ? 'animate-move': 'animate-back',
                        this.state.isNavbar ? 'avatar-fixed': 'navbar-relative'
                    ].join(' ')}
                    id="av"
                >
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="intro-title">
                <h2>I'm Tiago</h2>
                <div className="divider"></div>
                <h4>
                    A Software Engineer passionate for <b>Cloud Infraestructure</b> and <b>Software Dev</b> with <b>4+ years</b> of experience obtained from the financial, 
                    automotive and telecom industries and bootstrapping an Accounts Payable Automation Software Startup in Chile.
                </h4>
            </div>
        </div>
      </section>
    );
  }
}

export default Intro;