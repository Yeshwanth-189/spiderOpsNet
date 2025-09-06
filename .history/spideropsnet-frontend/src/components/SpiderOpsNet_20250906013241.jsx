import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Courses from "../components/Courses";
import Blogs from "../components/Blogs";

import "../styles/SpiderOpsNet.css";

function SpiderOpsNet() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Projects />
      <Blogs />
    </>
  );
}

export default SpiderOpsNet;
