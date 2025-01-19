import React from "react";
import Nav from "./components/Navigation/Nav";
import Home from "./sections/home/Home";
import Footer from "./components/Footer/Footer";
import About from "./sections/about/About";
import RealEstate from "./sections/real-estate/RealEstate";
import Property from "./sections/property-management/Property";

export default function App() {
  return (
    <div style={{width: '100%'}}>
    <Nav />
    <Home />
    <About />
    <RealEstate />
    <Property />
    <Footer />
    </div>
  )
}