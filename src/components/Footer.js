import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="row">
            <div className="col 6 MenuFooter">
              <li>Home</li>
              <li>Search Movie</li>
              <li>Compare Movies</li>
              <li>About us</li>
            </div>
        <div className="col-6 Footer_Copy">
              <h5>RatedMovies (C) 2020</h5>
              <h8>RatedMovies was developed by Pilar Camargo Márquez</h8>       
           </div>  
          </div>
      </div>
    );
  }
}

export default Footer;