import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import logo from '../multimedia/logo.svg';

class Preview extends Component {
  render() {
    return (
      <div className="PreviewMovie">
        <Card /*style={{ width: '33%' }}*/>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Movie Title</Card.Title>
            <Card.Text>
              (Movie Year):
              Movie Categorie: 
              Movie Rating: 
            </Card.Text>
            <Button variant="primary">View Movie</Button>
          </Card.Body>
        </Card>
      </div>      
    );
  }
}

export default Preview;