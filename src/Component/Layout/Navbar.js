import React, { Component } from 'react';

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
                <a class="nav-link" href="#">Portfolio</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a class="nav-link" href="#">Position Two</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">Position Three</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">Position Four</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
