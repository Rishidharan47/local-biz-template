import type { MetadataRoute } from "next";
import { site } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (site.demo) return [];

  return [{ url: `${site.siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
