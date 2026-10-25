# Helixium website phase 1

Outcome: Built a static-export Next.js marketing site for Helixium Solutions with responsive English copy, en/ar/fr routes, RTL direction for Arabic, and a configurable ERP trial CTA. No failing-first test applies because this is new site work, not a defect fix.

## Decisions to evaluate

D1 Use a configurable `NEXT_PUBLIC_ERP_APP_URL` with default `https://erp.helixiumsolutions.com/signup`. Why: the ERP repo exposes `/signup` but no public hostname. If overruled: set the confirmed public ERP app URL before publishing.

D2 Use clean text partner placeholders for Medco, Gandour, Endomedix, and one unnamed partner. Why: live logo assets were not available for verified download. If overruled: replace placeholders with approved logo files.

D3 Keep the contact form as `mailto:` only. Why: native server posting is phase 2 and no endpoint was provided. If overruled: wire the approved form service and privacy/anti-spam flow.

D4 Use English fallback copy for Arabic and French, with RTL layout for Arabic. Why: only English copy was required in phase 1. If overruled: add reviewed translations before launch.

## Open questions

- Confirm the production ERP web URL used by `NEXT_PUBLIC_ERP_APP_URL`; the current default is a placeholder pending verification.
- Confirm the fourth partner name and supply approved logo assets if they should appear.
- Approve reviewed Arabic and French copy before treating those locales as complete.
- Confirm whether `mailto:` is acceptable for launch or a form endpoint is required.

## Claims for the user to verify

- Helixium sells software focused on agentic AI and positions the ERP as doing work, not only reports.
- ERP modules represented: sales, purchasing, accounting, inventory, production, payroll, POS, work orders, repair orders, and reporting.
- Field service includes work orders, dispatch/scheduling, checklists, service contracts, service requests, technician workflows, and service history.
- Predictions includes MatchPulse and forecasting products.
- English, Arabic, French, and RTL support; ERP + POS + field service in one platform; cloud, on-premise, and hybrid deployment.
- Human approval and audit trail are product direction; activity feed examples are illustrative demo data, not shipped autonomous agents.
- “No credit card required” is a requested marketing line and still needs explicit confirmation before publication.
- Bank matches, payment-reminder drafts, reorder PO drafts, dispatch suggestions, and lot-expiry flags in the UI are illustrative capabilities to verify, not proof of autonomous production agents.
- Trial is 14 days. Plans are Trial, Pro, and Enterprise. Trial limits are 1 company, 25 employees, 100 invoices/month; Pro is up to 5, 100, 1,000; Enterprise is up to 50, 10,000, 100,000.
- Medco, Gandour, Endomedix, and a fourth partner placeholder are approved partner references.
- Contact details are info@helixiumsolutions.com, +961 71 49 52 73, +1 (512) 716-9315, and 13800 Lyndhurst Street, Austin, TX 78717.

## Gate facts

- Publish settings: static export (`output: export`), trailing slashes, unoptimized images; no deploy, DNS, Wix, or production API calls.
- Call sites: none touched in `packages/*`.
- Build: PASS, `build.log`; lint: PASS, `lint.log`; adversarial review: 1 round planned.

## Evidence

- `build.log`: production static export and route generation.
- `lint.log`: Next lint with zero warnings/errors.
- `home-desktop.png`, `home-mobile.png`, `pricing.png`, `agents.png`, `contact.png`: local preview UX evidence.
- `code-review.md`: independent adversarial review and dispositions.

## Residuals

- Partner images, approved translations, and production ERP hostname remain launch inputs.
