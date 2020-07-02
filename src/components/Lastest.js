import React, { Component } from 'react';
import './bootstrap';

class Lastest extends Component {
  render() {
    return (
      <div className="PreviewMovie">
        <img>Preview Image</img>
        <h3>Title</h3>
        <h2>(Year)</h2>
        <button>View Movie</button>
      </div>
    );
  }
}

export default Lastest;