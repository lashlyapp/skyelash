import Image from "next/image";
import { site } from "@/lib/content";

export const metadata = {
  title: "Gallery",
  description: `Our client photo catalog lives on Instagram. Follow ${site.instagramHandle} for the latest lash sets, refills, and Korean glass-skin facials.`,
};

const highlights = [
  { label: "New", kind: "plus" },
  { label: "Studio", image: "/images/logo.png", padded: true },
  { label: "By Lyna 💖", image: "/images/team-lyna.png" },
  { label: "By Hanna 💗", image: "/images/team-hanna.png" },
  { label: "By Skye", image: "/images/team-skye.png" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our perfect works
        </p>
        <h1 className="mt-3 text-5xl font-bold">Gallery</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Our full client photo catalog lives on Instagram. Follow{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand hover:text-brand-dark"
          >
            {site.instagramHandle}
          </a>{" "}
          to see every set, every refill, and every glass-skin glow — refreshed
          daily.
        </p>
      </section>

      <section className="mx-auto max-w-md px-5 pb-12 sm:max-w-lg">
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${site.instagramHandle} on Instagram`}
          className="block overflow-hidden rounded-3xl bg-black text-white shadow-2xl transition-transform hover:scale-[1.01]"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 text-white">
            <span className="block h-6 w-6" aria-hidden="true" />
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-semibold">skyelash_studio</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#3897f0"
                aria-hidden="true"
              >
                <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72 3.1 5.53l.34 3.69L1 12l2.44 2.78-.34 3.69 3.61.82L8.6 22.46 12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zM9.38 16.01L6 12.61l1.41-1.41 1.97 1.97 5.85-5.86L16.64 8.72l-7.26 7.29z" />
              </svg>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>

          {/* Avatar + stats */}
          <div className="flex items-center gap-5 px-5">
            <div className="rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[3px]">
              <div className="rounded-full bg-black p-[3px]">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/logo.png"
                    alt="Skyelash logo"
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around text-center">
              <Stat n="947" label="posts" />
              <Stat n="25K" label="followers" />
              <Stat n="2,345" label="following" />
            </div>
          </div>

          {/* Bio */}
          <div className="px-5 pt-4 text-[15px] leading-snug">
            <p className="font-semibold">
              Skyelash Studio | Licensed Cosmetologist | 1:1 Training
            </p>
            <p className="mt-1 whitespace-pre-line text-white/95">
              {`We specialize in the hottest & trending lash extension styles!
(669) 263-1750
skye@skyelash.com`}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-[#7eb6ff]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11.59 4.34" />
                <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.41-1.41" />
              </svg>
              www.skyelash.com
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-1.5 px-5 pt-4">
            <span className="flex-1 rounded-lg bg-[#3897f0] py-1.5 text-center text-sm font-semibold">
              Follow
            </span>
            <span className="flex-1 rounded-lg bg-white/10 py-1.5 text-center text-sm font-semibold">
              Message
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-semibold">
              Book now
            </span>
          </div>

          {/* Highlights */}
          <div className="flex gap-4 overflow-x-auto px-5 pt-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-shrink-0 flex-col items-center gap-1.5"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/30">
                  {h.kind === "plus" ? (
                    <span className="flex h-full w-full items-center justify-center text-3xl font-light text-white/80">
                      +
                    </span>
                  ) : (
                    <Image
                      src={h.image}
                      alt=""
                      fill
                      sizes="64px"
                      className={
                        h.padded
                          ? "object-contain bg-white p-1.5"
                          : "object-cover"
                      }
                    />
                  )}
                </div>
                <span className="whitespace-nowrap text-xs text-white/85">
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-3 border-t border-white/10 px-5 py-4 text-center text-sm font-semibold">
            Tap to open on Instagram →
          </div>
        </a>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 text-center">
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
        >
          Book Your Appointment
        </a>
      </section>
    </>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="text-xl font-bold">{n}</div>
      <div className="text-xs text-white/80">{label}</div>
    </div>
  );
}
