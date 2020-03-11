  import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import '../LayoutStyle.css'
import '../../../fonts/Fonts.css'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark navigation">
        <div className="navigation__container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#home-section">Home</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#project-section">Projects</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#skillset-section">Skillset</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#about-section">About</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#contacts-section">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
