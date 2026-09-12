import { addressText, links, site } from "@/lib/config";
import HoursList from "./HoursList";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function LocationHours() {
  return (
    <section id="location" aria-labelledby="location-title" className="bg-slate-50 py-14 md:py-20">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
          <h2 id="location-title" className="section-title">
            Visit us
          </h2>
          <p className="text-sm font-semibold text-brand-ink">
            {site.address.locality}, {site.address.region}
          </p>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_24px_-14px_rgb(15_23_42/0.35)] md:grid-cols-2">
          <div className="p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-ink">
                <MapPinIcon />
              </span>
              <div>
                <h3 className="font-bold text-gray-900">Address</h3>
                <address className="mt-1 text-gray-700 not-italic">{addressText}</address>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-ink">
                <ClockIcon />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900">Opening hours</h3>
                <HoursList className="mt-1 divide-y divide-gray-100 text-gray-700" />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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

          <div className="min-h-72 bg-gray-100">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Map showing the location of ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="size-full min-h-72 border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
