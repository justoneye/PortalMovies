import React, { Component } from 'react';

import './bootstrap';

import logo from './multimedia/logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="MenuFooter">
          <li>Home</li>
          <li>Search Movie</li>
          <li>Compare Movies</li>
          <li>About us</li>
        </div>
        <div className="Copy">
          <p>RatedMovies (C) 2020</p>
          <p>RatedMovies was developed by Pilar Camargo Márquez</p>       
        </div>  
      </div>
    );
  }
}

export default Footer;