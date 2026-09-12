import type { SiteConfig } from "./types";

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(whatsapp: string, message: string): string {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatAddress(address: SiteConfig["address"]): string {
  return `${address.street}, ${address.locality}, ${address.region} ${address.postalCode}`;
}

/** Google Maps directions link; opens the Maps app on phones. No API key needed. */
export function directionsHref(name: string, address: SiteConfig["address"]): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${name}, ${formatAddress(address)}`,
  )}`;
}
