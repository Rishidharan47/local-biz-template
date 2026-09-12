import { toOpeningHoursSpecification } from "./hours";
import type { BusinessType, ResolvedSiteConfig } from "./types";

// Not LocalBusiness subtypes, so they are paired with LocalBusiness.
const NON_LOCAL_BUSINESS_TYPES: BusinessType[] = ["EducationalOrganization"];

/**
 * schema.org LocalBusiness data built only from config values.
 * Reviews are intentionally left out: Google treats reviews a business shows
 * about itself as "self-serving" and ignores or penalises that markup.
 */
export function buildLocalBusinessJsonLd(site: ResolvedSiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": NON_LOCAL_BUSINESS_TYPES.includes(site.businessType)
      ? ["LocalBusiness", site.businessType]
      : site.businessType,
    "@id": `${site.siteUrl}/#business`,
    name: site.name,
    description: site.description,
    url: `${site.siteUrl}/`,
    telephone: site.phone.replace(/[^\d+]/g, ""),
    image: new URL(site.images.ogImage, site.siteUrl).href,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: toOpeningHoursSpecification(site.hours),
  };
}
