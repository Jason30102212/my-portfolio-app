import React, { Component } from 'react'

class CardOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="card">
        <div class="card__side card__side--front">
          <div class={`card__picture card__picture--${this.props.image}`}>
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span class={`card__heading-span card__heading-span--${this.props.color}`}>{this.props.heading}</span>
          </h4>
          <div class="card__details">
            <ul>
              {
                this.props.item1
                ?
                <li>{this.props.item1}</li>
                :
                ""
              }
              {
                this.props.item2
                ?
                <li>{this.props.item2}</li>
                :
                ""
              }
              {
                this.props.item3
                ?
                <li>{this.props.item3}</li>
                :
                ""
              }
              {
                this.props.item4
                ?
                <li>{this.props.item4}</li>
                :
                ""
              }
              {
                this.props.item5
                ?
                <li>{this.props.item5}</li>
                :
                ""
              }
            </ul>
          </div>
        </div>
        <div class={`card__side card__side--back card__side--back-${this.props.color}`}>
          <div class="card__cta">
            <div class="card__price-box">
              <p class="card__price-only">{this.props.rearSmallOne}</p>
              <div className={`card__rear-image card__rear-image--${this.props.image}`}></div>
              <p class="card__price-value">{this.props.rearLarge}</p>
              { this.props.rearSmallTwo
                ?
                <p class="card__price-only">{this.props.rearSmallTwo}</p>
                :
                ''
               }
            </div>
            <a href={this.props.link} target="_blank" class="btn btn--white">{this.props.buttonText}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CardOne
