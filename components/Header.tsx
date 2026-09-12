import { links, site } from "@/lib/config";
import { PhoneIcon } from "./icons";

const navItems = [
  { href: "#services", label: site.servicesHeading, show: site.services.length > 0 },
  { href: "#reviews", label: "Reviews", show: site.reviews.length > 0 },
  { href: "#location", label: "Hours & Location", show: true },
].filter((item) => item.show);

function NavLinks() {
  return navItems.map((item) => (
    <li key={item.href}>
      <a href={item.href} className="nav-link">
        {item.label}
      </a>
    </li>
  ));
}

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="wrap flex min-h-16 items-center justify-between gap-3">
          <a
            href="#top"
            className="flex min-h-11 min-w-0 items-center py-1 text-base leading-tight font-bold text-gray-900 sm:text-lg"
          >
            {site.name}
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex gap-1">
              <NavLinks />
            </ul>
          </nav>

          <a href={links.tel} className="btn btn-primary min-h-11 shrink-0 px-4">
            <PhoneIcon />
            <span className="sm:hidden">
              Call<span className="sr-only"> {site.phone}</span>
            </span>
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
        </div>
      </header>

      {/* Mobile: links scroll sideways under the header instead of a JS menu */}
      <nav aria-label="Primary" className="border-b border-gray-200 bg-white md:hidden">
        <ul className="wrap flex gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <NavLinks />
        </ul>
      </nav>
    </>
  );
}
