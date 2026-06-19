import { Wheat, TrendingUp, FlaskConical, MapPin } from "lucide-react";

const STATS = [
  { icon: Wheat, k: "1.42M", l: "Hectares monitored", sub: "across 47 Kenyan counties" },
  { icon: TrendingUp, k: "+24%", l: "Average yield improvement", sub: "season-over-season" },
  { icon: FlaskConical, k: "38%", l: "Fertilizer cost reduction", sub: "via precision recommendations" },
  { icon: MapPin, k: "47/47", l: "County coverage", sub: "from Nakuru to Mombasa" },
];

const COUNTIES = [
  "Nakuru", "Uasin Gishu", "Trans Nzoia", "Bungoma", "Kakamega", "Meru",
  "Kiambu", "Nyeri", "Kisumu", "Bomet", "Kericho", "Nandi",
];

export function TrustMetrics() {
  return (
    <section id="trust" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Measured impact</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Trusted across Kenya's farming counties</h2>
          <p className="mt-4 text-muted-foreground">
            Designed for collaboration with agricultural institutions, cooperatives and county governments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STATS.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-2 font-semibold">{s.l}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
            <div>
              <h3 className="font-display text-2xl font-bold">Active county coverage</h3>
              <p className="text-sm text-muted-foreground mt-1">Live data from Rift Valley, Western, Central and Nyanza regions.</p>
            </div>
            <div className="text-sm text-primary font-medium">Maize · Tea · Coffee · Beans · Sorghum</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {COUNTIES.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 border border-border px-4 py-1.5 text-sm font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" /> {c}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full bg-gradient-primary text-primary-foreground px-4 py-1.5 text-sm font-medium">
              + 35 more counties
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
