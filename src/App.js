import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

import "./App.css";
import "./css/Nav.css";
import "./css/Hero.css";
import "./css/About.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
    </>
  );
}

export default App;
