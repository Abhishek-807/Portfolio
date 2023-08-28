import React from "react";
import "./AboutStyle.css";
import { Link } from "react-router-dom";
import react1 from "../asests/react1.svg";
import react2 from "../asests/react2.jpeg";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
          Im a React front-end developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="grow" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="fall" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
