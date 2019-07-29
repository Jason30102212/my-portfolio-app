import React, { Component } from 'react';
import './Layout.css';

class Header extends Component {
  render () {
    return (
      <div className="header">
        <div class="jumbotron jumbotron-background">
          <div className="jumbotron-padding">
          </div>
          <h1 className="display-4 fahkwang-font text-white text-uppercase text-spread-20">Jason's Portfolio</h1>
          <hr className="my-4 text-white" />
          <p className="gloria-hallelujah-font text-white">Thanks for visiting. This is a showcase of the projects I am working on and the skills I am obtaining.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg m-5" href="#about-section" role="button">Learn more</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Header;
