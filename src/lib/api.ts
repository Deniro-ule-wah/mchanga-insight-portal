// Backend integration layer — wired to http://localhost:4000.
// All calls are structured so the UI can swap mock fallbacks for live data later.

export const API_BASE = "http://localhost:4000";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  farmers: () => request<unknown[]>("/farmers"),
  cropCycles: () => request<unknown[]>("/crop-cycles"),
  fertilizer: () => request<unknown[]>("/fertilizer-applications"),
  yields: () => request<unknown[]>("/yield-outcomes"),
  submit: (path: string, body: unknown) =>
    request(path, { method: "POST", body: JSON.stringify(body) }),
};
