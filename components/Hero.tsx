import type { CSSProperties } from "react";
import { links, site } from "@/lib/config";
import { PhoneIcon, topicIcon, WhatsAppIcon } from "./icons";

function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M8 62C20 46 32 30 54 4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M22 45c-11-1-16-10-14-19 10 1 16 9 14 19Z" />
      <path d="M31 34c3-12 13-17 22-15-1 10-10 16-22 15Z" />
      <path d="M41 20c-5-9-2-16 5-19 5 8 3 15-5 19Z" />
    </svg>
  );
}

function LeafBranch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 240" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M20 238C40 180 58 110 104 6" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
      <path d="M36 190C8 186-4 160 2 136c26 6 40 28 34 54Z" />
      <path d="M44 166c4-30 26-44 52-40-4 26-24 42-52 40Z" />
      <path d="M58 128C30 120 22 94 30 72c24 10 34 32 28 56Z" />
      <path d="M68 104c8-28 30-38 52-32-6 24-28 36-52 32Z" />
      <path d="M84 62C64 50 62 26 72 8c20 12 24 34 12 54Z" />
    </svg>
  );
}

/*
 * Photo edges, in the photo box's own 0–1 units so they stretch with it.
 * Desktop: an S-curve down the left side. Phones: a gentle wave along the top.
 */
const EDGE_MD = "M0.05,0 C0.12,0.14 0.18,0.3 0.16,0.48 C0.14,0.66 0.05,0.8 0.06,1";
const EDGE_MD_BACK = "L0.025,1 C0.015,0.8 0.105,0.66 0.125,0.48 C0.145,0.3 0.085,0.14 0.015,0 Z";
const EDGE_SM = "M0,0.16 C0.28,0.02 0.62,0.2 1,0.04";
const EDGE_SM_BACK = "L1,-0.02 C0.62,0.14 0.28,-0.04 0,0.1 Z";

export default function Hero() {
  const { eyebrow, headline, highlights } = site.hero;
  const { hero, heroAlt, heroFocus, heroMobile, heroMobileFocus } = site.images;
  const accentLine = headline.length > 1 ? headline[headline.length - 1] : null;
  const leadLines = accentLine ? headline.slice(0, -1) : headline;

  const photoPosition = {
    "--hero-pos": heroFocus ?? "50% 50%",
    "--hero-pos-mobile": heroMobileFocus ?? heroFocus ?? "50% 50%",
  } as CSSProperties;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-brand-darker text-white [--focus-ring:#ffffff]"
    >
      <LeafBranch className="pointer-events-none absolute top-6 -left-10 z-0 w-28 -rotate-12 text-brand-dark md:top-[12%] md:-left-14 md:w-44 lg:w-52" />

      <div className="wrap relative z-10 pt-10 pb-10 sm:pt-14 md:grid md:min-h-[min(56vw,54rem,calc(100svh_-_9.5rem))] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-12 md:pt-[min(4rem,6svh)] md:pb-[clamp(6rem,11vw,10rem)] md:short:pb-24">
        <div>
          <div className="max-w-xl">
            {eyebrow && <p className="eyebrow md:text-sm">{eyebrow}</p>}
            <h1
              id="hero-title"
              className="mt-3 text-[2.4rem] leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl md:short:text-5xl lg:short:text-5xl 2xl:short:text-5xl"
            >
              {leadLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              {accentLine && <span className="block text-accent">{accentLine}</span>}
            </h1>
            <p className="mt-4 max-w-md text-base sm:text-lg md:max-w-lg md:text-xl md:short:text-lg">{site.tagline}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:short:mt-5">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa lg:text-lg">
                <WhatsAppIcon className="size-6" />
                Book on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={links.tel} className="btn btn-outline-light lg:text-lg">
                <PhoneIcon />
                Call now
              </a>
            </div>
          </div>

          {highlights.length > 0 && (
            <ul className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/25 md:short:mt-6">
              {highlights.map((highlight) => {
                const Icon = topicIcon(highlight);
                return (
                  <li
                    key={highlight}
                    className="flex flex-col items-center gap-2 px-2 text-center text-sm font-semibold sm:flex-row sm:gap-3 sm:text-left lg:text-base md:short:text-sm"
                  >
                    <Icon className="size-8 text-accent lg:size-9" />
                    {highlight}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Phones: below the text. Desktop: the right side, cut along a sharp organic curve. */}
      <figure className="relative aspect-[4/3] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[55%]">
        <svg aria-hidden="true" focusable="false" className="absolute size-0">
          <clipPath id="hero-clip-sm" clipPathUnits="objectBoundingBox">
            <path d={`${EDGE_SM} L1,1 L0,1 Z`} />
          </clipPath>
          <clipPath id="hero-clip-md" clipPathUnits="objectBoundingBox">
            <path d={`${EDGE_MD} L1,1 L1,0 Z`} />
          </clipPath>
        </svg>

        <div className="absolute inset-0 [clip-path:url(#hero-clip-sm)] md:[clip-path:url(#hero-clip-md)]">
          <picture className="block h-full">
            {heroMobile && <source media="(max-width: 767px)" srcSet={heroMobile} />}
            <img
              src={hero}
              alt={heroAlt}
              fetchPriority="high"
              style={photoPosition}
              className="h-full w-full object-cover [object-position:var(--hero-pos-mobile)] md:[object-position:var(--hero-pos)]"
            />
          </picture>
        </div>

        {/* Lighter green crescent and a thin teal line along the photo's edge */}
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 hidden size-full overflow-visible md:block"
        >
          <path d={`${EDGE_MD} ${EDGE_MD_BACK}`} className="fill-brand-dark" />
          <path d={EDGE_MD} fill="none" vectorEffect="non-scaling-stroke" strokeWidth={3} className="stroke-accent" />
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full overflow-visible md:hidden"
        >
          <path d={`${EDGE_SM} ${EDGE_SM_BACK}`} className="fill-brand-dark" />
          <path d={EDGE_SM} fill="none" vectorEffect="non-scaling-stroke" strokeWidth={2.5} className="stroke-accent" />
        </svg>
      </figure>

      {/* Large light wave into the next section, over the bottom of the green panel and the photo */}
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-1 z-10 h-[clamp(3rem,11vw,10rem)] w-full"
      >
        {/* Translucent layers stay clear of the photo's edge (~48% across) so it doesn't show through */}
        <path d="M0,40 C220,78 440,118 640,160 L0,160 Z" className="hidden fill-brand-dark/70 md:block" />
        <path d="M600,160 C820,148 1110,84 1440,-6 L1440,160 Z" className="fill-brand-tint/70" />
        <path d="M0,110 C300,152 620,158 880,124 C1120,94 1300,44 1440,20 L1440,160 L0,160 Z" className="fill-slate-50" />
        <path
          d="M0,110 C300,152 620,158 880,124 C1120,94 1300,44 1440,20"
          fill="none"
          vectorEffect="non-scaling-stroke"
          strokeWidth={2}
          className="stroke-accent/60"
        />
      </svg>
      <LeafSprig className="pointer-events-none absolute right-10 bottom-4 z-20 hidden w-20 -scale-x-100 text-accent/25 md:block" />
    </section>
  );
}
