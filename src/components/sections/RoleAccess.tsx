import { Button } from "@/components/ui/button";
import { Shield, UserCog, Building2, Sprout, ArrowRight, FlaskConical, LineChart } from "lucide-react";
import { Link } from "@tanstack/react-router";

const ADMIN_HUB = "https://mchanga-akili-hub-main-cr6a.vercel.app/admin";

type RoleCard = {
  title: string;
  icon: typeof Shield;
  desc: string;
  perks: string[];
  tone: string;
  cta: { label: string; href: string; external?: boolean };
};

const roles: RoleCard[] = [
  {
    title: "Administrator",
    icon: Shield,
    desc: "Govern the platform end-to-end via the Akili Hub.",
    perks: ["Verify farmer entries", "Manage users & permissions", "System analytics"],
    tone: "from-foreground to-foreground/80",
    cta: { label: "Open Akili Hub", href: ADMIN_HUB, external: true },
  },
  {
    title: "Field Agent",
    icon: UserCog,
    desc: "Capture verified ground truth from assigned farms.",
    perks: ["Soil & crop cycle entry", "Fertilizer applications", "Yield updates"],
    tone: "from-primary to-primary/70",
    cta: { label: "Enter Field Agent", href: "/login?role=agent" },
  },
  {
    title: "County Officer",
    icon: Building2,
    desc: "County-level food security & yield intelligence.",
    perks: ["County dashboards", "Risk grading", "Input distribution stats"],
    tone: "from-gold to-gold/70",
    cta: { label: "Enter County Officer", href: "/login?role=county" },
  },
  {
    title: "Research Partner",
    icon: FlaskConical,
    desc: "Access agricultural datasets for university research.",
    perks: ["Open datasets", "API access (roadmap)", "Citable methodology"],
    tone: "from-primary/80 to-soil/70",
    cta: { label: "Request access", href: "#contact" },
  },
  {
    title: "Farmer",
    icon: Sprout,
    desc: "See what's working on your farm, season by season.",
    perks: ["Yield trends & forecasts", "Fertilizer recommendations", "Plot status"],
    tone: "from-soil to-soil/70",
    cta: { label: "Enter Farmer", href: "/login?role=farmer" },
  },
  {
    title: "Investor",
    icon: LineChart,
    desc: "Track impact metrics across regions and crops.",
    perks: ["Sector intelligence", "Carbon readiness", "Pipeline visibility"],
    tone: "from-foreground to-primary/60",
    cta: { label: "Talk to founder", href: "#contact" },
  },
];

export function RoleAccess() {
  return (
    <section id="access" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Portal Access</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">Built for every role in agriculture.</h2>
          <p className="mt-4 text-muted-foreground">Six tailored experiences. One verified dataset behind them all.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map(({ title, icon: Icon, desc, perks, tone, cta }) => {
            const button = (
              <Button className="mt-8 w-full bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2">
                {cta.label} <ArrowRight className="h-4 w-4" />
              </Button>
            );
            return (
              <div key={title} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all overflow-hidden">
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
                {cta.external || cta.href.startsWith("#") ? (
                  <a href={cta.href}>{button}</a>
                ) : (
                  <Link to={cta.href as "/login"}>{button}</Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
