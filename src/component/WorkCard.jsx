import React from "react";
import "./WorkCardStyle.css";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="oops !" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            VIEW
          </NavLink>
          <NavLink to={props.source} className="btn">
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
