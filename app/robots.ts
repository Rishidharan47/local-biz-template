import type { MetadataRoute } from "next";
import { site } from "@/lib/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Demo: keep crawling allowed so search engines can read the noindex tag
  // (a Disallow would hide it), but don't advertise a sitemap.
  if (site.demo) return { rules: { userAgent: "*", allow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
