import React from "react";
import ProgramCard from "./ProgramCard";
import TravelProgramData from "./TravelProgramData";

export default function TravelProgram() {
  const ProgramCardAll = TravelProgramData.map((element, index) => (
    <ProgramCard key={index} {...element} />
  ));
  return (
    <div className="travel-container">
      <div className="travel--program-container">
        <h3 className="travel--program-blue-ski">Back to Blue Skies</h3>
        <div className="travel--program-main">
          <div className="travel--program-main-title">
            Restart your traveling with confidence
          </div>
          {/* <div className="travel-hr"></div> */}
          <div className="travel--program-main-description">
            Getting the trip off the ground is easier when you have tools that
            prioritize the well-being of travelers, simplify complexities, and
            deliver peace of mind.
          </div>
        </div>

        <div className="travel--program-card-container">{ProgramCardAll}</div>
      </div>
    </div>
  );
}
