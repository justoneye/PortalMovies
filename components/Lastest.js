import React, { Component } from 'react';

import Preview from '../components/Preview'

class Lastest extends Component {
  render() {
    return (
      <div className="Lastest">
        <h1 className="Lastest_Title">Lastest Movies</h1>
        <p>Check the information of the lastest movies around the world</p>
        <div className="row Lastest_View">
          <Preview/>
        </div>
      </div>
    );
  }
}

export default Lastest;