import React, { Component } from 'react';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button'

import "bootstrap/dist/css/bootstrap.min.css";

//import './component_styles.css';

import logo from '../multimedia/logo.svg';

function aboutUs(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          About Us
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <p>
          RatedMovies.com is a web catalog based on <a href="https://www.themoviedb.org/">TheMovieDB API</a>'s movie to show the complete information of the latest movies.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.onHide}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}

function Show() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
  /*    <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */

      <aboutUs
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  );
}

class Header extends Component {
  render() {
    Show();
    return (
      <div className="Header">
        <table>
          <tbody>
            <tr>
              <td className="Header-Logo">
                <img src={logo} className="logo" alt="RatedMovies.com logo"/>
              </td>
              <td className="Header-Title">
                <h1>RatedMovies.com</h1>
              </td>
              <td className="Menu">
                <li>Home</li>
                <li>Search Movie</li>
                <li><a onClick='{() => setModalShow(true)}'>About us</a></li>
              </td>
            </tr>
          </tbody>          
        </table>
      </div>
    );
  }
}

export default Header;