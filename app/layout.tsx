import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { site, theme } from "@/lib/config";
import "./globals.css";

const title = `${site.name} | ${site.address.locality}`;

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
};

export const viewport: Viewport = {
  themeColor: theme.brand,
};

const brandVars = {
  "--brand": theme.brand,
  "--brand-contrast": theme.brandContrast,
  "--brand-hover": theme.brandHover,
  "--brand-tint": theme.brandTint,
  "--brand-ink": theme.brandInk,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" style={brandVars}>
      <body>{children}</body>
    </html>
  );
}
