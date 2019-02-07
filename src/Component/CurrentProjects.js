import React, { Component } from 'react';
import './Component.css';

class CurrentProjects extends Component {

  render () {
    return (
      <div className="current-projects-component component">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1-div-margin">
                <h1>Current Projects</h1>
              </div>
              <div className="p-div-margin">
                <p>This is a paragraph</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
