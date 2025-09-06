import React from "react";
import "../styles//Hero.css";
import DataMountains from "../assets/DataMountains.png";

export default function Hero({
  title = "You have Data Mountains?",
  subtitle = "We have Big Data Solutions!",
  paragraph = "From scalable data pipelines to real-time analytics and AI-assisted insights, we turn your data mountains into business outcomes.",
  ctaText = "View Services",
  onCtaClick = () => {},
  imageAlt = "Abstract mountain range representing big data layers",
}) {
  return (
    <motion.section
      className="hero"
      aria-label="Data Solutions Hero"
      whileHover={{
        y: -10,               // lift upward 10px
        boxShadow: "0 20px 40px rgba(10,37,64,0.25)", // smooth shadow
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    ></motion.section>
      <header className="hero__header">
        <h1 className="hero__title">{title}</h1>
        <h1 className="hero__subtitle">{subtitle}</h1>
      </header>

      <div className="hero__left">
        <p className="hero__paragraph">{paragraph}</p>
        <button className="hero__cta" onClick={onCtaClick} aria-label={ctaText}>
          {ctaText}
        </button>
      </div>

      <figure className="hero__right">
        <img
          className="hero__image"
          src={DataMountains}
          alt={imageAlt}
          loading="eager"
        />
      </figure>
    </motion.section>
  );
}
