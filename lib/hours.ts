import type { DayCode, OpeningHours } from "./types";

export const DAYS: DayCode[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const DAY_NAMES: Record<DayCode, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

/** "17:00" -> "5 PM", "13:30" -> "1:30 PM" */
export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m === 0 ? `${hour} ${period}` : `${hour}:${String(m).padStart(2, "0")} ${period}`;
}

export interface HoursRow {
  label: string;
  value: string;
}

/** Collapses consecutive days with identical hours: [{ label: "Mon – Sat", value: "10 AM – 1:30 PM, 5 PM – 9 PM" }, { label: "Sun", value: "Closed" }] */
export function getHoursRows(hours: OpeningHours[]): HoursRow[] {
  const perDay = DAYS.map((day) => {
    const shifts = hours
      .filter((h) => h.days.includes(day))
      .sort((a, b) => a.opens.localeCompare(b.opens));
    const value = shifts.length
      ? shifts.map((s) => `${formatTime(s.opens)} – ${formatTime(s.closes)}`).join(", ")
      : "Closed";
    return { day, value };
  });

  const rows: HoursRow[] = [];
  let start = 0;
  for (let i = 1; i <= perDay.length; i++) {
    if (i === perDay.length || perDay[i].value !== perDay[start].value) {
      const first = perDay[start].day;
      const last = perDay[i - 1].day;
      rows.push({ label: first === last ? first : `${first} – ${last}`, value: perDay[start].value });
      start = i;
    }
  }
  return rows;
}

export function toOpeningHoursSpecification(hours: OpeningHours[]) {
  return hours.map(({ days, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: days.map((d) => DAY_NAMES[d]),
    opens,
    closes,
  }));
}
