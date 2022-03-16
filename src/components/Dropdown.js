import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Dropdown(props) {
  let listElements = props.listElements.map((element) => (
    <li className="nav-mid-dropdown-list">{element}</li>
  ));

  return (
    <div className="nav-mid-options">
      {props.title}
      <IoIosArrowDown className="nav-mid-option-arrow" />
      <div className="nav-mid-dropdown square">{listElements}</div>
    </div>
  );
}

export default Dropdown;
