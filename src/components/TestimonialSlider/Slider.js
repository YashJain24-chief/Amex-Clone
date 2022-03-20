import React from "react";
import { Carousel } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Slider() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="slider-height"
      nextIcon={<IoIosArrowForward className="bottom--arrow-slider" />}
      prevIcon={<IoIosArrowBack className="bottom--arrow-slider1" />}
    >
      <Carousel.Item>
        <div className="slide-1">
          <p className="para-padding">
            Out of all our TMCs you have been the only one proactively sending
            in pre-trip reporting which enabled us to decide on the next steps.
          </p>
          <p>
            <strong>Travel Manager</strong> Pharmaceutical Company
          </p>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-1">
          <p className="para-padding">
            I have no doubt that with the resilience plans we have in place and
            the commitment of your team, we will bridge any obstacles that may
            come our way.
          </p>
          <p>
            <strong>Travel Director </strong> Middle East consulting firm
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
