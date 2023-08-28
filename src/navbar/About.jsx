import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero1 from "../component/Hero1";
import AboutContent from "../component/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <Hero1 heading="ABOUT." text="Im a friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
