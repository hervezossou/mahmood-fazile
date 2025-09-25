import { useEffect } from "react";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/organisms/sections/hero-section";
import { ServicesSection } from "@/components/organisms/sections/service-section";
import { AboutSection } from "@/components/organisms/sections/about-section";
import { WorkSection } from "@/components/organisms/sections/work-section";
import { ContactSection } from "@/components/organisms/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main className="w-full flex flex-col gap-20 px-5 md:px-10 lg:px-20 lg:gap-37.5">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
