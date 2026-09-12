import { site } from "@/lib/config";
import { StarIcon } from "./icons";

function Stars({ rating }: { rating: number }) {
  return (
    <div role="img" aria-label={`Rated ${rating} out of 5`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          filled={n <= rating}
          className={`size-5 ${n <= rating ? "text-brand-ink" : "text-gray-400"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  if (site.reviews.length === 0) return null;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-gray-50 py-14 md:py-20">
      <div className="wrap">
        <h2 id="reviews-title" className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Reviews
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {site.reviews.map((review, i) => (
            <li key={i}>
              <figure className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6">
                <Stars rating={review.rating} />
                <blockquote className="mt-4 flex-1 text-gray-700">
                  <p>{review.text}</p>
                </blockquote>
                <figcaption className="mt-4 font-semibold text-gray-900">{review.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
