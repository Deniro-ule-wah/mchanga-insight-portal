import { Microscope, Beaker, TrendingUp, Sprout } from "lucide-react";

const services = [
  { icon: Microscope, title: "Soil Intelligence", desc: "Geo-tagged soil tests with nutrient, pH and moisture profiles built into a living field map." },
  { icon: Beaker, title: "Fertilizer Optimization", desc: "Per-plot input recommendations that match crop, soil and budget — no wasted urea, no guesswork." },
  { icon: TrendingUp, title: "Yield Prediction", desc: "Cycle-by-cycle yield forecasts that adapt as new soil and weather data arrive." },
  { icon: Sprout, title: "Crop Cycle Tracking", desc: "Plant-to-harvest visibility across every farm, with verified field-agent check-ins." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">What we do</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            A complete intelligence layer for the farm.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four connected services. One source of truth for every stakeholder in the value chain.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="absolute inset-x-7 bottom-0 h-[2px] bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
