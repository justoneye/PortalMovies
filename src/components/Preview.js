import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function MovieCard(props)
{
  const { movie } = props;
  return{
 
  }  
}

class Preview extends Component {
  state = {
    loading: true,
    error: null,
    data_movie: {
      results: [],
    },
  };

  componenteDidMount()
  {
    this.fetchMovies();
  }

  fetchMovies = async() => {
    this.setState({loading:true, error:null})

  try{
    const response_movie = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=4f8c4c7337d25f3ccffac4d8430f45a3');
    const data_movie = await response_movie.json(); 
 
  this.setState({
    loading: false,
    data_movie: data_movie
  });
  }
  catch (error)
  {
    this.setState({
      loading: false,
      error: error
    });
  }
};

    /*
    # {this.state.data_movie.results.map(movie = (api_key={title}))
        }
    */


  render() {
    return (
      <div className="PreviewMovie">
        <Card>
          <Card.Img variant="top" src="x" />
          <Card.Body>
            <Card.Title>Movie Title</Card.Title>
            <Card.Text>
              <p>(Movie Year): </p>
              <p>Movie Categorie: </p> 
              <p>Movie Rating: </p>
            </Card.Text>
            <Button variant="primary">View Movie</Button>
          </Card.Body>
        </Card>
      </div>      
    );
  }
}

export default Preview;