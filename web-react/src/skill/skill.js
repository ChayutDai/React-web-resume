import React, { Component } from 'react';
import './skill.css';
import Picdummy from '../about-me/img/square-image.png';
import code from './img/coding.png';

class Skill extends Component {

  
  render() {

    //<i class="fa fa-code-fork circle-skill"></i>
    return (
        
     <div class="center background-skill padding-end">
        <div class="ui center aligned container h1skill"><h1>My Skill</h1></div>       
        <div class="ui center aligned container ">
            <div class="ui stackable four column grid ">
                <div class="column">
                    <i class="fa fa-code circle-skill"></i>
                    <div class="border-skill">
                        <div>
                        <p>Programming Language</p>
                        <p class ="left">Used: PHP , Java , .NET , Javascript , SQL </p>
                        <p class ="left">Leaning : React , Angular , Node.js </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <i class="fa fa-magic circle-skill"></i>   
                    <div class="border-skill">
                        <div>
                        <p>Web Design</p>
                        <p class ="left">Used: HTML , CSS , Jquery , Ajax , Bootstrap , UX ,  Semantic-UI </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <i class="fa fa-code-fork circle-skill"></i>
                    <div class="border-skill">
                        <div>
                        <p>Programming Language</p>
                        <p class ="left">Used: PHP , Java , .NET , Javascript , SQL </p>
                        <p class ="left">Leaning : React , Angular , Node.js </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <i class="fa fa-cogs circle-skill"></i>
                    <div class="border-skill">
                        <div>
                        <p>Programming Language</p>
                        <p class ="left">Used: PHP , Java , .NET , Javascript , SQL </p>
                        <p class ="left">Leaning : React , Angular , Node.js </p>
                        </div>
                    </div>
                </div>
                
            </div>  
         </div>
     </div>
    
    );
  }
}

export default Skill;
