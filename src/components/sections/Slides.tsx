import { useEffect, useState } from "react";
import { Layers, FlaskConical, BarChart3, Map, Wheat } from "lucide-react";

const SLIDES = [
  {
    icon: Layers,
    eyebrow: "Soil Intelligence",
    title: "Granular soil mapping across every county",
    body: "Multi-layer soil testing — pH, NPK, organic carbon, moisture — surfaced as decision-ready intelligence at plot and district scale.",
    metric: { v: "1.42M ha", l: "Mapped" },
  },
  {
    icon: FlaskConical,
    eyebrow: "Fertilizer Optimization",
    title: "Right input, right rate, right season",
    body: "Per-plot fertilizer recommendations calibrated to crop, soil signature and weather window — cutting input cost while lifting yield.",
    metric: { v: "38%", l: "Avg. cost saved" },
  },
  {
    icon: BarChart3,
    eyebrow: "Yield Forecasting",
    title: "Forecast harvests before the rains arrive",
    body: "Machine-learning models pair agronomy with satellite signals and historical yield to predict outcomes weeks in advance.",
    metric: { v: "94%", l: "Forecast accuracy" },
  },
  {
    icon: Map,
    eyebrow: "County Dashboards",
    title: "Live county-level decision dashboards",
    body: "From Nakuru to Trans Nzoia, county officers see real-time food security, input distribution and yield-risk grading.",
    metric: { v: "47", l: "Counties live" },
  },
  {
    icon: Wheat,
    eyebrow: "Food Security Analytics",
    title: "Early-warning intelligence for staple crops",
    body: "Risk grading for maize, beans, tea and coffee systems — so governments and cooperatives act before shortfalls hit markets.",
    metric: { v: "6 wk", l: "Lead time" },
  },
];

export function Slides() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const Active = SLIDES[i].icon;
  const slide = SLIDES[i];

  return (
    <section id="services" className="py-24 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">What we build</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">One platform. Five intelligence layers.</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-stretch">
          <div className="space-y-2">
            {SLIDES.map((s, idx) => {
              const Icon = s.icon;
              const active = idx === i;
              return (
                <button
                  key={s.title}
                  onClick={() => setI(idx)}
                  className={`w-full text-left flex items-start gap-4 rounded-xl p-4 transition-all border ${
                    active
                      ? "border-primary bg-card shadow-soft"
                      : "border-transparent hover:border-border hover:bg-card/60"
                  }`}
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${active ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className={`text-xs uppercase tracking-wider ${active ? "text-primary" : "text-muted-foreground"}`}>{s.eyebrow}</div>
                    <div className="font-display font-semibold mt-0.5">{s.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-3xl border border-border bg-card p-10 shadow-soft overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
            <div key={i} className="animate-fade-up relative">
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-6">
                <Active className="h-7 w-7" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{slide.eyebrow}</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">{slide.title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">{slide.body}</p>
              <div className="mt-8 inline-flex items-baseline gap-3 rounded-xl bg-muted/50 px-5 py-3">
                <span className="font-display text-3xl font-bold text-primary">{slide.metric.v}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{slide.metric.l}</span>
              </div>
              <div className="mt-10 flex gap-1.5">
                {SLIDES.map((_, idx) => (
                  <span key={idx} className={`h-1 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-4 bg-border"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
