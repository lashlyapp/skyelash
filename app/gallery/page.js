import Image from "next/image";
import { site, gallery } from "@/lib/content";

export const metadata = {
  title: "Gallery",
  description:
    "A look at the work of our master lash artists at SKYE LASH studio in San Jose, CA.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our perfect works
        </p>
        <h1 className="mt-3 text-5xl font-bold">Gallery</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Get familiar with the work of our masters. Every procedure is
          performed by the experienced artists of our studio.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={src}
                alt={`SKYE LASH work ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
