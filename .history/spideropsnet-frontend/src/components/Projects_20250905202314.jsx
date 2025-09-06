// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

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
    image: "/assets/projects/agri-crop.jpg",
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
    image: "/assets/projects/scada-grid.jpg",
  },
  {
    id: 3,
    title: "Power Spider",
    subtitle: "Big Data for the Power Industry",
    objective:
      "Collects and analyzes sensor & smart‑meter data to improve efficiency, grid reliability, resource allocation, compliance, and customer experience with ML & predictive analytics.",
    bullets: [
      "Streaming ingestion & feature stores",
      "Predictive maintenance & outage forecasting",
      "Customer usage modeling & segmentation",
    ],
    stack: "Spark, Kafka, Flink, MLflow, Kubernetes, React",
    image: "/assets/projects/power-spider.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" aria-label="Projects">
      <div className="container">
        <motion.header
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Selected Work</p>
          <h2 className="title">Projects</h2>
          <p className="subtitle">
            Modern, data‑driven solutions with clean UX and performant
            engineering.
          </p>
        </motion.header>

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
