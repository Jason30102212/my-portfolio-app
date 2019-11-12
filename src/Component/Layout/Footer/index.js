import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return(
      <footer class="footer">
        <div className="footer__logo-box">
        <picture class="footer__logo">
          <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                  media="(max-width: 37.5em)" />
          <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png" />
        </picture>
        </div>

        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Footer
                </p>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
