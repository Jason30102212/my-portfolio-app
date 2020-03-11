import React, { Component } from 'react'

class Skillset extends Component {

  render() {
    return (
      <section className="section-skillset" id="skillset-section">
        <div className="row">
          <div className="col-1-of-4">
            <div className="skillset-box">
              <i className="skillset-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">mongoDB</h3>
              <p className="skillset-box__text">
                MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. No database is more productive to use.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skillset-box">
              <i className="skillset-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Express js</h3>
              <p className="skillset-box__text">
                Express is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skillset-box">
              <i className="skillset-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">React</h3>
              <p className="skillset-box__text">
                React is a JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skillset-box">
              <i className="skillset-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Node js</h3>
              <p className="skillset-box__text">
                Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
              </p>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Skillset
