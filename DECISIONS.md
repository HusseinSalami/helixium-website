# Helixium website revision

Outcome: v3 presents a light, friendly Helixium ERP site with a product-led hero, approved bundle pricing, a savings calculator, and a cited comparison page. The polish pass verified full-page imagery, balanced headings, localized plans/compare content, and RTL rendering.

## Decisions to evaluate

D1 Use the approved market prices in `lib/pricing.ts`, with annual billing at 10x monthly. Why: the user approved the current matrix for now. If overruled: edit only the centralized pricing data.
D2 Keep local e-invoicing wording neutral for UAE, KSA, and France. Why: no compliance implementation is verified. If overruled: add only a verified integration and matching evidence.
D3 Keep customer stories hidden behind `showCustomerStories = false`. Why: approved metrics, quotes, and outcomes are not available. If overruled: enable only after content approval.
D4 Keep the approved bundle split centralized in `lib/plans.ts`; Olympus owns payroll and field service. Why: the ERP bundle evidence is authoritative. If overruled: update cards, matrix, FAQ, and JSON-LD together.

## Open questions

- Confirm Pantheon 5 users, Olympus 20 users, and Elysium unlimited as the final included-user policy; these are calculator defaults.
- Arabic and French body copy is machine-drafted and needs native review; plans and compare surfaces are localized but still need native review.
- Confirm the ERP signup hostname, form endpoint, booking URL, onboarding-fee policy, and portfolio client names before launch.

## Claims for the user to verify

- Market list and prices: Lebanon USD 39/89/299, UAE AED 179/399/1,499, KSA SAR 179/449/1,699, US USD 79/199/799, France EUR 59/149/599; annual prices are 10x monthly and tax-exclusive.
- One-time onboarding is quoted with setup; no numeric onboarding fees are published.
- CryptoSettle is early access with no published price; MatchPulse founding venues are $99 USD/month.
- Odoo comparison baseline: $24/user/month, and the Oct 2026 date label.
- ERP modules, AI approval flow, cloud/on-premise wording, partner relationships, customer relationships, trial CTA, addresses, and portfolio stacks.
- UAE, KSA, and France use only “Local e-invoicing integration on our roadmap - talk to us before you buy”; no ZATCA/FATOORA, UBL, structured e-invoice, compliant QR, UAE compliance, or French compliance claim is made.

## Gate facts

- Publish settings: static Next build with trailing-slash routes; no production ERP endpoint calls.
- Call sites: none touched in `packages/*`.
- Lanes: final polish build/lint passed in `build-v3-final-polish.log` and `lint-v3-final-polish.log`; final mobile home and plans scores are 100/100/100/100 in the fixed Lighthouse reports.
- Adversarial review: six v3 rounds plus three polish review passes are recorded in `code-review.md`.

## Evidence

- `build-v3-final-polish.log`, `lint-v3-final-polish.log`, `lighthouse-home-mobile-polish-fixed.json`, `lighthouse-plans-mobile-polish-fixed.json`, `polish-fixed-*.png`, `SEO-PLAN.md`, `PRICING-SOURCES.md`, and `code-review.md`.

## Residuals

- Native translation review, final contact integrations, user-inclusion policy, onboarding policy, and customer-story content remain launch-owner decisions; static export keeps the outer HTML language attribute English while the localized route sets language and direction before content display.
