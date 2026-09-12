/** Returns the config paths whose text still contains "placeholder", e.g. ["tagline", "reviews[0].text"]. */
export function findPlaceholders(value: unknown, path = ""): string[] {
  if (typeof value === "string") return /placeholder/i.test(value) ? [path] : [];
  if (Array.isArray(value)) return value.flatMap((v, i) => findPlaceholders(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => findPlaceholders(v, path ? `${path}.${k}` : k));
  }
  return [];
}
