"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function parseValue(value) {
  const match = String(value).match(/^(\d[\d,]*)(.*)$/);
  if (!match) return { target: 0, suffix: String(value) };
  return { target: Number(match[1].replace(/,/g, "")), suffix: match[2] };
}

function Counter({ value }) {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1600;
      const start = performance.now();
      let raf;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 text-center text-white md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-4xl font-bold md:text-5xl">
              <Counter value={stat.value} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
