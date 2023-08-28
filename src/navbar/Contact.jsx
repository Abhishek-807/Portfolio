import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero1 from "../component/Hero1";
import Form from "../component/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero1 heading="CONTACTS." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
