import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  auth,
  goToRoleHome,
  ROLE_DESCRIPTION,
  ROLE_LABEL,
  type Role,
} from "@/lib/auth";
import { ArrowLeft, Shield, UserCog, Building2, Sprout } from "lucide-react";

const searchSchema = z.object({
  role: z.enum(["admin", "agent", "county", "farmer"]).optional(),
});

export const Route = createFileRoute("/login")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in — Mchanga Afya" },
      { name: "description", content: "Sign in to the Mchanga Afya platform as an administrator, field agent, county officer or farmer." },
      { property: "og:title", content: "Sign in — Mchanga Afya" },
      { property: "og:description", content: "Role-based access to Africa's agricultural intelligence platform." },
      { property: "og:url", content: "https://mchanga-insight-portal.lovable.app/login" },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://mchanga-insight-portal.lovable.app/login" }],
  }),
  component: LoginPage,
});

const ROLES: { role: Role; icon: typeof Shield }[] = [
  { role: "admin", icon: Shield },
  { role: "agent", icon: UserCog },
  { role: "county", icon: Building2 },
  { role: "farmer", icon: Sprout },
];

function LoginPage() {
  const search = useSearch({ from: "/login" });
  const navigate = useNavigate();
  const [role, setRole] = useState<Role | null>(search.role ?? null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;
    setLoading(true);
    try {
      const user = await auth.login(role, email, password);
      toast.success(`Welcome, ${user.name}`, {
        description: `Signed in as ${ROLE_LABEL[user.role]}`,
      });
      goToRoleHome(user.role);
    } catch {
      toast.error("Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex flex-col">
      <header className="px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mchanga Afya" className="h-8 w-8 object-contain" />
          <span className="font-display font-bold tracking-tight">
            Mchanga <span className="text-primary">Afya</span>
          </span>
        </Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Back to site
        </Link>
      </header>

      <main className="flex-1 grid place-items-center px-6 py-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold">Sign in to Mchanga Afya</h1>
            <p className="text-muted-foreground mt-2 text-sm">
              {role
                ? `Continue as ${ROLE_LABEL[role]}.`
                : "Select your role to continue."}
            </p>
          </div>

          {!role ? (
            <div className="grid gap-3">
              {ROLES.map(({ role: r, icon: Icon }) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary hover:shadow-soft"
                >
                  <div className="h-11 w-11 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{ROLE_LABEL[r]}</div>
                    <div className="text-xs text-muted-foreground">{ROLE_DESCRIPTION[r]}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-soft space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@farm.co.ke" autoComplete="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" autoComplete="current-password" />
              </div>
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setRole(null)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Change role
                </button>
                <Button type="submit" disabled={loading} className="bg-gradient-primary text-primary-foreground">
                  {loading ? "Signing in…" : "Sign in"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center pt-2">
                Auth attempts the backend, then falls back to local session for the demo.
              </p>
            </form>
          )}

          <p className="text-center text-xs text-muted-foreground mt-6">
            New here?{" "}
            <button
              onClick={() => navigate({ to: "/", hash: "contact" })}
              className="text-primary hover:underline"
            >
              Request access
            </button>
          </p>
        </div>
      </main>
      <Toaster richColors position="top-right" />
    </div>
  );
}
