import Image from "next/image";
import Link from "next/link";
import {
  site,
  stats,
  bookingSteps,
  services,
  pricing,
  team,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              San Jose Lash Studio
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] md:text-6xl">
              Beautiful lashes,
              <br />
              <span className="text-brand">beautiful you.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Specializing in the most trending lash styles, applied by
              certified master artists. Wake up effortlessly stunning, every
              single day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
              >
                Book Now
              </a>
              <Link
                href="/services"
                className="rounded-full border border-brand/40 px-7 py-3 text-base font-semibold text-brand transition-colors hover:bg-blush-100"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-[2rem] bg-blush-200/60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/svc-extension.jpg"
                alt="Lash model"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
      <section className="bg-brand">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 text-center text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-4xl font-bold md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-16">
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
            Meet the artists
          </p>
          <h2 className="mt-3 text-4xl font-bold">Our top artists</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Trained at the best lash schools with years of hands-on experience
            in eyelash extensions.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
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
