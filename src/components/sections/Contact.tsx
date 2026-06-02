import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Contact</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            Talk to the team behind the soil.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Whether you're an agronomist, cooperative, or NGO — we'd love to map your farms into the network.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "hello@mchangaafya.co" },
              { icon: Phone, label: "+255 700 000 000" },
              { icon: MapPin, label: "Dar es Salaam, Tanzania" },
            ].map(({ icon: I, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <I className="h-5 w-5" />
                </div>
                <span className="text-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent", { description: "We'll be in touch within 24 hours." });
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org">Organization</Label>
              <Input id="org" placeholder="Optional" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email2">Email</Label>
            <Input id="email2" type="email" required placeholder="you@farm.co" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">How can we help?</Label>
            <Textarea id="msg" rows={5} required placeholder="Tell us about your farm or program…" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
