export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">About Mchanga Afya</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            Healthy soil. Honest data. <span className="text-gradient">Higher yields.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Mchanga Afya</span> — Swahili for "soil health" —
            is an agricultural intelligence platform that brings lab-grade soil insight, fertilizer
            optimization and yield forecasting to smallholder farms across Africa.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We pair field agents with verified science so administrators, agronomists and farmers
            all work from one trusted source of truth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "Soil", v: "Lab-grade analysis" },
            { k: "Crops", v: "Cycle-aware planning" },
            { k: "Inputs", v: "Right dose, right time" },
            { k: "Yield", v: "Forecast before harvest" },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated transition-shadow">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.k}</div>
              <div className="font-display font-semibold mt-2">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
