import React, { Component } from 'react';

import Preview from '../components/Preview'

class Lastest extends Component {
  render() {
    return (
      <div className="Lastest">
        <div className="row Lastest_View">
          <Preview/>
        </div>
      </div>
    );
  }
}

export default Lastest;