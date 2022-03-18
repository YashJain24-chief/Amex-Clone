import React from "react";
import play from "../../images/play-button.svg";

function Video() {
  return (
    <div className="video-parent">
      <img
        className="video-img"
        src="https://www.amexglobalbusinesstravel.com/content/uploads/2021/09/image-video-min.png"
        alt=""
      />
      <div className="video-details">
        <img className="play-button" src={play} alt="" />
        <p className="video-para1">Putting people in front of people</p>
        <p className="video-para2">Back to Blue Skies</p>
      </div>
    </div>
  );
}

export default Video;
