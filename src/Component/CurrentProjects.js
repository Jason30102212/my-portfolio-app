import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import HerokuNote from './Layout/HerokuNote';
import './Component.css';
import '../fonts/Fonts.css';

class CurrentProjects extends Component {

  render () {
    return (
      <div className="current-projects-component component">
      <ScrollableAnchor id={'project-section'}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 sm-margin">
              <div className="h1-div-margin fahkwang-font">
                <h1 className="text-uppercase">Current Projects</h1>
              </div>
              <hr className="my-4 text-white" />
              <div className="p-div-margin">
                <h3 className="ubuntu-font">These are the projects I am currently working on:</h3>
              </div>
            </div>
          </div>
          <HerokuNote />
          <div className="row row-padding sm-margin">
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card color-card">
                <div>
                  <img className="card-img-top min-card-height auto-width" src={require('../images/eosLogo.png')} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">EOS CoLab</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">A project management platform for tokenizing projects and to facilitate the creation of decentralized autonomous organizations (DAO's).</p>
                  </div>
                  <a href="https://github.com/Jason30102212/eos-colab" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card color-card">
                <div>
                  <img className="card-img-top min-card-height auto-width" src={require('../images/eosLogo.png')} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">EOS Transition</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">A base site for a decentralized autonomous organisation that will focus on the creation and development of EOS Colab and EOS Work</p>
                  </div>
                  <a href="https://github.com/Jason30102212/eos-transition" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card color-card">
                <div>
                  <img className="card-img-top min-card-height auto-width" src={require('../images/eosLogo.png')} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">EOS Work</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">A platform for connection between people looking for work and those in need of services. Cryptocurrency is used to facilitate transactions.</p>
                  </div>
                  <a href="https://github.com/Jason30102212/eos-work" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card color-card">
                <div>
                  <img className="card-img-top min-card-height" src={require('../images/portfolio-site-image.jpg')} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">Portfolio Site</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">The site you are currently viewing. It uses the React framework and is a single page application.</p>
                  </div>
                  <a href="https://github.com/Jason30102212/my-portfolio-app" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card color-card">
                <img className="card-img-top min-card-height" src={require('../images/knowledgebase-site-image.jpg')} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">Knowledgebase</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">This app will be used to document what I have learned. It is a React app that uses Redux to control state. It also uses MongoDB. It has user login functionality and will be updatable by forms on the site..</p>
                  </div>
                  <a href="" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 btm-margin">
              <div className="card color-card">
                <img className="card-img-top min-card-height" src={require('../images/state-of-crypto.GIF')} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-uppercase ubuntu-font">State of Crypto</h5>
                  <div className="card-text-height">
                    <p className="card-text ubuntu-font">This React app requests Cryptocurrency data from a REST API and display, tailored to user input. </p>
                  </div>
                  <a href="https://github.com/Jason30102212/state-of-crypto" class="btn btn-primary">Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollableAnchor>

      </div>
    )
  }
}

export default CurrentProjects;
