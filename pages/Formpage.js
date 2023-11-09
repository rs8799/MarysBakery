import React from "react"
import Link from "next/link"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "../data"
export default function Formpage(){
  return(<>
	
		<Navbar bg="light" data-bs-theme="light">
			<ul>
				<li><img src="/Marysbakinglogoremovebg.png"/></li>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/Formpage">Form</Link></li>
				<li><Link href="/AboutUs">About Us </Link> </li>
			</ul>
  	</Navbar>
    <section id="footer">
				<div class="container">
					<header class="major">
						<h2>Order Form</h2>
					</header>
					<form method="post" action="#">
						<div class="row gtr-uniform">
							<div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
							<div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
							<div class="col-12"><textarea name="message" id="message" placeholder="Place your order here" rows="4"></textarea></div>
							<div class="col-12">
								<ul class="actions special">
									<li><input type="submit" value="Send Message" class="primary" /></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
        </section>
				</>
  )
}