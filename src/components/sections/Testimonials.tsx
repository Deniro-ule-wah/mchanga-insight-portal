import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We cut fertilizer spend by a third and our maize yield went up. The recommendations actually fit my plot.",
    name: "Esther Mwakasege",
    role: "Smallholder farmer, Mbeya",
  },
  {
    quote: "Field agents now sync soil tests in minutes. We finally have one verified dataset across all regions.",
    name: "Dr. Joseph Kileo",
    role: "Agronomy Lead, Regional Cooperative",
  },
  {
    quote: "Mchanga Afya turned guesswork into a plan. Our cooperative grew 22% in a single season.",
    name: "Amina Hassan",
    role: "Director, Iringa Farmers Union",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Impact</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            Farms, agents and cooperatives — all growing together.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
