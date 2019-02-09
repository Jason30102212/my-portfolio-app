import React, { Component } from 'react';
import './Component.css';
import '../fonts/Fonts.css';

class CurrentProjects extends Component {

  render () {
    return (
      <div className="current-projects-component component">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1-div-margin fahkwang-font">
                <h1 className="text-uppercase">Current Projects</h1>
              </div>
              <hr className="my-4 text-white" />
              <div className="p-div-margin">
                <h3 className="ubuntu-font">These are the projects I am currently working on:</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card color-card">
                <img className="card-img-top min-card-height" src={require('../images/portfolio-site-image.jpg')} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">Portfolio Site</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">The site you are currently on. It uses the React framework and is a single page application.</p>
                  </div>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card color-card">
                <img className="card-img-top min-card-height" src={require('../images/knowledgebase-site-image.jpg')} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">Knowledgebase</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">This app will be used to document what I have learned. It is a React app that uses Redux to control state. It also uses MongoDB. It has user login functionality and will be updatable by forms on the site..</p>
                  </div>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card color-card">
                <img className="card-img-top min-card-height" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">Card title</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentProjects;
