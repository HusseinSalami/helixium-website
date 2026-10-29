# Helixium website revision

## Outcome

Helixium is presented as a software company with three equal entry paths and the ERP as its flagship.
The site uses the light system, product navigation, MatchPulse proof, localized RTL/LTR structure, verified portfolio originals, and the official favicon set.

## Decisions to evaluate

D1 Keep the approved 2026-10-26 ERP price table in `lib/pricing.ts`; annual billing is 10x monthly. Why: user approved it. If overruled: edit the data file and derived pricing surfaces.
D2 Keep Arabic and French machine-drafted pending native review. Why: automated localized-string checks pass. If overruled: replace localized copy and metadata without changing routes.
D3 Keep `/solutions/` and `/customers/` as homepage redirects. Why: navigation is product-led and proof is logo-only. If overruled: restore pages and update sitemap, metadata, and redirects.
D4 Keep one homepage MatchPulse proof block and one product-page CTA with the World Cup ranking crop. Why: it is the clearest available product view. If overruled: replace the crop and caption together.
D5 Keep the selected-relationships logo strip and Gandour portfolio mention, with no per-customer usage claims. Why: user requested names/logos only and Gandour in the portfolio. If overruled: neutralize those labels and portfolio copy.
D6 Use named WebP files from the five supplied Wix gallery originals. Why: each source page visibly matches its project. If overruled: replace that image field and asset.
D7 Rasterize PNG, ICO and Apple fallbacks from the bold favicon SVG. Why: every browser format must retain the mark's contrast. If overruled: replace declarations and assets together.

## Open questions

- Confirm signup, form endpoint, booking URL, 404 and Cloudflare redirect behavior; defaults are current environment variables and static redirects.
- Confirm annual onboarding wording, ERP behavior, portfolio stacks, addresses, trial behavior, and MatchPulse mechanics; visible copy uses current verified evidence.
- Confirm native Arabic and French review; machine-drafted translations ship pending review.

## Claims for the user to verify

- Annual ERP plans include free onboarding and data migration from Excel, QuickBooks, or Odoo; monthly onboarding is quoted with setup.
- Pantheon includes 3 users and Lebanon extra users are USD 9/month; Olympus includes 10 users and extra users are quoted; Elysium users are custom.
- Odoo comparison uses a $24/user/month benchmark labelled as published list pricing in October 2026.
- ERP module behavior, approval flow, cloud/on-premise wording, portfolio stacks, addresses, and trial behavior.
- UAE, KSA, and France use neutral local e-invoicing roadmap wording; no compliance implementation is claimed.
- MatchPulse proof confirms predictions, results, points, correct-call counts, global ranking, and invite-only leaderboards; other mechanics remain open.

## Gate facts

- Publish settings: local commits only; no push, production ERP calls, CRUX, or AutoSDE; no `packages/*` symbols touched.
- Build: PASS in `build-favicon-fallback-followup.log`; lint: PASS in `lint-favicon-fallback-followup.log`; translation and product-language checks are included in the build.
- Adversarial review: 4 read-only subagent rounds; final round is in `code-review.md`.

## Evidence

- `portfolio-originals-1440.png`, `portfolio-originals-390.png`, `home-originals-1440.png`, `home-originals-390.png`, `ar-originals-1440.png`, and `ar-originals-390.png` show the final routes.
- `contact-sheet.png` labels the five verified Wix originals beside their project titles.
- `favicon-fallback-check-final.png` shows matching SVG, PNG, ICO and Apple samples on light/dark backgrounds.
- `build-favicon-fallback-followup.log`, `lint-favicon-fallback-followup.log`, `code-review.md`, and this document are captured evidence.

## Residuals

Native translation review and release-owner verification remain. Production form, booking, signup, redirects, and approved commercial claims still need release smoke testing.
