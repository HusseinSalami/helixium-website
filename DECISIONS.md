# Helixium website revision

Outcome: The site now uses the official Wix Helixium artwork in the chrome, ERP preview, About brand badge, favicon set, JSON-LD, and social cards. The official black mark is used on light surfaces and the white artwork is embedded in dark social cards.

## Decisions to evaluate

D1 Keep the user-approved 2026-10-26 ERP price table in `lib/pricing.ts`; annual billing is 10x monthly. Why: the user approved the values. If overruled: edit the one pricing data file and its derived surfaces.
D2 Keep the ERP bundle split in `lib/plans.ts`. Why: bundle evidence is authoritative. If overruled: update cards, matrix, FAQ, and JSON-LD together.
D3 Keep old standalone field-service URLs as 301 redirects to `/erp/field-service/`. Why: preserve existing links while keeping one canonical module path. If overruled: update redirects, sitemap, metadata, and internal links together.
D4 Treat Arabic and French as machine-drafted, pending native review. Why: the automated localized-string check passes. If overruled: replace copy and metadata without changing route structure.
D5 Use the supplied Wix icon, wordmark crop, badge, and white dark-surface variants as the only Helixium mark. Why: they are the user's official assets. If overruled: replace the checked-in brand assets, favicon set, JSON-LD logo, and OG artwork together.

## Open questions

- Confirm the configured ERP signup, form endpoint, booking URL, and host-specific 404 behavior before release; local defaults remain safe fallbacks.
- Confirm customer-story publication, portfolio client names, partner relationships, implementation claims, and the Wix redirect inventory.

## Claims for the user to verify

- Annual ERP plans include free onboarding and data migration from Excel, QuickBooks, or Odoo; monthly onboarding is quoted with setup.
- Pantheon includes 3 users and Lebanon extra users are USD 9/month; Olympus includes 10 users and extra users are quoted; Elysium users are custom.
- Odoo comparison uses a $24/user/month benchmark labelled as published list pricing in October 2026.
- ERP module behavior, approval flow, cloud/on-premise wording, addresses, customer relationships, trial behavior, and portfolio stacks.
- UAE, KSA, and France use only the neutral local e-invoicing roadmap wording; no compliance implementation is claimed.
- MatchPulse proof confirms predictions, results, points, correct-call counts, global ranking, and invite-only leaderboards; prize mechanics, exact scoring, venue/sponsor controls, and reuse rights for visible handles remain unconfirmed.

## Gate facts

- Publish settings: static Next build with trailing-slash routes; no production ERP endpoint calls; no `packages/*` symbols touched.
- Build and checks: PASS in `build-logo.log`; lint: PASS in `lint-logo.log`; review: one fresh logo-focused read-only subagent round, with findings resolved.
- The static export embeds the official OG logo artwork; the PNG favicon is registered for English and localized metadata.

## Evidence

- `logo-header-1280.png`, `logo-header-mobile.png`, `logo-footer.png`, `logo-favicon-tab-crop.png`, and `logo-og-home.png` show the official artwork in the requested surfaces.
- `build-logo.log`, `lint-logo.log`, and `code-review.md` record verification and the fresh adversarial review.

## Residuals

- Native Arabic and French review and release-owner verification remain.
- Production form, booking, ERP signup, and Cloudflare redirect behavior need a smoke test.
