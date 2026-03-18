import { useEffect, useMemo, useRef, useState } from "react";

import { impactStats } from "../data/siteContent";

function useCountUp(target: number, shouldStart: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [durationMs, shouldStart, target]);

  return value;
}

function StatIcon({ index }: { index: number }) {
  const iconClass = "h-8 w-8 text-[#e16f44]";

  switch (index) {
    case 0:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <path
            d="M12 4v7m0 0l-3-3m3 3l3-3M6 20h12"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 1:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
          <circle
            cx="15"
            cy="7"
            r="2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M5 19c.5-3 2.5-4 4-4s3.5 1 4 4M11 19c.4-2.5 2-3.5 4-3.5 1.3 0 2.8.6 3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="7"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 8v4l2.8 1.8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 3:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <path
            d="M12 4l5 3v5c0 3.5-2.1 6-5 8-2.9-2-5-4.5-5-8V7l5-3z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M9.2 11.8l1.8 1.8 3.8-3.8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 4:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <path
            d="M4.5 18.5h15M6 6.5h5v10H6zM13 9.5h5v7h-5z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <path
            d="M12 20s6-4.2 6-9a6 6 0 10-12 0c0 4.8 6 9 6 9z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="11"
            r="2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
  }
}

function StatItem({
  index,
  value,
  suffix,
  label,
  shouldStart,
}: {
  index: number;
  value: number;
  suffix: string;
  label: string;
  shouldStart: boolean;
}) {
  const current = useCountUp(value, shouldStart);

  return (
    <div className="relative flex min-w-[168px] snap-start flex-col items-center justify-center px-4 py-5 text-center md:min-w-0">
      <StatIcon index={index} />
      <p className="mt-2 text-3xl font-light leading-none tracking-tight text-[#2f2920] sm:text-4xl dark:text-[#f2e8d6]">
        {current}
        {suffix}
      </p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#f26d3d] dark:text-[#f3a077]">
        {label}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const reduceMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      ref={ref}
      className="border-y border-[#e8d8c3] bg-[#fffdfa]/95 text-[#2f2920] dark:border-[#4a3829] dark:bg-[#1a140f]/95 dark:text-[#f2e8d6]"
    >
      <div className="mx-auto max-w-5xl px-2 py-1 md:px-0">
        <div className="flex snap-x gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-0 md:overflow-visible md:pb-0 md:divide-x md:divide-[#f0e2cf] dark:md:divide-[#3f3024]">
          {impactStats.map((item, index) => (
            <div
              key={item.label}
              className="rounded-md border border-[#f0e2cf] bg-[#fffdf9] md:rounded-none md:border-0 md:bg-transparent dark:border-[#3f3024] dark:bg-[#201913] md:dark:bg-transparent"
            >
              <StatItem
                index={index}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                shouldStart={visible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
