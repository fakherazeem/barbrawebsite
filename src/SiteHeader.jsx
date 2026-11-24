import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function SiteHeader({ activePage = "credit" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = activePage === "credit" || activePage === "home";
  const creditHref = isHomePage ? "#credit" : "/#credit";
  const servicesHref = isHomePage ? "#services" : "/#services";
  const aboutHref = isHomePage ? "#about" : "/#about";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">B</span>
        <span className="brand-name">
          <strong>Barbra's</strong>
          <small>HOUSE OF CREDIT</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        type="button"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        className={menuOpen ? "main-nav open" : "main-nav"}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href="/" onClick={closeMenu}>Home</a>
        <a
          aria-current={activePage === "credit" ? "page" : undefined}
          className={activePage === "credit" ? "active" : ""}
          href={creditHref}
          onClick={closeMenu}
        >
          Credit Improvement
        </a>
        <a href={servicesHref} onClick={closeMenu}>Financing Options</a>
        <a
          aria-current={activePage === "calculator" ? "page" : undefined}
          className={activePage === "calculator" ? "active" : ""}
          href="/calculator"
          onClick={closeMenu}
        >
          Calculator
        </a>
        <a href={aboutHref} onClick={closeMenu}>About</a>
        <a
          aria-current={activePage === "contact" ? "page" : undefined}
          className={activePage === "contact" ? "active" : ""}
          href="/contact"
          onClick={closeMenu}
        >
          Contact
        </a>
        <a className="nav-cta" href="/contact#consultation" onClick={closeMenu}>
          Free Consultation <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}
