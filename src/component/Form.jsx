import React from "react";
import "./FormStyle.css";

const Form = () => {
  return (
    <div classname="form">
      <form classname="form1" style={{ marginLeft: "32rem" }}>
        <label>Your Name</label>
        <input type="text"></input>
        <label>E-mail</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here " />
        <br />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
