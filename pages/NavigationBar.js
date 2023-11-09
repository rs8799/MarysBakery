import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link"; 


export default function NavigationBar() {
    return (
      <>
      <Navbar bg="light" data-bs-theme="light">
			<ul>
				<li><img className="logo" src="/Marysbakinglogoremovebg.png"/></li>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/Formpage">Order Form</Link></li>
				<li><Link href="/AboutUs">About Me</Link> </li>
			</ul>
  	</Navbar>
    </>
  )
}

      /*   <nav>
            <div class="container">
            
            <img src={Logo} className="nav--logo"/>
           
            </div>
            <a className="orderButton">
            <button >Order form</button>
            </a>

        </nav>
    )
} */