import React, { Component } from 'react';
import './home-page.css';
import Header from '../header/header.js'

class Homepage extends Component {

  
  render() {

    let rocket = {fontSize:'120px', animation: 'logo-spin infinite 20s linear' };
    return (
        
        
     // <div className="welcome-landing">
     //   <h2 class="brand-heading"> Hello ,I'm Chayut </h2>
     // </div>
     
     <div className="welcome-landing center segment-bottom">
        <Header />
        <div className="ui text container"> 
            <i className="fa fa-connectdevelop segment-top " style={rocket}></i>
                <h2 className="brand-heading"> Hello ,I'm Chayut </h2>
                <div className="intro-text" id="typed-strings" >
                 <h3 className="intro-text">Looking for Junior Web Developer.</h3> 
                </div>
        </div>
     </div>
   
    );
  }
}

export default Homepage;
