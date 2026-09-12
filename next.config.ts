import type { NextConfig } from "next";
import { findPlaceholders } from "./lib/placeholders";
import siteConfig from "./site.config";

// Warn about leftover placeholder text. Next loads this file in more than one
// process; the env flag is inherited by child processes so it prints once.
const placeholders = findPlaceholders(siteConfig);
if (placeholders.length && !process.env.SITE_CONFIG_WARNED) {
  process.env.SITE_CONFIG_WARNED = "1";
  console.warn(
    `\n  site.config.ts still contains placeholder content. Replace before going live:\n${placeholders
      .map((p) => `    - ${p}`)
      .join("\n")}\n`,
  );
}

const nextConfig: NextConfig = {
  // Plain HTML/CSS/JS in /out, served as static files by Cloudflare Pages.
  output: "export",
  // Image optimisation needs a server; images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;
