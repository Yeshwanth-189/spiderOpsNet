import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import SpiderOpsNet from "../assets/SpiderOpsNet.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-grid">
        <div className="col-1" />

        <div className="col-2to11 navbar-content">
          <div className="navbar-logo">
            <img
              alt="logo"
              className="navbar-logo-image"
              src={SpiderOpsNet}
            ></img>
            <h2>
              <span className="primary"></span>Spider
              <span className="secondary">OpsNet</span>
            </h2>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              <span className={isOpen ? "bar rotate-top" : "bar"}></span>
              <span className={isOpen ? "bar fade" : "bar"}></span>
              <span className={isOpen ? "bar rotate-bottom" : "bar"}></span>
            </div>
          </div>

          {/* Links */}
          <div className={`navbar-links ${isOpen ? "open" : ""}`}>
            <Link to="/overview" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/Profession" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/education" onClick={() => setIsOpen(false)}>
              Education
            </Link>
            <Link to="/achievements" onClick={() => setIsOpen(false)}>
              Achievements
            </Link>
          </div>
        </div>

        <div className="col-12" />
      </div>
    </nav>
  );
}

export default Navbar;
