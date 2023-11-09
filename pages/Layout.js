import { Outlet, Link } from "react-router-dom";
import React from "react"
import Logo from "../assets/Marysbakinglogoremovebg.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Hero from "../components/Hero"
import Card from "../components/Card"
import data from "../data"
import Formpage from "../pages/Formpage"
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import AboutUs from "../pages/AboutUs";


const Layout = () => {
  const dataItems = data.map(item =>{
    return <Card
        key={item.id}
        item={item}
    />
    })
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
    <img src={Logo} className="nav--logo"/>

    <Container>
      <Nav className="me-auto navButton">
<Link to={/Formpage}>Order Form</Link>
      
      {/*  <Link to="/AboutUs">About Us</Link> */}
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
       {/*  <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/Formpage"
        >
          Form
        </NavLink> */}
        {/* <Nav.Link className="buttonNavWidth" href="#features">Order Form</Nav.Link>
        <Nav.Link className="buttonNavWidth" href="#pricing">Contact Us</Nav.Link> */}
      </Nav>
    </Container>
  </Navbar>
  <Hero />
<section className="cards-list">
    {dataItems}
</section>

</>
  )
};

export default Layout;