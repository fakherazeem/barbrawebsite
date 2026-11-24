
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  FileSearch,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  Users,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  LockKeyhole,
  Home,
  Car,
  BriefcaseBusiness,
  Wallet,
  Calculator,
  Phone,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: BookOpen,
    title: "Credit Education & Guidance",
    description:
      "Understand how credit works, what appears on your credit reports, and which steps may support your financial goals.",
  },
  {
    icon: FileSearch,
    title: "Credit Report Review",
    description:
      "Review credit report information to better understand account details, reporting history, and possible inaccuracies.",
  },
  {
    icon: ClipboardCheck,
    title: "Credit Dispute Support",
    description:
      "Get guidance on identifying information that may be inaccurate or incomplete and understanding how disputes work.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Credit Support",
    description:
      "Continue working toward your credit goals with ongoing guidance and discussions about possible next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Paid Credit Repair Services",
    description:
      "Learn about available credit repair services, what they include, their costs, and the terms before enrolling.",
  },
  {
    icon: Users,
    title: "Professional Connections",
    description:
      "Where appropriate, explore connections with credit repair professionals and understand any referral relationship.",
  },
];

const financingServices = [
  {
    icon: Home,
    title: "Home Financing",
    description: "Explore financing options and understand possible paths toward your homeownership goals.",
    image: "photo-1560518883-ce09059eeffa",
  },
  {
    icon: Car,
    title: "Auto Financing",
    description: "Understand available auto financing options and prepare for your next vehicle purchase.",
    image: "photo-1492144534655-ae79c964c9d7",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Financing",
    description: "Explore financing possibilities that may support your business plans and goals.",
    image: "photo-1497366754035-f200968a6e72",
  },
  {
    icon: Wallet,
    title: "Personal Financing",
    description: "Learn about personal financing options based on your needs and financial situation.",
    image: "photo-1579621970563-ebec7560ff3e",
  },
];

const faqs = [
  {
    question: "Can negative information always be removed from my credit report?",
    answer:
      "No. Accurate and current negative information generally cannot be removed just because it affects your credit. Disputes should focus on information that is inaccurate, incomplete, or otherwise legally disputable.",
  },
  {
    question: "Can I dispute credit report errors myself?",
    answer:
      "Yes. You can dispute inaccurate information directly with credit reporting companies and the companies that provided the information, at no cost.",
  },
  {
    question: "Will my credit score increase?",
    answer:
      "Every credit profile is different. No specific score increase or timeline can be guaranteed. The purpose of our guidance is to help you understand your credit and possible next steps.",
  },
  {
    question: "Do you offer paid credit repair services?",
    answer:
      "Paid credit repair services may be available. Before enrolling, you should receive clear information about the services, fees, contract terms, and applicable cancellation rights.",
  },
  {
    question: "Do you provide financing directly?",
    answer:
      "Barbra's House of Credit helps individuals understand and explore financing options. We do not present ourselves as a direct lender or guarantee financing approval.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [loanAmount, setLoanAmount] = useState("");
  const [downPayment, setDownPayment] = useState("0");
  const [loanApr, setLoanApr] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [financedFees, setFinancedFees] = useState("0");
  const [loanError, setLoanError] = useState("");
  const [loanEstimate, setLoanEstimate] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % financingServices.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  function updateLoanInput(setValue, event) {
    setValue(event.target.value);
    setLoanEstimate(null);
    setLoanError("");
  }

  function handleLoanSubmit(event) {
    event.preventDefault();

    const amount = Number(loanAmount);
    const down = Number(downPayment);
    const apr = Number(loanApr);
    const months = Number(loanTerm);
    const fees = Number(financedFees);

    if (down > amount) {
      setLoanError("Down payment cannot be greater than the purchase price or loan amount.");
      setLoanEstimate(null);
      return;
    }

    const principal = amount - down + fees;
    if (principal <= 0) {
      setLoanError("Enter an amount that leaves a balance to finance.");
      setLoanEstimate(null);
      return;
    }

    const monthlyRate = apr / 100 / 12;
    const monthlyPayment = monthlyRate === 0
      ? principal / months
      : principal * monthlyRate / (1 - (1 + monthlyRate) ** -months);
    const totalPayments = monthlyPayment * months;

    setLoanError("");
    setLoanEstimate({
      amountFinanced: principal,
      monthlyPayment,
      totalPayments,
      totalInterest: totalPayments - principal,
    });
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#">
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
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          id="primary-navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Our Services</a>
          <a href="#credit" onClick={() => setMenuOpen(false)}>Credit Improvement</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#calculator" onClick={() => setMenuOpen(false)}>Calculator</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's Talk <ArrowRight size={16} />
          </a>
        </nav>
      </header>

   
<section className="hero" id="home">
  {financingServices.map((service, index) => (
    <div
      className={index === activeHeroSlide ? "hero-image active" : "hero-image"}
      key={service.title}
      style={{
        backgroundImage: `url(https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=2000&q=90)`,
      }}
      aria-hidden="true"
    />
  ))}
  <div className="hero-overlay" />

  <div className="hero-content">
    <span className="eyebrow light">
      WELCOME TO BARBRA'S HOUSE OF CREDIT
    </span>

    <h1>
      Have a Financial Goal
      <em className="hero-highlight">
        But Don't Know Where to Start?
      </em>
    </h1>

    <h2>
      Find Your Financing Options With Guidance You Can Trust.
    </h2>

    <p>
      From education and auto loans to home and business financing,
      we're here to help you explore your options and move forward
      with confidence.
    </p>

    <p className="hero-promise">
      Get Sorted in 120 Seconds.
    </p>

    <div className="hero-actions">
      <a href="#services" className="button button-light">
        Explore Your Options <ArrowRight size={18} />
      </a>

      <a href="#calculator" className="button button-outline-light">
        Loan Calculator <Calculator size={17} />
      </a>

      <a href="tel:+1XXXXXXXXXX" className="hero-call">
        <Phone size={18} aria-hidden="true" />
        <span>
          <small>Call us</small>
          <strong>+1 (XXX) XXX-XXXX</strong>
        </span>
      </a>
    </div>

    <div className="hero-caption">
      Personal guidance. Clear information. Support for every financial goal.
    </div>
    <div className="hero-slide-controls" aria-label="Featured financing areas">
      {financingServices.map((service, index) => (
        <button
          aria-label={`Show ${service.title} background`}
          aria-pressed={index === activeHeroSlide}
          className={index === activeHeroSlide ? "active" : ""}
          key={service.title}
          onClick={() => setActiveHeroSlide(index)}
          type="button"
        />
      ))}
    </div>
  </div>

  <div className="hero-side-label">
    YOUR FINANCIAL JOURNEY STARTS HERE
  </div>
</section>


      <section className="intro-section container">
        <div>
          <span className="eyebrow">FINANCIAL GUIDANCE THAT STARTS WITH YOU</span>
          <h2>Every financial goal starts with understanding your options.</h2>
        </div>
        <p>
          Whether you're exploring financing or looking to better understand
          your credit, we're here to help you learn about your options and
          consider your next steps with greater confidence.
        </p>
      </section>

      <section className="financing-section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">EXPLORE YOUR OPTIONS</span>
            <h2>What are you working toward?</h2>
            <p>
              Start with the goal that matters to you. Learn more about the
              guidance and options available.
            </p>
          </div>

          <div className="financing-grid">
            {financingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="financing-card" key={service.title}>
                  <div className="financing-image">
                    <img
                      src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=850&q=85`}
                      alt={service.title}
                    />
                    <span className="card-number">0{index + 1}</span>
                  </div>
                  <div className="financing-card-body">
                    <div className="card-icon"><Icon size={22} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">
                      Discuss Your Goals <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="calculator-section" id="calculator">
        <div className="container calculator-grid">
          <div className="calculator-copy">
            <span className="eyebrow">PLAN WITH AN ESTIMATE</span>
            <h2>Explore what a loan payment could look like.</h2>
            <p>
              Estimate fixed monthly payments for a home, auto, business, or
              personal loan using the APR and term from a lender quote.
            </p>
            <div className="calculator-note">
              <ShieldCheck size={21} />
              <p>
                Credit history and other lender criteria can affect the APR and
                fees offered. This calculator does not review your credit or
                determine eligibility.
              </p>
            </div>
          </div>

          <div className="calculator-card">
            <form className="calculator-form" onSubmit={handleLoanSubmit}>
              <h3>Loan payment calculator</h3>
              <div className="calculator-fields">
                <label>
                  Purchase price or loan amount (USD)
                  <input
                    type="number"
                    min="0.01"
                    max="100000000"
                    step="0.01"
                    value={loanAmount}
                    onChange={(event) => updateLoanInput(setLoanAmount, event)}
                    required
                  />
                </label>
                <label>
                  Down payment (if applicable)
                  <input
                    type="number"
                    min="0"
                    max="100000000"
                    step="0.01"
                    value={downPayment}
                    onChange={(event) => updateLoanInput(setDownPayment, event)}
                    required
                  />
                </label>
                <label>
                  Quoted APR (%)
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={loanApr}
                    onChange={(event) => updateLoanInput(setLoanApr, event)}
                    required
                  />
                </label>
                <label>
                  Loan term (months)
                  <input
                    type="number"
                    min="1"
                    max="600"
                    step="1"
                    value={loanTerm}
                    onChange={(event) => updateLoanInput(setLoanTerm, event)}
                    required
                  />
                </label>
                <label className="calculator-fees">
                  One-time fees added to the loan (optional)
                  <input
                    type="number"
                    min="0"
                    max="100000000"
                    step="0.01"
                    value={financedFees}
                    onChange={(event) => updateLoanInput(setFinancedFees, event)}
                  />
                </label>
              </div>
              <button className="button button-dark calculator-submit" type="submit">
                Calculate Payment <Calculator size={17} />
              </button>
              {loanError && <p className="calculator-error" role="alert">{loanError}</p>}
              <p className="calculator-disclaimer">
                Estimates only. Taxes, insurance, escrow, and fees not entered
                here are excluded. Actual loan terms and costs vary by lender
                and borrower; this is not an offer or approval.
              </p>
              {loanEstimate && (
                <div className="calculator-results" aria-live="polite">
                  <h4>Estimated loan summary</h4>
                  <div className="calculator-monthly">
                    <span>Estimated monthly payment</span>
                    <strong>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(loanEstimate.monthlyPayment)}
                    </strong>
                  </div>
                  <dl>
                    <div>
                      <dt>Amount financed, including fees</dt>
                      <dd>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(loanEstimate.amountFinanced)}</dd>
                    </div>
                    <div>
                      <dt>Estimated total interest</dt>
                      <dd>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(loanEstimate.totalInterest)}</dd>
                    </div>
                    <div>
                      <dt>Total of estimated payments</dt>
                      <dd>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(loanEstimate.totalPayments)}</dd>
                    </div>
                  </dl>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="credit-section" id="credit">
        <div className="credit-photo">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=85"
            alt="Person reviewing financial paperwork"
          />
          <div className="photo-caption">
            <ShieldCheck size={23} />
            <span>Understand your credit. Know your options.</span>
          </div>
        </div>

        <div className="credit-content">
          <span className="eyebrow">CREDIT IMPROVEMENT</span>
          <h2>Understand Your Credit. Take Your Next Step With Confidence.</h2>
          <p>
            Get help understanding your credit reports, reviewing possible
            inaccuracies, and exploring practical ways to work toward your
            credit goals.
          </p>
          <div className="credit-feature-list">
            <div><CheckCircle2 /> Credit education and guidance</div>
            <div><CheckCircle2 /> Credit report review</div>
            <div><CheckCircle2 /> Credit dispute support</div>
            <div><CheckCircle2 /> Ongoing credit improvement support</div>
          </div>
          <a href="#credit-services" className="button button-dark">
            Explore Credit Services <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="credit-services-section" id="credit-services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">HOW WE CAN HELP</span>
            <h2>Guidance for your credit journey.</h2>
            <p>
              Explore the types of credit-related support available through
              Barbra's House of Credit.
            </p>
          </div>

          <div className="credit-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="credit-service-card" key={service.title}>
                  <span className="service-number">0{index + 1}</span>
                  <div className="service-icon"><Icon size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact">
                    Ask About This Service <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section container">
        <div className="process-content">
          <span className="eyebrow">A SIMPLE PLACE TO START</span>
          <h2>Start with a conversation. Understand your next step.</h2>
          <p>
            You don't need to have every answer before reaching out. Tell us
            what you'd like help with and we'll discuss possible next steps.
          </p>

          <div className="process-list">
            <div className="process-item">  
              <span>01</span>
              <div>
                <h3>Share your goal</h3>
                <p>Tell us what you're hoping to understand or achieve.</p>
              </div>
            </div>
            <div className="process-item">
              <span>02</span>
              <div>
                <h3>Discuss your situation</h3>
                <p>Explore which services or information may be relevant.</p>
              </div>
            </div>
            <div className="process-item">
              <span>03</span>
              <div>
                <h3>Understand your options</h3>
                <p>Review possible next steps, terms, and expectations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="process-image">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
            alt="Bright professional workspace"
          />
          <div className="process-note">
            <CheckCircle2 size={22} />
            <div>
              <strong>Clarity comes first.</strong>
              <span>Understand your options before making a decision.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section" id="about">
        <div className="founder-image">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
            alt="Professional business discussion"
          />
        </div>
        <div className="founder-content">
          <span className="eyebrow light">A PERSONAL APPROACH</span>
          <h2>Meet Barbra.</h2>
          <h4>Founder & Owner, Barbra's House of Credit</h4>
          <p>
            Barbra founded her business to help individuals better understand
            their credit and explore financial options. Her approach starts
            with listening, clear communication, and helping people understand
            the choices available to them.
          </p>
          <a href="#contact" className="text-link">
            Connect with Barbra <ArrowRight size={17} />
          </a>
          <small>
            Replace this image and introduction with Barbra's real photograph
            and verified biography before publishing.
          </small>
        </div>
      </section>

      <section className="faq-section container">
        <div className="faq-heading">
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Questions are a good place to start.</h2>
          <p>Some useful information before you take your next step.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                {faq.question}
                <ChevronDown
                  className={openFaq === index ? "faq-chevron active" : "faq-chevron"}
                  size={20}
                />
              </button>
              {openFaq === index && <p>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="rights-section">
        <div className="container rights-inner">
          <ShieldCheck size={30} />
          <div>
            <h3>Know your rights.</h3>
            <p>
              You have the right to dispute inaccurate information on your
              credit report yourself, at no cost. Accurate and current
              negative information generally cannot be removed simply because
              it affects your credit. No company can guarantee a specific
              credit score increase or approval.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow light">LET'S START A CONVERSATION</span>
            <h2>Your goals deserve a clear conversation.</h2>
            <p>
              Tell us what you're looking for. Whether it's financing guidance
              or credit support, we're here to help you understand possible
              next steps.
            </p>
            <div className="contact-points">
              <span><MessageCircle size={18} /> Personal inquiry</span>
              <span><LockKeyhole size={18} /> Basic contact information only</span>
            </div>
          </div>

          <form
            className="contact-form"
            name="inquiry"
            method="POST"
            action="/thank-you.html"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="inquiry" />
            <div className="form-honeypot" aria-hidden="true">
              <label>
                Leave this field empty
                <input name="bot-field" tabIndex="-1" autoComplete="off" />
              </label>
            </div>
            <h3>How can we help you?</h3>
            <label>
              Full name
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Phone number (optional)
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number"
              />
            </label>
            <label>
              What would you like help with?
              <select name="goal" defaultValue="" required>
                <option value="" disabled>Select a topic</option>
                <option>Home financing</option>
                <option>Auto financing</option>
                <option>Business financing</option>
                <option>Personal financing</option>
                <option>Credit education and guidance</option>
                <option>Credit report review</option>
                <option>Credit repair services</option>
                <option>Ongoing credit support</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Message (optional)
              <textarea
                name="message"
                rows="3"
                placeholder="Tell us briefly what you'd like help with."
              />
            </label>
            <button className="button button-dark submit-button" type="submit">
              Send Inquiry <ArrowRight size={18} />
            </button>
            <small>
              Please don't submit your Social Security Number, passwords, or
              sensitive financial information through this form.
            </small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">B</span>
          <span className="brand-name">
            <strong>Barbra's</strong>
            <small>HOUSE OF CREDIT</small>
          </span>
        </a>
        <p>
          Helping individuals understand their credit and explore financial options.
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© {new Date().getFullYear()} Barbra's House of Credit. All rights reserved.</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
