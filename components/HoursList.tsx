import { site } from "@/lib/config";
import { getHoursRows } from "@/lib/hours";

export default function HoursList({ className = "" }: { className?: string }) {
  return (
    <dl className={className}>
      {getHoursRows(site.hours).map((row) => (
        <div key={row.label} className="flex justify-between gap-4 py-2">
          <dt className="font-medium">{row.label}</dt>
          <dd className="text-right">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
