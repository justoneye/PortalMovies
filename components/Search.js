import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Search extends Component {
  render() {
    return (
      <div className="Search">
          <Navbar className="justify-content-between searchBar">
            <Form inline>
              <FormControl type="text" placeholder="Enter here a seach term to find a movie" className="mr-sm-2" />
              <Button variant="warning" className="searchButton">Search</Button>
            </Form>
          </Navbar>
      </div>
    );
  }
}

export default Search;