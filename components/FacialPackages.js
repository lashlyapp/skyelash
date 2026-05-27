import { site, facialPackages } from "@/lib/content";

function Check() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-brand"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FacialPackages() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Korean-style facial menu
        </p>
        <h2 className="mt-3 text-4xl font-bold">Luxury glass-skin packages</h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
          Three curated levels of our Korean-style facial — from a quick K-glow
          refresh to the full 10-step glass-skin ritual. Every package is
          customized to your skin.
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
        {facialPackages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative flex flex-col rounded-2xl bg-white p-7 ${
              pkg.featured
                ? "border-2 border-brand shadow-xl md:-mt-4 md:mb-4"
                : "border border-blush-200 shadow-sm"
            }`}
          >
            {pkg.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
            <p className="mt-1 text-sm text-ink-soft">{pkg.tagline}</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-brand">
                {pkg.price}
              </span>
              <span className="text-sm text-ink-soft">/ {pkg.duration}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2 text-ink-soft">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-7 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                pkg.featured
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "border border-brand/40 text-brand hover:bg-blush-100"
              }`}
            >
              Book {pkg.name.replace("The ", "")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
