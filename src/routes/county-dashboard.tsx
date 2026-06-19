import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wheat, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/county-dashboard")({
  head: () => ({ meta: [{ title: "County Officer · Mchanga Afya" }, { name: "robots", content: "noindex" }] }),
  component: CountyPage,
});

const counties = [
  { name: "Nakuru", farmers: 8420, yieldIdx: 92, risk: "Low" },
  { name: "Uasin Gishu", farmers: 6190, yieldIdx: 88, risk: "Low" },
  { name: "Trans Nzoia", farmers: 5320, yieldIdx: 86, risk: "Moderate" },
  { name: "Bungoma", farmers: 4710, yieldIdx: 79, risk: "Moderate" },
  { name: "Kakamega", farmers: 4280, yieldIdx: 74, risk: "Elevated" },
  { name: "Meru", farmers: 3960, yieldIdx: 81, risk: "Low" },
];

const riskColor: Record<string, string> = {
  Low: "bg-primary/10 text-primary",
  Moderate: "bg-gold/20 text-soil",
  Elevated: "bg-destructive/10 text-destructive",
};

function CountyPage() {
  return (
    <DashboardShell role="county" title="County Intelligence Console" subtitle="Aggregate food security, soil and yield metrics across your jurisdiction.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: MapPin, l: "Counties Monitored", v: "47" },
          { icon: Users, l: "Registered Farmers", v: "182,460" },
          { icon: Wheat, l: "Hectares Mapped", v: "1.42M" },
          { icon: TrendingUp, l: "Avg. Yield Index", v: "84.1" },
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

      <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold">County Snapshot</h2>
            <p className="text-sm text-muted-foreground">Current season performance & risk grading.</p>
          </div>
          <Badge variant="secondary">Live</Badge>
        </div>
        <div className="divide-y divide-border">
          {counties.map((c) => (
            <div key={c.name} className="p-5 grid sm:grid-cols-4 gap-3 items-center text-sm">
              <div>
                <div className="text-xs text-muted-foreground">County</div>
                <div className="font-medium">{c.name}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Farmers</div>
                <div className="font-medium">{c.farmers.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Yield index</div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden max-w-32">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${c.yieldIdx}%` }} />
                  </div>
                  <span className="font-medium">{c.yieldIdx}</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Risk</div>
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${riskColor[c.risk]}`}>{c.risk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
