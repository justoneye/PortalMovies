import React, { Component } from 'react';
import './bootstrap';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form>
          <input 
          className="searchBar"
          type="text"
          name="searchMovie"/>
        </form>
        <button className="btn bnt-info">Search</button>
      </div>
    );
  }
}

export default Search;