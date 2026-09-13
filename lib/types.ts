export type DayCode = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

/** schema.org type used in the JSON-LD. Pick the most specific one that fits. */
export type BusinessType =
  | "LocalBusiness"
  | "MedicalClinic"
  | "Dentist"
  | "Physician"
  | "Optician"
  | "Pharmacy"
  | "EducationalOrganization";

export interface OpeningHours {
  days: DayCode[];
  /** 24h "HH:MM" */
  opens: string;
  /** 24h "HH:MM", later than `opens` */
  closes: string;
}

export interface Review {
  author: string;
  text: string;
  /** Whole number, 1–5 */
  rating: number;
}

export interface SiteConfig {
  name: string;
  /** Optional. Small spaced-out line under the name in the header, e.g. "Physiotherapy". */
  nameSub?: string;
  tagline: string;
  description: string;
  siteUrl: string;
  businessType: BusinessType;
  /**
   * Optional. true = private pitch preview: adds a "not the official site" banner,
   * a noindex tag and an empty sitemap, and drops JSON-LD. Set false to go live.
   */
  demo?: boolean;

  /** Optional. Thin strip above the header. `aside` shows on wider screens only. */
  notice?: { text: string; aside?: string };

  phone: string;
  whatsapp: string;
  /** Optional. `{name}` is replaced with the business name. */
  whatsappMessage?: string;

  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  mapsEmbedUrl: string;
  hours: OpeningHours[];

  /** Optional hero wording. Without it the hero shows the business name and tagline. */
  hero?: {
    /** Small spaced-out line above the headline, e.g. "Move • Recover • Be stronger". */
    eyebrow?: string;
    /** Headline, one entry per line. The last line is shown in the accent colour. */
    headline?: string[];
    /** Up to 3 short highlights under the buttons. Icons are picked from the words. */
    highlights?: string[];
  };

  /** Optional. Heading and nav label for the services section. Defaults to "Services". */
  servicesHeading?: string;
  /** Optional. Short line beside the services heading. */
  servicesSubheading?: string;
  /** Service names. Icons are picked automatically from the words. */
  services: string[];

  /** Optional dark feature card with a photo, e.g. "Your recovery, our priority". */
  feature?: { title: string; text: string; image: string; imageAlt: string };

  /** Optional short video (local .mp4). Plays muted in the "Inside" section. */
  video?: { src: string; poster: string; title: string; caption?: string };

  reviews: Review[];

  images: {
    /** Hero photo. Desktop: fills the right side behind a curved edge. Phones: below the text. */
    hero: string;
    heroAlt: string;
    /** Optional. Which part of the photo stays in view where it's cropped, as CSS "x% y%". Defaults to centre. */
    heroFocus?: string;
    /** Optional. Different photo for phones (below 768px). */
    heroMobile?: string;
    /** Optional. Which part of the phone photo stays in view, "x% y%". Defaults to `heroFocus`. */
    heroMobileFocus?: string;
    ogImage: string;
  };

  /** Optional logo in /public (square works best). Without it a simple mark is shown. */
  logo?: string;

  /** Optional short line in the footer. */
  footerTagline?: string;

  colors: {
    primary: string;
    /** Optional highlight colour for text on dark sections. Derived from primary if omitted. */
    accent?: string;
  };
}

/** SiteConfig after validation, with optional fields filled in. */
export type ResolvedSiteConfig = SiteConfig & {
  demo: boolean;
  whatsappMessage: string;
  servicesHeading: string;
  hero: { eyebrow?: string; headline: string[]; highlights: string[] };
};
