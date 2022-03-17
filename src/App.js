import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";

import "./App.css";
import "./css/Nav.css";
import "./css/Hero.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
