import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js'
import Homepage from './home-page/home-page.js'
import Aboutme from './about-me/about-me.js';
import Skill from './skill/skill.js';
import Experience from './experience/experience.js';


class App extends Component {
  render() {
    return (
      <div>
        <Homepage />
        <Aboutme />
        <Skill />
        <Experience />
      </div>
    );
  }
}

export default App;
