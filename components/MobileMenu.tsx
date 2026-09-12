"use client";

import { useEffect, useId, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

export default function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="grid size-11 place-items-center rounded-full text-gray-800 hover:bg-brand-tint"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <nav
        id={menuId}
        aria-label="Primary"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-gray-100 bg-white shadow-lg"
      >
        <ul className="wrap flex flex-col py-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-lg px-3 text-base font-semibold text-gray-800 hover:bg-brand-tint"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
