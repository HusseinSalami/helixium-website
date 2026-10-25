# Adversarial code review

Independent reviewer: Aristotle subagent, read-only review. Seven v2 rounds and six fresh v3 rounds are represented here; the reviewer did not edit the repository.

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

No remaining structural findings. The reviewer confirmed localized links, semantic regions, RTL styling, distinct Solutions content, route-specific metadata, and no broken internal routes.

## Round 6

Found missing OG assets for module and solution-detail metadata, incomplete translation review labeling, unsupported Payroll and field-service plan assignments, and missing claim inventory entries for no-credit-card and deployment wording.

Disposition: mapped detail pages to existing OG assets, added the required machine-drafted translation label, changed unsupported matrix cells to Contact us, and listed the claims for owner verification.

## Round 7

Found the static-export locale document limitation, incomplete Arabic/French body translations, and mailto progressive-enhancement risk.

Disposition: localized pages now bootstrap document `lang` and `dir` before content display, forms retain an explicit no-JavaScript mailto action, and the translation/static-export limitation remains a documented launch residual.

## v3 Round 1

The fresh v3 review found annual-cycle labeling, cross-currency savings math, missing mobile comparison guidance, focusable mock actions, light-theme contrast, grouped OG assets, and mixed-language surfaces. It also challenged approved numeric prices, the required proof row, and the explicitly allowed `Sample data` label.

Disposition: kept the user-approved prices, proof row, and sample-data label; corrected annual `/year` labeling, billing toggle semantics, non-USD savings behavior, the Olympus 20-user cap, mobile comparison cue, disabled mock controls, light-theme contrast, add-on USD labels, and page-specific OG assets.

## v3 Round 2

The targeted review confirmed those fixes. Remaining findings were incomplete visible localized copy, static-export root `lang`/`dir`, generic competitor source URLs, and Lighthouse trace-gatherer warnings.

Disposition: localized the home hero, cards, process, product mock, pricing, savings, and footer; retained the static-export language limitation as a documented residual; kept competitor cells as `Check` with the supplied official source pages; and recorded the trace warning with the Lighthouse evidence.

## v3 Round 3

The reviewer confirmed the localized home experience and found grouped OG assets, add-on currency ambiguity, and the footer's hybrid wording.

Disposition: created route-specific OG assets, labeled add-ons in USD, and changed the footer to `Cloud or on-premise`.

## v3 Round 4

The reviewer found English fragments in localized pricing: unit suffixes and the neutral roadmap note.

Disposition: localized `/month`, `/year`, per-venue units, and the neutral local e-invoicing roadmap sentence without making a compliance claim.

## v3 Round 5

The reviewer confirmed the unit labels and found only the English roadmap note remaining on Arabic and French pricing.

Disposition: localized that note while retaining the same neutral meaning and the English source wording for the English market view.

## v3 Round 6

Final verification: pass. No new findings remain. The static-export root language attribute and Lighthouse trace-gatherer warning remain documented residuals, not product-claim or visual blockers.

## Remaining launch verification

- Set `NEXT_PUBLIC_ERP_APP_URL` to the confirmed production ERP `/signup` URL before release; the repository default is a placeholder pending verification.
- Verify the product, no-credit-card, Cloud/on-premise/hybrid, and partner/customer claims against approved launch copy.
- Complete native review of Arabic and French copy; current translations are machine-drafted, pending native review.
- Recheck `public/_redirects` against the source Wix sitemap before publishing.
- The portfolio has six unique optimized images for seven requested cards; the ball-game card reuses a source image because no seventh verified asset was available.

## Evidence lanes

- Build: PASS in `build-v3-final.log`; 73 static pages generated.
- Lint: PASS in `lint-v3-final.log`.
- Internal link scan: PASS, 0 broken generated internal links.
- Lighthouse: provided local mobile reports in `lighthouse-v3-mobile-final11.log`; home, plans, and compare scored 100 in all four categories. Lighthouse logs include a Chrome trace-gatherer warning for trace-dependent audits.
- UX: captured fresh before/after English desktop/mobile, Arabic mobile, plans, and compare screenshots in the v3 staging set.
- No `packages/*` symbols were touched; call sites: none.
