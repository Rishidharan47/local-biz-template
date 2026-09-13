import Image from "next/image";
import { site } from "@/lib/config";
import ClinicVideo from "./ClinicVideo";
import { ArrowRightIcon } from "./icons";

export default function Feature() {
  const { feature, video } = site;
  if (!feature && !video) return null;

  return (
    <section id="inside" aria-labelledby={feature ? "feature-title" : undefined} className="py-14 md:py-20">
      <div className="wrap grid gap-6 lg:grid-cols-2">
        {feature && (
          <article className="grid overflow-hidden rounded-3xl bg-linear-to-br from-brand-dark to-brand-darker text-white sm:grid-cols-2 [--focus-ring:#ffffff]">
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <h2 id="feature-title" className="text-2xl leading-tight font-extrabold sm:text-3xl">
                {feature.title}
              </h2>
              <p>{feature.text}</p>
              {video && (
                <a href="#clinic-video" className="btn btn-outline-light min-h-11 self-start px-5 text-sm">
                  Take a look
                  <ArrowRightIcon className="size-4" />
                </a>
              )}
            </div>
            <div className="relative min-h-56 sm:min-h-full">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </article>
        )}

        {video && (
          <ClinicVideo
            src={video.src}
            poster={video.poster}
            title={video.title}
            caption={video.caption}
            headingLevel={feature ? "h3" : "h2"}
          />
        )}
      </div>
    </section>
  );
}
