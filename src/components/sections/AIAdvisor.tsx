import { Bot, Sparkles, MapPin, Wheat } from "lucide-react";

const CAPABILITIES = [
  { icon: Sparkles, title: "Soil interpretation", body: "Translate lab results into plain-language guidance — what's deficient, what's optimal." },
  { icon: Wheat, title: "Fertilizer recommendations", body: "Per-crop, per-plot input plans calibrated to soil chemistry and budget." },
  { icon: MapPin, title: "Crop suitability", body: "Match crops to micro-climates across Kenyan counties using historical yield patterns." },
  { icon: Bot, title: "County-level insights", body: "Aggregate intelligence for officers — food security, input distribution, risk grading." },
];

const SAMPLE_CHAT = [
  { who: "you", text: "My maize plot in Nakuru — soil test shows N 1.2%, P 18 ppm, pH 5.4. What do you recommend?" },
  { who: "ai", text: "pH is acidic — apply 2 t/ha agricultural lime 4 weeks before planting. N is moderate, P is low: basal DAP at 100 kg/ha and a CAN top-dress (60 kg/ha) at knee-high. Expect ~22% yield gain vs. last season." },
];

export function AIAdvisor() {
  return (
    <section id="ai-advisor" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-5">
            <Bot className="h-3.5 w-3.5" /> Mchanga AI Advisor
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            An agronomist in every pocket
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Trained on Kenyan agronomy, county soil maps and decades of yield outcomes — the
            Mchanga AI Advisor reads your soil test, weather window and crop choice, then
            recommends what to apply, when, and at what rate.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="font-display font-semibold">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elevated">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-semibold">Mchanga AI Advisor</div>
                <div className="text-xs text-primary flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Online · Swahili & English
                </div>
              </div>
            </div>

            <div className="space-y-4 py-5">
              {SAMPLE_CHAT.map((m, i) => (
                <div key={i} className={`flex ${m.who === "you" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.who === "you"
                      ? "bg-muted text-foreground rounded-br-sm"
                      : "bg-gradient-primary text-primary-foreground rounded-bl-sm"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground flex items-center justify-between">
              <span>Ask about soil, crops or fertilizer…</span>
              <span className="text-xs">⌘ + ↵</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
