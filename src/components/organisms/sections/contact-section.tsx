import { SectionHeader } from "@/components/molecules/section-header";
import { ContactForm } from "@/components/organisms/contact-form";

export const ContactSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 lg:gap-12.5">
      <SectionHeader
        title="Contact me"
        subtitle="Cultivating Connections: Reach Out and Connect with Me"
      />
      <ContactForm />
    </section>
  );
};
