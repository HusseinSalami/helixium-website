# Helixium website revision

Outcome: The site now uses a compact light-first navigation, the ERP owns field service at `/erp/field-service/`, and the retired payment product is absent from active source and generated output. EN/AR/FR routes, pricing, redirects, and evidence were rebuilt locally.

## Decisions to evaluate

D1 Keep the user-approved 2026-10-26 ERP price table in `lib/pricing.ts`: LB USD 49/129/from399, US USD 99/249/from999, UAE AED 229/579/from1,799, KSA SAR 229/599/from1,999, France EUR 79/199/from749; annual billing is 10x monthly. Why: the user approved the values. If overruled: edit the one pricing data file and its derived surfaces.
D2 Keep the ERP bundle split in `lib/plans.ts`: Pantheon base records, Olympus front-line modules and automation, Elysium customization and advanced configuration. Why: bundle evidence is authoritative. If overruled: update cards, matrix, FAQ, and JSON-LD together.
D3 Keep old standalone field-service URLs as 301 redirects to the ERP module route. Why: preserve existing links while keeping one canonical product path. If overruled: update redirects, sitemap, metadata, and internal links together.
D4 Treat Arabic and French as machine-drafted, pending native review. Why: the automated localized-string check passes. If overruled: replace copy and metadata without changing route structure.

## Open questions

- Confirm the configured ERP signup, form endpoint, booking URL, and host-specific 404 behavior before release; local defaults remain safe fallbacks.
- Confirm customer-story publication, portfolio client names, partner relationships, and implementation claims.
- Confirm the final Wix redirect inventory against the source sitemap.

## Claims for the user to verify

- Annual ERP plans include free onboarding and data migration from Excel, QuickBooks, or Odoo; monthly onboarding is quoted with setup.
- Pantheon includes 3 users and Lebanon extra users are USD 9/month; Olympus includes 10 users and extra users are quoted; Elysium users are custom.
- Odoo comparison uses a $24/user/month benchmark labelled as published list pricing in October 2026.
- ERP module behavior, approval flow, cloud/on-premise wording, addresses, customer relationships, trial behavior, and portfolio stacks.
- UAE, KSA, and France use only the neutral local e-invoicing roadmap wording; no compliance implementation is claimed.
- MatchPulse proof confirms predictions, results, points, correct-call counts, global ranking, and invite-only leaderboards; prize mechanics, exact scoring, venue/sponsor controls, and reuse rights for visible handles remain unconfirmed.

## Gate facts

- Publish settings: static Next build with trailing-slash routes; no production ERP endpoint calls; no `packages/*` symbols touched.
- Build and translation/product-language checks: PASS in `build-v4.log`; lint: PASS in `lint-v4.log`.
- Lighthouse provided-device mobile: home and pricing are 100/100/100/100 in `lighthouse-home-mobile-v4.json` and `lighthouse-plans-mobile-v4.json`.
- Adversarial review: one fresh read-only subagent round; final findings and disposition are in `code-review.md`.

## Evidence

- `home-desktop.png`, `home-mobile.png`, `mobile-menu-open.png`, `header-1024.png`, `header-1280.png`, `header-1440.png`, `field-service-desktop.png`, `pricing-desktop.png`, `compare-desktop.png`, `about-desktop.png`, `home-ar.png`, `pricing-ar.png`, `home-fr.png`, and `pricing-fr.png` are fresh Playwright captures after scrolling.
- `SEO-PLAN.md`, `build-v4.log`, `lint-v4.log`, Lighthouse JSON reports, and `code-review.md`.

## Residuals

- Native Arabic and French review and release-owner verification remain.
- Cloudflare redirect behavior and external form/booking integrations need a production smoke test.
