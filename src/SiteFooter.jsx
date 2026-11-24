import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="/">
              <span className="brand-mark">B</span>
              <span className="brand-name">
                <strong>Barbra's</strong>
                <small>HOUSE OF CREDIT</small>
              </span>
            </a>
            <p>
              Helping individuals understand their credit and explore
              financial options with clear, education-first guidance.
            </p>
          </div>

          <div className="footer-column">
            <h3>Where to find us</h3>
            <p>Austin, Texas <span className="demo-label">(demo location)</span></p>
            <a href="tel:+15125550143">+1 (512) 555-0143</a>
            <a href="mailto:fakherazeem1@gmail.com">fakherazeem1@gmail.com</a>
            <a href="/contact">Location & office hours</a>
          </div>

          <div className="footer-column">
            <h3>Quick links</h3>
            <a href="/">Home</a>
            <a href="/#credit">Credit Improvement</a>
            <a href="/contact">Contact Us</a>
            <a href="/contact#consultation">Free Consultation</a>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="/#services">Financing Options</a>
            <a href="/calculator">Loan Calculator</a>
            <a href="/#about">About Barbra's</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Sample location, hours, and phone details must be replaced with
            verified business information before publishing.
          </p>
          <small>© {new Date().getFullYear()} Barbra's House of Credit. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
