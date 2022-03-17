import React from "react";
import Title from "./Title";
import Features from "./Features";

function About() {
  return (
    <div className="about-container-parent">
      <div className="about-container">
        <Title />
        <Features />
      </div>
    </div>
  );
}

export default About;
