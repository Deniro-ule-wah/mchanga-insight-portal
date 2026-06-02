import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";

const sections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "access", label: "Portal Access" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ onLogin }: { onLogin: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const user = auth.get();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mchanga Afya" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-lg tracking-tight">
            Mchanga <span className="text-primary">Afya</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <a href={`/${user.role}`}>
              <Button size="sm" variant="outline">Dashboard</Button>
            </a>
          ) : (
            <Button size="sm" onClick={onLogin} className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
