# Local Business Site Template

A fast, single-page static website for local Indian businesses (clinics, coaching centres, and similar).
One file, `site.config.ts`, holds everything client-specific. Swap it and you have a new site.

- Next.js (App Router) + TypeScript + Tailwind CSS, exported as plain static files
- No backend, database, forms, or tracking
- Mobile-first, WCAG AA contrast, 44px+ tap targets, one self-hosted font
- SEO: title, description, Open Graph, sitemap, robots.txt, and LocalBusiness JSON-LD, all from the config
- Deploys to Cloudflare Pages for free

---

## Requirements

- Node.js 20.9 or newer (22 recommended; `.node-version` pins 22 for Cloudflare)
- npm

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

## Try the demos

Two demo configs live in `/configs`. Copy one over `site.config.ts`:

```bash
cp configs/coaching.config.ts site.config.ts
```

On Windows PowerShell:

```powershell
Copy-Item configs\coaching.config.ts site.config.ts
```

| Demo | File | Shows |
| --- | --- | --- |
| Demo Smile Dental Clinic | `configs/dental.config.ts` | Split-shift hours, reviews section |
| Demo Bright Future Coaching Centre | `configs/coaching.config.ts` | Custom WhatsApp message, "Courses" heading, no reviews (section and nav link hidden) |

---

## Pitch previews (demo mode)

To show a prospective client what their site could look like before they've agreed to anything, set `demo: true` in `site.config.ts`. The build then:

- Shows a banner at the top: "Preview: a sample website prepared for {name}. This is not their official site."
- Adds a `noindex, nofollow` robots tag so search engines don't list the page. `robots.txt` still allows crawling, because a crawler that's blocked never sees the noindex tag.
- Leaves `sitemap.xml` empty and drops the LocalBusiness JSON-LD.
- Adds "(preview)" to the page title and link previews.
- Prints a reminder in the build output.

Rules for previews:

- Use only facts from the business's public listing (name, phone, address, hours, services). Don't copy their Google reviews onto the page until they agree.
- Deploy each preview as its own Cloudflare Pages project and share the link only with that business.
- Delete the project if they say no.

When they sign, set `demo: false`, replace the placeholder images and text, and redeploy.

---

## New client site in under 10 minutes

### 1. Copy the template (1 min)

```bash
git clone <your-template-repo-url> client-name
cd client-name
npm install
```

Or copy the folder without `node_modules`, `.next`, and `out`, then run `npm install`.

### 2. Fill in `site.config.ts` (5 min)

Collect these from the client first: exact business name, phone, WhatsApp number, full address, hours, list of services, brand colour, and a few real Google reviews they're happy to show.

| Field | What to enter |
| --- | --- |
| `name` | Business name exactly as on their signboard / Google listing |
| `nameSub` | Optional. Small spaced-out line under the name in the header, e.g. "Physiotherapy" |
| `tagline` | One short line under the hero headline |
| `description` | 1–2 sentences for Google results and WhatsApp link previews. Mention the area. |
| `siteUrl` | Final URL, no trailing slash. Until a custom domain is set up, use the exact `*.pages.dev` address Cloudflare assigns (it may add a suffix like `-6ws`). |
| `businessType` | `Dentist`, `MedicalClinic`, `Physician`, `Optician`, `Pharmacy`, `EducationalOrganization`, or `LocalBusiness` |
| `demo` | `true` for a pitch preview (see [Pitch previews](#pitch-previews-demo-mode)), `false` for the live site |
| `phone` | As it should be displayed, e.g. `+91 98xxx xxxxx` |
| `whatsapp` | Digits only: `91` + 10-digit mobile, e.g. `9198xxxxxxxx` |
| `whatsappMessage` | Optional. Pre-filled message; `{name}` becomes the business name. |
| `address` | Street, locality (city), region (state), postal code, country `IN` |
| `mapsEmbedUrl` | See below |
| `hours` | One entry per shift, 24h times. Days not listed show as "Closed". |
| `servicesHeading` | Optional. Defaults to "Services" (e.g. "Courses", "Treatments") |
| `servicesSubheading` | Optional. Short line beside the services heading |
| `services` | Plain names only. Each card's icon is picked automatically from the words. |
| `reviews` | Real reviews only, with permission. `[]` hides the section. |
| `images` | Paths to files in `/public`. `images.hero` sits behind the hero headline under a dark gradient. |
| `logo` | Optional. Square logo in `/public`; without it a simple round mark is shown |
| `notice` | Optional. `{ text, aside }` for the thin strip above the header; `aside` shows on wider screens |
| `hero` | Optional. `{ eyebrow, headline, highlights }`: small line above the headline, headline lines (the last one uses the accent colour), and up to 3 short highlights with auto-picked icons |
| `feature` | Optional. `{ title, text, image, imageAlt }` for a dark card with a photo |
| `video` | Optional. `{ src, poster, title, caption }` for a short local `.mp4` that plays muted while on screen |
| `footerTagline` | Optional. Short line in the footer |
| `colors.primary` | Brand hex colour. Contrast is fixed automatically. |
| `colors.accent` | Optional. Highlight colour for text on dark sections; derived from `primary` if omitted and lightened if needed for contrast |

**Getting `mapsEmbedUrl`:** open Google Maps → find the business → **Share** → **Embed a map** → **Copy HTML**. Paste only the URL inside `src="..."`. It starts with `https://www.google.com/maps/embed?pb=`.

### 3. Replace images (2 min)

| File | Size | Used for |
| --- | --- | --- |
| `public/images/…` (update `images.hero`) | 4:3, around 1200×900, JPG or WebP under 300 KB | Hero photo |
| `public/og-image.png` (or update `images.ogImage`) | exactly 1200×630 | WhatsApp/Facebook link preview |
| `app/icon.svg` (or `app/icon.png`) | square | Browser tab icon |

Use the client's own photos. Don't link to images on other websites.

### 4. Build and check (2 min)

```bash
npm run build
```

- If a config value is wrong (bad WhatsApp format, external image path, invalid hours), the build fails with a message naming the field.
- The build lists every field that still contains placeholder text. That list must be empty before going live.
- If `demo` is `true`, the build says so. Set it to `false` before going live, or the site stays hidden from Google.
- Check the result locally at a phone-sized width (360px) in your browser's device toolbar:

```bash
npm run dev
```

### 5. Deploy

See below.

---

## Deploy to Cloudflare Pages

The build output is the `out` folder. Pick one method.

### Option A: Git integration (recommended; auto-deploys on every push)

Works entirely from the Cloudflare dashboard, including on a phone.

1. Push the client's project to its own GitHub or GitLab repository.
2. In the Cloudflare dashboard, go to **Workers & Pages** → **Create application**.
3. You land on **Make something new**. This is the Workers flow: don't use **Continue with GitHub** here. Its screen asks for a **Deploy command** (`npx wrangler deploy`), which this template isn't set up for.
4. Scroll to the bottom and tap **Continue to Pages** (next to "Need to use the legacy Pages workflow?"). Pages is labelled legacy but is fully supported and is the right fit for a static site.
5. Choose **Import an existing Git repository**, authorise GitHub/GitLab if asked, select the repository, and click **Begin setup**.
6. Set the build settings. The right screen has a **Build output directory** field.
   - **Project name:** client name
   - **Production branch:** `main` (or `master`)
   - **Framework preset:** `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
7. Click **Save and Deploy**. The first build takes 1–2 minutes. `.node-version` already tells Cloudflare to use Node 22.
8. **Copy the address Cloudflare shows.** Project names are global, so if the name is taken Cloudflare adds a suffix, e.g. `client-name-6ws.pages.dev` instead of `client-name.pages.dev`.
9. Set `siteUrl` in `site.config.ts` to exactly that address and push. The site redeploys automatically with correct canonical, Open Graph, sitemap, and JSON-LD URLs.

### Option B: Direct upload from your machine (no Git needed)

```bash
npm run build
npx wrangler pages deploy out --project-name=client-name
```

The first run opens a Cloudflare login page. You must click **Allow** in a browser **on the same computer**: approving from a phone won't work, because Wrangler waits for the approval on that computer. It then asks to create the project. Re-run the same two commands to publish updates.

A project created by direct upload can't be switched to Git integration later. Choose Option A if you want push-to-deploy.

### Custom domain

1. In the Pages project, open **Custom domains** → **Set up a custom domain**.
2. Enter the domain (e.g. `www.clientclinic.in`) and follow the DNS instructions. It's automatic if the domain's DNS is already on Cloudflare.
3. Update `siteUrl` in `site.config.ts` to the custom domain and redeploy, so canonical URLs, Open Graph, sitemap, and JSON-LD all point to it.

### After going live

- Test structured data: https://search.google.com/test/rich-results
- Test the WhatsApp link preview by sending the URL to yourself on WhatsApp.
- Submit `https://<domain>/sitemap.xml` in Google Search Console.
- Ask the client to add the website URL to their Google Business Profile.

`public/_headers` sets basic security headers and long-term caching for hashed assets on Cloudflare Pages.

---

## Content rules

These protect the client, especially for medical businesses:

- **No invented reviews.** Only real ones, quoted with the reviewer's permission.
- **No medical claims or outcomes** ("painless", "100% success", "best in city").
- **No prices** unless the client supplies and confirms them.
- **No credentials or degrees** unless the client supplies them and they can be verified.
- Reviews are shown on the page but deliberately **not** added to JSON-LD, because Google disallows businesses marking up reviews about themselves.

---

## How it works

```
site.config.ts        ← the only file edited per client
configs/              ← demo configs to copy from
lib/
  config.ts           ← validates the config at build time; components import from here
  color.ts            ← derives accessible brand colours from one hex
  hours.ts            ← hours display rows and schema.org opening hours
  links.ts            ← tel:, WhatsApp, and Google Maps directions links
  schema.ts           ← LocalBusiness JSON-LD
  placeholders.ts     ← finds leftover placeholder text (warned in next.config.ts)
  types.ts            ← SiteConfig type
app/
  layout.tsx          ← metadata, Open Graph, brand CSS variables on <html>
  page.tsx            ← puts the sections together
  globals.css         ← Tailwind theme tokens, buttons, focus styles
  sitemap.ts, robots.ts, icon.svg
components/           ← DemoBanner, NoticeBar, Header (+ MobileMenu, BrandMark), Hero, Services, Feature (+ ClinicVideo), Reviews, LocationHours, Footer, WhatsAppButton, JsonLd
public/               ← images, og-image.png, _headers
```

**Branding:** `colors.primary` (and optional `colors.accent`) are turned into CSS variables (`--brand`, `--brand-contrast`, `--brand-hover`, `--brand-tint`, `--brand-ink`, `--brand-dark`, `--brand-darker`, `--accent`) set on `<html>`. Tailwind exposes them as `bg-brand`, `text-brand-ink`, `from-brand-dark`, `text-accent`, etc. Button text switches between white and dark automatically, brand-coloured text is darkened, dark sections are deep enough for white text, and the accent is lightened against them, so any colour stays WCAG AA compliant.

**Very little JavaScript:** everything is rendered to static HTML at build time. Only two small components run in the browser: the mobile menu, and the video, which plays only while it's on screen and never auto-plays for visitors who prefer reduced motion. The font (Plus Jakarta Sans) is downloaded at build time and served from the site itself, so visitors' browsers never contact Google Fonts.
