import { Activity, Droplets, Leaf, BarChart3 } from "lucide-react";

const stats = [
  { icon: Leaf, label: "Active Farms", value: "12,418", trend: "+8.4%" },
  { icon: Droplets, label: "Soil Tests / mo", value: "3,902", trend: "+12.1%" },
  { icon: Activity, label: "Recommendations Sent", value: "27.6k", trend: "+5.2%" },
  { icon: BarChart3, label: "Avg. Yield Lift", value: "+24%", trend: "season YoY" },
];

const bars = [42, 58, 51, 67, 73, 81, 76, 88, 94, 87, 92, 96];

export function DataPreview() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-gradient-to-b from-muted/40 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Live Intelligence</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            What your dashboard looks like.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A real-time preview of the data your team operates on. Numbers update as field agents sync from the ground.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-primary">{s.trend}</span>
              </div>
              <div className="mt-5 font-display text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-lg font-semibold">Predicted Yield Index</h3>
                <p className="text-sm text-muted-foreground">Last 12 cycles, rolling average</p>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl font-bold text-primary">96.2</div>
                <div className="text-xs text-muted-foreground">current index</div>
              </div>
            </div>
            <div className="flex items-end gap-2 h-40">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-primary to-primary/40 hover:from-gold hover:to-gold/40 transition-colors"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h3 className="font-display text-lg font-semibold">Top Recommendations</h3>
            <p className="text-sm text-muted-foreground">Generated this week</p>
            <ul className="mt-5 space-y-4">
              {[
                { f: "Iringa Plot A-12", a: "Reduce urea by 15%" },
                { f: "Mbeya Maize Block 4", a: "Apply DAP next cycle" },
                { f: "Morogoro Bean Farm", a: "pH amendment — lime" },
                { f: "Dodoma Sunflower 7", a: "Defer N until rains" },
              ].map((r) => (
                <li key={r.f} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <div className="text-sm font-medium">{r.f}</div>
                    <div className="text-xs text-muted-foreground">{r.a}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
