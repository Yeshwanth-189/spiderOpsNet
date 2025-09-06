// src/components/ProjectsSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/projects.css";
import agriculture from "../assets/agriculture.jpg";
import power from "../assets/power.png";

const slide = (dir = "left") => ({
  hidden: { opacity: 0, x: dir === "left" ? -60 : 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
});

const projects = [
  {
    id: 1,
    title: "AgriSense AI",
    subtitle: "Deep‑learning for crop health & insights",
    objective:
      "Deep-learning application for crop health, recommendations, weather forecasting, and farmer support.",
    bullets: [
      "VGG16‑based disease detection (93% accuracy)",
      "Regression for crop choice & price trends",
      "12‑day weather forecasts",
    ],
    stack: "Python, TensorFlow, OpenCV, scikit‑learn, Azure & Google APIs",
    image: agriculture,
  },
  {
    id: 2,
    title: "GridVision",
    subtitle: "SCADA analytics for 200+ substations",
    objective:
      "Processes SCADA measurement data for 200+ substations to detect anomalies, surface peak loads, and predict future load using one year of historical data.",
    bullets: [
      "24‑hour prediction vs previous 24‑hour comparison",
      "Anomaly detection on live feeds",
      "Operational dashboards for planners",
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
          Projects
        </motion.h2>

        <div className="projects-list">
          {projects.map((p, idx) => {
            const direction = idx % 2 === 0 ? "left" : "right";
            return (
              <motion.article
                key={p.id}
                className={`project-row ${idx % 2 !== 0 ? "reverse" : ""}`}
                variants={slide(direction)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <figure className="project-media">
                  <div className="media-frame">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                    />
                  </div>
                </figure>

                <div className="project-body">
                  <div className="card">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-kicker">{p.subtitle}</p>

                    <p className="project-objective">{p.objective}</p>

                    <ul className="project-points">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    <div className="project-meta">
                      <span className="label">Stack</span>
                      <span className="value">{p.stack}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
