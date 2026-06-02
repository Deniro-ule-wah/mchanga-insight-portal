import { Button } from "@/components/ui/button";
import { Shield, UserCog, Sprout, ArrowRight } from "lucide-react";
import type { Role } from "@/lib/auth";

const roles: { role: Role; title: string; icon: typeof Shield; desc: string; perks: string[]; tone: string }[] = [
  {
    role: "admin",
    title: "Administrator",
    icon: Shield,
    desc: "Govern the data layer end-to-end.",
    perks: ["Verify farmer entries", "Manage users & permissions", "Analytics overview"],
    tone: "from-foreground to-foreground/80",
  },
  {
    role: "agent",
    title: "Field Agent",
    icon: UserCog,
    desc: "Capture the ground truth.",
    perks: ["Soil & crop cycle entry", "Fertilizer applications", "Yield updates"],
    tone: "from-primary to-primary/70",
  },
  {
    role: "client",
    title: "Client / Farmer",
    icon: Sprout,
    desc: "See what's working on your farm.",
    perks: ["Yield trends & forecasts", "Fertilizer recommendations", "Farm status summary"],
    tone: "from-soil to-soil/70",
  },
];

export function RoleAccess({ onLogin }: { onLogin: (role: Role) => void }) {
  return (
    <section id="access" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Portal Access</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">Built for every role on the farm.</h2>
          <p className="mt-4 text-muted-foreground">Three tailored experiences. One verified dataset behind them all.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {roles.map(({ role, title, icon: Icon, desc, perks, tone }) => (
            <div key={role} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all overflow-hidden">
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${tone} opacity-10 blur-2xl`} />
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${tone} flex items-center justify-center text-white mb-6`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => onLogin(role)}
                className="mt-8 w-full bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2"
              >
                Enter {title} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
