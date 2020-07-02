import React, { Component } from 'react';

import './bootstrap';

import logo from './multimedia/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <img src={logo} className="logo" alt="MovieRates logo" />
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