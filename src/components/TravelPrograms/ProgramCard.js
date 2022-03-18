import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ProgramCard(props) {
  return (
    <div className="travel--program-card">
      <div className="travel--program-card-content">
        <img
          src="https://www.amexglobalbusinesstravel.com/content/themes/amexgbt/images/2020-icons/icon-check-circle.svg"
          alt="tick"
          className="travel-img"
        />
        <h3 className="travel--program-card-title">{props.title}</h3>
        <p className="travel--program-card-description">{props.description}</p>
      </div>
      {props.moreInfo.length > 0 && (
        <span className="travel--program-card-more">
          {props.moreInfo}
          <IoIosArrowForward className="travel--arrow" />
        </span>
      )}
    </div>
  );
}
