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

function validate(config: SiteConfig): ResolvedSiteConfig {
  const required = ["name", "tagline", "description", "siteUrl", "phone", "whatsapp", "mapsEmbedUrl"] as const;
  for (const key of required) {
    if (!config[key]?.trim()) fail(`"${key}" is required.`);
  }

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
    if (!config.address[key]?.trim()) fail(`"address.${key}" is required.`);
  }

  if (!config.images.heroAlt?.trim()) fail(`"images.heroAlt" is required (describe the photo).`);
  for (const key of ["hero", "ogImage"] as const) {
    const path = config.images[key];
    if (!path.startsWith("/") || path.startsWith("//")) {
      fail(`"images.${key}" must be a local path in /public starting with "/" (got "${path}"). Don't link external images.`);
    }
  }

  if (!parseHex(config.colors.primary)) {
    fail(`"colors.primary" must be a hex colour like "#0F766E" (got "${config.colors.primary}").`);
  }

  config.hours.forEach((h, i) => {
    if (!h.days.length) fail(`"hours[${i}].days" is empty.`);
    if (!TIME.test(h.opens) || !TIME.test(h.closes)) {
      fail(`"hours[${i}]" times must be 24h "HH:MM" (got "${h.opens}"–"${h.closes}").`);
    }
    if (h.opens >= h.closes) fail(`"hours[${i}]" closes before it opens.`);
  });

  config.services.forEach((s, i) => {
    if (!s.trim()) fail(`"services[${i}]" is empty.`);
  });

  config.reviews.forEach((r, i) => {
    if (!r.author.trim() || !r.text.trim()) fail(`"reviews[${i}]" needs both author and text.`);
    if (!Number.isInteger(r.rating) || r.rating < 1 || r.rating > 5) {
      fail(`"reviews[${i}].rating" must be a whole number from 1 to 5.`);
    }
  });

  return {
    ...config,
    siteUrl: config.siteUrl.replace(/\/+$/, ""),
    whatsappMessage: (config.whatsappMessage?.trim() || DEFAULT_WHATSAPP_MESSAGE).replaceAll("{name}", config.name),
    servicesHeading: config.servicesHeading?.trim() || DEFAULT_SERVICES_HEADING,
  };
}

export const site = validate(raw);

export const theme = buildTheme(site.colors.primary);

export const links = {
  tel: telHref(site.phone),
  whatsapp: whatsappHref(site.whatsapp, site.whatsappMessage),
  directions: directionsHref(site.name, site.address),
};

export const addressText = formatAddress(site.address);
