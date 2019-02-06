import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Layout/Navbar';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
