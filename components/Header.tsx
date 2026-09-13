import { links, site } from "@/lib/config";
import BrandMark from "./BrandMark";
import { PhoneIcon } from "./icons";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "#services", label: site.servicesHeading, show: site.services.length > 0 },
  { href: "#inside", label: "Inside", show: Boolean(site.feature || site.video) },
  { href: "#reviews", label: "Reviews", show: site.reviews.length > 0 },
  { href: "#location", label: "Visit us", show: true },
]
  .filter((item) => item.show)
  .map(({ href, label }) => ({ href, label }));

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="wrap flex min-h-16 items-center justify-between gap-3 py-1">
        <a href="#top" className="flex min-h-11 min-w-0 items-center gap-2.5">
          <BrandMark />
          <span className="min-w-0">
            <span className="block text-base leading-tight font-extrabold text-gray-900 sm:text-lg">{site.name}</span>
            {site.nameSub && (
              <span className="block text-[0.65rem] font-bold tracking-[0.3em] text-brand-ink uppercase">
                {site.nameSub}
              </span>
            )}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <a href={links.tel} className="btn btn-primary min-h-11 px-4 shadow-sm">
            <PhoneIcon />
            <span className="sm:hidden">
              Call<span className="sr-only"> {site.phone}</span>
            </span>
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
