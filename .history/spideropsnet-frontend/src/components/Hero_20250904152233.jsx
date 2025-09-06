import React from "react";
import "../styles//Hero.css";
import DataMountains from "../assets/DataMountains.png";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";

export default function Hero({
  title = "You have Data Mountains?",
  subtitle = "We have Big Data Solutions!",
  paragraph = "From scalable data pipelines to real-time analytics and AI-assisted insights, we turn your data mountains into business outcomes.",
  ctaText = "View Services",
  onCtaClick = () => {},
  imageAlt = "Abstract mountain range representing big data layers",
}) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 };
  const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = prefersReducedMotion
    ? { duration: 0.6, ease: "easeOut" }
    : { duration: 0.9, ease: "easeOut" };
  return (
    <section className="hero" aria-label="Data Solutions Hero">
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
    </section>
  );
}
