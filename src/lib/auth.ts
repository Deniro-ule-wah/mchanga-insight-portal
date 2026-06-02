export type Role = "admin" | "agent" | "client";

export interface AuthUser {
  email: string;
  name: string;
  role: Role;
}

const KEY = "mchanga_auth";

export const auth = {
  login(role: Role, email: string): AuthUser {
    const user: AuthUser = {
      email,
      name: email.split("@")[0].replace(/[._-]/g, " "),
      role,
    };
    localStorage.setItem(KEY, JSON.stringify(user));
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
    localStorage.removeItem(KEY);
  },
};

export const ROLE_HOME: Record<Role, string> = {
  admin: "/admin",
  agent: "/agent",
  client: "/client",
};

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Administrator",
  agent: "Field Agent",
  client: "Client / Farmer",
};
