import React from 'react';

import Banner from '../components/Banner';
import Search  from '../components/Search';
import Lastest  from '../components/Lastest';
import Filters  from '../components/Filters';
import Footer  from '../components/Footer';

import '../components/component_styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="Page">
        <Search/>
        <Banner/> 
        <div className="row">
          <div className="col-3">
            <Filters/> 
          </div>
          <div className="col-9 PreviewLastestMovies">
            <Lastest/> 
          </div> 
        </div>
        <Footer/> 
      </div>
    );
  }
}