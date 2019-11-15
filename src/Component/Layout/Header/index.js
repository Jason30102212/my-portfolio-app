import React, { Component } from 'react'
import '../Layout.css'
import {ReactComponent as Puzzle0} from '../../../images/puzzles/puzzle-mern.svg'
import {ReactComponent as Puzzle1} from '../../../images/puzzles/puzzle-mongodb.svg'
import {ReactComponent as Puzzle2} from '../../../images/puzzles/puzzle-express.svg'
import {ReactComponent as Puzzle3} from '../../../images/puzzles/puzzle-react.svg'
import {ReactComponent as Puzzle4} from '../../../images/puzzles/puzzle-node.svg'
import {ReactComponent as Puzzle5} from '../../../images/puzzles/puzzle-redux.svg'
import {ReactComponent as Puzzle6} from '../../../images/puzzles/puzzle-play.svg'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__top-links">
          <div className="header__top-link__left">
              <div>Test</div>
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
            <span className="heading-primary--main">Portfolio</span>
            <span className="heading-primary--sub">Thanks for visiting. </span>
          </h1>
        </div>
        <div className="header__puzzle-box">
          <Puzzle0 className="header__puzzle-piece header__puzzle-piece--0 vector-shadow" />
          <Puzzle1 className="header__puzzle-piece header__puzzle-piece--1 vector-shadow" />
          <Puzzle2 className="header__puzzle-piece header__puzzle-piece--2 vector-shadow" />
          <Puzzle3 className="header__puzzle-piece header__puzzle-piece--3 vector-shadow" />
          <Puzzle4 className="header__puzzle-piece header__puzzle-piece--4 vector-shadow" />
          <Puzzle5 className="header__puzzle-piece header__puzzle-piece--5 vector-shadow" />
          <Puzzle6 className="header__puzzle-piece header__puzzle-piece--6 vector-shadow" />
        </div>
      </header>
    )
  }
}

export default Header;
