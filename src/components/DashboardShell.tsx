import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { auth, ROLE_LABEL, type Role, type AuthUser } from "@/lib/auth";
import { LogOut, Home } from "lucide-react";

interface Props {
  role: Role;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function DashboardShell({ role, title, subtitle, children }: Props) {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const u = auth.get();
    if (!u || u.role !== role) {
      navigate({ to: "/" });
      return;
    }
    setUser(u);
  }, [navigate, role]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-8 object-contain" />
            <div>
              <div className="font-display font-bold text-sm leading-tight">Mchanga Afya</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{ROLE_LABEL[role]}</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <div className="text-sm font-medium capitalize">{user.name}</div>
              <div className="text-xs text-muted-foreground">{user.email}</div>
            </div>
            <Link to="/"><Button variant="ghost" size="icon"><Home className="h-4 w-4" /></Button></Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { auth.logout(); navigate({ to: "/" }); }}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {children}
      </main>
    </div>
  );
}
