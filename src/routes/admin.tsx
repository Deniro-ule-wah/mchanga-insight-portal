import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Users, FileCheck, TrendingUp, AlertCircle } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin · Mchanga Afya" }] }),
  component: AdminPage,
});

const initialQueue = [
  { id: "F-2041", farmer: "Esther Mwakasege", region: "Mbeya", type: "Soil Test", date: "2026-05-30" },
  { id: "F-2042", farmer: "Joseph Kileo", region: "Iringa", type: "Yield Outcome", date: "2026-05-30" },
  { id: "F-2043", farmer: "Amina Hassan", region: "Dodoma", type: "Fertilizer Application", date: "2026-05-29" },
  { id: "F-2044", farmer: "Hamis Juma", region: "Morogoro", type: "Crop Cycle", date: "2026-05-29" },
];

function AdminPage() {
  const [queue, setQueue] = useState(initialQueue);

  const act = (id: string, ok: boolean) => {
    setQueue((q) => q.filter((x) => x.id !== id));
    toast.success(ok ? "Entry approved" : "Entry rejected", { description: `Record ${id}` });
  };

  const stats = [
    { icon: Users, label: "Active Farmers", value: "12,418" },
    { icon: FileCheck, label: "Pending Verification", value: queue.length.toString() },
    { icon: TrendingUp, label: "Data Quality", value: "98.4%" },
    { icon: AlertCircle, label: "Flagged", value: "12" },
  ];

  return (
    <DashboardShell role="admin" title="Administrator Overview" subtitle="Verify entries, manage users and monitor system health.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display text-3xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold">Verification Queue</h2>
            <p className="text-sm text-muted-foreground">Approve incoming data from field agents.</p>
          </div>
          <Badge variant="secondary">{queue.length} pending</Badge>
        </div>
        <div className="divide-y divide-border">
          {queue.length === 0 && (
            <div className="p-12 text-center text-muted-foreground text-sm">All caught up — no pending entries.</div>
          )}
          {queue.map((q) => (
            <div key={q.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 grid sm:grid-cols-4 gap-2 sm:gap-4 text-sm">
                <div><div className="text-xs text-muted-foreground">Record</div><div className="font-medium">{q.id}</div></div>
                <div><div className="text-xs text-muted-foreground">Farmer</div><div className="font-medium">{q.farmer}</div></div>
                <div><div className="text-xs text-muted-foreground">Type</div><div className="font-medium">{q.type}</div></div>
                <div><div className="text-xs text-muted-foreground">Region · Date</div><div className="font-medium">{q.region} · {q.date}</div></div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => act(q.id, true)} className="bg-primary text-primary-foreground gap-1">
                  <CheckCircle2 className="h-4 w-4" /> Approve
                </Button>
                <Button size="sm" variant="outline" onClick={() => act(q.id, false)} className="gap-1 text-destructive hover:text-destructive">
                  <XCircle className="h-4 w-4" /> Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </DashboardShell>
  );
}
