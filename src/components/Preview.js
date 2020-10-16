import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const containerStyles= {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
}

const singleCardStyles= {
  padding: "20px 10px"
}

function PrevMovie({movie})
{   
  return(
      <div className="PreviewMovie" style={singleCardStyles}>
        <Card className="Card">
            <Card.Img className="cardImage" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.original_language}. {movie.release_date}
              </Card.Text>
              <Button variant="danger">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg> {movie.vote_average*10}%
                <br/>
                {movie.popularity}
              </Button>
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
  
    console.log("data", data)
    this.setState(() => {
      return {
        loading: false,
        data: {
          info: data.results,
          results: data.results
        },
      };
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
    console.log(this.state)
    return (
      <div className="PreviewMovie" style={containerStyles}>
        {this.state.data.results.map(movie => {
          return (
            <div key={movie.id}>
              <PrevMovie movie={movie}/>
            </div>
          )
        })};
      </div>
    );
  }
};