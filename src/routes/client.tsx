import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Sprout, Droplets, TrendingUp, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/client")({
  head: () => ({ meta: [{ title: "Farmer Portal · Mchanga Afya" }] }),
  component: ClientPage,
});

const trend = [62, 68, 65, 74, 78, 82, 85, 88, 91, 89, 93, 96];

function ClientPage() {
  return (
    <DashboardShell role="client" title="Your Farm Overview" subtitle="Read-only insights from the latest verified field data.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: MapPin, l: "Active Plots", v: "4" },
          { icon: Sprout, l: "Soil Health", v: "87/100" },
          { icon: Droplets, l: "Last Soil Test", v: "12 days ago" },
          { icon: TrendingUp, l: "Forecast Yield", v: "+24%" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display text-3xl font-bold">{s.v}</div>
            <div className="text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-lg font-semibold">Yield Trend</h2>
              <p className="text-sm text-muted-foreground">Last 12 cycles</p>
            </div>
            <Badge className="bg-primary/10 text-primary border-0">+24% YoY</Badge>
          </div>
          <div className="flex items-end gap-2 h-44">
            {trend.map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/40" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <h2 className="font-display text-lg font-semibold">Recommendations</h2>
          <p className="text-sm text-muted-foreground">For this season</p>
          <ul className="mt-5 space-y-4">
            {[
              { c: "Plot A · Maize", a: "Reduce urea by 15% — soil N adequate." },
              { c: "Plot B · Beans", a: "Apply DAP at planting, 80 kg/ha." },
              { c: "Plot C · Sunflower", a: "Defer top-dress until next rains." },
              { c: "Plot D · Sorghum", a: "pH amendment — lime 200 kg/ha." },
            ].map((r) => (
              <li key={r.c} className="border-l-2 border-gold pl-3">
                <div className="text-sm font-medium">{r.c}</div>
                <div className="text-xs text-muted-foreground">{r.a}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-7 shadow-soft">
        <h2 className="font-display text-lg font-semibold mb-5">Farm Status</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { p: "Plot A", c: "Maize", s: "Growing", t: "primary" },
            { p: "Plot B", c: "Beans", s: "Planted", t: "gold" },
            { p: "Plot C", c: "Sunflower", s: "Pre-plant", t: "soil" },
            { p: "Plot D", c: "Sorghum", s: "Harvest soon", t: "primary" },
          ].map((p) => (
            <div key={p.p} className="rounded-xl bg-muted/40 p-5">
              <div className="text-xs text-muted-foreground">{p.p}</div>
              <div className="font-display font-semibold mt-1">{p.c}</div>
              <div className={`mt-3 inline-block text-xs px-2 py-0.5 rounded-full bg-${p.t}/10 text-${p.t}`}>
                {p.s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
