import { site } from "@/lib/config";

export default function DemoBanner() {
  if (!site.demo) return null;

  return (
    <p role="note" className="bg-gray-900 px-4 py-2 text-center text-sm text-white">
      Preview: a sample website prepared for {site.name}. This is not their official site.
    </p>
  );
}
