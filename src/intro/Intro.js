import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            isAnimationActive: false,
            isNavbar: false,
        };
    }

    getNavTopDistance(el) {
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
      <section className="Intro full-header">
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
                        <li>
                            <a href="/files/tiago-paiva-resume.pdf" target='_blank' title="Tiago's Resume" rel="noopener noreferrer">
                                <i style={{ fontSize: 'large', color: '#bf360c' }} className="fas fa-file-pdf"></i>
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
                    <b>Software Developer</b> passionate about web development and front end technologies with 5+ years of experience from the R&D field developing innovative solutions for the financial, automotive and telecom industries and bootstrapping an accounts payable automation software startup in Chile.                    
                </h4>
            </div>
        </div>
      </section>
    );
  }
}

export default Intro;