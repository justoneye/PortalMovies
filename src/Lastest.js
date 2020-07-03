import React, { Component } from 'react';

import Preview from '../components/Preview'

class Lastest extends Component {
  render() {
    return (
      <div className="Lastest">
        <h1 className="Title">Lastest Movies</h1>
        <div className="row">
          <Preview/>
        </div>
      </div>
    );
  }
}

export default Lastest;