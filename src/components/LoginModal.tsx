import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, ROLE_HOME, type Role } from "@/lib/auth";
import { Shield, UserCog, Sprout } from "lucide-react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialRole?: Role;
}

const ROLES: { role: Role; title: string; desc: string; icon: typeof Shield }[] = [
  { role: "admin", title: "Administrator", desc: "Verify data, manage users", icon: Shield },
  { role: "agent", title: "Field Agent", desc: "Capture soil, crop & yield data", icon: UserCog },
  { role: "client", title: "Client / Farmer", desc: "View insights & recommendations", icon: Sprout },
];

export function LoginModal({ open, onOpenChange, initialRole }: Props) {
  const [role, setRole] = useState<Role | null>(initialRole ?? null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (open) setRole(initialRole ?? null);
  }, [open, initialRole]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !email) return;
    auth.login(role, email);
    toast.success(`Welcome back`, { description: `Signed in as ${role}` });
    onOpenChange(false);
    navigate({ to: ROLE_HOME[role] });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {role ? `Sign in — ${ROLES.find(r => r.role === role)?.title}` : "Choose your role"}
          </DialogTitle>
          <DialogDescription>
            {role ? "Use any email to preview your dashboard." : "Pick how you'll be using Mchanga Afya."}
          </DialogDescription>
        </DialogHeader>

        {!role ? (
          <div className="grid gap-3 pt-2">
            {ROLES.map(({ role: r, title, desc, icon: Icon }) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary hover:shadow-soft"
              >
                <div className="h-11 w-11 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@farm.co" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between pt-2">
              <button type="button" onClick={() => setRole(null)} className="text-sm text-muted-foreground hover:text-foreground">
                ← Change role
              </button>
              <Button type="submit" className="bg-gradient-primary text-primary-foreground">
                Sign in
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
