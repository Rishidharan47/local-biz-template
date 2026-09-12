import { site } from "@/lib/config";
import { MapPinIcon } from "./icons";

export default function NoticeBar() {
  if (!site.notice) return null;

  return (
    <div className="bg-linear-to-r from-brand-darker to-brand-dark text-white">
      <div className="wrap flex min-h-9 items-center justify-between gap-4 py-1.5 text-sm">
        <p className="flex items-center gap-2">
          <MapPinIcon className="size-4 text-accent" />
          {site.notice.text}
        </p>
        {site.notice.aside && <p className="hidden font-semibold sm:block">{site.notice.aside}</p>}
      </div>
    </div>
  );
}
