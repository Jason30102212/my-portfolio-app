import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';


class Footer extends Component {
  render () {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center footer-height">
        <div className="row">
          <ScrollableAnchor id={'contacts-section'}>
          <div className="col-md-12">
            <i className="fas fa-envelope icon-lg p-5" />
            <br/>
            <span className="fahkwang-font font-md"><a href="mailto:Jason@jasonsonlineresume.com">Jason@jasonsonlineresume.com</a></span>
          </div>
                </ScrollableAnchor>
        </div>
        <div className="row">
          <div className="col-md-12 p-5">
            Copyright &copy; {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
