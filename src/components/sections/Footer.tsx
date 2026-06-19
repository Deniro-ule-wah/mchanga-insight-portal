import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Mchanga Afya" className="h-9 w-9 object-contain" />
            <span className="font-display font-bold text-lg">Mchanga Afya</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Building Africa's agricultural intelligence infrastructure — soil analytics,
            fertilizer optimization and food security decisioning, starting in Kenya.
          </p>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Designed for collaboration with agricultural institutions.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm">Platform</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#ai-advisor" className="hover:text-foreground">AI Advisor</a></li>
            <li><a href="#trust" className="hover:text-foreground">Impact</a></li>
            <li><a href="/login" className="hover:text-foreground">Sign in</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary" />
              <a href="mailto:denniswachira8@gmail.com" className="hover:text-foreground">denniswachira8@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <a href="tel:+254701432399" className="hover:text-foreground">+254 701 432 399</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              <span>P.O. Box 552 — Thika, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Mchanga Afya · Founded by Dennis Muthomi Wachira</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
