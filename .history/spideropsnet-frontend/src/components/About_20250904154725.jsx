import React from "react";
import "./AboutUs.css";

const aboutItems = [
  {
    title: "Our Mission",
    img: "https://picsum.photos/seed/mission/160/160",
    text: "Using technology to find efficient solutions to problems faced regularly by various industries.",
  },
  {
    title: "Passion",
    img: "https://picsum.photos/seed/passion/160/160",
    text: "We are passionate about our work and take pride in our solutions.",
  },
  {
    title: "Commitment",
    img: "https://picsum.photos/seed/commitment/160/160",
    text: "We are committed to our solutions and use our experience to make sure they work.",
  },
  {
    title: "Learning",
    img: "https://picsum.photos/seed/learning/160/160",
    text: "We believe in continuous learning and ensure our employees undergo regular trainings to keep up with technology and emerging trends.",
  },
  {
    title: "Trust",
    img: "https://picsum.photos/seed/trust/160/160",
    text: "We value mutual trust. We work hard to earn our customer's trust and want to keep it for years to come.",
  },
  {
    title: "Progress",
    img: "https://picsum.photos/seed/progress/160/160",
    text: "Change is inevitable. We strive for progress so customers, employees, and stakeholders feel good about the change.",
  },
  {
    title: "Contribution",
    img: "https://picsum.photos/seed/contribution/160/160",
    text: "We value positive contribution to society and ensure the community we live in benefits from us.",
  },
];

export default function AboutUs() {
  return (
    <section className="about-wrap">
      {/* 12-column grid */}
      <div className="about-grid">
        {/* Column 1 (hidden) */}
        <div className="gutter-left" aria-hidden="true" />

        {/* Main content spans columns 2–11 */}
        <div className="about-content fade-up">
          {/* Intro block (not counted as a card) */}
          <header className="about-intro">
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
          </header>

          {/* Cards: 7 total → first row 4, second row 3 (auto by grid) */}
          <div className="cards-grid">
            {aboutItems.map((item) => (
              <article className="card" key={item.title}>
                <div className="card-img-wrap">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Column 12 (hidden) */}
        <div className="gutter-right" aria-hidden="true" />
      </div>
    </section>
  );
}
