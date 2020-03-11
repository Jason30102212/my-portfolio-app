import React, { Component } from 'react'
import image1 from '../../../images/eosLogo.png'
import githubLogo from '../../../images/github.png'
import mountainsLogo from '../../../images/mountains.jpg'
import aboutLogo from '../../../images/about.png'

class About extends Component {

  render() {
    return(
      <div className="section-about" id="about-section">
        <div className="u-center-text u-margin">
          <h2 className="heading-secondary">
            About Section
          </h2>
        </div>

        <div className="row">
          <div className="about">
            <figure className="about__shape">
              <img src={githubLogo} alt="Github" className="about__img"/>
              <figcaption className="about__caption">
                Github
              </figcaption>
            </figure>
            <div className="about__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Github Repositories
              </h3>
              <p>
                Projects and code that I am currently working on, along with completed projects.
                View my GitHub Repos at github.com/Jason30102212
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="about">
            <figure className="about__shape">
              <img src={mountainsLogo} alt="Github" className="about__img" />
              <figcaption className="about__caption">
                Current Goals
              </figcaption>
            </figure>
            <div className="about__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Current Goals
              </h3>
              <p>
                Currently developing the skills to produce applications around the React framework and the MERN stack.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="about">
            <figure className="about__shape">
              <img src={aboutLogo} alt="Github" className="about__img" />
              <figcaption className="about__caption">
                Site
              </figcaption>
            </figure>
            <div className="about__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                About this site
              </h3>
              <p>
                This site is built with create-react-app using the React framework.
                Languages used were Javascript/Jquery/JSX, HTML, CSS/Bootstrap.
                GIT/GitHub were used for version control and Heroku hosts the app.
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
