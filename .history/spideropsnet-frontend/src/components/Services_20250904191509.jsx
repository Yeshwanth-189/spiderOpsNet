import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Services.css";

const defaultServices = [
  {
    id: 1,
    title: "Data Engineering",
    text: "Build reliable data pipelines, lakes, and warehouses tailored to your analytics needs.",
    image: "/assets/services/data-engineering.png",
  },
  {
    id: 2,
    title: "AI & ML Solutions",
    text: "Custom models, MLOps, and model monitoring to drive measurable business impact.",
    image: "/assets/services/ai-ml.png",
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    text: "Kubernetes, CI/CD, and cost optimization across AWS, GCP, and Azure.",
    image: "/assets/services/cloud-devops.png",
  },
  {
    id: 4,
    title: "Product Engineering",
    text: "Frontend + backend development with scalable architectures and best practices.",
    image: "/assets/services/product-engineering.png",
  },
  {
    id: 5,
    title: "RAG & AI Agents",
    text: "Retrieval-augmented generation and task-oriented agents integrated into your workflows.",
    image: "/assets/services/rag-agents.png",
  },
  {
    id: 6,
    title: "Analytics & Dashboards",
    text: "Executive dashboards, KPI tracking, and self-serve analytics for teams.",
    image: "/assets/services/analytics.png",
  },
];

export default function Services({ services = defaultServices }) {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      {/* 1st column (hidden gutter) */}
      <div className="gutter" aria-hidden="true" />
      {/* Content spans columns 2–11 */}
      <div className="services-content">
        <motion.h2
          id="services-heading"
          className="services-title"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Services
        </motion.h2>

        {/* Inner 2-column grid of cards (each row has two cards) */}
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.id}>
              <div className="service-media">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <div className="service-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* 12th column (hidden gutter) */}
      <div className="gutter" aria-hidden="true" />
    </section>
  );
}
