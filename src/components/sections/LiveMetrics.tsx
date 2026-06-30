import { useEffect, useRef, useState } from "react";

const COUNTERS = [
  { k: 128400, l: "Registered farmers", suffix: "+" },
  { k: 1240000, l: "Soil samples analysed", suffix: "" },
  { k: 86, l: "Connected laboratories", suffix: "" },
  { k: 1420, l: "Field agents deployed", suffix: "" },
  { k: 24, l: "Average yield lift", suffix: "%" },
  { k: 38, l: "Fertilizer efficiency gain", suffix: "%" },
  { k: 47, l: "Counties covered", suffix: "/47" },
  { k: 9100000, l: "Data points indexed", suffix: "" },
];

function format(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n >= 10_000_000 ? 1 : 2) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1) + "k";
  return n.toString();
}

function useCountUp(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

export function LiveMetrics() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="metrics" className="py-24 bg-foreground text-background">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Live snapshot</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            The dataset behind Africa's next agricultural decade.
          </h2>
          <p className="mt-4 text-background/70">
            Indicative figures generated from the platform's intelligence layer.
            Real-time API exposure for partners is on the roadmap.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {COUNTERS.map((c) => (
            <Counter key={c.l} target={c.k} run={visible} label={c.l} suffix={c.suffix} />
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <BarChart />
          <LineChart />
          <DonutChart />
        </div>
      </div>
    </section>
  );
}

function Counter({ target, run, label, suffix }: { target: number; run: boolean; label: string; suffix: string }) {
  const v = useCountUp(target, run);
  return (
    <div className="bg-foreground p-7">
      <div className="font-display text-4xl font-bold text-gradient">{format(v)}{suffix}</div>
      <div className="mt-2 text-sm text-background/70">{label}</div>
    </div>
  );
}

function BarChart() {
  const data = [42, 58, 51, 67, 74, 81, 88];
  return (
    <div className="rounded-2xl bg-background/5 border border-background/10 p-6">
      <div className="text-xs uppercase tracking-widest text-background/60">Yield index · 7 seasons</div>
      <div className="mt-5 flex items-end gap-2 h-32">
        {data.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-gold" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function LineChart() {
  const pts = [10, 22, 18, 30, 28, 42, 48, 55, 52, 64, 70, 78];
  const w = 260, h = 110;
  const max = 100;
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * w} ${h - (p / max) * h}`).join(" ");
  return (
    <div className="rounded-2xl bg-background/5 border border-background/10 p-6">
      <div className="text-xs uppercase tracking-widest text-background/60">Adoption curve · 12 months</div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 w-full h-32">
        <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="oklch(0.62 0.15 145 / 0.2)" />
        <path d={path} fill="none" stroke="oklch(0.78 0.13 85)" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

function DonutChart() {
  const segs = [
    { v: 42, c: "oklch(0.62 0.15 145)", l: "Maize" },
    { v: 24, c: "oklch(0.78 0.13 85)", l: "Beans" },
    { v: 18, c: "oklch(0.55 0.12 50)", l: "Tea" },
    { v: 16, c: "oklch(0.45 0.10 200)", l: "Other" },
  ];
  let acc = 0;
  const r = 38, c = 2 * Math.PI * r;
  return (
    <div className="rounded-2xl bg-background/5 border border-background/10 p-6 flex gap-6 items-center">
      <svg viewBox="0 0 100 100" className="w-28 h-28 -rotate-90">
        {segs.map((s) => {
          const len = (s.v / 100) * c;
          const el = (
            <circle
              key={s.l}
              cx="50" cy="50" r={r}
              fill="none" stroke={s.c} strokeWidth="14"
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-acc}
            />
          );
          acc += len;
          return el;
        })}
      </svg>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-widest text-background/60 mb-3">Crop mix</div>
        <ul className="space-y-1.5 text-sm">
          {segs.map((s) => (
            <li key={s.l} className="flex items-center justify-between">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: s.c }} />{s.l}</span>
              <span className="text-background/60">{s.v}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
