import { useState } from "react";

const COUNTIES = [
  "Mombasa","Kwale","Kilifi","Tana River","Lamu","Taita Taveta","Garissa","Wajir","Mandera","Marsabit",
  "Isiolo","Meru","Tharaka Nithi","Embu","Kitui","Machakos","Makueni","Nyandarua","Nyeri","Kirinyaga",
  "Murang'a","Kiambu","Turkana","West Pokot","Samburu","Trans Nzoia","Uasin Gishu","Elgeyo Marakwet","Nandi","Baringo",
  "Laikipia","Nakuru","Narok","Kajiado","Kericho","Bomet","Kakamega","Vihiga","Bungoma","Busia",
  "Siaya","Kisumu","Homa Bay","Migori","Kisii","Nyamira","Nairobi",
];

function tileMetrics(name: string) {
  // Deterministic pseudo-data per county
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const soil = 55 + (h % 40);
  const yieldLift = 8 + ((h >> 3) % 28);
  const risk = ["Low", "Moderate", "Elevated"][(h >> 5) % 3];
  return { soil, yieldLift, risk };
}

export function CountyMap() {
  const [active, setActive] = useState<string>("Nakuru");
  const m = tileMetrics(active);

  return (
    <section id="map" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Coverage</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Intelligence across all 47 counties.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hover a county tile to preview soil health, yield momentum and food-security risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div
              role="list"
              aria-label="Kenya counties"
              className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5"
            >
              {COUNTIES.map((c) => {
                const t = tileMetrics(c);
                const isActive = c === active;
                const intensity = t.soil;
                return (
                  <button
                    key={c}
                    role="listitem"
                    onMouseEnter={() => setActive(c)}
                    onFocus={() => setActive(c)}
                    onClick={() => setActive(c)}
                    aria-label={`${c} — soil ${t.soil}/100`}
                    className={`aspect-square rounded-md transition-all relative overflow-hidden ${
                      isActive ? "ring-2 ring-primary scale-110 z-10" : "hover:scale-105"
                    }`}
                    style={{
                      background: `oklch(${0.45 + (intensity / 100) * 0.35} 0.12 ${140 - intensity * 0.6})`,
                    }}
                  >
                    <span className="sr-only">{c}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>Soil health index</span>
              <div className="flex items-center gap-2">
                <span>Low</span>
                <div className="h-2 w-32 rounded-full bg-gradient-to-r from-[oklch(0.45_0.12_140)] via-[oklch(0.62_0.12_110)] to-[oklch(0.80_0.12_80)]" />
                <span>High</span>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              County profile
            </div>
            <div className="mt-2 font-display text-3xl font-bold">{active}</div>
            <div className="mt-1 text-sm text-muted-foreground">Mock intelligence preview · live API coming</div>

            <dl className="mt-7 space-y-5">
              <div>
                <dt className="text-xs text-muted-foreground">Soil health index</dt>
                <dd className="mt-1 flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: `${m.soil}%` }} />
                  </div>
                  <span className="font-display text-xl font-bold">{m.soil}</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Forecast yield lift</dt>
                <dd className="font-display text-2xl font-bold text-primary">+{m.yieldLift}%</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Food-security risk</dt>
                <dd className="inline-flex items-center gap-2 mt-1 rounded-full bg-muted/60 px-3 py-1 text-sm font-medium">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    m.risk === "Low" ? "bg-primary" : m.risk === "Moderate" ? "bg-gold" : "bg-soil"
                  }`} />
                  {m.risk}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
