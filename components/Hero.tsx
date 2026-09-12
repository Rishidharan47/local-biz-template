import Image from "next/image";
import { links, site } from "@/lib/config";
import { PhoneIcon, topicIcon, WhatsAppIcon } from "./icons";

export default function Hero() {
  const { eyebrow, headline, highlights } = site.hero;
  const accentLine = headline.length > 1 ? headline[headline.length - 1] : null;
  const leadLines = accentLine ? headline.slice(0, -1) : headline;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-brand-darker text-white [--focus-ring:#ffffff]"
    >
      <Image
        src={site.images.hero}
        alt={site.images.heroAlt}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover object-[65%_center] md:object-right"
      />
      {/* Solid brand colour behind the text, fading out to reveal the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-darker from-35% via-brand-dark/90 via-65% to-brand-dark/45 md:from-30% md:via-brand-dark/80 md:via-55% md:to-transparent"
      />

      <div className="wrap py-12 sm:py-16 md:py-24 [text-shadow:0_1px_14px_rgb(0_0_0/0.3)]">
        <div className="max-w-[16.5rem] sm:max-w-md md:max-w-xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1
            id="hero-title"
            className="mt-3 text-[2.4rem] leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {leadLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
            {accentLine && <span className="block text-accent">{accentLine}</span>}
          </h1>
          <p className="mt-4 text-base sm:text-lg">{site.tagline}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row [text-shadow:none]">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsAppIcon className="size-6" />
              Book on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={links.tel} className="btn btn-outline-light">
              <PhoneIcon />
              Call now
            </a>
          </div>
        </div>

        {highlights.length > 0 && (
          <ul className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/25">
            {highlights.map((highlight) => {
              const Icon = topicIcon(highlight);
              return (
                <li
                  key={highlight}
                  className="flex flex-col items-center gap-2 px-2 text-center text-sm font-semibold sm:flex-row sm:gap-3 sm:text-left"
                >
                  <Icon className="size-8 text-accent" />
                  {highlight}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
