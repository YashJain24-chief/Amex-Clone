import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Video from "./components/Video/Video";
import TravelProgram from "./components/TravelPrograms/TravelProgram";

import "./App.css";
import "./css/Nav.css";
import "./css/Hero.css";
import "./css/About.css";
import "./css/Video.css";
import "./css/TravelPrograms.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Video />
      <TravelProgram />
    </>
  );
}

export default App;
