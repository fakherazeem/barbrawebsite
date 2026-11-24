import React, { useEffect } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import "./styles.css";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Barbra's House of Credit";
  }, []);

  const localToday = new Date();
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
  const minimumDate = localToday.toISOString().slice(0, 10);

  return (
    <div className="contact-page">
      <SiteHeader activePage="contact" />

      <main>
        <section className="contact-page-intro">
          <div className="container">
            <span className="eyebrow">CONTACT BARBRA'S HOUSE OF CREDIT</span>
            <h1>Let's talk about your next step.</h1>
            <p>
              Reach out with a question or request a free consultation. We'll
              follow up to confirm a suitable time.
            </p>
          </div>
        </section>

        <section className="contact-details-section">
          <div className="container">
            <div className="contact-details-heading">
              <span className="eyebrow">CONTACT INFORMATION</span>
              <h2>Here's how to reach us.</h2>
            </div>

            <div className="contact-details-grid">
              <article className="contact-detail-card">
                <MapPin aria-hidden="true" />
                <h3>Texas office <span className="demo-label">DEMO</span></h3>
                <p>123 Example Street<br />Austin, TX 00000</p>
                <small>Placeholder address only. Replace with your verified office address before publishing.</small>
              </article>

              <article className="contact-detail-card">
                <Clock3 aria-hidden="true" />
                <h3>Office hours <span className="demo-label">SAMPLE</span></h3>
                <p>Monday-Friday<br />9:00 AM-5:00 PM Central</p>
                <small>Sample hours — confirm and update before publishing.</small>
              </article>

              <article className="contact-detail-card">
                <Phone aria-hidden="true" />
                <h3>Call us <span className="demo-label">DEMO</span></h3>
                <a href="tel:+15125550143">+1 (512) 555-0143</a>
                <small>Sample phone number — replace before publishing.</small>
              </article>

              <article className="contact-detail-card">
                <Mail aria-hidden="true" />
                <h3>Email us</h3>
                <a href="mailto:fakherazeem1@gmail.com">fakherazeem1@gmail.com</a>
                <small>Use this address for inquiries and consultation follow-up.</small>
              </article>
            </div>
          </div>
        </section>

        <section className="consultation-section" id="consultation">
          <div className="container consultation-grid">
            <div className="consultation-copy">
              <span className="eyebrow light">FREE CONSULTATION</span>
              <h2>Choose a time that works for you.</h2>
              <p>
                Tell us a little about yourself and suggest a date and time.
                We'll contact you to confirm the appointment.
              </p>
              <div className="consultation-note">
                A submitted time is a request, not a confirmed booking. We'll
                follow up using the contact details you provide.
              </div>
            </div>

            <form
              className="contact-form consultation-form"
              name="consultation"
              method="POST"
              action="/thank-you.html"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="consultation" />
              <div className="form-honeypot" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </div>
              <h3>Request your free consultation</h3>

              <label>
                Full name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>

              <div className="consultation-date-time">
                <label>
                  Preferred date
                  <input name="preferred_date" type="date" min={minimumDate} required />
                </label>
                <label>
                  Preferred time
                  <input name="preferred_time" type="time" required />
                </label>
              </div>

              <label>
                What would you like to discuss?
                <select name="topic" defaultValue="" required>
                  <option value="" disabled>Select a topic</option>
                  <option>Credit education</option>
                  <option>Credit report review</option>
                  <option>Credit improvement options</option>
                  <option>Student, home, auto, or business financing</option>
                  <option>Something else</option>
                </select>
              </label>

              <label>
                Anything else we should know? (optional)
                <textarea name="message" rows="3" />
              </label>

              <button className="button button-dark submit-button" type="submit">
                Request a Call <ArrowRight size={17} />
              </button>
              <small>
                Please don't include Social Security numbers, passwords, or
                sensitive financial information.
              </small>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
