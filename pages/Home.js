import React, { Component } from 'react';

import './bootstrap';

import Header from '../components/Header';
import Search  from '../components/Search';
import Lastest  from '../components/Lastest';
import Footer  from '../components/Footer';

class Movie extends React.Component {
  render() {
    return (
      <div className="Page">
        <Header/> 
        <Search/> 
        <div className="PreviewLastestMovies">
          <Lastest/> 
        </div> 
        <Footer/> 
      </div>
    );
  }
}

export default Preview;