import Link from "next/link";
import Image from "next/image";
import { site, nav, socials } from "@/lib/content";

const socialIcons = {
  Facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  TikTok: (
    <path d="M16 3c.3 2.3 1.8 4.1 4 4.4v3c-1.5.1-2.9-.4-4-1.2V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a3 3 0 1 0 2 2.8V3z" />
  ),
};

function SocialIcon({ name }) {
  const isFill = name !== "Instagram";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={isFill ? "currentColor" : "none"}
      stroke={isFill ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {socialIcons[name]}
    </svg>
  );
}

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
            extensions, refills, removal, and Korean-style glass-skin facials —
            using only the finest products and techniques.
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
          </ul>

          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blush-100 transition-colors hover:bg-brand hover:text-white"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-5 py-5 text-center text-xs text-blush-100/50 sm:flex-row sm:justify-between">
          <span>
            Copyright &copy; {new Date().getFullYear()} SKYELASH. All rights
            reserved.
          </span>
          {site.license && (
            <span>CA Establishment License #{site.license}</span>
          )}
        </div>
      </div>
    </footer>
  );
}
