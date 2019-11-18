import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Layout/Navbar';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import CurrentProjects from './Component/CurrentProjects';
import CompletedProjects from './Component/CompletedProjects';
import GitHub from './Component/GitHub';
import AboutThisSite from './Component/AboutThisSite';
import AboutCreator from './Component/AboutCreator';
import TestStyle from './Component/TestStyle';

import Projects from './Component/Layout/Projects';
import Skillset from './Component/Layout/Skillset';
import About from './Component/Layout/About';

import Navigation from './Component/Layout/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Skillset />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
