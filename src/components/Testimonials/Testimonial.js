import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "../TestimonialSlider/Slider";
import "../../css/Slider.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Testimonial() {
  return (
    <div className="testimonial-parent">
      <div className="testimonial-container">
        <div className="testimonials-inside-container">
          <p className="testimonials-para-1">Client Testimonials</p>
          <div className="testimonials-div-flex">
            <p className="tesimonials-div-flex-para1">
              We're proud to help businesses of all sizes to improve their
              travel experiences and overall traveler satisfaction.
            </p>
            <div className="testimonials-div-flex-2">
              <p className="tesimonials-div-flex-para2">
                See all success stories
              </p>
              <IoIosArrowForward className="bottom--arrow white-arrow" />
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Testimonial;
