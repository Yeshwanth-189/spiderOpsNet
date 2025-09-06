import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your API call (EmailJS, Supabase function, etc.)
    console.log("Form submitted:", form);
    alert("Thanks! We’ll get back to you shortly.");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid container">
        {/* Left column — Location */}
        <aside className="contact-info">
          <h2 className="contact-title">Location Information</h2>
          <div className="info-block">
            <h3 className="org">Spider OpsNet (Registered Office)</h3>
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
        </aside>

        {/* Right column — Form */}
        <div className="contact-form-wrap">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Reach out for a complimentary consultation and discover how our
            expertise can drive your next breakthrough.
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
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
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

            <label className="checkbox">
              <input
                type="checkbox"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
              />
              <span>Sign up for news and updates</span>
            </label>

            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
