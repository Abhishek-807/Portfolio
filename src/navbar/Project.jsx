import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero1 from "../component/Hero1";
import PricingCard from "../component/PricingCard";
import Work from "../component/Work";

function Project() {
  return (
    <div>
      <Navbar />
      <Hero1 heading="PROJECTS." text="Some of my most recent works." />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
}

export default Project;
