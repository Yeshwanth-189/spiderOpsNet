import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Company Info */}
        <div className="footer-section company-info">
          <h3>Spider OpsNet</h3>
          <p>
            #981, 3rd Floor, Ideal Homes, Rajarajeswari Nagar <br />
            Bangalore - 560 098, INDIA
          </p>
          <p>Email: contact@spideropsnet.com</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div className="footer-section social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://udemy.com" target="_blank" rel="noreferrer">
              <SiUdemy />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Spider OpsNet. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
