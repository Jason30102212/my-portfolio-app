import React, { Component } from 'react';

class HerokuNote extends Component {

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <p><span className="text-red text-bold">Please note: </span>These site are hosted on a free Heroku account, and therefore may timeout on the initial load. They may require a reload in order to view them. Once these sites are ready for production, a paid service will utilized to host them.</p>
        </div>
      </div>
    )
  }

}

export default HerokuNote;
