import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Layout/Navbar';
import Header from './Component/Layout/Header';
import SkillSet from './Component/SkillSet';
import Footer from './Component/Layout/Footer';
import CurrentProjects from './Component/CurrentProjects';
import CompletedProjects from './Component/CompletedProjects';
import GitHub from './Component/GitHub';
import AboutThisSite from './Component/AboutThisSite';
import AboutCreator from './Component/AboutCreator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <CurrentProjects />
        <CompletedProjects />
        <SkillSet />
        <GitHub />
        <AboutThisSite />
        <AboutCreator />
        <Footer />
      </div>
    );
  }
}

export default App;
