import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import "bootstrap/dist/css/bootstrap.min.css";

import logo from '../multimedia/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand className="Header-Logo" href="#home"><img src={logo} className="logo" alt="RatedMovies.com logo"/></Navbar.Brand>
          <Navbar.Brand><h1>RatedMovies.com</h1></Navbar.Brand>
        </Navbar>                
      </div>      
    );
  }
}

export default Header;