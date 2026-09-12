import { addressText, links, site } from "@/lib/config";
import HoursList from "./HoursList";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function LocationHours() {
  return (
    <section id="location" aria-labelledby="location-title" className="py-14 md:py-20">
      <div className="wrap">
        <h2 id="location-title" className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Hours &amp; Location
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <ClockIcon className="size-5 text-brand-ink" />
              Opening hours
            </h3>
            <HoursList className="mt-2 divide-y divide-gray-200 text-gray-700" />

            <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-gray-900">
              <MapPinIcon className="size-5 text-brand-ink" />
              Address
            </h3>
            <address className="mt-2 text-gray-700 not-italic">{addressText}</address>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <MapPinIcon />
                Get directions
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              <a href={links.tel} className="btn btn-secondary">
                <PhoneIcon />
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Map showing the location of ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="size-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
