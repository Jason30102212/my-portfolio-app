import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return(
      <footer class="footer">
        <div className="footer__logo-box">
        </div>

        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Projects</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">MERN</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">About</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Jason@jasonsonlineresume.com
                </p>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
