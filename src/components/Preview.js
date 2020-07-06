import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function prevMovie(props)
{
  const { movie } = props;
    return(
      <div className="PreviewMovie">
        <Card className="Card">
            <Card.Img variant="top" src="movie.backdrop_path" />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                Realease: {movie.release_date}
                <br></br>
                Categorie: {movie.genre_id.name}
                <br></br>
                Rate: {movie.vote_average}
              </Card.Text>
              <Button variant="danger">View Movie</Button>
          </Card.Body>                  
        </Card>
      </div>
    );
}

export default class Preview extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      info: {},
      results: [],
    },
  };

  componentDidMount()
  {
    this.fetchMovies();
  }
 
  fetchMovies = async() => {
    this.setState({loading: true, error: null})

  try{
    const response_movie = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=4f8c4c7337d25f3ccffac4d8430f45a3');
    const data = await response_movie.json(); 
    
  this.setState({
    loading: false,
    data: {
      info: data.info,
      results: []
    },
  });
  } catch (error)
  {
    this.setState({
      loading: false,
      error: error
    });
  }
}
  render() {
    return (
      <div className="PreviewMovie">
        {this.state.data.results.map(movie => (
          <div key={movie.id}>
            <prevMovie movie={movie}/>
          </div>
        ))};
      </div>
    );
  }
};
