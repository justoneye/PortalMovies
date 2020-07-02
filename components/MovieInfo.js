import React, { Component } from 'react';
import './bootstrap';

class Movie extends Component {
  render() {
    return (
      <div className="Movie_Information">
        <div className="Movie_Title">
          <h3>Title</h3>
          <h2>(Year)</h2>
          <h3>Rating</h3>
        </div>
        <div className="Movie_Poster">
          <img>Preview Image</img>
        </div>
        <div className="Movie_InfoTable">
          ...
        </div>
        <div className="Movie_Storyline">
          <h3>Storyline</h3>
          <p>Lorem Ipsum...</p>
        </div>
        <button>Back</button>
      </div>
    );
  }
}

export default Preview;