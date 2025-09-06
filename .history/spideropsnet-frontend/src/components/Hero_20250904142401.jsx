import React from "react";
import "../styles/Hero.css";
import DataMountains from "../assets/DataMountains.png";

function Hero() {
  return (
    <div className="hero-grid">
      <div className="col-1" />
      {/* Left Text */}
      <div className="col-2to8 hero-text">
        <h1 className="">You have Data Mountains?</h1>
        <h1 className="">We provide Big Data Solutions!</h1>
        <img src={DataMountains} alt="Mountain of Data" />
      </div>
      <div className="col-12" />
    </div>
  );
}

export default Hero;
