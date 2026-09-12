import { addressText, links, site } from "@/lib/config";
import HoursList from "./HoursList";
import { PhoneIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 [--focus-ring:#ffffff]">
      <div className="wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h2>
          <a
            href={links.tel}
            className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-white underline underline-offset-4"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <address className="mt-2 text-sm not-italic">{addressText}</address>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Hours</h2>
          <HoursList className="mt-2 text-sm" />
        </div>
      </div>

      {/* Bottom padding keeps this line clear of the floating WhatsApp button */}
      <div className="border-t border-gray-800">
        <p className="wrap pt-6 pb-24 text-sm text-gray-400">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
