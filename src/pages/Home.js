import React, { Component } from 'react';

import Header from '../components/Header';
import Lastest  from '../components/Lastest';
import Footer  from '../components/Footer';

import '../components/component_styles.css'

export default class Home extends React.Component {
  render() {
    return (
<div className="Page">
        <Header/> 
        <div className="PreviewLastestMovies">
          <Lastest/> 
        </div> 
        <Footer/> 
      </div>
    );
  }
}