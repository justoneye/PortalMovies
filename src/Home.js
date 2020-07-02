import React, { Component } from 'react';
// import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Page">
        <p className="App-intro">
          Welcome to the RatedMovies website! You'll find the lastest movies.
        </p>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>        
      </div>
    );
  }
}

export default App;
