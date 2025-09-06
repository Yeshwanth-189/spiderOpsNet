import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
// import Experience from "../components/Experience";
// import Communications from "../components/Communications";
import "../styles/SpiderOpsNet.css";

function SpiderOpsNet() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      {/* <Experience />
      <Communications /> */}
    </>
  );
}

export default SpiderOpsNet;
