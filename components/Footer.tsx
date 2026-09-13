import { addressText, links, site } from "@/lib/config";
import BrandMark from "./BrandMark";
import HoursList from "./HoursList";
import { PhoneIcon } from "./icons";

export default function Footer() {
  const footerLinks = [
    { href: "#top", label: "Home" },
    ...(site.services.length ? [{ href: "#services", label: site.servicesHeading }] : []),
    { href: "#location", label: "Visit us" },
  ];

  return (
    <footer className="bg-linear-to-b from-brand-dark to-brand-darker text-white [--focus-ring:#ffffff]">
      <div className="wrap grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark onDark />
            <div>
              <p className="text-lg leading-tight font-extrabold">{site.name}</p>
              {site.nameSub && (
                <p className="text-[0.65rem] font-bold tracking-[0.3em] text-accent uppercase">{site.nameSub}</p>
              )}
            </div>
          </div>
          {site.footerTagline && <p className="mt-4 font-semibold text-accent">{site.footerTagline}</p>}
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center font-semibold hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <a
            href={links.tel}
            className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold underline underline-offset-4"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <address className="mt-2 text-sm not-italic">{addressText}</address>
          <HoursList className="mt-3 text-sm" />
        </div>
      </div>

      {/* Bottom padding keeps this line clear of the floating WhatsApp button */}
      <div className="border-t border-white/15">
        <p className="wrap pt-6 pb-24 text-sm">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
