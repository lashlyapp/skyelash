import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FacialPackages from "@/components/FacialPackages";
import {
  site,
  bookingSteps,
  services,
  facials,
  pricing,
  team,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* How to book */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Simple & easy
          </p>
          <h2 className="mt-3 text-4xl font-bold">How to book</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {bookingSteps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-blush-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              What we offer
            </p>
            <h2 className="mt-3 text-4xl font-bold">Our services</h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            See all details &rarr;
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="group overflow-hidden rounded-2xl border border-blush-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facials */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark text-white">
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="order-2 px-8 py-12 md:order-1 md:px-12 md:py-14">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                {facials.eyebrow}
              </span>
              <h2 className="mt-4 text-4xl font-bold">{facials.title}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/85">
                {facials.body}
              </p>
              <ul className="mt-6 space-y-3">
                {facials.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <svg
                        width="14"
                        height="14"
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
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-brand transition-colors hover:bg-blush-100"
              >
                Book a Facial
              </a>
            </div>
            <div className="relative order-1 min-h-72 md:order-2">
              <Image
                src={facials.image}
                alt="Facial treatment at SKYE LASH"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
          {facials.gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={src}
                alt={`Facial work ${i + 1}`}
                fill
                sizes="(max-width: 640px) 33vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
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
            <h2 className="mt-3 text-4xl font-bold">
              Trending styles, honest prices
            </h2>
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

          <div className="mt-10 text-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Meet the team
          </p>
          <h2 className="mt-3 text-4xl font-bold">The SKYE LASH team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Master lash artists, K-beauty facial specialists, and a warm
            welcome — the people behind every beautiful visit.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-[7/8] w-full max-w-[240px]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 60vw, 20vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="rounded-[2rem] bg-ink px-8 py-14 text-center text-white">
          <h2 className="text-4xl font-bold">Ready for your best lashes yet?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blush-100/80">
            Book online in minutes. We&apos;re open every day by appointment
            only.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
