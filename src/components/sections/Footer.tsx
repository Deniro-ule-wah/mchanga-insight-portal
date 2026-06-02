import logo from "@/assets/logo.png";
import { API_BASE } from "@/lib/api";

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
            Soil intelligence for sustainable farming. Bringing data-driven agriculture to every plot across Africa.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm">Platform</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#access" className="hover:text-foreground">Portal Access</a></li>
            <li><a href="#insights" className="hover:text-foreground">Insights</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm">Developers</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><code className="text-xs">{API_BASE}/farmers</code></li>
            <li><code className="text-xs">{API_BASE}/crop-cycles</code></li>
            <li><code className="text-xs">{API_BASE}/yield-outcomes</code></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Mchanga Afya. All rights reserved.</span>
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
