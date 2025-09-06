import React from "react";
import "../styles/Hero.css";
import DataMountains from "../assets/DataMountains.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="col-1" />

        {/* Left Text */}
        <div className="col-2to11 hero-text">
          <h1 className="">You have Data Mountains</h1>
          <h1 className="">We provide Big Data Solutions</h1>
        </div>

        <div className="col-12" />
      </div>
    </section>
  );
}

export default Hero;
