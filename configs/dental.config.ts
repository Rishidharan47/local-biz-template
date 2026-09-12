import type { SiteConfig } from "@/lib/types";

/**
 * SITE CONFIG — the only file you edit for a new client.
 * Demo variants live in /configs. To switch, copy one of them over this file.
 * Anything marked [Placeholder] must be replaced; `npm run build` lists what's left.
 */
const siteConfig: SiteConfig = {
  // ── Identity ────────────────────────────────────────────────
  name: "Demo Smile Dental Clinic",
  tagline: "[Placeholder tagline] Replace with the clinic's own one-line intro.",
  description:
    "[Placeholder description] One or two sentences for Google results and link previews. Mention the area served.",
  siteUrl: "https://demo-smile-dental.pages.dev", // no trailing slash; used for OG, sitemap, JSON-LD
  businessType: "Dentist", // schema.org type: "Dentist" | "MedicalClinic" | "Physician" | "Optician" | "Pharmacy" | "EducationalOrganization" | "LocalBusiness"

  // ── Contact ─────────────────────────────────────────────────
  phone: "+91 00000 00000", // shown as written; tel: link is built from the digits
  whatsapp: "910000000000", // digits only: 91 + 10-digit mobile. Build fails if the format is wrong.
  // whatsappMessage: "Hi, I'd like to book an appointment at {name}", // optional; this is the default

  address: {
    street: "[Placeholder] 123, Demo Street, Demo Layout",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560001",
    country: "IN",
  },

  // Google Maps → search the business → Share → Embed a map → copy ONLY the src="..." URL
  mapsEmbedUrl: "https://www.google.com/maps?q=MG+Road,Bengaluru&output=embed",

  // ── Hours (24h "HH:MM") ─────────────────────────────────────
  // Split shifts: add one entry per shift. Days not listed are shown as "Closed".
  hours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], opens: "10:00", closes: "13:30" },
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], opens: "17:00", closes: "21:00" },
  ],

  // ── Content ─────────────────────────────────────────────────
  // servicesHeading: "Services", // optional; this is the default
  // Service names only. No prices, outcomes, or claims. Confirm the list with the client.
  services: [
    "General check-up",
    "Teeth cleaning",
    "Fillings",
    "Root canal treatment",
    "Braces & aligners",
    "Tooth extraction",
  ],

  // Only real reviews, used with the reviewer's permission. Use [] to hide the section.
  reviews: [
    {
      author: "Placeholder Reviewer A",
      text: "[Placeholder review] Replace with a real Google review, quoted with permission.",
      rating: 5,
    },
    {
      author: "Placeholder Reviewer B",
      text: "[Placeholder review] Replace with a real Google review, quoted with permission.",
      rating: 4,
    },
  ],

  // ── Images (local files in /public only, no external URLs) ──
  images: {
    hero: "/images/hero-placeholder.svg", // 4:3 works best
    heroAlt: "Placeholder image. Replace with a photo of the clinic.",
    ogImage: "/og-image.png", // 1200×630 PNG or JPG
  },

  // ── Brand ───────────────────────────────────────────────────
  // Changing this one hex rebrands the whole site. Text colours are adjusted automatically for contrast.
  colors: { primary: "#0F766E" },
};

export default siteConfig;
