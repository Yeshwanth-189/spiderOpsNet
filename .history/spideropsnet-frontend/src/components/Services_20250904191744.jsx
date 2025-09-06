import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Services.css";

const defaultServices = [
  {
    id: 1,
    title: "Analysis of Data Ecosystem",
    text: "Comprehensive assessment of your current data environment to identify strengths, gaps, and opportunities.",
    image: "/assets/services/data-analysis.png",
  },
  {
    id: 2,
    title: "Planning, Design and Migration to Big Data Technology",
    text: "Strategic planning and execution for migrating legacy systems into scalable Big Data platforms.",
    image: "/assets/services/bigdata-migration.png",
  },
  {
    id: 3,
    title: "Big Data Consultancy",
    text: "Expert advice and roadmaps to leverage Big Data solutions that align with your business goals.",
    image: "/assets/services/bigdata-consultancy.png",
  },
  {
    id: 4,
    title: "Development of Interfaces to Data Analytics",
    text: "Design and implementation of robust interfaces to integrate and visualize analytics effectively.",
    image: "/assets/services/data-interfaces.png",
  },
  {
    id: 5,
    title: "Mobile Interface Development",
    text: "Custom mobile apps and responsive dashboards for accessing analytics and insights on the go.",
    image: "/assets/services/mobile-interface.png",
  },
  {
    id: 6,
    title: "Hadoop Cluster Planning and Implementation",
    text: "End-to-end Hadoop cluster design, deployment, and optimization for large-scale data processing.",
    image: "/assets/services/hadoop-cluster.png",
  },
  {
    id: 7,
    title: "Hadoop Ecosystem Products Support",
    text: "Setup, monitoring, and support for Hadoop ecosystem tools like Hive, Pig, Spark, and HBase.",
    image: "/assets/services/hadoop-support.png",
  },
  {
    id: 8,
    title: "SAP HANA Based Application Development",
    text: "Building high-performance applications powered by SAP HANA for real-time analytics.",
    image: "/assets/services/sap-hana.png",
  },
  {
    id: 9,
    title: "Embedded and Sensor Systems Development",
    text: "Custom solutions for IoT, embedded devices, and sensor-based data collection systems.",
    image: "/assets/services/embedded-systems.png",
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
