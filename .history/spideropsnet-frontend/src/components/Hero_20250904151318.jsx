import React from "react";
import "../styles//Hero.css";
import DataMountains from "../assets/DataMountains.png";

export default function Hero({
  title = "You have Data Mountains?",
  subtitle = "We have Big Data Solutions!",
  paragraph = "Spider OpsNet is engaged in building Big Data technology solutions for various industries to organize and utilize their data and find new avenues for revenue. We help organizations to achieve operational efficiency using our innovative solutions and services.",
  ctaText = "View Services",
  onCtaClick = () => {},
  imageAlt = "Abstract mountain range representing big data layers",
}) {
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
