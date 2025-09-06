// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

/**
 * ProjectsSection
 * 12-column grid with gutters on columns 1 and 12.
 * Columns 2-6: project image; Columns 6-11: project description.
 * Three projects with alternating slide-in directions (L→R, R→L, L→R).
 */

const slide = (dir = "left") => ({
  hidden: { opacity: 0, x: dir === "left" ? -60 : 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
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
            Modern, data‑driven solutions with clean UX and performant engineering.
          </p>
        </motion.header>

        <div className="grid-12">
          {projects.map((p, idx) => {
            const direction = idx % 2 === 0 ? "left" : "right"; // 1: left→right, 2: right→left, 3: left→right
            return (
              <article key={p.id} className="project-row">
                {/* Gutter left (column 1) is implicit via grid placement */}

                {/* Image: columns 2-6 */}
                <motion.figure
                  className="project-media"
                  variants={slide(direction)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  style={{ gridColumn: "2 / 7" }}
                >
                  <div className="media-frame">
                    <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
                  </div>
                </motion.figure>

                {/* Description: columns 6-11 */}
                <motion.div
                  className="project-body"
                  variants={slide(direction)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  style={{ gridColumn: "6 / 12" }}
                >
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
                </motion.div>

                {/* Gutter right (column 12) is implicit via grid placement */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======================= CSS (save as src/components/projects.css) ======================= */
:root {
  /* Pulls from your variables.css if present; fallbacks included */
  --brand-dark: var(--color-primary, #0A2540);
  --brand-accent: var(--color-secondary, #1976D2);
  --bg: var(--color-bg, #ffffff);
  --ink: var(--color-ink, #111827);
  --muted: var(--color-muted, #6B7280);
  --surface: var(--color-surface, #F5F7FB);
  --ring: rgba(25, 118, 210, 0.25);
}

.projects-section {
  position: relative;
  padding: clamp(48px, 6vw, 96px) 0;
  background:
    radial-gradient(1200px 600px at 10% -20%, rgba(25,118,210,0.10), transparent 60%),
    radial-gradient(1200px 600px at 90% 120%, rgba(10,37,64,0.08), transparent 60%),
    var(--bg);
  overflow: hidden;
}

.container {
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.projects-header { text-align: center; margin-bottom: clamp(28px, 4vw, 48px); }
.projects-header .eyebrow {
  color: var(--brand-accent);
  font: 600 0.85rem/1.2 "Roboto", system-ui, -apple-system, Segoe UI, Arial;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.projects-header .title {
  font: 700 clamp(28px, 4vw, 40px)/1.1 "Playfair Display", Georgia, serif;
  color: var(--brand-dark);
  margin: 6px 0 10px;
}
.projects-header .subtitle {
  color: var(--muted);
  font: 400 1rem/1.6 "Roboto", system-ui, -apple-system, Segoe UI, Arial;
}

/* 12-column grid with gutters on 1 and 12 */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(8px, 1.2vw, 16px);
}

.project-row {
  position: relative;
  display: contents; /* let children place themselves on the 12-col grid */
}

.project-media {
  grid-row: span 1;
}

.media-frame {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, #fff, #f3f6fb);
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
}

.media-frame::after {
  /* subtle border shimmer */
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(25,118,210,0.15), transparent 30%, rgba(10,37,64,0.1));
  mix-blend-mode: overlay;
}

.media-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover; /* ensure full bleed */
  aspect-ratio: 16 / 10;
  transform: scale(1.02);
  transition: transform 600ms ease;
}

.media-frame:hover img { transform: scale(1.06); }

.project-body { grid-row: span 1; }

.card {
  height: 100%;
  display: grid;
  align-content: start;
  gap: 14px;
  padding: clamp(16px, 2vw, 24px);
  border-radius: 18px;
  background: color-mix(in oklab, var(--surface) 90%, white 10%);
  outline: 1px solid rgba(25, 118, 210, 0.08);
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.06);
}

.project-title {
  font: 700 clamp(20px, 2.6vw, 26px)/1.2 "Playfair Display", Georgia, serif;
  color: var(--brand-dark);
}

.project-kicker {
  font: 600 0.95rem/1.3 "Roboto", system-ui, -apple-system, Segoe UI, Arial;
  color: var(--brand-accent);
}

.project-objective {
  font: 400 1rem/1.7 "Roboto", system-ui, -apple-system, Segoe UI, Arial;
  color: var(--ink);
}

.project-points {
  margin: 2px 0 6px 0;
  padding-left: 1.1rem;
  color: var(--ink);
}
.project-points li { margin: 4px 0; }

.project-meta { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; }
.project-meta .label {
  font: 700 0.8rem/1 "Roboto";
  color: var(--brand-dark);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.project-meta .value { font: 400 0.95rem/1.4 "Roboto"; color: var(--muted); }

/* Responsive behavior */
@media (max-width: 1024px) {
  /* keep 12 columns but tighten spacing */
}

@media (max-width: 880px) {
  /* switch to 4-column grid (like your mobile system) */
  .grid-12 { grid-template-columns: repeat(4, 1fr); }

  /* gutters collapse; make image span full width then text */
  .project-media { grid-column: 1 / 5 !important; }
  .project-body { grid-column: 1 / 5 !important; }

  .media-frame img { aspect-ratio: 16 / 9; }
}

/* Focus ring for a11y */
.media-frame:focus-within,
.card:focus-within { box-shadow: 0 0 0 6px var(--ring); }
