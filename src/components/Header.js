import React, { Component } from 'react';

//import './component_styles.css';

import logo from '../multimedia/Logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <table>
          <tboby>
          <td className="Header-Logo">
            <img src={logo} className="logo"/>
          </td>
          <td className="Header-Title">
            <h1>RatedMovies.com</h1>
          </td>
          <td className="Menu">
            <li>Home</li>
            <li>Search Movie</li>
            <li>Compare Movies</li>
            <li>About us</li>
          </td>
          </tboby>          
        </table>
      </div>
    );
  }
}

export default Header;