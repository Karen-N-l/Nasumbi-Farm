import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
