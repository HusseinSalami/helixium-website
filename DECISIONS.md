# Helixium website revision

Outcome: v3 is a light, friendly, product-led site with approved ERP market prices, a centralized bundle matrix, a savings calculator, and a cited comparison page. Final browser captures include English, Arabic RTL, and French routes with team imagery loaded after full-page scrolling.

## Decisions to evaluate

D1 Keep approved market prices in `lib/pricing.ts`, with annual billing at 10x monthly. Why: the user approved these prices for now. If overruled: edit the one pricing data file.
D2 Keep UAE, KSA, and France e-invoicing language neutral. Why: no compliance implementation is verified. If overruled: add only verified integration evidence.
D3 Keep customer stories hidden behind `showCustomerStories = false`. Why: approved metrics and quotes are unavailable. If overruled: enable only after content approval.
D4 Keep the bundle split in `lib/plans.ts`; Olympus owns payroll and field service, and CryptoSettle is coming soon. Why: the bundle evidence is authoritative. If overruled: update cards, matrix, FAQ, and JSON-LD together.
D5 Treat Arabic and French as machine-drafted pending native review. Why: the automated identical-string check passes, but language quality still needs a native reviewer. If overruled: replace copy and metadata without changing route structure.

## Open questions

- Confirm Pantheon 5 users, Olympus 20 users, and Elysium unlimited as the final included-user policy; these remain calculator defaults.
- Confirm ERP signup hostname, form endpoint, booking URL, onboarding-fee policy, and portfolio client names before launch.
- Confirm final redirects against the source Wix sitemap and native Arabic/French copy review.

## Claims for the user to verify

- Prices: Lebanon USD 39/89/299, UAE AED 179/399/1,499, KSA SAR 179/449/1,699, US USD 79/199/799, France EUR 59/149/599; annual prices are 10x monthly and tax-exclusive.
- Onboarding is quoted once with setup; no numeric onboarding fee is published.
- CryptoSettle is early access with no price; MatchPulse founding venues are $99 USD/month.
- Odoo comparison benchmark is $24/user/month, labelled as published list pricing in Oct 2026.
- ERP modules, approval flow, cloud/on-premise wording, partner/customer relationships, trial behavior, addresses, and portfolio stacks.
- UAE, KSA, and France use only local e-invoicing integration on the roadmap; no ZATCA, FATOORA, UBL, structured e-invoice, compliant QR, UAE compliance, or French compliance claim is made.

## Gate facts

- Publish settings: static Next build with trailing-slash routes; no production ERP endpoint calls; no `packages/*` symbols touched.
- Build and translation check: PASS in `build-v3-final.log`; lint: PASS in `lint-v3-final.log`.
- Lighthouse mobile, provided-device mode: home, plans, and compare each score 100/100/100/100; see the `lighthouse-*-mobile-v3-final` reports and logs.
- Adversarial review: one fresh independent review round is captured in `code-review.md`.

## Evidence

- `v3-final-*.png` are fresh full-page desktop/mobile captures; `lighthouse-*-mobile-v3-final.json` are current reports.
- `SEO-PLAN.md`, `PRICING-SOURCES.md`, `build-v3-final.log`, `lint-v3-final.log`, and `code-review.md`.

## Residuals

- Native translations, final contact integrations, pricing policy, onboarding policy, customer-story content, and redirect verification remain launch-owner decisions.
- Static export keeps the outer HTML language attribute English while localized route scripts set language and direction before content display.
