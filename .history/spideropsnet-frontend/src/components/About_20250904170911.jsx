import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/About.css";
import Mission from "../assets/mission.png";
import Passion from "../assets/passion.png";
import Commitment from "../assets/commitment.png";
import Learning from "../assets/learning.png";
import Trust from "../assets/trust.png";
import Progress from "../assets/progress.png";
import Contribution from "../assets/contribution.png";

const aboutItems = [
  {
    title: "Our Mission",
    img: Mission,
    text: "Using technology to find efficient solutions to problems faced regularly by various industries.",
  },
  {
    title: "Passion",
    img: Passion,
    text: "We are passionate about our work and take pride in our solutions.",
  },
  {
    title: "Commitment",
    img: Commitment,
    text: "We are committed to our solutions and use our experience to make sure they work.",
  },
  {
    title: "Learning",
    img: Learning,
    text: "We believe in continuous learning and ensure our employees undergo regular trainings to keep up with technology and emerging trends.",
  },
  {
    title: "Trust",
    img: Trust,
    text: "We value mutual trust. We work hard to earn our customer's trust and want to keep it for years to come.",
  },
  {
    title: "Progress",
    img: Progress,
    text: "Change is inevitable. We strive for progress so customers, employees, and stakeholders feel good about the change.",
  },
  {
    title: "Contribution",
    img: Contribution,
    text: "We value positive contribution to society and ensure the community we live in benefits from us.",
  },
  {
    title: "Excellence",
    img: Contribution,
    text: "We hold ourselves to the highest standards to ensure quality and reliability in every solution.",
  },
];

// Variants for parent container and children
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15, // cards animate one after another
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutUs() {
  return (
    <section className="about-wrap">
      <div className="about-grid">
        <div className="gutter-left" aria-hidden="true" />

        {/* Animate the whole content */}
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Intro */}
          <motion.header className="about-intro" variants={childVariants}>
            <h1 className="about-title">Who We Are</h1>
            <h2 className="about-subtitle">Spider OpsNet</h2>
            <p className="about-paragraph">
              Spider OpsNet is engaged in building technology solutions for
              various industries to solve recurring problems and find new
              avenues for revenue. We help organizations achieve operational
              efficiency using our innovative solutions and services.
            </p>
            <p className="about-paragraph">
              Our team consists of dedicated engineers, testers, developers, and
              analysts with a collective experience of 20+ years, providing
              technology solutions for any industry type.
            </p>
          </motion.header>

          {/* Cards */}
          <motion.div className="cards-grid" variants={containerVariants}>
            {aboutItems.map((item) => (
              <motion.article
                className="card"
                key={item.title}
                variants={childVariants}
              >
                <div className="card-img-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <div className="gutter-right" aria-hidden="true" />
      </div>
    </section>
  );
}
