// src/components/Courses.jsx
import React, { useState } from "react";
import {
  FiDownload,
  FiCheckCircle,
  FiUser,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import "../styles/Courses.css";
import bigdataformanagers from "../assets/bigdata-for-managers.jpg";
import chatgptformanagers from "../assets/chatgpt-for-managers.png";
import generativeaiformanagers from "../assets/generative-ai-for-managers.jpeg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Calculator from "../assets/Calculator.png";

const disallowedDomains = []; // keep if you’ll filter later

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
    email: "",
    agree: false,
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailValid = isWorkEmail(form.email);
  const nameValid = form.name.trim().length > 1;
  const companyValid = form.company.trim().length > 1;
  const agreeValid = form.agree === true;
  const formValid = nameValid && companyValid && emailValid && agreeValid;

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onBlur = (e) => setTouched((p) => ({ ...p, [e.target.name]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, company: true, email: true, agree: true });
    if (!formValid) return;
    // TODO: hook to API/ESP
    console.log("Submit payload:", form);
    setSubmitted(true);
    setForm({ name: "", company: "", email: "", agree: false });
    setTouched({});
  };

  return (
    <section className="courses-wrap">
      {/* Top: Free Download Split 2-11 */}
      <div className="grid12 roi-download">
        {/* Left info */}
        <div className="col col-left glass-card">
          <div className="kicker">Free toolkit</div>
          <h2 className="roi-title">
            You have AI Ambitions…{" "}
            <span className="accent">We help you prove ROI.</span>
          </h2>
          <p className="roi-desc">
            Get CFO-ready numbers for payback and annual ROI, plus a concise
            prompt guide for IT leaders—before you ship a line of code.
          </p>

          <ul className="chips">
            <li>Auto ROI &amp; payback</li>
            <li>Scenario compare</li>
            <li>Read-me included</li>
          </ul>

          <ul className="roi-bullets">
            <li>
              <FiCheckCircle aria-hidden="true" /> Payback &amp; Annual ROI
              auto-calculated
            </li>
            <li>
              <FiCheckCircle aria-hidden="true" /> Scenario comparison for
              prioritization
            </li>
            <li>
              <FiCheckCircle aria-hidden="true" /> Read-me guidance and
              validation included
            </li>
          </ul>

          <p className="fine-print">
            We’ll email you the files after verification (double opt-in).
            Unsubscribe anytime.
          </p>
        </div>

        {/* Right form */}
        <div className="col col-right glass-card image">
          <motion.div
            className="form-cover"
            initial={{ x: 0, opacity: 1 }}
            whileInView={{ x: "-200%", opacity: 1 }}
            transition={{ duration: 10, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 1, once: true }}
          >
            <img src={Calculator} alt="ROI Calculator" aria-hidden="true" />
          </motion.div>
          <form className="download-form" onSubmit={onSubmit} noValidate>
            <div
              className={`fl-input ${
                touched.name && !nameValid ? "invalid" : ""
              }`}
            >
              <FiUser className="fl-icon" aria-hidden="true" />
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder=" "
                aria-invalid={touched.name && !nameValid}
              />
              <label htmlFor="name">Full name *</label>
              {touched.name && !nameValid && (
                <span className="field-error">Enter your full name.</span>
              )}
            </div>

            <div
              className={`fl-input ${
                touched.company && !companyValid ? "invalid" : ""
              }`}
            >
              <FiBriefcase className="fl-icon" aria-hidden="true" />
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={onChange}
                onBlur={onBlur}
                placeholder=" "
                aria-invalid={touched.company && !companyValid}
              />
              <label htmlFor="company">Company *</label>
              {touched.company && !companyValid && (
                <span className="field-error">Enter your company name.</span>
              )}
            </div>

            <div
              className={`fl-input ${
                touched.email && !emailValid ? "invalid" : ""
              }`}
            >
              <FiMail className="fl-icon" aria-hidden="true" />
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                placeholder=" "
                aria-invalid={touched.email && !emailValid}
              />
              <label htmlFor="email">Work email *</label>
              {touched.email && !emailValid && (
                <span className="field-error">Use a valid work email.</span>
              )}
            </div>

            <div
              className={`check-row ${
                touched.agree && !agreeValid ? "invalid" : ""
              }`}
              role="group"
              aria-labelledby="consentLabel"
            >
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className="checkbox"
                checked={form.agree}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={touched.agree && !agreeValid}
                aria-describedby={
                  !agreeValid && touched.agree ? "agreeErr" : undefined
                }
              />
              <label id="consentLabel" htmlFor="agree">
                {" "}
                I agree to receive the resources and updates.
              </label>
            </div>

            {touched.agree && !agreeValid && (
              <span id="agreeErr" className="field-error">
                You must agree to continue.
              </span>
            )}

            <button
              className="btn-download"
              type="submit"
              disabled={!formValid}
            >
              <span className="btn-bg" aria-hidden="true" />
              <FiDownload aria-hidden="true" />
              <span>Download</span>
              <span className="btn-ripple" aria-hidden="true" />
            </button>

            <div className="form-success" aria-live="polite">
              {submitted &&
                "Thanks! Check your inbox to confirm (double opt-in)."}
            </div>
          </form>
        </div>
      </div>

      {/* Bottom: Courses grid (2-11) */}
      <CoursesCatalog />
    </section>
  );
}

function CoursesCatalog() {
  const courses = [
    {
      id: 1,
      img: chatgptformanagers,
      title: "ChatGPT for Managers",
      desc: "Practical playbooks, prompts, and governance for teams.",
      link: "https://www.udemy.com/course/chatgpt-for-managers/?referralCode=0F5C3B36D8A38C641339",
    },
    {
      id: 2,
      img: generativeaiformanagers,
      title: "Generative AI for Managers & Leaders",
      desc: "Strategy, ROI, and adoption patterns for IT leaders.",
      link: "https://www.udemy.com/course/generative-ai-for-managers-and-leaders-u/?referralCode=A9CB3335E44EF1983CD7",
    },
    {
      id: 3,
      img: bigdataformanagers,
      title: "Big Data for Managers",
      desc: "Core concepts, architectures, and business applications.",
      link: "https://www.udemy.com/",
    },
  ];

  const shutterVariants = {
    hidden: { y: 100, opacity: 0 }, // start below view
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        // slide up into place
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <div className="grid12 courses-grid">
      <div className="courses-head col-2-11">
        <h3>Recommended Courses for Managers &amp; Leaders</h3>
        <p className="subhead">
          Continue your learning with these in-depth courses (also on Udemy
          Business):
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
