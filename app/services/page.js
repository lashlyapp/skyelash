import Image from "next/image";
import { site, services, serviceBenefits, facials, pricing } from "@/lib/content";
import FacialPackages from "@/components/FacialPackages";

export const metadata = {
  title: "Services",
  description:
    "Eyelash extensions, refills, personal care, and removal at SKYE LASH studio in San Jose, CA.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our services
        </p>
        <h1 className="mt-3 text-5xl font-bold">Lashes, done right</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          SKYE LASH studio is a premier beauty destination offering
          high-quality eyelash extensions, refills, care, and removal. Our
          trained technicians use only the highest quality products and
          techniques for customized, natural-looking results.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-blush-100">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {serviceBenefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-blush-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="space-y-16">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{service.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {service.blurb}
                </p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Book this service
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facials */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark px-8 py-14 text-white md:px-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                {facials.eyebrow}
              </span>
              <h2 className="mt-4 text-4xl font-bold">{facials.title}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/85">
                {facials.body}
              </p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-brand transition-colors hover:bg-blush-100"
              >
                Book a Facial
              </a>
            </div>
            <ul className="space-y-4">
              {facials.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-lg">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Facial packages */}
      <FacialPackages />

      {/* Pricing */}
      <section className="bg-blush-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Pricing plans
            </p>
            <h2 className="mt-3 text-4xl font-bold">Full price list</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-2xl border border-blush-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{plan.name}</h3>
                  <span className="font-serif text-2xl font-bold text-brand">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {plan.desc}
                </p>
                {plan.refill && (
                  <p className="mt-auto pt-4 text-xs font-medium text-ink-soft/80">
                    {plan.refill}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
