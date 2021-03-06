import React, { Component } from 'react';
import './Component.css';
import '../fonts/Fonts.css';

class CompletedProjects extends Component {

  render (){
    return(
      <div className="completed-projects-component component">
        <div className="container completed-projects-container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1-div-margin fahkwang-font">
                <h1 className="text-uppercase">Completed Projects</h1>
              </div>
              <hr className="my-4 text-white" />
              <div className="p-div-margin">
                <h3 className="ubuntu-font">These are the projects I have completed:</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card">
                <div>
                  <img className="card-img-top min-card-height p-3 auto-width" src={require('../images/pythonLogo.png')} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">Basic Python Tutorial</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">A refresher tutorial on the basics of Python. </p>
                  </div>
                  <a href="https://github.com/Jason30102212/python_basics_refresher" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card">
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
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card">
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

export default CompletedProjects;
