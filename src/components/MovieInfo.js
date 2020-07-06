import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="Movie_Information">
        <div className="Movie_Title">
          <h1>Title: {movie.title}</h1>
          <br></br>
          <h2>Release Date: {movie.release_date}</h2>
          <h2>Rate: {movie.vote_average}</h2>
        </div>
        <div className="Movie_Poster">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}/50px160`}>Preview Image</img>
        </div>
        <div className="Movie_Storyline">
          <h2>Overview: </h2>
          <br></br>
          <p>{movie.overview}</p>
        </div>
        <button>Back</button>
      </div>
    );
  }
}

export default Preview;