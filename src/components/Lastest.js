import React, { Component } from 'react';

import logo from '../multimedia/logo.svg';

class Lastest extends Component {
  render() {
    return (
      <div className="PreviewMovie">
        <img src={logo} className="logo"/>
        <h3>Title</h3>
        <h2>(Year)</h2>
        <button>View Movie</button>
      </div>
    );
  }
}

export default Lastest;