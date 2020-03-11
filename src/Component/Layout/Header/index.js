import React, { Component } from 'react'
import '../Layout.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__top-links">
          <div className="header__top-link__left">
            <div className="header__logo"></div>
          </div>
          <div className="header__top-link__right">
            <div className="icon icon__facebook"></div>
            <div className="icon icon__twitter"></div>
            <div className="icon icon__linkedin"></div>
            <div className="icon icon__email"></div>
          </div>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Jason's Portfolio</span>
            <span className="heading-primary--sub">MERN app development</span>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header;
