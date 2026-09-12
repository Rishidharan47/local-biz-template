import Image from "next/image";
import { links, site } from "@/lib/config";
import { ChatIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-brand-tint">
      <div className="wrap grid items-center gap-8 py-10 sm:py-14 md:grid-cols-2 md:gap-12 md:py-20">
        <div>
          <h1
            id="hero-title"
            className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            {site.name}
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">{site.tagline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ChatIcon />
              Book on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={links.tel} className="btn btn-secondary">
              <PhoneIcon />
              Call {site.phone}
            </a>
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-gray-700">
            <MapPinIcon className="mt-0.5 size-4 text-brand-ink" />
            {site.address.locality}, {site.address.region}
          </p>
        </div>

        <Image
          src={site.images.hero}
          alt={site.images.heroAlt}
          width={1200}
          height={900}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
