import { links, site } from "@/lib/config";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp (opens in a new tab)`}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-linear-to-br from-wa to-wa-dark text-white shadow-[0_10px_30px_-8px_rgb(22_163_74/0.7)] ring-4 ring-white transition-transform hover:scale-105 motion-reduce:transition-none"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
