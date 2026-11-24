# Barbra's House of Credit website

A responsive React website built with Vite, custom CSS, and Lucide icons. The landing page features financing and credit information, a rotating financing hero, and an informational loan-payment calculator.

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

- `src/main.jsx`: page sections, rotating hero, and loan calculator
- `src/styles.css`: responsive layout and styling
- `index.html`: page metadata and font links
- `public/thank-you.html`: confirmation page after a successful inquiry

The calculator estimates fixed monthly payments from the entered amount, quoted APR, term, and financed fees. It does not evaluate credit history, determine eligibility, or provide lender quotes. Replace the sample founder content and placeholder phone number before publishing.

## Contact form on Netlify

The inquiry form uses Netlify Forms. Deploy the site to Netlify, then open the site's **Forms** area and confirm the `inquiry` form is detected. To receive email alerts, add an email notification for that form in Netlify's form notification settings. Submissions are also available in the Netlify dashboard.
