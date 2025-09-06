import React, { useState } from "react";
import "../styles/contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thanks! We’ll get back to you shortly.");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <hr></hr>
      <div className="contact-grid container">
        {/* Left column — Location Info */}
        <div className="contact-info">
          <h2 className="contact-title">
            <FaMapMarkerAlt />
            Location
          </h2>
          <div className="info-block">
            <h3 className="org">Spider OpsNet Office</h3>
            <p className="label">Address</p>
            <address>
              # 981, 3rd Floor, Ideal Homes,
              <br />
              Rajarajeswari Nagar,
              <br />
              Bangalore - 560 098. INDIA
            </address>

            <p className="label">E-mail</p>
            <a className="email" href="mailto:contact@spideropsnet.com">
              contact@spideropsnet.com
            </a>
          </div>
        </div>

        {/* Right column — Contact Form */}
        <div className="contact-form-wrap">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Reach out for a consultation and discover how our expertise can
            drive your next breakthrough.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="row two">
              <div className="field">
                <label htmlFor="firstName">
                  First Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label htmlFor="email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="subject">
                  Subject <span aria-hidden="true">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
