import React, { Component } from 'react';
import './LayoutStyle.css';
import '../../fonts/Fonts.css'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
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
              <li className="nav-item">
                <i class="fas fa-code icon-lg icon-logo" />
                <a class="nav-link text-logo text-uppercase fahkwang-font" href="#">Portfolio</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#">Skillset</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#">Github</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#">About</a>
              </li>
              <li className="nav-item">
                <a class="nav-link ubuntu-font link-style" href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
