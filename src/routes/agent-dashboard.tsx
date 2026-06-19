import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Sprout, FlaskConical, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/agent-dashboard")({
  head: () => ({ meta: [{ title: "Field Agent · Mchanga Afya" }, { name: "robots", content: "noindex" }] }),
  component: AgentPage,
});

function AgentPage() {
  const submit = (kind: string) => (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`${kind} submitted`, { description: "Synced to verification queue." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <DashboardShell role="agent" title="Field Agent Console" subtitle="Capture and sync ground-truth data from your assigned farms.">
      <Tabs defaultValue="crop" className="space-y-6">
        <TabsList className="grid w-full sm:w-auto sm:inline-grid grid-cols-3">
          <TabsTrigger value="crop" className="gap-2"><Sprout className="h-4 w-4" /> Crop Cycle</TabsTrigger>
          <TabsTrigger value="fert" className="gap-2"><FlaskConical className="h-4 w-4" /> Fertilizer</TabsTrigger>
          <TabsTrigger value="yield" className="gap-2"><BarChart3 className="h-4 w-4" /> Yield</TabsTrigger>
        </TabsList>

        <TabsContent value="crop">
          <FormCard title="New Crop Cycle" onSubmit={submit("Crop cycle")}>
            <Field label="Farmer ID" id="farmer" placeholder="F-2041" />
            <SelectField label="Crop" name="crop" options={["Maize", "Beans", "Tea", "Coffee", "Sorghum", "Rice"]} />
            <Field label="Plot ID" id="plot" placeholder="P-12" />
            <Field label="County" id="county" placeholder="Nakuru" />
            <Field label="Planting Date" id="date" type="date" />
            <SelectField label="Season" name="season" options={["Long rains", "Short rains"]} />
          </FormCard>
        </TabsContent>

        <TabsContent value="fert">
          <FormCard title="Fertilizer Application" onSubmit={submit("Fertilizer application")}>
            <Field label="Farmer ID" id="farmer2" placeholder="F-2041" />
            <SelectField label="Fertilizer Type" name="type" options={["Urea", "DAP", "CAN", "NPK 17-17-17", "Organic compost"]} />
            <Field label="Rate (kg/ha)" id="rate" type="number" placeholder="120" />
            <Field label="Application Date" id="adate" type="date" />
            <SelectField label="Method" name="method" options={["Broadcast", "Top-dress", "Side-dress", "Foliar"]} />
            <Field label="Cost (KES)" id="cost" type="number" placeholder="6500" />
          </FormCard>
        </TabsContent>

        <TabsContent value="yield">
          <FormCard title="Yield Update" onSubmit={submit("Yield update")}>
            <Field label="Farmer ID" id="farmer3" placeholder="F-2041" />
            <Field label="Crop Cycle ID" id="cycle" placeholder="C-998" />
            <Field label="Harvest Date" id="hdate" type="date" />
            <Field label="Yield (kg)" id="yld" type="number" placeholder="2400" />
            <Field label="Area Harvested (ha)" id="area" type="number" placeholder="1.5" />
            <SelectField label="Quality Grade" name="grade" options={["Premium", "Standard", "Below standard"]} />
          </FormCard>
        </TabsContent>
      </Tabs>
      <Toaster richColors position="top-right" />
    </DashboardShell>
  );
}

function FormCard({ title, children, onSubmit }: { title: string; children: React.ReactNode; onSubmit: (e: React.FormEvent) => void }) {
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
      <h2 className="font-display text-lg font-semibold mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-5">{children}</div>
      <div className="mt-7 flex justify-end gap-2">
        <Button type="reset" variant="outline">Clear</Button>
        <Button type="submit" className="bg-gradient-primary text-primary-foreground">Submit for verification</Button>
      </div>
    </form>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} required />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select name={name}>
        <SelectTrigger><SelectValue placeholder={`Select ${label.toLowerCase()}`} /></SelectTrigger>
        <SelectContent>
          {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}
