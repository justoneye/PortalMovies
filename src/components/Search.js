import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="Search">
          <input className="searchBar" placeholder="Enter here a seach term to find a movie"/>
        <button type="submit" className="btn bnt-info searchButton">Search</button>
      </div>
    );
  }
}

export default Search;