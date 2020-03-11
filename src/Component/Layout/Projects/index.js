import React, { Component } from 'react'
import CardOne from '../../Common/Cards/CardOne'

import HerokuNote from '../../Layout/HerokuNote'


class Projects extends Component {

  render() {
    return (
      <section className="section-projects" id="project-section">
        <div className="u-center-text u-margin">
          <h2 className="heading-secondary">
            Projects
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <CardOne
              heading="Digital Agency"
              color="primary"
              image="digital-agency"
              item1="MERN"
              item2="Redux"
              item3="CSS Animations"
              item4="Sass"
              rearSmallOne="A site for a digital agency"
              rearLarge=""
              rearSmallTwo=""
              buttonText="Go to site"
              link="https://digital-agency-one.herokuapp.com/"
            />
          </div>
          <div className="col-1-of-3">
            <CardOne
              heading="Real Estate Site"
              color="secondary"
              image="real-estate"
              item1="MERN"
              item2="Redux"
              item3="CSS Animations"
              item4="Sass"
              rearSmallOne="Real Estate Platform"
              rearLarge=""
              rearSmallTwo=""
              buttonText="Go to site"
              link="https://real-estate-site.herokuapp.com/"
            />
          </div>
          <div className="col-1-of-3">
            <CardOne
              heading="Gym Site"
              color="tertiary"
              image="gym-site"
              item1="React"
              item2="Redux"
              item3="CSS Animations"
              item4="Sass"
              rearSmallOne="Gym Site"
              rearLarge=""
              rearSmallTwo=""
              buttonText="Go to site"
              link="https://gym-site-one.herokuapp.com/"
            />
          </div>
        </div>
        <HerokuNote />
      </section>
    )
  }
}

export default Projects
