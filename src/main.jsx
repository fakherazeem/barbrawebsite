
import React, { useEffect, useRef, useState } from "react";
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
  ChevronDown,
  Home,
  Car,
  BriefcaseBusiness,
  Phone,
} from "lucide-react";
import "./styles.css";
import ContactPage from "./ContactPage.jsx";
import LoanCalculatorPage from "./LoanCalculatorPage.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";

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
    icon: BookOpen,
    title: "Student Loans",
    description: "Explore student loan options as you plan for tuition, training, and future goals.",
    image: "photo-1579621970563-ebec7560ff3e",
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Explore possible home financing paths as you work toward homeownership.",
    image: "photo-1560518883-ce09059eeffa",
  },
  {
    icon: Car,
    title: "Auto Loans",
    description: "Learn about auto financing options and prepare for your next vehicle purchase.",
    image: "photo-1492144534655-ae79c964c9d7",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Loans",
    description: "Explore financing possibilities that may support your business plans and goals.",
    image: "photo-1497366754035-f200968a6e72",
  },
];

const commonSituations = [
  {
    title: "I was denied and I don't know why.",
    accent: "#76d5f8",
    behind: [
      "A credit score is only one part of a lending decision.",
      "Income, existing debts, savings, and lender-specific criteria may also matter.",
      "The lender's notice may explain the main reasons for its decision.",
    ],
    help: [
      "Review your credit reports and understand the reasons listed in the lender's notice.",
      "Prepare questions about possible next steps without assuming another lender will decide the same way.",
    ],
  },
  {
    title: "I paid for credit repair and nothing changed.",
    accent: "#ffd43b",
    behind: [
      "Accurate information generally cannot be removed simply because it is unfavorable.",
      "Disputes should focus on information you believe is inaccurate or incomplete.",
      "Credit outcomes depend on multiple factors and no particular result or timeline can be promised.",
    ],
    help: [
      "Understand what your reports say and which details may need closer review.",
      "Learn how disputes, service fees, and contract terms work before deciding what to do next.",
    ],
  },
  {
    title: "I want to buy a home, but I don't know if I qualify.",
    accent: "#28d9a0",
    behind: [
      "Mortgage decisions can consider credit, income, debts, savings, and the property.",
      "Requirements differ among lenders and loan programs.",
      "A credit score by itself cannot confirm whether an application will be approved.",
    ],
    help: [
      "Review your credit information and learn about factors a lender may ask you about.",
      "Prepare questions so you can compare loan terms and discuss your situation with a lender.",
    ],
  },
  {
    title: "I have little or no credit history.",
    accent: "#ff947d",
    behind: [
      "A shorter or limited history gives scoring models less account information to evaluate.",
      "Opening new accounts can involve fees, inquiries, and repayment obligations.",
      "There is no single account or product that is right for everyone.",
    ],
    help: [
      "Learn how payment history, balances, account age, and other factors are generally considered.",
      "Explore education-first next steps and avoid borrowing only to try to change a score.",
    ],
  },
];

const creditFactors = [
  {
    name: "Payment history",
    percentage: 35,
    color: "#12636b",
    mutedColor: "#b9d1d2",
    description: "Payment history is a major general scoring factor. Check reports for accuracy and keep track of due dates.",
  },
  {
    name: "Amounts owed",
    percentage: 30,
    color: "#2bd7a3",
    mutedColor: "#c5f3e5",
    description: "Balances compared with available revolving credit are often called utilization. A lower ratio is generally preferable.",
  },
  {
    name: "Length of history",
    percentage: 15,
    color: "#69c8f2",
    mutedColor: "#d5effa",
    description: "The age of accounts and how long they have been used can contribute to a score.",
  },
  {
    name: "New credit",
    percentage: 10,
    color: "#ffc938",
    mutedColor: "#fff0bc",
    description: "Recent applications and new accounts may be considered. Apply only when an account fits your needs.",
  },
  {
    name: "Credit mix",
    percentage: 10,
    color: "#ff9277",
    mutedColor: "#ffe0d8",
    description: "Different account types may be considered, but there is no need to borrow just to add another type.",
  },
];

function formatDollars(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

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
  const [openFaq, setOpenFaq] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeSituation, setActiveSituation] = useState(1);
  const [activeCreditFactor, setActiveCreditFactor] = useState(4);
  const [cardBalance, setCardBalance] = useState(2200);
  const [creditLimit, setCreditLimit] = useState(3000);
  const creditServicesSectionRef = useRef(null);
  const creditServicesViewportRef = useRef(null);
  const creditServicesTrackRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % financingServices.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const section = creditServicesSectionRef.current;
    const viewport = creditServicesViewportRef.current;
    const track = creditServicesTrackRef.current;
    if (!section || !viewport || !track) return undefined;

    let frameId = 0;
    const updateTrack = () => {
      const visibleCards = window.matchMedia("(max-width: 700px)").matches ? 1 : 3;
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const cardWidth = (viewport.clientWidth - gap * (visibleCards - 1)) / visibleCards;
      track.style.setProperty("--credit-card-width", `${cardWidth}px`);

      const scrollDistance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      section.style.setProperty("--credit-scroll-distance", `${scrollDistance}px`);

      const progress = scrollDistance === 0
        ? 0
        : Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollDistance));
      track.style.transform = `translate3d(${-scrollDistance * progress}px, 0, 0)`;
    };
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateTrack);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const situation = commonSituations[activeSituation];
  const creditFactor = creditFactors[activeCreditFactor];
  const utilizationPercentage = Math.round((cardBalance / creditLimit) * 100);
  const utilizationStatus = utilizationPercentage < 10
    ? { label: "Low", className: "low" }
    : utilizationPercentage < 30
      ? { label: "Moderate", className: "moderate" }
      : utilizationPercentage < 50
        ? { label: "Elevated", className: "elevated" }
        : { label: "High", className: "high" };
  let factorStart = 0;
  const factorGradientStops = creditFactors.map((factor, index) => {
    const factorEnd = factorStart + factor.percentage;
    const factorColor = index === activeCreditFactor ? factor.color : factor.mutedColor;
    const stop = `${factorColor} ${factorStart}% ${factorEnd}%`;
    factorStart = factorEnd;
    return stop;
  });
  const factorGradient = `conic-gradient(from -90deg, ${factorGradientStops.join(", ")})`;

  return (
    <div className="home-page">
      <SiteHeader activePage="credit" />
      <main>
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
      Student loans. Home loans. Auto loans. Business loans. Find the financing
      path that fits your next goal.
    </p>

    <p className="hero-promise">
      Get Sorted in 120 Seconds.
    </p>

    <div className="hero-actions">
      <a href="tel:+15125550143" className="hero-call">
        <Phone size={18} aria-hidden="true" />
        <span>
          <small>Call Now (demo)</small>
          <strong>+1 (512) 555-0143</strong>
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


      <section className="common-situations-section" id="common-situations">
        <div className="container">
          <div className="common-situations-heading">
            <span className="eyebrow">COMMON SITUATIONS</span>
            <h2>Common credit challenges and what may be behind them.</h2>
            <p>Select the situation closest to yours to explore how we can help.</p>
          </div>

          <div className="common-situations-grid">
            <div className="common-situation-list" role="group" aria-label="Select a common situation">
              {commonSituations.map((item, index) => (
                <button
                  aria-pressed={activeSituation === index}
                  className={activeSituation === index ? "common-situation-option active" : "common-situation-option"}
                  key={item.title}
                  onClick={() => setActiveSituation(index)}
                  type="button"
                >
                  <span className="situation-number" style={{ backgroundColor: item.accent }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="situation-option-title">{item.title}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              ))}
            </div>

            <article className="common-situation-detail" aria-live="polite">
              <header className="common-situation-detail-heading" style={{ backgroundColor: situation.accent }}>
                <span>Situation {activeSituation + 1} of {commonSituations.length}</span>
                <h3>"{situation.title}"</h3>
              </header>
              <div className="common-situation-detail-content">
                <div>
                  <h4>What's usually behind it</h4>
                  <ul className="situation-explanation-list">
                    {situation.behind.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="situation-help">
                  <h4>How we can help</h4>
                  <ul>
                    {situation.help.map((step) => (
                      <li key={step}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="button button-dark" href="#contact">
                    Talk through your next step <ArrowRight size={16} />
                  </a>
                </div>
                <p className="situation-disclaimer">
                  Every situation is different. We provide education and guidance, not a promise of credit-score changes or loan approval.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="credit-insights-section" id="credit-insights">
        <div className="container">
          <div className="credit-insights-heading">
            <span className="eyebrow">YOUR CREDIT, EXPLAINED</span>
            <h2>Explore the factors behind a credit score.</h2>
            <p>
              Select a factor to learn more, or adjust the sliders to see how a card balance compares with its limit.
            </p>
          </div>

          <div className="credit-insights-grid">
            <article className="credit-factor-card">
              <div className="credit-factor-chart-layout">
                <div
                  aria-label={`${creditFactor.name}, ${creditFactor.percentage}% of the illustrative factor mix`}
                  className="credit-factor-donut"
                  role="img"
                  style={{ background: factorGradient }}
                >
                  <div className="credit-factor-donut-center">
                    <strong style={{ color: creditFactor.color }}>{creditFactor.percentage}%</strong>
                    <span>{creditFactor.name}</span>
                  </div>
                </div>

                <div className="credit-factor-legend">
                  <div className="credit-factor-list" role="group" aria-label="Credit score factors">
                    {creditFactors.map((factor, index) => (
                      <button
                        aria-pressed={activeCreditFactor === index}
                        className={activeCreditFactor === index ? "credit-factor-option active" : "credit-factor-option"}
                        key={factor.name}
                        onClick={() => setActiveCreditFactor(index)}
                        type="button"
                      >
                        <span className="factor-color-dot" style={{ backgroundColor: factor.color }} />
                        <span>{factor.name}</span>
                        <strong>{factor.percentage}%</strong>
                      </button>
                    ))}
                  </div>
                  <p className="credit-factor-description" style={{ borderColor: creditFactor.color }}>
                    {creditFactor.description}
                  </p>
                </div>
              </div>
              <p className="credit-factor-source">
                Illustrative general FICO score factors. Scoring models and individual credit profiles vary.
              </p>
            </article>

            <article className="utilization-card">
              <span className="utilization-eyebrow">
                <span aria-hidden="true" />
                Check your utilization
              </span>
              <h3>How much of your available credit are you using?</h3>

              <label className="utilization-slider">
                <span>
                  <span>Card balance</span>
                  <strong>{formatDollars(cardBalance)}</strong>
                </span>
                <input
                  aria-label="Card balance"
                  max="30000"
                  min="0"
                  onChange={(event) => setCardBalance(Number(event.target.value))}
                  step="100"
                  type="range"
                  value={cardBalance}
                />
              </label>

              <label className="utilization-slider">
                <span>
                  <span>Credit limit</span>
                  <strong>{formatDollars(creditLimit)}</strong>
                </span>
                <input
                  aria-label="Credit limit"
                  max="30000"
                  min="500"
                  onChange={(event) => setCreditLimit(Number(event.target.value))}
                  step="100"
                  type="range"
                  value={creditLimit}
                />
              </label>

              <div className={`utilization-reading ${utilizationStatus.className}`} aria-live="polite">
                <strong>{utilizationPercentage}%</strong>
                <span>{utilizationStatus.label}</span>
              </div>
              <div
                aria-label={`Credit utilization: ${utilizationPercentage}%`}
                className="utilization-meter"
                role="img"
              >
                <div className="utilization-meter-track" />
                <span
                  className="utilization-meter-marker"
                  style={{ left: `${Math.min(utilizationPercentage, 100)}%` }}
                />
              </div>
              <div className="utilization-scale-labels" aria-hidden="true">
                <span>0</span><span>10</span><span>30</span><span>50</span><span>100%</span>
              </div>
              <p className="utilization-explanation">
                Lower utilization is generally preferable, but this example does not predict a credit-score change.
              </p>
            </article>
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

      <section
        className="credit-services-section"
        id="credit-services"
        ref={creditServicesSectionRef}
      >
        <div className="credit-services-stage">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">HOW WE CAN HELP</span>
              <h2>Guidance for your credit journey.</h2>
              <p>
                Explore the types of credit-related support available through
                Barbra's House of Credit.
              </p>
            </div>

            <div className="credit-services-viewport" ref={creditServicesViewportRef}>
              <div className="credit-services-track" ref={creditServicesTrackRef}>
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <article
                      className="credit-service-card"
                      key={service.title}
                    >
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

      <section className="home-contact-cta" id="contact">
        <div className="container home-contact-cta-inner">
          <div>
            <span className="eyebrow light">READY TO TALK?</span>
            <h2>Let's find a clear next step together.</h2>
            <p>
              Request a free consultation and suggest a time that works for you.
              We'll contact you to confirm.
            </p>
          </div>
          <a className="button button-light" href="/contact#consultation">
            Free Consultation <ArrowRight size={17} />
          </a>
        </div>
      </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
const isCalculatorPage = currentPath === "/calculator";
const isContactPage = currentPath === "/contact";
createRoot(document.getElementById("root")).render(
  isCalculatorPage
    ? <LoanCalculatorPage />
    : isContactPage
      ? <ContactPage />
      : <App />,
);
