import React, { Component } from 'react';
import './about-me.css';
import Picdummy from'./img/square-image.png'

class Aboutme extends Component {

  
  render() {

    
    return (
        
        
     // <div className="welcome-landing">
     //   <h2 class="brand-heading"> Hello ,I'm Chayut </h2>
     // </div>

     <div class="center padding-end">
         <div class="ui center aligned container segment-aboutme"><h1>About Me</h1></div>
         <div class="ui center aligned container segment-aboutme">
            <div class="ui stackable grid ">
                <div class="one wide column">
                </div>
                <div class="five wide column">
                    <img class="ui medium circular image position-img " src={Picdummy} alt="pic dummy"></img>
                </div>
                <div class="one wide column">
                </div>
                <div class="eight wide column">
                    <div class="ui piled segment">
                        <h4 class="ui header">A header</h4>
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                    </div>                        
                </div>
            </div>
            
            
            
            
         </div>
         
         
     </div>
    /*
     <div class=" header-aboutme segment-end center">
        <h1>About Me</h1>
        <div class="ui centered grid">
        <div class="six wide tablet eight wide computer column">
            <img class="ui medium circular image position-img" src={Picdummy} alt="pic dummy"></img>
         </div>
        
        </div>
       
       
     </div>
     */
    );
  }
}

export default Aboutme;
