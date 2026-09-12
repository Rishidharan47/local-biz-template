import { links, site } from "@/lib/config";
import { ChatIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp (opens in a new tab)`}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg ring-2 ring-white transition-transform hover:scale-105 motion-reduce:transition-none"
    >
      <ChatIcon className="size-7" />
    </a>
  );
}
