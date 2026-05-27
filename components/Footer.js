import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-blush-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="SKYE LASH"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-xl font-semibold">
              <span className="text-brand">SKYE</span>
              <span className="text-white">LASH</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-blush-100/70">
            A premier beauty destination offering high-quality eyelash
            extensions, refills, care, and removal — using only the finest
            products and techniques.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Studio Hours
          </h4>
          <p className="mt-4 text-sm text-blush-100/70">{site.hours}</p>

          <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-blush-100/70 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-blush-100/70">
            <li>
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-brand"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
              >
                {site.address}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
          </ul>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-blush-100/50">
          Copyright &copy; {new Date().getFullYear()} SKYELASH. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
