# Helixium website revision

Outcome: The site uses the official Wix Helixium artwork in the chrome, ERP preview, About brand badge, favicon set, JSON-LD, and social cards. The homepage now introduces Helixium as a company with three equal paths, while the ERP remains the flagship and owns the detailed pricing experience.

## Decisions to evaluate

D1 Keep the user-approved 2026-10-26 ERP price table in `lib/pricing.ts`; annual billing is 10x monthly. Why: the user approved the values. If overruled: edit the one pricing data file and its derived surfaces.
D2 Keep the ERP bundle split in `lib/plans.ts`. Why: bundle evidence is authoritative. If overruled: update cards, matrix, FAQ, and JSON-LD together.
D3 Keep old standalone field-service URLs as 301 redirects to `/erp/field-service/`. Why: preserve existing links while keeping one canonical module path. If overruled: update redirects, sitemap, metadata, and internal links together.
D4 Treat Arabic and French as machine-drafted, pending native review. Why: the automated localized-string check passes. If overruled: replace copy and metadata without changing route structure.
D5 Use the supplied Wix icon, wordmark crop, badge, and white dark-surface variants as the only Helixium mark. Why: they are the user's official assets. If overruled: replace the checked-in brand assets, favicon set, JSON-LD logo, and OG artwork together.
D6 Keep plans, savings calculator, and agent automation steps on Pricing rather than the homepage. Why: the company-level homepage needs equal product entry points while the ERP detail remains available. If overruled: restore those sections to the homepage and revise its length and SEO.

## Open questions

- Confirm configured ERP signup, form endpoint, booking URL, and host-specific 404 behavior before release.
- Confirm customer-story publication, portfolio names, partner relationships, implementation claims, and Wix redirects.
- Confirm whether any remaining English source strings in localized shared chrome should be replaced before native review; the new homepage copy is translated in Arabic and French.

## Claims for the user to verify

- Annual ERP plans include free onboarding and data migration from Excel, QuickBooks, or Odoo; monthly onboarding is quoted with setup.
- Pantheon includes 3 users and Lebanon extra users are USD 9/month; Olympus includes 10 users and extra users are quoted; Elysium users are custom.
- Odoo comparison uses a $24/user/month benchmark labelled as published list pricing in October 2026.
- ERP module behavior, approval flow, cloud/on-premise wording, addresses, customer relationships, trial behavior, and portfolio stacks.
- UAE, KSA, and France use only the neutral local e-invoicing roadmap wording; no compliance implementation is claimed.
- MatchPulse proof confirms predictions, results, points, correct-call counts, global ranking, and invite-only leaderboards; prize mechanics, exact scoring, venue/sponsor controls, and reuse rights remain unconfirmed.

## Gate facts

- Publish settings: static Next build with trailing-slash routes; no production ERP endpoint calls; no `packages/*` symbols touched.
- Build and checks: PASS in `build-home-reposition.log`; lint: PASS in `lint-home-reposition.log`; review: one fresh read-only subagent round for the homepage repositioning, with findings resolved.
- The static export embeds the official OG logo artwork; PNG favicon is registered for all metadata.

## Evidence

- `homepage-company-desktop.png`, `homepage-company-mobile.png`, `erp-page-desktop.png`, `plans-moved-desktop.png`, `plans-moved-mobile.png`, and `homepage-ar-company.png` show the repositioned pages.
- `build-home-reposition.log`, `lint-home-reposition.log`, `code-review.md`, and `localized.svg` record verification and OG/review handling.

## Residuals

- Native Arabic and French review and release-owner verification remain.
- Production form, booking, ERP signup, and Cloudflare redirect behavior need a smoke test.
