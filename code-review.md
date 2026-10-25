# Adversarial review

Independent reviewer: subagent, full repository review. Five rounds were run. The reviewer did not edit the repository.

## Round 1

Found locale links escaping to English, incomplete locale semantics, unverified ERP CTA hostname, an unlisted no-card claim, duplicate SEO output, ambiguous agent claims, partner placeholder wording, mobile CTA styling, incomplete RTL properties, contact-link affordance, decorative glyph exposure, contrast, and reduced-motion gaps.

Disposition: fixed locale-aware links, static locale root layouts, fallback labeling, metadata/sitemap coverage, illustrative workflow labeling, partner wording, mobile CTA styles, logical RTL properties, contact link styling, decorative glyph hiding, brighter muted text, and reduced-motion support.

## Round 2

Found root English inner routes missing the shared shell, static Arabic/French documents with the wrong root language direction, localized footer escape, generic mobile language controls, semantic footer/panel issues, and incomplete contact autofill.

Disposition: fixed with separate English and localized root layouts, static `lang`/`dir`, localized footer home links, complete mobile locale controls, semantic headings/regions, and contact autofill attributes.

## Round 3

Found generic localized metadata, `/en` duplication, Solutions duplicating Products, and remaining claim/launch verification residuals.

Disposition: removed the `/en` static tree in favor of root English canonical routes, added route-specific localized canonical/alternate metadata, and implemented a distinct Solutions overview. Launch verification residuals remain explicitly documented.

## Round 4

Found metadata imports and route wiring risks after the route-group restructure.

Disposition: corrected import paths and dynamic page props; production build and lint returned green.

## Round 5

No remaining structural findings. The reviewer explicitly confirmed static language direction, complete mobile menu, semantic regions, logical RTL handling, localized links, distinct Solutions content, route-specific metadata, and no broken internal routes.

## Remaining launch verification

- Set `NEXT_PUBLIC_ERP_APP_URL` to the confirmed production ERP `/signup` URL before release; the repository default is a placeholder pending verification.
- Confirm or remove the requested “No credit card required” marketing line.
- Verify the listed product/deployment claims against approved launch copy.
- Confirm the fourth partner reference currently displayed as “Partner network” and provide an approved name/logo if required.
- Confirm the English fallback treatment for Arabic/French until reviewed translations are supplied.
- Confirm `mailto:` is acceptable for contact submission or replace it with an approved form endpoint.

## Evidence lanes

- Build: PASS in `build.log`.
- Lint: PASS in `lint.log`.
- UX: `home-desktop.png`, `home-mobile.png`, `pricing.png`, `agents.png`, `contact.png`.
