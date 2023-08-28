import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

function Demo() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/project" element={<Project />}>
            Project
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Home
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Demo;
