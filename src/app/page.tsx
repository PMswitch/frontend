import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Installation from "@/components/sections/Installation";
import Usage from "@/components/sections/Usage";
import Documentation from "@/components/sections/Documentation";
import CTA from "@/components/sections/CTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Usage />
        <Documentation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
