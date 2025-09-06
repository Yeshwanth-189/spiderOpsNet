import React from "react";
import "../styles/Hero.css";
import DataMountains from "../assets/DataMountains2.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="col-1" />

        {/* Left Text */}
        <div className="col-2to8 hero-text">
          <h1 className="">You have Data Mountains</h1>
          <h1 className="">We provide Big Data Solutions</h1>
          {/* Buttons */}
          <div className="hero-buttons">
            <a
              href="https://drive.google.com/file/d/1w9ZI2EL3O_TsEUzOp9yvtGFdbl3tAroY/view?usp=drive_link"
              className="btn resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="https://www.linkedin.com/in/yeshwanth-nanjegowda/"
              className="btn linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-9to12 hero-image-container">
          <img src={DataMountains} alt="Profile" className="profile-img" />
        </div>

        <div className="col-12" />
      </div>
    </section>
  );
}

export default Hero;
