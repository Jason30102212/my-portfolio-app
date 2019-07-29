import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class AboutThisSite extends Component {

  render (){
    return(
      <div className="about-this-site-component component">
      <ScrollableAnchor id={'about-section'}>
        <div className="container completed-projects-container  ">
          <div className="row">
            <div className="col-md-12">
              <div className="h1-div-margin fahkwang-font">
                <h1 className="text-uppercase">About This Site</h1>
              </div>
              <hr className="my-4 text-white" />
              <div className="p-div-margin">
                <p className="fahkwang-font">This site is built with create-react-app using the React framework.</p>
                <p className="fahkwang-font">Languages used were Javascript/Jquery/JSX, HTML, CSS/Bootstrap.</p>
                <p className="fahkwang-font">GIT/GitHub were used for version control and Heroku hosts the app.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
      </div>
    )
  }
}

export default AboutThisSite;
