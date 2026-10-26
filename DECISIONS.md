# Helixium website revision

Outcome: v3 is a light, friendly product-led site with approved prices, centralized bundles, a savings calculator, a cited comparison, and EN/AR/FR captures.

## Decisions to evaluate

D1 Keep the user-approved 2026-10-26 market price table in `lib/pricing.ts`, with annual billing at 10x monthly and Elysium shown as starting at its listed price. Why: the user approved these prices for now. If overruled: edit the one pricing data file.
D2 Keep UAE, KSA, and France e-invoicing language neutral. Why: no compliance implementation is verified. If overruled: add only verified integration evidence.
D3 Keep customer stories hidden behind `showCustomerStories = false`. Why: approved metrics and quotes are unavailable. If overruled: enable only after content approval.
D4 Keep the bundle split in `lib/plans.ts`; Olympus owns payroll and field service, and CryptoSettle is coming soon. Why: the bundle evidence is authoritative. If overruled: update cards, matrix, FAQ, and JSON-LD together.
D5 Treat Arabic and French as machine-drafted pending native review. Why: the automated identical-string check passes, but language quality still needs a native reviewer. If overruled: replace copy and metadata without changing route structure.

## Open questions

- Confirm whether the approved included-user policy should change: Pantheon 3 users, Olympus 10 users, and Elysium custom are the current defaults.
- Confirm ERP signup, form endpoint, booking URL, and portfolio client names before release.
- Confirm final redirects against the source Wix sitemap and native Arabic/French copy review.

## Claims for the user to verify

- User-approved prices on 2026-10-26: Lebanon USD 49/129/399, UAE AED 229/579/1,799, KSA SAR 229/599/1,999, US USD 99/249/999, France EUR 79/199/749; annual prices are 10x monthly and tax-exclusive.
- Pantheon includes 3 users, Olympus 10, Elysium custom; Pantheon extra-user pricing is scaled by market, and Olympus extra users are quoted.
- Annual plans include free onboarding and data migration from Excel, QuickBooks, or Odoo; monthly onboarding is quoted with setup.
- CryptoSettle is early access with no price; MatchPulse is quoted per venue on request and its deployed World Cup 2026 edition is linked as product proof.
- Odoo benchmark is $24/user/month, labelled as published list pricing in Oct 2026.
- ERP modules, approval flow, cloud/on-premise wording, relationships, trial behavior, addresses, and portfolio stacks.
- UAE, KSA, and France use only local e-invoicing integration on the roadmap; no ZATCA, FATOORA, UBL, structured e-invoice, compliant QR, UAE compliance, or French compliance claim is made.
- MatchPulse public screens confirm score predictions, results, points, correct-call counts, global ranking, and invite-only leaderboards; prize mechanics, exact scoring rules, venue/sponsor branding controls, and permission to reuse visible leaderboard handles remain unconfirmed.

## Gate facts

- Publish settings: static Next build with trailing-slash routes; no production ERP endpoint calls; no `packages/*` symbols touched.
- Build and translation check: PASS in `build-v3-final.log`; lint: PASS in `lint-v3-final.log`.
- Lighthouse mobile, provided-device mode: home, plans, and compare each score 100/100/100/100; see the `lighthouse-*-mobile-v3-final` reports and logs.
- Adversarial review: three fresh read-only passes are captured in `code-review.md`; the final confirmation found no remaining code findings.

## Evidence

- `final-*.png` are fresh full-page desktop/mobile captures after scrolling; `lighthouse-*-mobile-review-fixes.json` are current reports.
- `SEO-PLAN.md`, `PRICING-SOURCES.md`, `build-v3-final.log`, `lint-v3-final.log`, and `code-review.md`.

## Residuals

- Native translations, contact integrations, customer stories, and redirects remain release-owner decisions.
- The configured ERP signup endpoint and host-specific 404 behavior still need a release smoke test.
