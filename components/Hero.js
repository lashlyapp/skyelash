"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, heroSlides } from "@/lib/content";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5500);
    return () => clearInterval(id);
  }, [count]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[88vh] max-h-[900px] min-h-[560px] w-full overflow-hidden">
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div key={index} className="hero-fade max-w-xl text-white">
            {slide.badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l2.4 6.4L21 10l-5.2 4.1L17.6 21 12 17.3 6.4 21l1.8-6.9L3 10l6.6-1.6z" />
                </svg>
                {slide.badge}
              </span>
            )}
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              {slide.eyebrow}
            </p>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] drop-shadow-sm md:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/90 md:text-xl">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-brand-dark"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/60 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
