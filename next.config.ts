import type { NextConfig } from "next";
import { findPlaceholders } from "./lib/placeholders";
import siteConfig from "./site.config";

// Pre-launch warnings. Next loads this file in more than one process; the env
// flag is inherited by child processes so each warning prints once.
if (!process.env.SITE_CONFIG_WARNED) {
  process.env.SITE_CONFIG_WARNED = "1";

  const placeholders = findPlaceholders(siteConfig);
  if (placeholders.length) {
    console.warn(
      `\n  site.config.ts still contains placeholder content. Replace before going live:\n${placeholders
        .map((p) => `    - ${p}`)
        .join("\n")}\n`,
    );
  }

  if (siteConfig.demo) {
    console.warn(
      "\n  site.config.ts: demo mode is ON (preview banner, noindex, no JSON-LD). Set demo: false before going live.\n",
    );
  }
}

const nextConfig: NextConfig = {
  // Plain HTML/CSS/JS in /out, served as static files by Cloudflare Pages.
  output: "export",
  // Image optimisation needs a server; images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;
