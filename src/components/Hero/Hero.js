import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-img"></div>
      <div className="hero-demo">
        <div className="hero-demo-child">
          <p className="hero-demo-child-para1">
            Business travel, designed for you
          </p>
          <p className="hero-demo-child-para2">
            With you wherever you need to be
          </p>
          <p className="hero-demo-child-para3">
            When it comes to planning business travel, every company and
            traveler is different. Whatever you need, and wherever you are, we
            have the expertise and corporate travel management solutions to
            support you.
          </p>
          <div className="hero-demo-child-input">
            <input
              type="text"
              className="hero-demo-child-input-box"
              placeholder="Have questions?"
            />
            <button type="button" className="btn btn-primary button-hero">
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
