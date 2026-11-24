# Barbra's House of Credit website

A responsive React website built with Vite, custom CSS, and Lucide icons. The landing page features financing and credit information, an interactive common-situations guide, a selectable credit-factor chart, an adjustable utilization example, and a scroll-driven horizontal credit-services section. The loan-payment calculator has its own `/calculator` page.

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. In the project terminal, run:

```bash
npm install
npm run dev
```

4. Open the local URL Vite displays, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Main files

- `src/main.jsx`: landing page, interactive credit education panels, and scroll-driven credit-services cards
- `src/LoanCalculatorPage.jsx`: standalone loan calculator page
- `src/styles.css`: responsive layout and styling
- `index.html`: page metadata and font links
- `public/_redirects`: Netlify routes for the calculator and contact pages
- `public/thank-you.html`: confirmation page after a consultation request

The calculator estimates fixed monthly payments from the entered amount, quoted APR, term, and financed fees. It does not evaluate credit history, determine eligibility, or provide lender quotes. Replace the sample founder content before publishing.

## Contact and consultation forms on Netlify

The `/contact` page includes the `consultation` Netlify form. Deploy the site to Netlify, then open the site's **Forms** area and confirm the `consultation` form is detected. Add an email notification for this form in Netlify's form notification settings and set the recipient to `fakherazeem1@gmail.com`; submissions are also available in the Netlify dashboard. A requested consultation date and time is not confirmed until the business replies.

The contact page currently shows clearly labeled sample Austin location, office hours, and phone details. Replace them with verified business information before publishing.
