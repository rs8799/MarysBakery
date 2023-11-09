import React from "react"
/* import Logo from ".../assets/Marysbakinglogoremovebg.png"
 */import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


export default function Home () {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
{/*     <img src={Logo} className="nav--logo"/>
 */}
    <Container>
      <Nav className="me-auto navButton">

        <Nav.Link to="/">Home</Nav.Link>
      {/*   <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/Formpage"
        >
          Form
        </NavLink> */}
        <Nav.Link className="buttonNavWidth" href="#features">Order Form</Nav.Link>
        <Nav.Link className="buttonNavWidth" href="#pricing">Contact Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>
    )
};

