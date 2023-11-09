import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "../data"



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
<Link to="/Formpage">Order Form</Link>
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