// src/components/BlogIndex.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./../styles/Blogs.css";

const CATEGORIES = [
  {
    id: "big-data",
    title: "Big Data",
    blurb: "Foundations, value, and how to get started.",
    links: [
      { text: "What is Big Data?", href: "/blogs/big-data/what-is-big-data" },
      { text: "Why and When Big Data?", href: "/blogs/big-data/why-and-when" },
      {
        text: "How to start on Big Data?",
        href: "/blogs/big-data/how-to-start",
      },
    ],
  },
  {
    id: "apache-hadoop",
    title: "Apache Hadoop",
    blurb: "HDFS, MapReduce, and ecosystem integrations.",
    links: [
      { text: "Introduction to Apache Hadoop", href: "/blogs/hadoop/intro" },
      { text: "Store Big Data with HDFS", href: "/blogs/hadoop/hdfs" },
      {
        text: "Process Big Data with MapReduce",
        href: "/blogs/hadoop/mapreduce",
      },
      {
        text: "Hadoop interface to distributed R",
        href: "/blogs/hadoop/r-integration",
      },
    ],
  },
  {
    id: "sap-hana",
    title: "SAP HANA",
    blurb: "In-memory analytics and predictive workflows.",
    links: [
      { text: "Introduction to SAP HANA", href: "/blogs/sap-hana/intro" },
      { text: "Prediction using SAP HANA", href: "/blogs/sap-hana/prediction" },
      {
        text: "Data analysis using SAP HANA",
        href: "/blogs/sap-hana/analysis",
      },
    ],
  },
  {
    id: "bigdata-analysis",
    title: "Bigdata Analysis",
    blurb: "Applied forecasting and finance-oriented use cases.",
    links: [
      {
        text: "Forecasting based on data",
        href: "/blogs/analysis/forecasting",
      },
      {
        text: "Bigdata about hedge funding",
        href: "/blogs/analysis/hedge-funds",
      },
      {
        text: "Short term load forecasting",
        href: "/blogs/analysis/load-forecasting",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

export default function Blogs() {
  return (
    <section
      className="blog-index section-shell"
      aria-labelledby="blog-index-title"
    >
      <header className="blog-index__header">
        <motion.h1
          id="blog-index-title"
          className="blog-index__title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Blog Library
        </motion.h1>
        <p className="blog-index__subtitle">
          Explore by category. Each link opens a dedicated article page.
        </p>
      </header>

      <div className="blog-index__grid">
        {CATEGORIES.map((cat) => (
          <motion.article
            key={cat.id}
            className="category-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
          >
            <div className="category-card__header">
              <div className="category-card__icon" aria-hidden="true">
                🗂️
              </div>
              <div>
                <h2 className="category-card__title">{cat.title}</h2>
                <p className="category-card__blurb">{cat.blurb}</p>
              </div>
            </div>

            <nav
              className="category-card__links"
              aria-label={`${cat.title} links`}
            >
              <ul>
                {cat.links.map((l, i) => (
                  <li key={i} className="link-row">
                    <a className="link-row__anchor" href={l.href}>
                      <span className="link-row__dot" aria-hidden="true" />
                      <span className="link-row__text">{l.text}</span>
                      <span className="link-row__chev" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
