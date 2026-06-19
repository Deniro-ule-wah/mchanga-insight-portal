// Auth layer — talks to backend at API_BASE when reachable, otherwise
// falls back to a local session so the demo flow works in any environment.

import { API_BASE } from "./api";

export type Role = "admin" | "agent" | "county" | "farmer";

export interface AuthUser {
  email: string;
  name: string;
  role: Role;
  token?: string;
}

const KEY = "mchanga_auth";

// Where each role lands after login.
// Admin jumps to the external Akili Hub control plane.
export const ROLE_HOME: Record<Role, string> = {
  admin: "https://mchanga-akili-hub-main-cr6a.vercel.app/admin",
  agent: "/agent-dashboard",
  county: "/county-dashboard",
  farmer: "/farmer-dashboard",
};

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Administrator",
  agent: "Field Agent",
  county: "County Officer",
  farmer: "Farmer",
};

export const ROLE_DESCRIPTION: Record<Role, string> = {
  admin: "System governance, user management & data verification",
  agent: "Capture soil, crop and yield data from the field",
  county: "County-level dashboards & food security analytics",
  farmer: "Personalised soil insights & fertilizer guidance",
};

async function tryRemoteLogin(
  email: string,
  password: string,
  role: Role,
): Promise<AuthUser | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) return null;
    const data = (await res.json()) as Partial<AuthUser> & { token?: string };
    return {
      email,
      name: data.name || email.split("@")[0].replace(/[._-]/g, " "),
      role: (data.role as Role) || role,
      token: data.token,
    };
  } catch {
    return null;
  }
}

export const auth = {
  async login(role: Role, email: string, password: string): Promise<AuthUser> {
    const remote = await tryRemoteLogin(email, password, role);
    const user: AuthUser =
      remote ?? {
        email,
        name: email.split("@")[0].replace(/[._-]/g, " "),
        role,
      };
    if (typeof window !== "undefined") {
      localStorage.setItem(KEY, JSON.stringify(user));
    }
    return user;
  },
  get(): AuthUser | null {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  },
  logout() {
    if (typeof window !== "undefined") localStorage.removeItem(KEY);
  },
};

// Navigate to the role's home — supports both internal routes and external URLs.
export function goToRoleHome(role: Role) {
  const target = ROLE_HOME[role];
  if (typeof window === "undefined") return;
  if (/^https?:\/\//.test(target)) {
    window.location.href = target;
  } else {
    window.location.assign(target);
  }
}
