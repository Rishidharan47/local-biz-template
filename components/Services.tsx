import { site } from "@/lib/config";
import { CheckIcon } from "./icons";

export default function Services() {
  if (site.services.length === 0) return null;

  return (
    <section id="services" aria-labelledby="services-title" className="py-14 md:py-20">
      <div className="wrap">
        <h2 id="services-title" className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {site.servicesHeading}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service) => (
            <li key={service} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-ink">
                <CheckIcon />
              </span>
              <span className="font-medium text-gray-900">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
