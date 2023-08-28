import React from "react";
import "./HeroStyle.css";
import pic from "../asests/design.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="img" src={pic} alt="oops !" />
        <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
