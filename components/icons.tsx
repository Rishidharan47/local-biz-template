import type { ComponentType, SVGProps } from "react";

type IconProps = { className?: string };

function Svg({ className = "size-5", ...props }: IconProps & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
      {...props}
    />
  );
}

const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";

// ── UI icons ───────────────────────────────────────────────

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={PHONE_PATH} />
    </Svg>
  );
}

/** Chat bubble with a handset: reads as "WhatsApp" without copying the logo. */
export function WhatsAppIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <g transform="translate(7.6 7.6) scale(0.37)" strokeWidth={4.5}>
        <path d={PHONE_PATH} />
      </g>
    </Svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function StarIcon({ filled, ...props }: IconProps & { filled: boolean }) {
  return (
    <Svg {...props} fill={filled ? "currentColor" : "none"}>
      <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26Z" />
    </Svg>
  );
}

/** Simple figure mark used in the header/footer when no logo file is configured. */
export function LogoMarkIcon(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={2.2}>
      <circle cx="12" cy="4.5" r="2.2" />
      <path d="M4 8c3 1 5 2.5 8 7 3-4.5 5-6 8-7" />
      <path d="M12 15v6" />
    </Svg>
  );
}

// ── Topic icons (picked from service and highlight wording) ──

function SpineIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="9" y="2.5" width="6" height="3.5" rx="1.2" />
      <rect x="8.5" y="7.5" width="7" height="3.5" rx="1.2" />
      <rect x="8.5" y="12.5" width="7" height="3.5" rx="1.2" />
      <rect x="9" y="17.5" width="6" height="4" rx="1.2" />
    </Svg>
  );
}

function PersonBustIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-1a7 7 0 0 1 14 0v1" />
    </Svg>
  );
}

function KneeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 2v7c0 1.6.7 2.8 2.2 3.8L14 15v7" />
      <path d="M14 2v6.5c0 1 .3 1.8 1 2.4" />
      <circle cx="11.5" cy="11.5" r="1.3" />
    </Svg>
  );
}

function RunIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="15" cy="4" r="2" />
      <path d="M7 21l3.5-5.5L14 18v3" />
      <path d="M5 11.5 8.5 8l4.5.5 2.5 3.5H19" />
      <path d="M10.5 15.5 12.5 9" />
    </Svg>
  );
}

function RecoveryBedIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 20V10" />
      <path d="M2 17h20v3" />
      <path d="M22 17v-3a3 3 0 0 0-3-3h-8v6" />
      <circle cx="6.5" cy="13.5" r="1.8" />
      <path d="M17.5 2.5v5M15 5h5" />
    </Svg>
  );
}

function PostureIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="4" r="2" />
      <path d="M12 7v8" />
      <path d="M8 10.5 12 8.5l4 2" />
      <path d="M9.5 21 12 15l2.5 6" />
    </Svg>
  );
}

function HandIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18 11V6a2 2 0 0 0-4 0" />
      <path d="M14 10V4a2 2 0 0 0-4 0v2" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </Svg>
  );
}

function DumbbellIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />
    </Svg>
  );
}

function ShoulderIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="5" r="2" />
      <path d="M9 8v7l-2 6M9 15l2 6" />
      <path d="M9 10.5 15.5 5" />
    </Svg>
  );
}

function BrainIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 5a3 3 0 1 0-6 .1A4 4 0 0 0 4 12a4 4 0 0 0 2 3.5V17a3 3 0 0 0 6 0Z" />
      <path d="M12 5a3 3 0 1 1 6 .1A4 4 0 0 1 20 12a4 4 0 0 1-2 3.5V17a3 3 0 0 1-6 0" />
      <path d="M12 5v15" />
    </Svg>
  );
}

function BoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </Svg>
  );
}

function ZapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </Svg>
  );
}

function CalmIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 8v5" />
      <path d="M7.5 11.5 12 13l4.5-1.5" />
      <path d="M4 19c2.8-1.4 5.2-2.5 8-2.5s5.2 1.1 8 2.5" />
    </Svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </Svg>
  );
}

function ToothIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 3C5 3 3.5 4.5 3.5 7c0 3 1.5 5 2 8s1 6 2.5 6 1.5-4 4-4 2.5 4 4 4 2-3 2.5-6 2-5 2-8c0-2.5-1.5-4-3.5-4-2 0-3 1-5 1S9 3 7 3Z" />
    </Svg>
  );
}

function BookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </Svg>
  );
}

function SparkleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
    </Svg>
  );
}

// First match wins, so more specific words come first.
const TOPIC_ICONS: [RegExp, ComponentType<IconProps>][] = [
  [/neck/, PersonBustIcon],
  [/back|spine|pivd|disc|sciatica/, SpineIcon],
  [/knee|leg|hip/, KneeIcon],
  [/sport|athlet|running|runner/, RunIcon],
  [/surgery|post-op|operation/, RecoveryBedIcon],
  [/posture/, PostureIcon],
  [/manual|massage|hands?\b|mobilisation|mobilization/, HandIcon],
  [/strength|exercise|fitness|gym|training/, DumbbellIcon],
  [/mobility|walk|movement|move/, RunIcon],
  [/shoulder/, ShoulderIcon],
  [/neuro|stroke|brain|nerve|paralysis/, BrainIcon],
  [/arthritis|joint|bone|ortho/, BoneIcon],
  [/electro|laser|ultrasound|tens\b|ift\b/, ZapIcon],
  [/pain|relief|relax|calm/, CalmIcon],
  [/active|lifestyle|heart|wellness|health/, HeartIcon],
  [/tooth|teeth|dental|root canal|braces|aligner|filling|extraction|check-?up|smile/, ToothIcon],
  [/class|course|jee|neet|english|board|science|commerce|coaching|exam/, BookIcon],
];

/** Picks a line icon that matches the wording of a service or highlight. */
export function topicIcon(label: string): ComponentType<IconProps> {
  const text = label.toLowerCase();
  return TOPIC_ICONS.find(([pattern]) => pattern.test(text))?.[1] ?? SparkleIcon;
}
