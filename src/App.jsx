import React from "react";
import Nav from "./components/Navigation/Nav";
import Home from "./sections/home/Home";
import Footer from "./components/Footer/Footer";
import About from "./sections/about/About";

export default function App() {
  return (
    <div style={{width: '100%'}}>
    <Nav />
    <Home />
    <About />
    <Footer />
    </div>
  )
}