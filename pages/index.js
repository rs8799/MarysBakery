import React from "react"; 
import Link from "next/link"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hero from "./Hero"
import NavigationBar from "./NavigationBar"
import Card from "../Card"
import data from "../data"

const HomePage = () => { 
	const dataItems = data.map(item =>{
    return <Card
        key={item.id}
        item={item}
    />
    })
return ( 
	<>
		<NavigationBar />
		<Hero /> 
		<section className="cards-list">
    {dataItems}
</section>	</>
); 
}; 

export default HomePage;
