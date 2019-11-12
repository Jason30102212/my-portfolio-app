import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return(
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#home" className="navigation__link"><span></span>Home</a></li>
            <li className="navigation__item"><a href="#projects" className="navigation__link"><span></span>Projects</a></li>
            <li className="navigation__item"><a href="#skills" className="navigation__link"><span></span>Skills</a></li>
            <li className="navigation__item"><a href="#about" className="navigation__link"><span></span>About</a></li>
            <li className="navigation__item"><a href="#contact" className="navigation__link"><span></span>Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation;
