import type { SiteConfig } from "@/lib/types";

/**
 * SITE CONFIG — the only file you edit for a new client.
 * Demo variants live in /configs. To switch, copy one of them over this file.
 * Anything marked [Placeholder] must be replaced; `npm run build` lists what's left.
 */
const siteConfig: SiteConfig = {
  // ── Identity ────────────────────────────────────────────────
  name: "Demo Bright Future Coaching Centre",
  tagline: "[Placeholder tagline] Replace with the centre's own one-line intro.",
  description:
    "[Placeholder description] One or two sentences for Google results and link previews. Mention classes and the area served.",
  siteUrl: "https://demo-bright-future-coaching.pages.dev", // no trailing slash; used for OG, sitemap, JSON-LD
  businessType: "EducationalOrganization", // schema.org type: "Dentist" | "MedicalClinic" | "Physician" | "Optician" | "Pharmacy" | "EducationalOrganization" | "LocalBusiness"
  demo: false, // true = pitch preview: "not the official site" banner, hidden from Google, no JSON-LD. false to go live.

  // ── Contact ─────────────────────────────────────────────────
  phone: "+91 00000 00000", // shown as written; tel: link is built from the digits
  whatsapp: "910000000000", // digits only: 91 + 10-digit mobile. Build fails if the format is wrong.
  whatsappMessage: "Hi, I'd like to book a demo class at {name}", // optional; {name} is replaced

  address: {
    street: "[Placeholder] 45, Demo Road, Demo Nagar",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411001",
    country: "IN",
  },

  // Google Maps → search the business → Share → Embed a map → copy ONLY the src="..." URL
  mapsEmbedUrl: "https://www.google.com/maps?q=FC+Road,Pune&output=embed",

  // ── Hours (24h "HH:MM") ─────────────────────────────────────
  // Split shifts: add one entry per shift. Days not listed are shown as "Closed".
  hours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], opens: "16:00", closes: "20:30" },
    { days: ["Sat", "Sun"], opens: "09:00", closes: "13:00" },
  ],

  // ── Content ─────────────────────────────────────────────────
  servicesHeading: "Courses", // optional; defaults to "Services"
  // Course names only. No fees, results, rankings, or guarantees. Confirm the list with the client.
  services: [
    "Class 9–10 (CBSE & State Board)",
    "Class 11–12 Science",
    "Class 11–12 Commerce",
    "JEE foundation",
    "NEET foundation",
    "Spoken English",
  ],

  // Only real reviews, used with the reviewer's permission. Empty = section and nav link hidden.
  reviews: [],

  // ── Images (local files in /public only, no external URLs) ──
  images: {
    hero: "/images/hero-placeholder.svg", // 4:3 works best
    heroAlt: "Placeholder image. Replace with a photo of the coaching centre.",
    ogImage: "/og-image.png", // 1200×630 PNG or JPG
  },

  // ── Brand ───────────────────────────────────────────────────
  // Changing this one hex rebrands the whole site. Text colours are adjusted automatically for contrast.
  colors: { primary: "#C2410C" },
};

export default siteConfig;
