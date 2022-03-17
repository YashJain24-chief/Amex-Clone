import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function FeatureCard(props) {
  return (
    <div className="feature-card-div">
      <img className="feature-card-img" src={props.img} alt="" />
      <p className="feature-card-div-para1">{props.title}</p>
      <p className="feature-card-div-para2">{props.subtitle}</p>
      <button type="button" className="btn btn-primary learn-more">
        <div className="button-details">
          <p className="button-details-para">Learn More</p>
          <AiOutlineArrowRight className="right-arrow-button" />
        </div>
      </button>
    </div>
  );
}

export default FeatureCard;
