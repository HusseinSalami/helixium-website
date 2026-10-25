# Helixium website revision

Outcome: Rebuild the marketing site around Helixium ERP, field service, CryptoSettle, MatchPulse, and custom software with localized EN/AR/FR routes, source-grounded claims, and contact-for-pricing placeholders.

## Decisions to evaluate

D1 Keep all prices as TBD in `lib/pricing.ts`. Why: proposed numbers are not approved. If overruled: replace only the centralized market values after approval.
D2 Use neutral local e-invoicing roadmap language for Lebanon, UAE, Saudi Arabia, US, and France. Why: source code does not verify ZATCA/FATOORA, UBL, structured e-invoice, or compliance implementations. If overruled: add only verified integrations.
D3 Keep MatchPulse as a founding-venues waitlist with 50% off for the first 10 venues. Why: there are no customers yet. If overruled: replace programme copy with approved launch evidence.

## Open questions

- Confirm approved ERP hostname, form endpoint, booking URL, and pricing before launch; defaults remain safe placeholders.
- Confirm native review of Arabic and French translations.
- Confirm portfolio client names, stacks, and outcomes; placeholders remain visible.

## Claims for the user to verify

- Market list: Lebanon (USD), UAE (AED), Saudi Arabia (SAR), US (USD), France (EUR).
- No ZATCA/FATOORA, UBL, structured e-invoice, or compliant QR claim is made; local e-invoicing integration is on the roadmap.
- ERP modules, field-service scope, CryptoSettle flows, partner/customer relationships, 14-day trial, WhatsApp, addresses, and agent activity examples are source or user supplied and should be approved.

## Gate facts

- Publish settings: Next build with trailing-slash routes; no production ERP endpoint calls.
- Call sites: none touched in `packages/*`.
- Lanes: build and lint logs are captured separately.
- Adversarial review: pending implementation completion.

## Evidence

- `SEO-PLAN.md`, `build.log`, `lint.log`, `code-review.md`, and UX screenshots.

## Residuals

- Pricing, compliance roadmap, translations, portfolio outcomes, and contact integrations need owner approval.
