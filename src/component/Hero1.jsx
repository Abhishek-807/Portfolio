import React from "react";
import "./Hero1Style.css";

function Hero1(props) {
  return (
    <div className="hero1">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Hero1;
