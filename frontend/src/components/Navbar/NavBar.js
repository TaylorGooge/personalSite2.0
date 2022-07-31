import React from "react";
import { NavItems } from "./NavItems";
import "./NavBar.css";
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import Container  from "react-bootstrap/Container";
import {getS3Object} from '../../s3utils'

class NavBar extends React.Component{

  render(){
    return(
      <Navbar collapseOnSelect expand="lg" className='nav-bar' >
        <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://tgooge.s3.amazonaws.com/download.jpeg"
            width="80"
            height="80"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {NavItems.map((index)=> (
              <Nav.Link  className = {index.class} href= {index.link} key={index} >{index.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
}

export default NavBar