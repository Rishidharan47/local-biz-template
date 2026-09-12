import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { CSSProperties } from "react";
import { site, theme } from "@/lib/config";
import "./globals.css";

// Self-hosted at build time: visitors' browsers never request Google Fonts.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = `${site.name} | ${site.address.locality}${site.demo ? " (preview)" : ""}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: site.images.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [site.images.ogImage],
  },
  // Phone numbers are already real tel: links; stop iOS adding its own.
  formatDetection: { telephone: false },
  // Pitch previews for prospective clients must never appear in search results.
  robots: site.demo
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: theme.brandDark,
};

const brandVars = {
  "--brand": theme.brand,
  "--brand-contrast": theme.brandContrast,
  "--brand-hover": theme.brandHover,
  "--brand-tint": theme.brandTint,
  "--brand-ink": theme.brandInk,
  "--brand-dark": theme.brandDark,
  "--brand-darker": theme.brandDarker,
  "--accent": theme.accent,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={jakarta.variable} style={brandVars}>
      <body>{children}</body>
    </html>
  );
}
