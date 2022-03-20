import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Video from "./components/Video/Video";
import TravelProgram from "./components/TravelPrograms/TravelProgram";
import Testimonial from "./components/Testimonials/Testimonial";
import Blog from "./components/Blog/Blog";
import LetsTalk from "./components/Connect/LetsTalk";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./css/Nav.css";
import "./css/Hero.css";
import "./css/About.css";
import "./css/Video.css";
import "./css/TravelPrograms.css";
import "./css/Testimonials.css";
import "./css/Blog.css";
import "./css/LetsTalk.css";
import "./css/Footer.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Video />
      <TravelProgram />
      <Testimonial />
      <Blog />
      <LetsTalk />
      <Footer />
    </>
  );
}

export default App;
