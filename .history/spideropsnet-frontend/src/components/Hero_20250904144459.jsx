import React from "react";
import "./Hero.css";
import DataMountains from "../assets/DataMountains.png";

/**
 * Hero Component (Desktop: 12-col with empty 1 & 12; Mobile: 4-col with empty 1 & 4)
 * - H1 & H2 span columns 2–11
 * - Left block (paragraph + button) spans 2–6
 * - Right block (image) spans 6–12
 */

export default function Hero({
  title = "You have Data Mountains?",
  subtitle = "We have Big Data Solutions!",
  paragraph = "From scalable data pipelines to real-time analytics and AI-assisted insights, we turn your data mountains into business outcomes.",
  ctaText = "View Services",
  onCtaClick = () => {},
  imageSrc = { DataMountains },
  imageAlt = "Abstract mountain range representing big data layers",
}) {
  return (
    <section className="hero" aria-label="Data Solutions Hero">
      <header className="hero__header">
        <h1 className="hero__title">{title}</h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
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
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
        />
      </figure>
    </section>
  );
}
