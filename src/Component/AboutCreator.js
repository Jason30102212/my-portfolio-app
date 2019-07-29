import React, { Component } from 'react';

class AboutCreator extends Component {

  render (){
    return (
      <div className="about-creator-component component">
        <div className="container completed-projects-container  ">
          <div className="row">
            <div className="col-md-12">
              <div className="h1-div-margin fahkwang-font">
                <h1 className="text-uppercase">About Creator</h1>
              </div>
              <hr className="my-4 text-white" />
              <div className="p-div-margin m-3">
                <p className="fahkwang-font">I have a strong interest in technology and software, with a focus on Blockchain technology</p>
              </div>
              <hr className="my-4 text-white" />
            </div>
          </div>
          <div className="row fahkwang-font text-uppercase">
            <div className="col-md-12 p-3 pt-5">
              <h4>--Current Goals--</h4>
            </div>
          </div>
          <hr className="my-4 text-white" />
          <div classname="row">
            <div className="col-md-12 fahkwang-font">
              <p>Currently developing the skills to produce EOS based Decentralized Applications</p>
            </div>
            <ul className="fahkwang-font bullet-style-none">
              <li>React Framework</li>
              <li>Redux</li>
              <li>WebAssembly</li>
              <li>C++</li>
            </ul>
          </div>
          <hr className="my-4 text-white" />
        </div>
      </div>
    )
  }
}

export default AboutCreator;
