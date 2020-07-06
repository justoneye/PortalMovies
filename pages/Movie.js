import React, { Component } from 'react';

import Header from '../components/Header';
import Search  from '../components/Search';
import MovieInfo  from '../components/MovieInfo';
import Footer  from '../components/Footer';

class Movie extends React.Component {
  render() {
    return (
      <div className="Page">
        <Header/> 
        <Search/> 
        <MovieInfo/> 
        <Footer/> 
      </div>
    );
  }
}

export default Preview;