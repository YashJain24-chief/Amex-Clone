import React from "react";
import twitterSvg from "../../images/twitter-svg.svg";
import linkedInSvg from "../../images/linkedIn-svg.svg";
import instagramSvg from "../../images/instagram-svg.svg";
import footer from "../../images/footer.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-child">
          <div className="footer-conatiner-child-1">
            <div className="foooter-container-child-titile">Explore</div>
            <div className="footer-container-child-items">
              <li className="footer-li">Business Travel Solutions</li>
              <li className="footer-li">Simplified Travel Management</li>
              <li className="footer-li">Travel and Expense</li>
              <li className="footer-li">Energy, Marine, Mining</li>
              <li className="footer-li">Meetings & Events</li>
              <li className="footer-li">Consulting Services</li>
            </div>
          </div>

          <div className="footer-conatiner-child-1">
            <div className="foooter-container-child-titile">Explore</div>
            <div className="footer-container-child-items">
              <li className="footer-li">Business Travel Solutions</li>
              <li className="footer-li">Simplified Travel Management</li>
              <li className="footer-li">Travel and Expense</li>
              <li className="footer-li">Energy, Marine, Mining</li>
              <li className="footer-li">Meetings & Events</li>
              <li className="footer-li">Consulting Services</li>
            </div>
          </div>

          <div className="footer-conatiner-child-1">
            <div className="foooter-container-child-titile">Explore</div>
            <div className="footer-container-child-items">
              <li className="footer-li">Business Travel Solutions</li>
              <li className="footer-li">Simplified Travel Management</li>
              <li className="footer-li">Travel and Expense</li>
              <li className="footer-li">Energy, Marine, Mining</li>
              <li className="footer-li">Meetings & Events</li>
              <li className="footer-li">Meetings & Events</li>
              <li className="footer-li">Meetings & Events</li>
              <li className="footer-li">Consulting Services</li>
              <li className="footer-li">Consulting Services</li>
            </div>
          </div>

          <div className="footer-conatiner-child-1">
            <div className="foooter-container-child-titile">Explore</div>
            <div className="footer-container-child-items">
              <a className="footer-li">Business Travel Solutions</a>
              <li className="footer-li">Simplified Travel Management</li>
              <li className="footer-li">Travel and Expense</li>
              <li className="footer-li">Travel and Expense</li>
              <li className="footer-li">Travel and Expense</li>
              <li className="footer-li">Energy, Marine, Mining</li>
              <li className="footer-li">Meetings & Events</li>
              <li className="footer-li">Consulting Services</li>
              <li className="footer-li">Consulting Services</li>
              <li className="footer-li">Consulting Services</li>
            </div>
          </div>
          <div className="footer-images">
            <img className="footer-img" src={twitterSvg} alt="" />
            <img className="footer-img" src={linkedInSvg} alt="" />
            <img className="footer-img" src={instagramSvg} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img className="footer-final-image" src={footer} alt="" srcset="" />
      </div>
    </>
  );
}

export default Footer;
