import React, { Component } from 'react';

class SkillSet extends Component {

  render() {
    return (
      <div className="skill-set-component component">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="h1-div-margin fahkwang-font">
              <h1 className="text-uppercase">Skill Sets</h1>
            </div>
            <hr className="my-4 text-white" />
            <div className="p-div-margin">
              <h3 className="ubuntu-font">This is a list of skills I am working on:</h3>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card color-card">
                <i class="fas fa-code icon-code icon-md" />
                <div className="card-body">
                  <h5 className="card-title">Programming</h5>
                  <div className="skills-text">
                    <ul className="skills-list">
                      <li>HTML/CSS</li>
                      <li>JavaScript/React</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>C++</li>
                    </ul>
                  </div>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card color-card">
                <i class="fas fa-link icon-md" />
                <div className="card-body">
                  <h5 className="card-title">Blockchain</h5>
                  <div className="skills-text">
                    <p className="card-text">Currently focusing on the EOS blockchain smart contracts.</p>
                  </div>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card color-card">
                <i class="fas fa-cogs icon-md" />
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <div className="skills-text">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card color-card">
                <i class="fas fa-robot icon-md" />
                <div className="card-body">
                  <h5 className="card-title">Robotics</h5>
                  <div className="skills-text">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

export default SkillSet;
