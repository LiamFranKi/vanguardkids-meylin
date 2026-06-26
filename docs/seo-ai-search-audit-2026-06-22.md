# Vanguard Kids Academy SEO + AI Search Audit

Date: 2026-06-22
Branch: seo-ai-search-audit-v2
Starting main HEAD confirmed: bf4364e merge Firefox hero image hotfix
Audit scope: Audit only. No source code changes recommended here were implemented.

## 1. Executive Summary

Vanguard Kids Academy is crawlable and the primary public routes return 200 locally, but several high-impact SEO and AI-search issues should be fixed before the site is considered search-ready.

Highest-impact issues:

1. The sitemap omits `/services`, but `/services` is a current public route and main navigation item.
2. Deprecated `/campus/dover` and `/campus/fort-myers` routes still return 200 and are listed in `sitemap.xml`.
3. Global JSON-LD for both campuses points to `/campus/*` URLs instead of the current `/locations/*` URLs.
4. `public/llms.txt` still lists `/campus/*`, omits `/services`, and describes Early Head Start without clearly stating Dover-only availability.
5. No canonical tags are emitted on any audited HTML route.
6. Several routes use inherited generic metadata, including `/programs`, `/apply`, `/programs/vpk`, and `/privacy`.
7. Page titles that manually include "Vanguard Kids Academy" are duplicated by the layout title template, for example `Services | Vanguard Kids Academy | Vanguard Kids Academy`.
8. Structured data is site-wide only. There is no route-specific `WebPage`, `BreadcrumbList`, `FAQPage`, `Service`, or current-location schema.
9. Spanish i18n is client-state based, with English-only route URLs and metadata. This is acceptable for UX, but weak for Spanish SEO.
10. The default `SITE_URL` uses the Railway domain `https://vk-website-productcion-production.up.railway.app`. If the business has a real custom domain, this should be changed before serious SEO work.

Overall SEO health estimate: 68/100

Category estimates:

| Category | Score | Notes |
|---|---:|---|
| Technical SEO | 70 | Crawlable, but sitemap/canonical/deprecated route issues are material. |
| Content quality | 78 | Good local and service facts, but some pages need clearer summaries and metadata. |
| On-page SEO | 64 | Inconsistent page metadata and title duplication. |
| Schema | 52 | Useful foundation, but stale URLs and missing page-specific schema. |
| Performance risk | 68 | Build passes, but large image-heavy pages and client-heavy components add risk. |
| AI search readiness | 62 | Strong facts exist, but stale `llms.txt`, stale schema, and route ambiguity reduce clarity. |
| Images/accessibility | 74 | Alt text mostly exists, but decorative images and large assets need optimization review. |

## 2. Current Route Inventory

Required routes checked locally:

| Route | Status | Notes |
|---|---:|---|
| `/` | 200 | Uses global metadata. |
| `/services` | 200 | New route, present in nav/footer, missing from sitemap. |
| `/programs` | 200 | Uses global metadata. |
| `/locations/dover` | 200 | Current Dover route. |
| `/locations/fort-myers` | 200 | Current Fort Myers route. |
| `/faq` | 200 | Has page metadata. |
| `/resources` | 200 | Has page metadata. |
| `/about` | 200 | Has page metadata. |
| `/careers` | 200 | Has page metadata. |
| `/apply` | 200 | Uses global metadata. |
| `/robots.txt` | 200 | Allows all and points to sitemap. |
| `/sitemap.xml` | 200 | Omits `/services`, includes stale `/campus/*`. |
| `/llms.txt` | 200 | Exists, but stale. |

Additional routes discovered:

| Route | Status | Recommendation |
|---|---:|---|
| `/campus/dover` | 200 | Deprecated duplicate. Redirect to `/locations/dover` or remove from index. |
| `/campus/fort-myers` | 200 | Deprecated duplicate. Redirect to `/locations/fort-myers` or remove from index. |
| `/programs/vpk` | 200 | Public route in sitemap but not in requested audit list. Needs unique metadata if retained. |
| `/privacy` | 200 | Public route in sitemap. Fine as low-priority utility route. |

Build route inventory from `npm run build` confirms these static routes:

`/`, `/about`, `/apply`, `/campus/dover`, `/campus/fort-myers`, `/careers`, `/faq`, `/locations/dover`, `/locations/fort-myers`, `/privacy`, `/programs`, `/programs/vpk`, `/resources`, `/robots.txt`, `/services`, `/sitemap.xml`.

## 3. Current Metadata Inventory By Route

Route checks were run against `http://localhost:3000`.

| Route | Title | Meta description | Canonical |
|---|---|---|---|
| `/` | `Vanguard Kids Academy` | Generic business description | Missing |
| `/services` | `Services | Vanguard Kids Academy | Vanguard Kids Academy` | Service-specific | Missing |
| `/programs` | `Vanguard Kids Academy` | Generic business description | Missing |
| `/locations/dover` | `Dover Childcare, Preschool & VPK | Vanguard Kids Academy | Vanguard Kids Academy` | Dover-specific | Missing |
| `/locations/fort-myers` | `Fort Myers Childcare, Preschool & VPK | Vanguard Kids Academy | Vanguard Kids Academy` | Fort Myers-specific | Missing |
| `/faq` | `FAQ | Vanguard Kids Academy | Vanguard Kids Academy` | FAQ-specific | Missing |
| `/resources` | `Resources | Vanguard Kids Academy | Vanguard Kids Academy` | Resource-specific | Missing |
| `/about` | `About Us | Vanguard Kids Academy | Vanguard Kids Academy` | About-specific | Missing |
| `/careers` | `Careers | Vanguard Kids Academy | Vanguard Kids Academy` | Careers-specific | Missing |
| `/apply` | `Vanguard Kids Academy` | Generic business description | Missing |
| `/campus/dover` | `Dover Campus | Vanguard Kids Academy | Vanguard Kids Academy` | Generic business description | Missing |
| `/campus/fort-myers` | `Fort Myers Campus | Vanguard Kids Academy | Vanguard Kids Academy` | Generic business description | Missing |
| `/programs/vpk` | `Vanguard Kids Academy` | Generic business description | Missing |
| `/privacy` | `Privacy Policy | Vanguard Kids Academy | Vanguard Kids Academy` | Generic business description | Missing |

Metadata source files:

| File | Current role |
|---|---|
| `app/layout.tsx` | Global metadata, title template, Open Graph, Twitter metadata. |
| `app/services/page.tsx` | Service metadata. |
| `app/locations/dover/page.tsx` | Dover metadata. |
| `app/locations/fort-myers/page.tsx` | Fort Myers metadata. |
| `app/faq/page.tsx` | FAQ metadata. |
| `app/resources/page.tsx` | Resources metadata. |
| `app/about/page.tsx` | About metadata. |
| `app/careers/page.tsx` | Careers metadata. |
| `app/apply/page.tsx` | No metadata export. |
| `app/programs/page.tsx` | No metadata export. It is a client component. |
| `app/programs/vpk/page.tsx` | No metadata export. It is a client component. |

Recommended metadata fixes:

| Route | Recommended title input | Recommended description direction |
|---|---|---|
| `/` | `Childcare & Preschool in Dover and Fort Myers, FL` | State business, locations, age range, VPK, School Readiness, and Dover-only Early Head Start. |
| `/services` | `Childcare Services in Dover & Fort Myers, FL` | Mention infant care, toddler care, preschool, Fort Myers before/after school, and both campuses. |
| `/programs` | `Free VPK, School Readiness & Early Head Start Programs` | Clarify Free VPK and School Readiness at both campuses, Early Head Start at Dover only. |
| `/locations/dover` | `Dover Childcare, Preschool, VPK & Early Head Start` | Include address, phone, hours, ages, Dover-only EHS. |
| `/locations/fort-myers` | `Fort Myers Childcare, Preschool & VPK` | Include address, phone, hours, ages, VPK, School Readiness, before/after school if still current. |
| `/faq` | `Parent FAQ for Childcare & Preschool Enrollment` | Keep concise and intent-driven. |
| `/resources` | `Childcare Financial Assistance Resources` | Mention School Readiness, VPK, and Dover Early Head Start eligibility help. |
| `/about` | `About Vanguard Kids Academy` | Mention early learning academy, two campuses, family-centered care. |
| `/careers` | `Childcare Careers in Dover & Fort Myers` | Mention teaching/support roles without implying active guaranteed openings beyond current copy. |
| `/apply` | `Apply or Schedule a Tour` | Mention tour/enrollment steps and both campus phones. |
| `/programs/vpk` | `Free VPK in Dover & Fort Myers, FL` | Mention Florida 4-year-old eligibility, both campuses, and application next steps. |

Implementation notes:

- In `app/layout.tsx`, keep the `template: "%s | Vanguard Kids Academy"` pattern, but page-level `title` values should not already include `| Vanguard Kids Academy`.
- Add explicit `alternates: { canonical: "..." }` per route, or generate them through a helper.
- Add page-level `openGraph` and `twitter` metadata for high-value pages if feasible.

## 4. Current Structured Data Inventory

Current structured data files:

| File | Current behavior |
|---|---|
| `components/seo/JsonLd.tsx` | Emits JSON-LD with `dangerouslySetInnerHTML`. |
| `lib/seo/schema.ts` | Defines `WebSite`, `Organization`, and two `ChildCare` campus schemas. |
| `app/layout.tsx` | Emits `siteJsonLd` globally on every page. |

Current emitted JSON-LD:

1. `WebSite`
2. `Organization`
3. `ChildCare` for Dover
4. `ChildCare` for Fort Myers

The route check counted two JSON-LD script tags on each HTML page because Next may split/serialize the array output, but the underlying schema source is site-wide.

Schema issues:

- `lib/seo/schema.ts` builds campus URLs with `${SITE_URL}/campus/${campus.slug}`. Current location pages are `/locations/dover` and `/locations/fort-myers`.
- Both campus schema descriptions mention Early Head Start, including Fort Myers. This violates the factual guardrail that Early Head Start is Dover-only.
- `openingHours` uses strings like `Mo-Fr 6:30 am - 6:00 pm`. Schema.org generally expects 24-hour style such as `Mo-Fr 06:30-18:00`.
- `sameAs` always includes Facebook and Instagram constants. These should be verified as real official profiles before relying on them for entity reconciliation.
- No route-specific `WebPage`.
- No `BreadcrumbList`.
- No `FAQPage` schema for `/faq`.
- No `Service` or `OfferCatalog` schema for `/services` or `/programs`.
- No per-page `@id` relationships connecting `WebPage` to the relevant campus/business entity.

Schema recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P0 | Update campus schema URLs to `/locations/*` and remove Fort Myers Early Head Start from schema description. | `lib/seo/schema.ts` |
| P1 | Add per-campus `ChildCare` schema on each location page or generate accurate campus entities globally using current URLs. | `lib/seo/schema.ts`, `app/locations/*/page.tsx` |
| P1 | Add `WebPage` and `BreadcrumbList` schema for all core routes. | `lib/seo/schema.ts`, route pages, or a shared metadata/schema helper |
| P1 | Add FAQ schema for existing FAQ content for AI/LLM clarity. Do not promise Google FAQ rich results. | `app/faq/page.tsx`, `lib/seo/schema.ts` |
| P2 | Add `Service` or `OfferCatalog` schema for infant care, toddler care, preschool, before/after school, VPK, School Readiness, and Dover-only EHS. | `app/services/page.tsx`, `app/programs/page.tsx`, `lib/seo/schema.ts` |
| P2 | Add `geo` only if verified coordinates are available from a trusted source. | `lib/constants.ts`, `lib/seo/schema.ts` |
| P3 | Add `JobPosting` only if each role has real active posting details, employment type, valid through date, location, and hiring org details. | `app/careers/page.tsx`, `lib/seo/schema.ts` |

Note: The installed SEO skill guidance says Google retired broad FAQ rich results as of May 7, 2026. FAQ schema can still help AI/LLM understanding, but should not be sold as a Google SERP rich-result win.

## 5. Crawlability Findings

Finding: `/services` is missing from the sitemap.

- Why it matters: `/services` is a current public route, linked from nav/footer/homepage, and contains important service intent terms such as infant care, toddler care, preschool, and before/after school.
- File: `app/sitemap.ts`
- Recommendation: Add `{ path: "/services", priority: 0.85, changeFrequency: "monthly" }`.
- Priority: P0
- Complexity: Low
- Risk: Low
- Failure check: `/sitemap.xml` does not include `/services` after implementation.

Finding: Deprecated `/campus/*` routes are still indexable and listed in sitemap.

- Why it matters: Duplicate location pages split local SEO signals and confuse crawlers, LLMs, and Google about the canonical location URLs.
- Files: `app/campus/dover/page.tsx`, `app/campus/fort-myers/page.tsx`, `app/sitemap.ts`, `lib/seo/schema.ts`, `public/llms.txt`
- Recommendation: Redirect `/campus/dover` to `/locations/dover` and `/campus/fort-myers` to `/locations/fort-myers` with permanent redirects, then remove `/campus/*` from sitemap and schema.
- Priority: P0
- Complexity: Low to Medium
- Risk: Medium because old links may exist externally; redirects preserve value.
- Failure check: `/campus/dover` or `/campus/fort-myers` still returns 200.

Finding: Canonical tags are missing.

- Why it matters: Canonicals clarify preferred URLs, especially while old `/campus/*` routes exist.
- Files: `app/layout.tsx`, individual route pages, possible shared metadata helper.
- Recommendation: Add canonical URLs for all indexable pages.
- Priority: P1
- Complexity: Medium
- Risk: Low
- Failure check: route source lacks `<link rel="canonical">`.

Finding: `robots.txt` is simple but acceptable.

- Current output: allows all and points to sitemap.
- File: `app/robots.ts`
- Recommendation: Keep allow-all unless private/staging routes are added. Confirm the sitemap URL uses the final production domain.
- Priority: P2
- Complexity: Low
- Risk: Low

Finding: Production domain may be temporary Railway domain.

- Why it matters: Search equity should consolidate on the final public domain, not a deployment hostname.
- File: `lib/constants.ts`
- Recommendation: Confirm whether `https://vk-website-productcion-production.up.railway.app` is the intended canonical domain. If there is a custom domain, set `NEXT_PUBLIC_SITE_URL` in Railway and update defaults/documentation.
- Priority: P1 if custom domain exists, P3 if Railway URL is intentionally public.
- Complexity: Low
- Risk: Medium due to canonical/sitemap entity impact.

## 6. Local SEO Findings

Dover page:

- URL: `/locations/dover`
- Status: 200
- NAP visible: Yes
- Address: `12660 Sydney Rd, Dover, FL 33527`
- Phone: `(813) 530-0032`
- Hours: `Mon-Fri: 6:30 am - 6:00 pm`
- Ages: `6 weeks - 12 years`
- Programs shown: Early Head Start, Free VPK, School Readiness
- Local SEO quality: Strong page content, but missing canonical, route-specific schema, and stronger title cleanup.

Fort Myers page:

- URL: `/locations/fort-myers`
- Status: 200
- NAP visible: Yes
- Address: `465 Carolina Ave, Fort Myers, FL 33905`
- Phone: `(239) 694-5912`
- Hours: `Mon-Fri: 6:00 am - 6:00 pm`
- Ages: `6 weeks - 12 years`
- Programs shown: Free VPK, School Readiness
- Local SEO quality: Strong page content, correctly avoids Early Head Start in page content, but global schema still incorrectly implies EHS applies to Fort Myers.

Local SEO recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P0 | Fix Fort Myers schema to avoid Early Head Start. | `lib/seo/schema.ts` |
| P1 | Use current `/locations/*` URLs in all local schema `url` and `@id` values. | `lib/seo/schema.ts` |
| P1 | Add explicit campus-specific schema with address, phone, hours, image, area served, and services. | `lib/seo/schema.ts`, `app/locations/*/page.tsx` |
| P1 | Add direct footer links to both location pages, not only NAP text and phone links. | `components/layout/Footer.tsx` |
| P2 | Add verified `geo` coordinates if available. Do not guess. | `lib/constants.ts`, `lib/seo/schema.ts` |
| P2 | Add Google Maps/GBP links only if official profile URLs are verified. | `lib/constants.ts`, location pages |
| P3 | Consider city/service landing summaries only after the core location pages are clean. Avoid thin duplicate location pages. | Future content branch |

## 7. AI Search / LLM Readability Findings

Strengths:

- The site clearly states the business type: childcare, preschool, daycare, early education.
- The two campuses are named and include addresses, phones, hours, and age range in visible crawlable text.
- The services page cleanly separates infant care, toddler care, preschool, and Fort Myers before/after school.
- Location pages clearly show campus-specific programs.
- FAQ and resources pages provide concise parent-oriented answers.

Issues:

- `public/llms.txt` is stale and points AI crawlers to `/campus/*` instead of `/locations/*`.
- `public/llms.txt` omits `/services`, even though services are now a primary information architecture element.
- `public/llms.txt` lists Early Head Start as a program generally without stating it is Dover-only.
- Global schema conflicts with page content by implying Early Head Start near Fort Myers.
- `/programs` is an interactive client component where only one tab panel is visible at a time. The text is present in HTML, but hidden panels may be less directly summarized by some tools.
- Several high-intent pages inherit generic metadata, reducing snippet and AI answer clarity.
- No concise page summaries or route-specific schema tell LLMs "what this page is" in a machine-readable way.

AI/LLM recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P0 | Update `llms.txt` to current routes and Dover-only Early Head Start. | `public/llms.txt` |
| P0 | Resolve schema/page conflict around Fort Myers EHS. | `lib/seo/schema.ts` |
| P1 | Add concise, crawlable "quick facts" sections to location pages if not too visually disruptive. | `app/locations/*/page.tsx` |
| P1 | Add route-specific `WebPage` schema with `description` and `about`/`mainEntity`. | `lib/seo/schema.ts`, route pages |
| P2 | Add a machine-readable services/programs inventory in schema and `llms.txt`. | `app/services/page.tsx`, `app/programs/page.tsx`, `public/llms.txt` |

## 8. Bilingual / i18n SEO Findings

Current approach:

- `app/layout.tsx` sets `<html lang="en">`.
- `LangProvider` defaults to English state in `lib/i18n/context.tsx`.
- `LocalizedText` switches text based on client state.
- There are no Spanish URL routes such as `/es/...`.
- There are no `hreflang` alternates.
- Metadata is English-only.

Implications:

- The current Spanish UX helps bilingual users after interaction, but it is not a strong Spanish SEO implementation.
- Search engines and AI crawlers are likely to treat the canonical site as English.
- Spanish content may be visible in client bundles and hydrated HTML after toggling, but it does not have stable URLs, Spanish metadata, Spanish canonicals, or hreflang.
- A localStorage-only or state-only language toggle is not enough for reliable Spanish search indexing.

Recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P1 | Decide whether Spanish SEO matters now. If yes, create stable Spanish routes, likely `/es`, `/es/services`, `/es/programs`, `/es/locations/dover`, etc. | App router structure, i18n utilities |
| P1 | Add `hreflang` alternates only when Spanish routes exist and content parity is intentional. | route metadata helpers |
| P2 | Keep current toggle for UX, but do not treat it as full bilingual SEO. | `lib/i18n/context.tsx`, `components/i18n/LocalizedText.tsx` |
| P2 | Add Spanish metadata for Spanish routes if built. | route metadata |
| P3 | If Spanish SEO is not in scope, document that English is the canonical search language for now. | README/docs |

Do not add hreflang until real alternate URLs exist.

## 9. Internal Linking Findings

Strengths:

- Main nav links `/services`, `/programs`, `/about`, `/careers`, `/resources`, `/faq`, and location dropdown links.
- Homepage hero includes `/services`.
- Homepage location cards link to `/locations/*`.
- Services page links to both location pages.
- FAQ links to both location pages.
- Resources links to `/programs`, `/faq`, `/apply`, and Dover for Early Head Start.

Gaps:

- Footer does not directly link the Dover and Fort Myers location pages, only displays address and phone.
- Deprecated `/campus/*` pages are not linked by current nav, but remain in sitemap/schema/llms.
- `/programs/vpk` is in sitemap and linked by legacy campus components, but not prominent in current information architecture.
- Program tab links use hashes like `/programs#free-vpk`, but the active program component also uses client state. Hash navigation may not activate the intended tab without additional logic.

Recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P1 | Add footer links to `/locations/dover` and `/locations/fort-myers`. | `components/layout/Footer.tsx` |
| P1 | Remove or redirect stale `/campus/*` routes. | `app/campus/*`, `next.config.ts` or route redirects |
| P2 | Ensure `/programs#free-vpk`, `/programs#school-readiness`, and `/programs#early-head-start` expose the expected panel when loaded from links. | `app/programs/page.tsx` |
| P2 | Decide whether `/programs/vpk` should remain a separate SEO landing page. If yes, strengthen metadata and internal links. If no, remove from sitemap and redirect to `/programs#free-vpk`. | `app/programs/vpk/page.tsx`, `app/sitemap.ts` |

## 10. Performance / Core Web Vitals Risks

No Lighthouse audit was run. Findings are code-inspection and route-size based.

Observed risks:

- HTML payloads are large for several pages, especially `/careers` at about 182 KB and `/resources` at about 121 KB in local dev output.
- Many pages use image-heavy visual sections with priority images.
- Multiple pages import `framer-motion` and client components for content that is SEO-critical.
- Google Maps iframes are lazy-loaded, which is good, but still add third-party cost when reached.
- Some old root-level images remain in `public/`, increasing maintenance confusion even if not directly used.
- The project uses `next/image`, which is good, but image dimensions, compression, and final asset sizes should be reviewed.
- Decorative SVG/pattern backgrounds and motion should be checked for mobile CPU cost.

Recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P1 | Run Lighthouse/PageSpeed after SEO fixes on production URL, using INP, LCP, CLS, and TTFB. | External check |
| P2 | Audit actual image file sizes under `public/images/campuses` and hero images. Compress oversized PNGs if needed. | `public/images`, `public/*.png`, `public/*.jpg` |
| P2 | Avoid marking too many images `priority`. Keep priority to true above-fold LCP images only. | route pages and components |
| P2 | Consider server-rendered static text for SEO-critical program/service descriptions where possible. | `app/programs/page.tsx`, `app/apply/page.tsx`, client components |
| P3 | Remove unused legacy root-level image assets after confirming references. | `public/` |

## 11. Accessibility / Search Readability Notes

Strengths:

- Most meaningful images have descriptive alt text.
- Decorative images generally use empty alt or `aria-hidden`.
- Phone links are present in footer, location pages, and apply page.
- Many CTAs use descriptive visible text.

Issues and risks:

- Social icon links in the footer use icon-only anchors without visible text or an `aria-label`.
- Some decorative SVG/pattern elements should consistently include `aria-hidden="true"`.
- `/apply` has a default "Call Us Now" button pointing only to Dover phone, while the page later offers both campuses. For local SEO and UX, the above-fold contact action could avoid seeming Dover-only.
- Some content cards use very compact labels that may not fully describe destination context to assistive technology or AI extraction.

Recommendations:

| Priority | Recommendation | Files likely involved |
|---|---|---|
| P1 | Add `aria-label` to footer Facebook and Instagram links. | `components/layout/Footer.tsx` |
| P2 | Make `/apply` above-fold contact action campus-neutral or present both campus phone choices. | `app/apply/page.tsx` |
| P2 | Ensure all purely decorative SVGs/patterns have `aria-hidden="true"`. | route pages and components |
| P3 | Consider screen-reader-only clarifiers for repeated "Learn More" links in cards. | location/services/resources pages |

## 12. Stale / Deprecated Route And Schema Findings

Stale route artifacts:

| Artifact | Current issue | File |
|---|---|---|
| `/campus/dover` page | Still returns 200. | `app/campus/dover/page.tsx` |
| `/campus/fort-myers` page | Still returns 200. | `app/campus/fort-myers/page.tsx` |
| Sitemap entries | Includes `/campus/dover` and `/campus/fort-myers`. | `app/sitemap.ts` |
| Schema URLs | Campus schema `url` and `@id` use `/campus/*`. | `lib/seo/schema.ts` |
| `llms.txt` routes | Lists `/campus/*`, omits `/locations/*` and `/services`. | `public/llms.txt` |
| Legacy campus components | Still imported by old `/campus/*` pages. | `components/campus/*` |

Recommended cleanup sequence:

1. Add permanent redirects from `/campus/dover` to `/locations/dover` and `/campus/fort-myers` to `/locations/fort-myers`.
2. Remove `/campus/*` from sitemap.
3. Update schema URLs to `/locations/*`.
4. Update `llms.txt`.
5. After one deploy cycle, consider deleting old `app/campus/*` pages and unused `components/campus/*` only if no longer needed.

## 13. Prioritized Fix List

### P0: Critical Search / Indexing Bugs

1. Add `/services` to sitemap.
   - Problem: New high-value route is omitted.
   - Why it matters: Crawlers and AI tools may under-discover a core service page.
   - Files: `app/sitemap.ts`
   - Complexity: Low
   - Risk: Low
   - External review recommended: No

2. Remove deprecated `/campus/*` URLs from sitemap and redirect them.
   - Problem: Duplicate location URLs are indexable.
   - Why it matters: Splits local SEO signals and confuses canonical route identity.
   - Files: `app/sitemap.ts`, `next.config.ts` or route redirect files, `app/campus/*`
   - Complexity: Medium
   - Risk: Medium
   - External review recommended: No

3. Fix schema URLs and Fort Myers Early Head Start conflict.
   - Problem: JSON-LD points at old URLs and implies EHS for Fort Myers.
   - Why it matters: Structured data conflicts with client-approved facts.
   - Files: `lib/seo/schema.ts`
   - Complexity: Low
   - Risk: Medium because it changes entity data.
   - External review recommended: Optional

4. Update `llms.txt`.
   - Problem: Stale routes and incomplete campus/program distinctions.
   - Why it matters: AI crawlers and summarizers receive outdated site facts.
   - Files: `public/llms.txt`
   - Complexity: Low
   - Risk: Low
   - External review recommended: Optional

### P1: High-Impact SEO / LLM Improvements

1. Add canonical URLs to all indexable routes.
   - Files: `app/layout.tsx`, route metadata exports, or shared metadata helper.
   - Complexity: Medium
   - Risk: Low

2. Fix title duplication.
   - Files: all page metadata exports that already include `Vanguard Kids Academy`.
   - Complexity: Low
   - Risk: Low

3. Add unique metadata for `/programs`, `/apply`, and `/programs/vpk`.
   - Files: `app/programs/page.tsx`, `app/apply/page.tsx`, `app/programs/vpk/page.tsx`.
   - Note: Because these are client components, add server wrapper pages or split client content into child components if needed.
   - Complexity: Medium
   - Risk: Medium

4. Add route-specific structured data.
   - Files: `lib/seo/schema.ts`, route pages.
   - Complexity: Medium
   - Risk: Medium

5. Add direct footer links to both location pages.
   - File: `components/layout/Footer.tsx`
   - Complexity: Low
   - Risk: Low

6. Confirm canonical production domain.
   - Files/settings: `lib/constants.ts`, Railway env var `NEXT_PUBLIC_SITE_URL`.
   - Complexity: Low
   - Risk: Medium

### P2: Polish / Structured Enhancements

1. Add FAQ schema for `/faq` for AI readability.
2. Add `Service` or `OfferCatalog` schema for `/services` and `/programs`.
3. Review `/programs/vpk` strategy: keep as SEO landing page or redirect to `/programs#free-vpk`.
4. Add verified `geo` coordinates if obtained from a trusted source.
5. Compress/review large campus images and reduce overuse of `priority`.
6. Add `aria-label` to social icon links.
7. Improve hash-tab behavior on `/programs`.

### P3: Optional Future Improvements

1. Build real Spanish SEO routes and hreflang if Spanish organic search is a business goal.
2. Add GBP/profile sameAs URLs after official verification.
3. Add WebSite `SearchAction` only if the site gains real search.
4. Add JobPosting schema only for real active jobs with complete structured data.
5. Clean unused legacy public images and old campus components after redirects are proven.

## 14. Suggested Branch Order For Implementation

1. Branch 1: `seo-critical-indexing-fixes`
   - Sitemap `/services`
   - `/campus/*` redirects
   - Schema URL and Fort Myers EHS fix
   - `llms.txt` refresh

2. Branch 2: `seo-metadata-canonicals`
   - Canonical URLs
   - Title duplication cleanup
   - Unique metadata for `/programs`, `/apply`, `/programs/vpk`
   - Open Graph/Twitter cleanup for core pages

3. Branch 3: `seo-structured-data-pages`
   - WebPage/BreadcrumbList
   - FAQPage
   - Service/OfferCatalog
   - Campus entity refinement

4. Branch 4: `seo-i18n-strategy`
   - Decide if Spanish SEO routes are needed
   - Implement `/es/*` routes and hreflang only if approved

5. Branch 5: `seo-performance-accessibility-polish`
   - Lighthouse and PageSpeed checks
   - Image compression
   - Social link labels
   - Program hash-tab behavior

## 15. Exact Files Likely Needing Edits

High confidence:

- `app/sitemap.ts`
- `public/llms.txt`
- `lib/seo/schema.ts`
- `app/layout.tsx`
- `app/services/page.tsx`
- `app/locations/dover/page.tsx`
- `app/locations/fort-myers/page.tsx`
- `app/faq/page.tsx`
- `app/resources/page.tsx`
- `app/about/page.tsx`
- `app/careers/page.tsx`
- `app/programs/page.tsx`
- `app/apply/page.tsx`
- `app/programs/vpk/page.tsx`
- `components/layout/Footer.tsx`
- `next.config.ts` or route-level redirect implementation

Potential cleanup later:

- `app/campus/dover/page.tsx`
- `app/campus/fort-myers/page.tsx`
- `components/campus/*`
- `public/images/campuses/*`
- old root-level files under `public/`
- `lib/i18n/context.tsx`
- `components/i18n/LocalizedText.tsx`

## 16. Checks To Run During Implementation

Required local checks:

```bash
npm run lint
npm run build
```

Required route checks:

- `/`
- `/services`
- `/programs`
- `/programs/vpk` if retained
- `/locations/dover`
- `/locations/fort-myers`
- `/faq`
- `/resources`
- `/about`
- `/careers`
- `/apply`
- `/privacy`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/campus/dover` should redirect if redirects are implemented.
- `/campus/fort-myers` should redirect if redirects are implemented.

For each route, verify:

- HTTP status
- title
- meta description
- canonical
- Open Graph title/description/image where relevant
- JSON-LD validity
- no Fort Myers Early Head Start claim
- sitemap inclusion/exclusion
- no stale `/campus/*` references except redirect rules

Suggested external validation:

- Google Rich Results Test or Schema Markup Validator for JSON-LD.
- PageSpeed Insights after production deploy.
- Search Console URL inspection after production deploy if available.
- Manual check of `robots.txt`, `sitemap.xml`, and `llms.txt` on production.

## 17. External Model Usage Summary

DeepSeek/Gemini review was skipped.

Reason: No environment variable names matching DeepSeek, Gemini, Google, OpenAI, or Anthropic API keys were present in the local environment check. No API keys were printed, logged, hardcoded, or committed.

This audit was completed with Codex as local repo inspector and report writer.

## 18. Do Not Change / Invent Factual Guardrails

Do not invent:

- Accreditations
- Awards
- Testimonials
- Ratings or reviews
- Pricing
- Discounts
- Staff names
- Guarantees
- Licensing claims beyond what is already approved
- Transportation claims
- Unverified social/profile URLs
- Unverified geo coordinates

Preserve these facts:

- Business name: Vanguard Kids Academy
- Business type: childcare, preschool, daycare, early learning academy
- Campuses: Dover and Fort Myers
- Dover address: 12660 Sydney Rd, Dover, FL 33527
- Dover phone: (813) 530-0032
- Dover hours: Mon-Fri, 6:30 am - 6:00 pm
- Dover ages: 6 weeks - 12 years
- Dover programs: Early Head Start, Free VPK, School Readiness
- Fort Myers address: 465 Carolina Ave, Fort Myers, FL 33905
- Fort Myers phone: (239) 694-5912
- Fort Myers hours: Mon-Fri, 6:00 am - 6:00 pm
- Fort Myers ages: 6 weeks - 12 years
- Fort Myers programs: Free VPK, School Readiness
- Early Head Start is Dover-only unless the client confirms otherwise.
- Before & After School is Fort Myers-only for now.
- Infant care, toddler care, and preschool services apply to both campuses.

## Verification Log

Startup:

- `git branch --show-current`: `main`
- `git status --short`: only untracked `dev-server-err.log`, `dev-server.log`, `docs/superpowers/`
- `git remote -v`: `https://github.com/Observant-Fascination/VK-Website-Productcion.git`
- Main HEAD before branch: `bf4364e merge Firefox hero image hotfix`
- Created branch: `seo-ai-search-audit-v2`

Checks:

- `npm run lint`: passed with 4 warnings, no errors.
- `npm run build`: passed.
- Dev server: `http://localhost:3000`

Lint warnings:

- `components/campus/CampusHero.tsx`: unused `stagger`
- `components/campus/CampusLocation.tsx`: unused `Link`
- `components/home/Hero.tsx`: unused `fadeUp`
- `components/home/Hero.tsx`: unused `stagger`

Route check summary:

- All required audited routes returned 200.
- `/llms.txt` returned 200.
- Deprecated `/campus/dover` and `/campus/fort-myers` returned 200.
- No audited HTML route emitted a canonical tag.
- All audited HTML routes emitted site-wide JSON-LD.
