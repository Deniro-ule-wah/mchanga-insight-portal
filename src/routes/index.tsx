import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Slides } from "@/components/sections/Slides";
import { Modules } from "@/components/sections/Modules";
import { AIAdvisor } from "@/components/sections/AIAdvisor";
import { CountyMap } from "@/components/sections/CountyMap";
import { LiveMetrics } from "@/components/sections/LiveMetrics";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { RoleAccess } from "@/components/sections/RoleAccess";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mchanga Afya — Agricultural Intelligence Infrastructure for Africa" },
      { name: "description", content: "Soil intelligence, fertilizer optimization, yield forecasting and county-level food security analytics — built for Kenyan agriculture." },
      { name: "keywords", content: "Kenya agriculture, soil intelligence, fertilizer optimization, yield forecasting, county dashboards, food security, Mchanga Afya" },
      { property: "og:title", content: "Mchanga Afya — Agricultural Intelligence for Africa" },
      { property: "og:description", content: "Soil analytics, fertilizer optimization and yield forecasting across 47 Kenyan counties." },
      { property: "og:url", content: "https://mchanga-insight-portal.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Mchanga Afya — Agricultural Intelligence for Africa" },
      { name: "twitter:description", content: "Soil analytics, fertilizer optimization and yield forecasting across 47 Kenyan counties." },
    ],
    links: [{ rel: "canonical", href: "https://mchanga-insight-portal.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mchanga Afya",
          url: "https://mchanga-insight-portal.lovable.app/",
          description: "Agricultural intelligence infrastructure for Africa — soil analytics, fertilizer optimization and food security decisioning.",
          founder: { "@type": "Person", name: "Dennis Muthomi Wachira" },
          email: "denniswachira8@gmail.com",
          telephone: "+254701432399",
          address: { "@type": "PostalAddress", postOfficeBoxNumber: "552", addressLocality: "Thika", addressCountry: "KE" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Slides />
      <AIAdvisor />
      <TrustMetrics />
      <RoleAccess />
      <Contact />
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
