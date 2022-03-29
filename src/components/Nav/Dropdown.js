import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Dropdown(props) {
  let listElements = props.listElements.map((element, index) => (
    <li className="nav-mid-dropdown-list" key={index}>
      {element}
    </li>
  ));

  return (
    <div data-testid={props.dataTestid} className="nav-mid-options">
      {props.title}
      <IoIosArrowDown className="nav-mid-option-arrow" />
      <div
        data-testid="sqaure-class-testing"
        className="nav-mid-dropdown square"
      >
        {listElements}
      </div>
    </div>
  );
}

export default Dropdown;
