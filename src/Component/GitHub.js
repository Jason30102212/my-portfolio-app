import React, { Component } from 'react';

class GitHub extends Component {

  render (){
    return (
      <div className="github-component component">
        <div className="container completed-projects-container  ">
          <div className="row">
            <div className="col-md-12">
              <div className="h1-div-margin">
                <i class="fab fa-github icon-lg" />
                <div className="fahkwang-font">
                  <h1 className="text-uppercase">GitHub</h1>
                </div>
                <hr className="my-4 text-white" />
              </div>
              <div className="p-div-margin">
                <h3 className="ubuntu-font">View my GitHub Repos at <a href="https://github.com/Jason30102212">github.com/Jason30102212</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GitHub;
