import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import BannerImage from '../multimedia/Banner.jpg';

class Banner extends Component {
  render() {
    return (
      <div className="page-header">
        <img src={BannerImage} className="Banner" alt="Banner"/>             
      </div>      
    );
  }
}

export default Banner;