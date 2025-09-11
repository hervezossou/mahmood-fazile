import { useEffect } from "react";

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
      <main className="w-full flex flex-col gap-37.5 px-5 md:px-10 lg:px-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
