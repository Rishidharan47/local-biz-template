import { site } from "@/lib/config";
import { topicIcon } from "./icons";

export default function Services() {
  if (site.services.length === 0) return null;

  return (
    <section id="services" aria-labelledby="services-title" className="bg-slate-50 py-14 md:py-20">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
          <h2 id="services-title" className="section-title">
            {site.servicesHeading}
          </h2>
          {site.servicesSubheading && <p className="text-sm font-semibold text-brand-ink">{site.servicesSubheading}</p>}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 min-[400px]:grid-cols-3 md:grid-cols-4 md:gap-4">
          {site.services.map((service) => {
            const Icon = topicIcon(service);
            return (
              <li
                key={service}
                className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white px-3 py-5 text-center shadow-[0_8px_24px_-14px_rgb(15_23_42/0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgb(15_23_42/0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="grid size-12 place-items-center rounded-full bg-brand-tint text-brand-ink">
                  <Icon className="size-7" />
                </span>
                <span className="text-[0.85rem] leading-snug font-semibold text-gray-900">{service}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
