import Link from "next/link"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavigationBar from "./NavigationBar"

const Contact = () => {
  return (
    <>
		<NavigationBar />
    <div class="content">
						<header class="major">
							<h2>Who I am</h2>
						</header>
            <div className="aboutMePara">
						<p >My name is Mary. Two things I love baking and sweets. I began baking as a way to reduce the amount of processed ingredients I eat. This turned into me baking my own breads and muffins. Once i realized I'm actually pretty good (Family approval!) I said "Hey why don't I share my wonderfully delicously oh so healthy sweets with everyone". That is what you see here today. A family baking bussines with the principle of everyhing vegan and delicious! </p>
            </div>
					</div>
    </>
  )
};

export default Contact;
