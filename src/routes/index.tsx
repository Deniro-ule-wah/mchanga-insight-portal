import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { LoginModal } from "@/components/LoginModal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { RoleAccess } from "@/components/sections/RoleAccess";
import { DataPreview } from "@/components/sections/DataPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import type { Role } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mchanga Afya — Soil Intelligence for Sustainable Farming" },
      { name: "description", content: "Data-driven agriculture intelligence for Africa. Soil testing, fertilizer optimization and yield prediction for farms, agents and cooperatives." },
      { property: "og:title", content: "Mchanga Afya — Agricultural Intelligence" },
      { property: "og:description", content: "Soil intelligence, fertilizer optimization and yield prediction for African agriculture." },
    ],
    links: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role | undefined>(undefined);

  const openLogin = (r?: Role) => {
    setRole(r);
    setOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onLogin={() => openLogin()} />
      <Hero onLogin={openLogin} />
      <About />
      <Services />
      <RoleAccess onLogin={openLogin} />
      <DataPreview />
      <Testimonials />
      <Contact />
      <Footer />
      <LoginModal open={open} onOpenChange={setOpen} initialRole={role} />
      <Toaster richColors position="top-right" />
    </div>
  );
}
