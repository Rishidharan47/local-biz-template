import Image from "next/image";
import { site } from "@/lib/config";
import { LogoMarkIcon } from "./icons";

/** Logo image if one is configured, otherwise a simple round mark in the brand colour. */
export default function BrandMark({ onDark = false }: { onDark?: boolean }) {
  if (site.logo) {
    return (
      <Image
        src={site.logo}
        alt=""
        width={44}
        height={44}
        className="size-11 shrink-0 rounded-full bg-white object-contain"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`grid size-11 shrink-0 place-items-center rounded-full ${
        onDark ? "bg-white/10 text-accent ring-1 ring-white/25" : "bg-brand-dark text-white"
      }`}
    >
      <LogoMarkIcon className="size-6" />
    </span>
  );
}
