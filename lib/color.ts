type RGB = [number, number, number];

const WHITE: RGB = [255, 255, 255];
const BLACK: RGB = [0, 0, 0];
const GRAY_900: RGB = [17, 24, 39];
const AA = 4.5;

export function parseHex(hex: string): RGB | null {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) return null;
  const full =
    match[1].length === 3
      ? match[1]
          .split("")
          .map((c) => c + c)
          .join("")
      : match[1];
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex(rgb: RGB): string {
  return `#${rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
}

function channel(value: number): number {
  const s = value / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function luminance([r, g, b]: RGB): number {
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG 2.x contrast ratio, 1–21. */
export function contrastRatio(a: RGB, b: RGB): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

/** Blend `from` towards `to` by `amount` (0–1). */
function mix(from: RGB, to: RGB, amount: number): RGB {
  return from.map((v, i) => v + (to[i] - v) * amount) as RGB;
}

export interface Theme {
  /** Backgrounds: buttons, accents */
  brand: string;
  /** Text/icons placed on `brand` */
  brandContrast: string;
  /** Button hover background */
  brandHover: string;
  /** Very light section background */
  brandTint: string;
  /** Brand-coloured text/borders on white or tint, darkened if needed for AA */
  brandInk: string;
}

/**
 * Derives every brand colour from one hex so that any primary a client picks
 * still meets WCAG AA (4.5:1) wherever it is used.
 */
export function buildTheme(primary: string): Theme {
  const brand = parseHex(primary);
  if (!brand) throw new Error(`Invalid colour "${primary}"`);

  // Prefer white text; fall back to dark text for light brand colours.
  // One of white/black always reaches 4.5:1, so BLACK is a safe final fallback.
  const onBrand = [WHITE, GRAY_900, BLACK].find((c) => contrastRatio(brand, c) >= AA) ?? BLACK;

  // Move away from the text colour so hover never lowers contrast.
  const hover = mix(brand, onBrand === WHITE ? BLACK : WHITE, 0.15);

  const tint = mix(brand, WHITE, 0.92);

  // Check against the tint (darker than white), so it passes on both.
  let ink = brand;
  for (let step = 1; contrastRatio(ink, tint) < AA && step <= 20; step++) {
    ink = mix(brand, BLACK, step * 0.05);
  }

  return {
    brand: toHex(brand),
    brandContrast: toHex(onBrand),
    brandHover: toHex(hover),
    brandTint: toHex(tint),
    brandInk: toHex(ink),
  };
}
