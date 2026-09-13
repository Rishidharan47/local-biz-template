/**
 * Validates site.config.ts at build time and exports everything components need.
 * Components import from here, never from site.config.ts directly.
 */
import raw from "@/site.config";
import { buildTheme, parseHex } from "./color";
import { directionsHref, formatAddress, telHref, whatsappHref } from "./links";
import type { ResolvedSiteConfig, SiteConfig } from "./types";

const DEFAULT_WHATSAPP_MESSAGE = "Hi, I'd like to book an appointment at {name}";
const DEFAULT_SERVICES_HEADING = "Services";
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

function fail(message: string): never {
  throw new Error(`\n\n  site.config.ts: ${message}\n`);
}

function requireText(field: string, value: string | undefined) {
  if (!value?.trim()) fail(`"${field}" is required.`);
}

function requireLocalPath(field: string, value: string | undefined) {
  requireText(field, value);
  if (!value!.startsWith("/") || value!.startsWith("//")) {
    fail(`"${field}" must be a local path in /public starting with "/" (got "${value}"). Don't link external files.`);
  }
}

function validate(config: SiteConfig): ResolvedSiteConfig {
  const required = ["name", "tagline", "description", "siteUrl", "phone", "whatsapp", "mapsEmbedUrl"] as const;
  for (const key of required) requireText(key, config[key]);

  if (!/^https:\/\/[^\s/]+\.[^\s/]+/.test(config.siteUrl)) {
    fail(`"siteUrl" must be a full https:// URL, e.g. "https://example.pages.dev" (got "${config.siteUrl}").`);
  }

  if (!/^91\d{10}$/.test(config.whatsapp)) {
    fail(`"whatsapp" must be digits only: 91 followed by the 10-digit mobile number (got "${config.whatsapp}").`);
  }

  if (config.phone.replace(/\D/g, "").length < 10) {
    fail(`"phone" looks too short (got "${config.phone}").`);
  }

  if (config.mapsEmbedUrl.includes("<")) {
    fail(`"mapsEmbedUrl" must be only the src="..." URL from Google's embed code, not the whole <iframe>.`);
  }
  if (!/^https:\/\/(www\.google\.com\/maps|maps\.google\.com\/)/.test(config.mapsEmbedUrl)) {
    fail(`"mapsEmbedUrl" must be a Google Maps URL starting with https://www.google.com/maps.`);
  }

  for (const key of ["street", "locality", "region", "postalCode", "country"] as const) {
    requireText(`address.${key}`, config.address[key]);
  }

  requireText("images.heroAlt", config.images.heroAlt);
  requireLocalPath("images.hero", config.images.hero);
  requireLocalPath("images.ogImage", config.images.ogImage);
  for (const key of ["heroFocus", "heroMobileFocus"] as const) {
    const value = config.images[key];
    if (value !== undefined && !/^\d{1,3}% \d{1,3}%$/.test(value)) {
      fail(`"images.${key}" must look like "50% 30%" (got "${value}").`);
    }
  }
  if (config.images.heroMobile !== undefined) requireLocalPath("images.heroMobile", config.images.heroMobile);
  if (config.logo !== undefined) requireLocalPath("logo", config.logo);

  if (config.notice) requireText("notice.text", config.notice.text);

  if (config.hero?.headline) {
    if (!config.hero.headline.length) fail(`"hero.headline" needs at least one line (or remove it).`);
    config.hero.headline.forEach((line, i) => requireText(`hero.headline[${i}]`, line));
  }
  if (config.hero?.highlights && config.hero.highlights.length > 3) {
    fail(`"hero.highlights" can have at most 3 items.`);
  }

  if (config.feature) {
    requireText("feature.title", config.feature.title);
    requireText("feature.text", config.feature.text);
    requireText("feature.imageAlt", config.feature.imageAlt);
    requireLocalPath("feature.image", config.feature.image);
  }

  if (config.video) {
    requireLocalPath("video.src", config.video.src);
    requireLocalPath("video.poster", config.video.poster);
    requireText("video.title", config.video.title);
    if (!/\.mp4$/i.test(config.video.src)) fail(`"video.src" must be an .mp4 file.`);
  }

  if (!parseHex(config.colors.primary)) {
    fail(`"colors.primary" must be a hex colour like "#0F766E" (got "${config.colors.primary}").`);
  }
  if (config.colors.accent !== undefined && !parseHex(config.colors.accent)) {
    fail(`"colors.accent" must be a hex colour like "#2DD4BF" (got "${config.colors.accent}").`);
  }

  config.hours.forEach((h, i) => {
    if (!h.days.length) fail(`"hours[${i}].days" is empty.`);
    if (!TIME.test(h.opens) || !TIME.test(h.closes)) {
      fail(`"hours[${i}]" times must be 24h "HH:MM" (got "${h.opens}"–"${h.closes}").`);
    }
    if (h.opens >= h.closes) fail(`"hours[${i}]" closes before it opens.`);
  });

  config.services.forEach((s, i) => requireText(`services[${i}]`, s));

  config.reviews.forEach((r, i) => {
    if (!r.author.trim() || !r.text.trim()) fail(`"reviews[${i}]" needs both author and text.`);
    if (!Number.isInteger(r.rating) || r.rating < 1 || r.rating > 5) {
      fail(`"reviews[${i}].rating" must be a whole number from 1 to 5.`);
    }
  });

  return {
    ...config,
    siteUrl: config.siteUrl.replace(/\/+$/, ""),
    demo: config.demo === true,
    whatsappMessage: (config.whatsappMessage?.trim() || DEFAULT_WHATSAPP_MESSAGE).replaceAll("{name}", config.name),
    servicesHeading: config.servicesHeading?.trim() || DEFAULT_SERVICES_HEADING,
    hero: {
      eyebrow: config.hero?.eyebrow?.trim() || undefined,
      headline: config.hero?.headline?.length ? config.hero.headline : [config.name],
      highlights: config.hero?.highlights ?? [],
    },
  };
}

export const site = validate(raw);

export const theme = buildTheme(site.colors.primary, site.colors.accent);

export const links = {
  tel: telHref(site.phone),
  whatsapp: whatsappHref(site.whatsapp, site.whatsappMessage),
  directions: directionsHref(site.name, site.address),
};

export const addressText = formatAddress(site.address);
