import React, { Component } from 'react'
import CardOne from '../../Common/Cards/CardOne'

import HerokuNote from '../../Layout/HerokuNote'


class Projects extends Component {

  render() {
    return (
      <section className="section-projects">
        <div className="u-center-text u-margin">
          <h2 className="heading-secondary">
            Projects
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <CardOne
              heading="Real Estate Site"
              color="secondary"
              image="real-estate"
              item1="React"
              item2="Redux"
              item3="CSS Animations"
              rearSmallOne="Real Estate Platform"
              rearLarge=""
              rearSmallTwo=""
              buttonText="Go to site"
            />
          </div>
          <div className="col-1-of-3">
            <CardOne
              heading="Digital Agency"
              color="primary"
              image="gym-site"
              item1="React"
              item2="CSS Animations"
              rearSmallOne="A site for a digital agency"
              rearLarge=""
              rearSmallTwo=""
              buttonText="Go to site"
            />
          </div>
          <div className="col-1-of-3">
            <CardOne
              heading="Gym Site"
              color="tertiary"
              image="gym-site"
              item1="React"
              item2="CSS Animations"
              rearSmallOne="Gym Site"
              rearLarge=""
              rearSmallTwo=""
              buttonText="Go to site"
            />
          </div>
        </div>
        <HerokuNote />
      </section>
    )
  }
}

export default Projects
