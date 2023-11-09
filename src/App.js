import React from "react"
import ColorSchemesExample from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { BrowserRouter, Routes, Route } from "react-router-dom";
 */import Formpage from "./pages/Formpage"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";



export default function App() {
        const dataItems = data.map(item =>{
            return <Card
                key={item.id}
                item={item}
            />
            })
        return(
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                 <Route path="formpage" element={<Formpage />} />
                <Route path="AboutUs" element={<AboutUs />} /> 
                <Route path="*" element={<NoPage />} />
        </Route>
            </Routes>
          </BrowserRouter>
    )
}

/* {/* <div>
<ColorSchemesExample />
<Hero />
<section className="cards-list">
    {dataItems}
</section>
</div> */