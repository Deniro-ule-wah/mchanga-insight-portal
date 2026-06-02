import hero from "@/assets/hero-farm.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, UserCog, Sprout } from "lucide-react";
import type { Role } from "@/lib/auth";

export function Hero({ onLogin }: { onLogin: (role?: Role) => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.13_85/0.15),_transparent_50%)]" />
      </div>

      {/* Floating data nodes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-[15%] h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
        <div className="absolute top-1/2 right-[28%] h-2 w-2 rounded-full bg-gold animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-[10%] h-2 w-2 rounded-full bg-soil animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Soil Intelligence • Built for Africa
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Data-Driven{" "}
            <span className="text-gradient">Agriculture Intelligence</span>{" "}
            for Africa
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Mchanga Afya turns soil tests, crop cycles and field observations into precise
            fertilizer guidance and yield forecasts — so every farm grows smarter, season after season.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => onLogin("admin")} className="bg-foreground text-background hover:bg-foreground/90 gap-2">
              <Shield className="h-4 w-4" /> Admin Login
            </Button>
            <Button size="lg" onClick={() => onLogin("agent")} className="bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2">
              <UserCog className="h-4 w-4" /> Field Agent Login
            </Button>
            <Button size="lg" onClick={() => onLogin("client")} variant="outline" className="border-soil text-soil hover:bg-soil hover:text-soil-foreground gap-2">
              <Sprout className="h-4 w-4" /> Client Portal <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "12k+", v: "Farms Mapped" },
              { k: "94%", v: "Yield Accuracy" },
              { k: "38%", v: "Avg. Cost Saved" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <FloatingCard />
        </div>
      </div>
    </section>
  );
}

function FloatingCard() {
  return (
    <div className="relative">
      <div className="glass rounded-2xl p-6 shadow-elevated animate-float">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-muted-foreground">Soil Health Index</div>
            <div className="font-display text-3xl font-bold mt-1">87<span className="text-base text-muted-foreground">/100</span></div>
          </div>
          <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
            <Sprout className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-3">
          {[
            { l: "Nitrogen", v: 78, c: "bg-primary" },
            { l: "Phosphorus", v: 64, c: "bg-gold" },
            { l: "Potassium", v: 82, c: "bg-soil" },
            { l: "Moisture", v: 71, c: "bg-primary/70" },
          ].map((b) => (
            <div key={b.l}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{b.l}</span>
                <span className="font-medium">{b.v}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full ${b.c} rounded-full`} style={{ width: `${b.v}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Kilolo Plot · Iringa</span>
          <span className="text-primary font-medium">Optimal ↑</span>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-soft animate-float" style={{ animationDelay: "1s" }}>
        <div className="text-xs text-muted-foreground">Predicted Yield</div>
        <div className="font-display text-xl font-bold text-primary">+24% ↑</div>
      </div>
    </div>
  );
}
