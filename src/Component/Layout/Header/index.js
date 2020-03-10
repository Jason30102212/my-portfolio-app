import React, { Component } from 'react'
import '../Layout.css'
// import {ReactComponent as Puzzle0} from '../../../images/puzzles/puzzle-mern.svg'
// import {ReactComponent as Puzzle1} from '../../../images/puzzles/puzzle-mongodb.svg'
// import {ReactComponent as Puzzle2} from '../../../images/puzzles/puzzle-express.svg'
// import {ReactComponent as Puzzle3} from '../../../images/puzzles/puzzle-react.svg'
// import {ReactComponent as Puzzle4} from '../../../images/puzzles/puzzle-node.svg'
// import {ReactComponent as Puzzle5} from '../../../images/puzzles/puzzle-redux.svg'
// import {ReactComponent as Puzzle6} from '../../../images/puzzles/puzzle-play.svg'
import mongodbLogo from '../../../images/mongodb-logo.png'
import expressLogo from '../../../images/express-logo.png'
import reactLogo from '../../../images/react-logo.png'
import javascriptLogo from '../../../images/javascript-logo.png'


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
            {
            // <div className="heading-primary__logo">
            //   <img className="heading-primary__logo--express" src={mongodbLogo} alt="logo"></img>
            //   <img className="heading-primary__logo--express" src={expressLogo} alt="logo"></img>
            //   <img className="heading-primary__logo--express" src={reactLogo} alt="logo"></img>
            //   <img className="heading-primary__logo--express" src={javascriptLogo} alt="logo"></img>
            // </div>
            }
          </h1>
        </div>
        {

          // <div className="header__puzzle-box">
          //   <Puzzle0 className="header__puzzle-piece header__puzzle-piece--0 puzzle-shadow" />
          //   <Puzzle1 className="header__puzzle-piece header__puzzle-piece--1 puzzle-shadow" />
          //   <Puzzle2 className="header__puzzle-piece header__puzzle-piece--2 puzzle-shadow" />
          //   <Puzzle3 className="header__puzzle-piece header__puzzle-piece--3 puzzle-shadow" />
          //   <Puzzle4 className="header__puzzle-piece header__puzzle-piece--4 puzzle-shadow" />
          //   <Puzzle5 className="header__puzzle-piece header__puzzle-piece--5 puzzle-shadow" />
          //   <Puzzle6 className="header__puzzle-piece header__puzzle-piece--6 puzzle-shadow" />
          // </div>

        }
      </header>
    )
  }
}

export default Header;
