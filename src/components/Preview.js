import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const containerStyles= {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
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
                Release: {movie.release_date}
                <br></br>
                Votes: {movie.vote_count}
                <br></br>
                Rate: {movie.vote_average}/10
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