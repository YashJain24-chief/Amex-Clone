import React from "react";
import { FaSearch } from "react-icons/fa";
import unitedStates from "../images/united-states.svg";

function TopNav() {
  return (
    <>
      <div className="top-nav">
        <div className="top-nav-options">CAREERS</div>
        <div className="top-nav-options">
          CHANGE REGION
          <img className="top-nav-img" src={unitedStates} alt="" />
        </div>
        <div className="top-nav-options">
          SEARCH
          <FaSearch className="top-nav-search" />
        </div>
      </div>
    </>
  );
}

export default TopNav;
