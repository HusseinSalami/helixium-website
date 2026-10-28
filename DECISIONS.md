# Helixium website revision

## Outcome

The site now presents Helixium as a software company with three equal entry paths, with the ERP as its flagship.
The UX fix uses one light layout system, one product navigation model, readable MatchPulse proof, and mirrored Arabic/French structure.

## Decisions to evaluate

D1 Keep the approved 2026-10-26 ERP price table in `lib/pricing.ts`; annual billing is 10x monthly. Why: the user approved the values. If overruled: edit the data file and derived pricing surfaces.
D2 Keep Arabic and French machine-drafted pending native review. Why: automated localized-string checks pass. If overruled: replace localized copy and metadata without changing routes.
D3 Keep `/solutions/` and `/customers/` as redirects to the company homepage. Why: the primary navigation is product-led and customer proof is logo-only. If overruled: restore standalone pages and update sitemap, metadata, and redirects.
D4 Use one homepage MatchPulse proof block and one product-page CTA with the existing World Cup ranking crop. Why: it is the clearest available product view. If overruled: replace the crop and its caption together.
D5 Keep the selected-relationships logo strip and Gandour portfolio mention as user-approved company content, with no per-customer usage claims. Why: the user explicitly requested names/logos only and Gandour in the portfolio. If overruled: neutralize those labels and portfolio copy.

## Open questions

- Confirm ERP signup, form endpoint, booking URL, host-specific 404 behavior, and Cloudflare redirect behavior before release; defaults remain the configured environment variables and static redirects.
- Confirm annual onboarding/data-migration wording, ERP behavior, portfolio stacks, addresses, and trial behavior; defaults are the current visible copy.
- Confirm MatchPulse prize mechanics, exact scoring, venue/sponsor controls, and image reuse rights; current copy states only observed screens and deployment facts.
- Confirm native Arabic and French review; default is to ship the machine-drafted translations for review.

## Claims for the user to verify

- Annual ERP plans include free onboarding and data migration from Excel, QuickBooks, or Odoo; monthly onboarding is quoted with setup.
- Pantheon includes 3 users and Lebanon extra users are USD 9/month; Olympus includes 10 users and extra users are quoted; Elysium users are custom.
- Odoo comparison uses a $24/user/month benchmark labelled as published list pricing in October 2026.
- ERP module behavior, approval flow, cloud/on-premise wording, portfolio stacks, addresses, and trial behavior.
- UAE, KSA, and France use only neutral local e-invoicing roadmap wording; no compliance implementation is claimed.
- MatchPulse proof confirms predictions, results, points, correct-call counts, global ranking, and invite-only leaderboards; unconfirmed mechanics remain open above.

## Gate facts

- Publish settings: local commits only; no push, production ERP calls, CRUX, or AutoSDE; no `packages/*` symbols touched.
- Build: PASS in `build-ux-fix.log`; lint: PASS in `lint-ux-fix.log`; translation/product-language checks are included in the build.
- Adversarial review: 3 read-only subagent rounds for this UX fix; final round is captured in `code-review.md`.

## Evidence

- `screenshots-ux-fix-verified.log` records 24 successful desktop/mobile route captures.
- `before-*.png` and `verified-*.png` provide before/after pairs for the homepage, ERP, plans, MatchPulse, About, and Arabic homepage.
- `finding-verification.md` records the finding-by-finding falsifier table.
- `build-ux-fix.log`, `lint-ux-fix.log`, `code-review.md`, and this document are captured evidence.

## Residuals

Native translation review and release-owner verification remain. Production form, booking, ERP signup, redirects, and the approved commercial claims still need release smoke testing.
