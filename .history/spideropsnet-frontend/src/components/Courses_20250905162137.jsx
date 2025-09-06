// src/components/CoursesSection.jsx
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import "./CoursesSection.css";

const disallowedDomains = [];

function isWorkEmail(email) {
  if (!email) return false;
  const parts = email.toLowerCase().split("@");
  if (parts.length !== 2) return false;
  const domain = parts[1].trim();
  return domain && !disallowedDomains.includes(domain);
}

export default function Courses() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    companySize: "",
    email: "",
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailValid = isWorkEmail(form.email);
  const nameValid = form.name.trim().length > 1;
  const companyValid = form.company.trim().length > 1;
  const formValid = nameValid && companyValid && emailValid;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, company: true, email: true });
    if (!formValid) return;
    // You can swap this with your API call
    console.log("Submit payload:", form);
    setSubmitted(true);
    setForm({ name: "", company: "", companySize: "", email: "" });
    setTouched({});
  };

  return (
    <section className="courses-wrap">
      {/* Top: Free Download Split 2-11 */}
      <div className="grid12 roi-download">
        {/* Left info column (spans col 2-6 on desktop, full on mobile) */}
        <div className="col col-left">
          <p className="eyebrow">
            Free Download: Gen-AI ROI Calculator + Prompt Engineering PDF
          </p>
          <h2 className="roi-title">
            You have AI Ambitions… <br />
            <span className="accent">We help you prove ROI.</span>
          </h2>

          <p className="roi-desc">
            Quantify value before you build. Get CFO-ready numbers for payback
            and annual ROI, plus a concise prompt guide for IT leaders.
          </p>
          <ul className="roi-bullets">
            <li>Payback &amp; Annual ROI auto-calculated</li>
            <li>Scenario comparison for prioritization</li>
            <li>Read-me guidance and validation included</li>
          </ul>
          <p className="fine-print">
            We’ll email you the files after verification (double opt-in).
            Unsubscribe anytime.
          </p>
        </div>

        {/* Right form column (spans col 7-11 on desktop, full on mobile) */}
        <div className="col col-right">
          <form className="download-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={touched.name && !nameValid}
              />
              {touched.name && !nameValid && (
                <span className="field-error">
                  Please enter your full name.
                </span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="company">Company*</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Spider OpsNet"
                value={form.company}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={touched.company && !companyValid}
              />
              {touched.company && !companyValid && (
                <span className="field-error">
                  Please enter your company name.
                </span>
              )}
            </div>

            {/* Optional company option field (dropdown). Remove if you need only 3 fields */}
            <div className="form-row">
              <label htmlFor="companySize">Company Size (optional)</label>
              <select
                id="companySize"
                name="companySize"
                value={form.companySize}
                onChange={onChange}
              >
                <option value="">Select...</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="201-1000">201–1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="email">Work Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={touched.email && !emailValid}
              />
              {touched.email && !emailValid && (
                <span className="field-error">
                  Please use your work email (no personal domains).
                </span>
              )}
            </div>

            <button
              className="btn-download"
              type="submit"
              disabled={!formValid}
            >
              <FiDownload aria-hidden="true" />
              <span>Download</span>
            </button>

            {/* Success message */}
            <div className="form-success" aria-live="polite">
              {submitted &&
                "Thanks! Please check your inbox to confirm (double opt-in)."}
            </div>
          </form>
        </div>
      </div>

      {/* Bottom: Courses grid (spans cols 2-11) */}
      <CoursesCatalog />
    </section>
  );
}

function CoursesCatalog() {
  const courses = [
    {
      id: 1,
      img: "/assets/courses/genai-strategy.jpg",
      title: "Gen-AI Strategy for IT & Business Leaders",
      desc: "Turn AI ambition into measurable outcomes. Define use-cases, ROI, and an adoption roadmap.",
      link: "https://www.udemy.com/",
    },
    {
      id: 2,
      img: "/assets/courses/prompt-engineering.jpg",
      title: "Prompt Engineering for Teams",
      desc: "Reusable patterns, safety guards, and collaboration workflows that scale beyond the POC.",
      link: "https://www.udemy.com/",
    },
    {
      id: 3,
      img: "/assets/courses/rag-production.jpg",
      title: "RAG & AI Agents in Production",
      desc: "From retrieval to orchestration. Latency, evals, cost control, and monitoring in the real world.",
      link: "https://www.udemy.com/",
    },
  ];

  return (
    <div className="grid12 courses-grid">
      <div className="courses-head col-2-11">
        <h3>Recommended Courses for Managers &amp; Leaders</h3>
        <p className="subhead">
          Continue your learning with these in-depth courses (also available on
          Udemy Business):
        </p>
      </div>

      <div className="courses-cards col-2-11">
        {courses.map((c) => (
          <article key={c.id} className="course-card">
            <div className="course-media">
              <img src={c.img} alt={c.title} loading="lazy" />
            </div>
            <div className="course-body">
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
            <div className="course-actions">
              <a
                className="btn-outline"
                href={c.link}
                target="_blank"
                rel="noreferrer"
              >
                View on Udemy
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
