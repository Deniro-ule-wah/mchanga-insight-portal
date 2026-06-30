import {
  FlaskConical,
  TrendingUp,
  Leaf,
  Building2,
  ClipboardCheck,
  Microscope,
  Wheat,
  Sparkles,
  Users,
  BookOpen,
  Cloud,
  Store,
  ArrowUpRight,
} from "lucide-react";

const MODULES = [
  { icon: FlaskConical, title: "Soil Analytics", desc: "Lab-grade nutrient, pH and moisture intelligence at plot resolution.", stat: "1.2M samples" },
  { icon: TrendingUp, title: "Yield Intelligence", desc: "Season-over-season yield forecasting calibrated on verified outcomes.", stat: "+24% avg lift" },
  { icon: Leaf, title: "Fertilizer Intelligence", desc: "Precision NPK recommendations tuned to soil, crop and climate.", stat: "−38% input cost" },
  { icon: Building2, title: "County Dashboards", desc: "Aggregated food security and input distribution analytics per county.", stat: "47 counties" },
  { icon: ClipboardCheck, title: "Field Operations", desc: "Mobile-first agent workflows for verified ground-truth capture.", stat: "Offline-ready" },
  { icon: Microscope, title: "Laboratory Network", desc: "Connected soil and tissue labs feeding the national dataset.", stat: "Live ingest" },
  { icon: Wheat, title: "Food Security", desc: "Risk grading, drought signals and supply outlooks for planners.", stat: "Quarterly outlook" },
  { icon: Sparkles, title: "AI Recommendations", desc: "Mchanga AI Advisor turns data into actionable agronomic guidance.", stat: "Conversational" },
  { icon: Users, title: "Farmer Registry", desc: "Verified farmer profiles with plots, cycles and intervention history.", stat: "KYC-grade" },
  { icon: BookOpen, title: "Agricultural Research", desc: "Open datasets and APIs for universities and research institutions.", stat: "API-ready" },
  { icon: Cloud, title: "Carbon Intelligence", desc: "Soil carbon baselines and MRV scaffolding for climate finance.", stat: "MRV-ready" },
  { icon: Store, title: "Future Marketplace", desc: "Roadmap: trusted input and produce exchange built on verified data.", stat: "On roadmap" },
];

export function Modules() {
  return (
    <section id="modules" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Platform</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Twelve modules. One agricultural intelligence fabric.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From soil chemistry to county-scale food security — every layer is verified,
            interoperable and built for institutional use.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m) => (
            <article
              key={m.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <m.icon className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                  {m.stat}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowUpRight className="h-4 w-4 ml-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
