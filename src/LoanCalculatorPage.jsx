import React, { useEffect, useState } from "react";
import { ArrowLeft, Calculator, CheckCircle2, ShieldCheck } from "lucide-react";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import "./styles.css";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function LoanCalculatorPage() {
  useEffect(() => {
    document.title = "Loan Calculator | Barbra's House of Credit";
  }, []);

  const [loanAmount, setLoanAmount] = useState("");
  const [downPayment, setDownPayment] = useState("0");
  const [loanApr, setLoanApr] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [financedFees, setFinancedFees] = useState("0");
  const [loanError, setLoanError] = useState("");
  const [loanEstimate, setLoanEstimate] = useState(null);

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
    <div className="calculator-page">
      <SiteHeader activePage="calculator" />

      <main>
        <section className="calculator-section calculator-page-section">
          <div className="container calculator-grid">
            <div className="calculator-copy">
              <span className="eyebrow">YOUR NEXT STEP STARTS HERE</span>
              <h1>Let's calculate what could be possible.</h1>
              <p>
                Get a simple monthly payment estimate for an education, auto,
                home, or business loan. Enter the amount, APR, and term from
                your lender quote to explore the numbers.
              </p>
              <div className="calculator-note">
                <ShieldCheck size={21} />
                <p>
                  This estimate does not review your credit, determine
                  eligibility, or represent a loan offer. Actual terms and
                  costs vary by lender and borrower.
                </p>
              </div>
              <a className="calculator-back-link" href="/">
                <ArrowLeft size={16} /> Back to the homepage
              </a>
            </div>

            <div className="calculator-card">
              <form className="calculator-form" onSubmit={handleLoanSubmit}>
                <h2>Let's run the numbers</h2>
                <div className="calculator-fields">
                  <label>
                    Loan amount (USD)
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
                  Calculate My Estimate <Calculator size={17} />
                </button>
                {loanError && <p className="calculator-error" role="alert">{loanError}</p>}
                <p className="calculator-disclaimer">
                  Estimates only. Taxes, insurance, escrow, and fees not entered
                  here are excluded. This is not an offer or approval.
                </p>
                {loanEstimate && (
                  <div className="calculator-results" aria-live="polite">
                    <h3><CheckCircle2 size={19} /> Your estimated loan summary</h3>
                    <div className="calculator-monthly">
                      <span>Estimated monthly payment</span>
                      <strong>{formatCurrency(loanEstimate.monthlyPayment)}</strong>
                    </div>
                    <dl>
                      <div>
                        <dt>Amount financed, including fees</dt>
                        <dd>{formatCurrency(loanEstimate.amountFinanced)}</dd>
                      </div>
                      <div>
                        <dt>Estimated total interest</dt>
                        <dd>{formatCurrency(loanEstimate.totalInterest)}</dd>
                      </div>
                      <div>
                        <dt>Total of estimated payments</dt>
                        <dd>{formatCurrency(loanEstimate.totalPayments)}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
