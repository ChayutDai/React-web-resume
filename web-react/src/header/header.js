import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  
  render() {

    let brandStyle = { color: 'white',
                       fontSize: '25px',
                       animation: 'logo-spin infinite 20s linear'
                     };

    let whiteColor = { color: 'white'};

    return (
        
      <div className="ui secondary menu">
        <a className="item" style={whiteColor}>
            <i className="fa fa-connectdevelop" style ={brandStyle}></i>
        </a>
        <a className="item" style={whiteColor}>
            About me
        </a>
        <a className="item" style={whiteColor}>
            Skill
        </a>
      </div>
   
    );
  }
}

export default Header;
