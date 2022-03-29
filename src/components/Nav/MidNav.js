import React from "react";
import Dropdown from "./Dropdown";

function MidNav() {
  return (
    <div className="nav-mid">
      <img
        src="https://www.amexglobalbusinesstravel.com/content/themes/amexgbt/images/2019-Logo-Stacked-Blue.svg"
        alt="Amex Global Business Travel"
        className="nav--mid-logo"
      />
      {/* mid options */}
      <div className="nav-mid-parent">
        <Dropdown
          dataTestid="dropdown"
          title="TRAVEL MANAGEMENT"
          listElements={[
            "BUSINESS TRAVEL SOLUTIONS",
            "SIMPLIFIED TRAVEL MANAGEMENT",
            "BUSINESS CONSULTING SERVICES",
          ]}
        />
        <Dropdown
          dataTestid="dropdown"
          title="MEETINGS & EVENTS"
          listElements={[
            "BUSINESS TRAVEL SOLUTIONS",
            "SIMPLIFIED TRAVEL MANAGEMENT",
            "BUSINESS CONSULTING SERVICES",
            "BUSINESS CONSULTING SERVICES",
          ]}
        />
        <Dropdown
          title="ABOUT US"
          listElements={[
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "SIMPLIFIED TRAVEL MANAGEMENT",
            "SIMPLIFIED TRAVEL MANAGEMENT",
            "BUSINESS CONSULTING SERVICES",
          ]}
        />
        <Dropdown
          title="RESOURCES"
          listElements={[
            "BUSINESS TRAVEL SOLUTIONS",
            "SIMPLIFIED TRAVEL MANAGEMENT",
            "BUSINESS CONSULTING SERVICES",
            "BUSINESS CONSULTING SERVICES",
            "BUSINESS CONSULTING SERVICES",
            "BUSINESS CONSULTING SERVICES",
            "BUSINESS CONSULTING SERVICES",
          ]}
        />
        <Dropdown
          title="GET TRAVEL READY"
          listElements={[
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "BUSINESS TRAVEL SOLUTIONS",
            "SIMPLIFIED TRAVEL MANAGEMENT",
            "BUSINESS CONSULTING SERVICES",
          ]}
        />
        <button type="button" className="btn btn-primary">
          CONTACT
        </button>
      </div>
    </div>
  );
}

export default MidNav;
