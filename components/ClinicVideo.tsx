"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
  caption?: string;
  headingLevel: "h2" | "h3";
};

/** Muted looping video that only plays while on screen, and never auto-plays for reduced-motion users. */
export default function ClinicVideo({ src, poster, title, caption, headingLevel: Heading }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      id="clinic-video"
      className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_24px_-14px_rgb(15_23_42/0.35)]"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={title}
        className="aspect-[16/10] w-full bg-gray-900 object-cover"
      />
      <figcaption className="p-5">
        <Heading className="text-lg font-extrabold text-gray-900">{title}</Heading>
        {caption && <p className="mt-1 text-sm text-gray-600">{caption}</p>}
      </figcaption>
    </figure>
  );
}
