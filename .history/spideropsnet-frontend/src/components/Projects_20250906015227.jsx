import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiActivity,
  FiTrendingUp,
  FiCloud,
  FiCpu,
  FiZap,
  FiBarChart2,
} from "react-icons/fi";
import "../styles/projects.css";
import agriculture from "../assets/agriculture.jpg";
import power from "../assets/power.png";

// Small reusable card so all projects share the SAME component + layout
function ProjectCard({ project, reverse = false, animateFrom = "left" }) {
  return (
    <motion.article
      className={`project-card ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, x: animateFrom === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
    >
      {/* Media half */}
      <figure className="card-media">
        <div className="media-frame">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        </div>
      </figure>

      {/* Info half */}
      <div className="card-info">
        <div className="info-inner">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-kicker">{project.subtitle}</p>
          <p className="project-objective">{project.objective}</p>

          <div className="feature-grid">
            {project.features.map((f, i) => (
              <div className="feature" key={i}>
                <span className="feature-icon" aria-hidden>
                  <f.icon />
                </span>
                <div className="feature-text">
                  <span className="feature-title">{f.title}</span>
                  {f.desc && <span className="feature-desc">{f.desc}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="project-meta">
            <span className="label">Stack</span>
            <span className="value">{project.stack}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const projects = [
  {
    id: 1,
    title: "AgriSense AI",
    subtitle: "Deep‑learning for crop health & insights",
    objective:
      "Deep‑learning application for crop health, recommendations, weather forecasting, and farmer support.",
    features: [
      {
        icon: FiActivity,
        title: "Disease Detection",
        desc: "VGG16 model — 93% accuracy",
      },
      {
        icon: FiTrendingUp,
        title: "Crop & Price Trends",
        desc: "Data‑driven crop choice",
      },
      {
        icon: FiCloud,
        title: "Weather Forecasts",
        desc: "12‑day outlook & alerts",
      },
    ],
    stack: "Python, TensorFlow, OpenCV, scikit‑learn, Azure & Google APIs",
    image: agriculture,
  },
  {
    id: 2,
    title: "Power Spider",
    subtitle: "Power Transmission Prediction",
    objective:
      "SCADA analytics for 200+ substations: detects anomalies, highlights peak loads, and predicts future load using one year of history.",
    features: [
      {
        icon: FiBarChart2,
        title: "24‑h Predictions",
        desc: "Compare with previous day",
      },
      {
        icon: FiZap,
        title: "Anomaly Detection",
        desc: "Real‑time signal checks",
      },
      {
        icon: FiCpu,
        title: "Operational Dashboards",
        desc: "Planner‑ready insights",
      },
    ],
    stack: "Python, Time‑series ML, FastAPI, React, InfluxDB / TimescaleDB",
    image: power,
  },
];
export default function ProjectsSection() {
  return (
    <section className="projects-section" aria-label="Projects">
      <div className="container">
        <motion.h2
          className="project-heading"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Our Work
        </motion.h2>

        <div className="projects-stack">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              reverse={i % 2 === 1}
              animateFrom={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
