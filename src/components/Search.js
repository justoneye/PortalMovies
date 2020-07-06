import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="Search">
          <input className="searchBar" placeholder="Enter here a seach term to find a movie"/>
        <button type="button" variant="primary" className="searchButton">Search</button>
      </div>
    );
  }
}

export default Search;