# VK Production v2.1 / Vanguard Kids Academy Website Handoff

Date: 2026-06-14

## Project

- Project name: VK Production v2.1 / Vanguard Kids Academy website
- Local path: `C:\Users\josem\vanguardkids-v2`
- GitHub repo: `https://github.com/Observant-Fascination/VK-Website-Productcion`
- Repo note: `Productcion` is intentionally misspelled in the repo name. Do not rename it.

## Current Source Of Truth

After this batch, the source of truth is `main` after the Fort Myers/location gallery merge.

- Feature branch: `location-fort-myers-page`
- Feature commit: `a4d8b5c feat: add Fort Myers location page and campus galleries`
- Merge commit on `main`: `de7356d merge Fort Myers location page and campus galleries`
- Follow-up handoff commit: this document update, committed after merge

## Completed Today

- Programs page redesign was pushed earlier.
- Dover location page was pushed earlier.
- Fort Myers location page was created at `/locations/fort-myers`.
- Locations dropdown was created and pushed earlier.
- Homepage location cards were wired to Dover and Fort Myers pages.
- Sitemap was updated with both location pages.
- Campus image paths were cleaned and moved to organized campus folders.
- Campus image rename map was created and updated.
- Dover and Fort Myers galleries both use `CampusPhotoCarousel`.
- Maps were verified.
- Virtual tours were verified/corrected.

## Critical Image Source Of Truth

Use organized folders only:

- Dover: `public/images/campuses/dover`
- Fort Myers: `public/images/campuses/fort-myers`

Do not use the old root-level campus image filenames anymore:

- `/FortMyers 1.png`
- `/FortMyers 2.png`
- `/FortMyers 3.png`
- `/FortMyers Campus.png`
- `/Dover image 1.png`
- `/Dover 2.png`
- `/Dover 3.png`
- `/Dover Campus.png`

Keep `public/images/campuses/image-rename-map.md` as the source of truth for old-to-new naming.

## Campus Image Mapping

Dover images:

- `public/images/campuses/dover/dover-01.png`
- `public/images/campuses/dover/dover-02.png`
- `public/images/campuses/dover/dover-03.png`
- `public/images/campuses/dover/dover-04.png`
- `public/images/campuses/dover/dover-05.png`
- `public/images/campuses/dover/dover-06.png`
- `public/images/campuses/dover/dover-07.png`
- `public/images/campuses/dover/dover-exterior-01.png`

Fort Myers images:

- `public/images/campuses/fort-myers/fort-myers-01.png`
- `public/images/campuses/fort-myers/fort-myers-02.png`
- `public/images/campuses/fort-myers/fort-myers-03.png`
- `public/images/campuses/fort-myers/fort-myers-04.png`
- `public/images/campuses/fort-myers/fort-myers-05.png`
- `public/images/campuses/fort-myers/fort-myers-exterior-01.png`

## Virtual Tour Mapping

- Dover: `https://app.cloudpano.com/tours/DbQ7g1FoFvMY`
- Fort Myers: `https://app.cloudpano.com/tours/Z-MLJYAhe`

## Campus Facts

### Dover

- Address: `12660 Sydney Rd, Dover, FL 33527`
- Phone: `(813) 530-0032`
- Hours: `Mon-Fri: 6:30 am - 6:00 pm`
- Ages: `6 weeks - 12 years`
- Programs: Early Head Start, Free VPK, School Readiness

### Fort Myers

- Address: `465 Carolina Ave, Fort Myers, FL 33905`
- Phone: `(239) 694-5912`
- Hours: `Mon-Fri: 6:00 am - 6:00 pm`
- Ages: `6 weeks - 12 years`
- Programs: Free VPK, School Readiness

Do not list Early Head Start for Fort Myers unless the client later confirms it.

## Client Wording Rule

Client-provided wording is primary. Follow client wording closely while avoiding contradictions.

## Remaining Pages

- About Us
- Careers
- Resources
- FAQ
- Apply Now

Apply Now was originally created by Claude Code in the first site draft and Jose thinks it is useful, so preserve/improve it rather than deleting it.

## Recommended Next Order

1. FAQ using client FAQ content
2. Resources using Financial Assistance / VPK / School Readiness / EHS client content
3. About Us
4. Careers
5. Apply Now polish

## Workflow Rules

- Codex should run local dev/route checks when local hosting is needed.
- Do not ask Jose to manually run `npm run dev` unless he explicitly chooses to.
- Build before commits.
- Visual approve before pushing.
- Do not invent claims.
- Avoid fake ratings, awards, or accreditation claims.
- No force push/reset/clean/stash unless explicitly approved.

## Known Build Issue

The first `npm run build` may fail with `.next/trace` or `.next/trace-build` EPERM on Windows. If that is the only issue, rerun with the approved/elevated path.

## Verification Before Commit

- Feature branch build: passed after known EPERM rerun.
- Local route checks passed for `/`, `/programs`, `/locations/dover`, `/locations/fort-myers`, `/robots.txt`, and `/sitemap.xml`.
- Dover page content check passed.
- Fort Myers page content check passed.
- All clean campus carousel image URLs returned `200`.
- Old root campus image paths are no longer referenced in `app`, `components`, or `lib`.

## Final State

- Final branch: `main`
- Feature commit hash: `a4d8b5c`
- Merge commit hash: `de7356d`
- Follow-up handoff doc commit hash: pending at edit time
- Build result after merge: passed after known `.next/trace` EPERM rerun
- Push result: pending at edit time
