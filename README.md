# Light The Way Counseling — website

Next.js 15 (App Router) site for Light The Way Counseling, PLLC. Deploys to Vercel.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where the content lives

| What | File |
|---|---|
| Phone, address, email, nav | `lib/site.ts` |
| Clinician bios, photos, specialties | `lib/team.ts` |
| Specialty pages (one file each) | `content/specialties/*.md` |
| Blog posts (one file each) | `content/blog/*.md` |
| Colors, type, spacing | `app/globals.css` (tokens at the top) |
| Old Wix URL → new URL redirects | `next.config.mjs` |

### Adding a blog post

Create `content/blog/my-post-slug.md`:

```md
---
title: "Post title"
description: "One sentence for Google, under 160 characters."
date: "2026-09-17"
author: "Chelsea Bogda, LCPC"
tags: ["Anxiety"]
---

Body in markdown. Use ## for section headings.
```

It appears on `/blog` and at `/blog/my-post-slug` on the next deploy. No other file needs editing.

### Adding a specialty

Create `content/specialties/my-topic.md`:

```md
---
title: "My Topic"
blurb: "One line shown on the specialties grid."
therapists: ["chelsea-bogda", "caitlin-reisel"]
---

## What is ...
```

Slugs in `therapists` must match the `slug` values in `lib/team.ts`.

### Adding or editing a clinician

Edit `lib/team.ts`. Order in that array is the order they appear on the site.

## Images — action needed

Clinician headshots and the hero image currently point at the old Wix CDN
(`static.wixstatic.com`) so the site looks right immediately. They will break if
the Wix account is ever closed.

To fix: drop the original files into `public/team/` and `public/`, then change
each `photo` path in `lib/team.ts` (and `HERO_IMAGE` in `app/page.tsx`) to a
local path like `/team/chelsea-bogda.jpg`.

## Contact form — action needed

The form on `/contact` composes an email in the visitor's mail app addressed to
the office. It needs no backend and cannot fail silently, but it does require
the visitor to press send in their own mail client.

For a form that submits directly, sign up for Formspree, Basin, or similar and
replace the `handleSubmit` in `components/ContactForm.tsx` with a POST to that
endpoint. Note that neither option is HIPAA-compliant — the on-page notice tells
visitors not to include sensitive clinical detail, which is the same posture the
previous Wix form took.

## Before launch

- [ ] Confirm social links in `lib/site.ts` (currently point at platform homepages)
- [ ] Add the real Google review URL (`site.reviewUrl`)
- [ ] Fill in insurance panels on `/rates` if you want them listed publicly
- [ ] Swap headshots to local files (see above)
- [ ] Point the domain at Vercel and verify the old-URL redirects resolve
