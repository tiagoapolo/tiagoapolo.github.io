import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { isAnimationActive: false };
        console.log(this.state.isAnimationActive)
    }

    handleClick(){        ``
        this.setState({ isAnimationActive: !this.state.isAnimationActive })
        console.log(this.state.isAnimationActive)
    }

    render() {
    return (
      <section className="Intro">
        <div className="top bg"></div>
        <div className="middle">
            <div className="profile">
                <div className="bar">
                    <ul>
                        <li><a href="www.google.com">Trabalhos</a></li>
                        <li><a href="www.google.com">Artigos</a></li>
                        <li><a href="www.google.com">Contato</a></li>
                        {/* <li><a href="www.google.com"><FontAwesomeIcon icon="github"/></a></li> */}
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
                <div onClick={this.handleClick.bind(this)} className={["avatar", "av-left", this.state.isAnimationActive ? 'animate-move': 'animate-back'].join(' ')}></div>
            </div>
        </div>
        {/* <div className="bottom"> */}
            {/* <h4>asijdoaijdoadjidjodias oaidjaoijdaoija aoijdaosijd</h4> */}
        {/* </div> */}
      </section>
    );
  }
}

export default Intro;