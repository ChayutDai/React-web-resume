import React, { Component } from 'react';
import './experience.css'
class Experience extends Component {

  
  render() {

    //<i class="fa fa-code-fork circle-skill"></i>
    /*<div class="center  padding-end">
        <div class="ui center aligned container h1skill"><h1>My Experience</h1></div>
        </div>*/
    return (
        
        <div class=" padding-end">
        <div class="ui center aligned container h1skill"><h1>My Experience</h1></div>

        <div class="ui middle aligned animated list ">
            <h3 class="job-header">History</h3>
            <div class="timeline">
            <div class="item box-job">
                <div></div>
                <div class="ui raised segment">
                <a class="ui teal right ribbon label">Reviews</a>
                            
                    <h4 class="ui header line-ribbon">
                        <i class="plug icon"></i>
                        <div class="content">
                            <p>Miracle System co,Ltd</p>
                            <div class="sub header">2016-2017</div> 
                        </div>
                    </h4>
                    
                    <p>Duties</p>
                    <p>&nbsp;&nbsp;&nbsp;- Customize Document Management System (Docuware)</p>
                    <p>&nbsp;&nbsp;&nbsp;- Implement and deliver Jaymart, JMT, Jas Company </p>
                    <p>&nbsp;&nbsp;&nbsp;- Coordinated with partner in order to achieve the project goal </p> 
                </div>       
            </div>

            <div class="item box-job">
                <div></div>
                <div class="ui raised segment ">
                <a class="ui teal right ribbon label">Reviews</a>
                    <h4 class="ui header line-ribbon">
                        <i class="plug icon"></i>
                        <div class="content">
                            Burapha University
                            <div class="sub header">2012-2016</div>
                        </div>
                    </h4>
                    
                    <p>Duties</p>
                    <p>&nbsp;&nbsp;&nbsp;- Developed web application with PHP, JSP, Android, SQL</p>
                    <p>&nbsp;&nbsp;&nbsp;- Developed Back-end Text Recognition with Java, MongoDB </p>
                    
                </div>       
            </div>
            </div>
        </div>
        
        
       
        </div>

        
             
     
    
    );
  }
}

export default Experience;
