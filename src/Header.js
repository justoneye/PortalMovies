import React, { Component } from 'react';

import './component_styles.css';

import logo from '../multimedia/Logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <img src={logo} className="logo"/>
        </div>
        <div className="Menu">
          <li>Home</li>
          <li>Search Movie</li>
          <li>Compare Movies</li>
          <li>About us</li>
        </div>
      </div>
    );
  }
}

export default Header;