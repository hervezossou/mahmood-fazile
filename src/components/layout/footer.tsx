import { Logo } from "@/components/atoms/logo";
import { NavLink } from "@/components/atoms/nav-link";
import { navItems } from "@/lib/data";
import { SocialIcons } from "@/components/molecules/social-icons";
import { ContactInfos } from "@/components/molecules/contact-infos";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-7.5 px-20 pt-10 pb-6">
      <div className="flex flex-col items-center justify-between gap-7.5 lg:gap-12.5">
        <Logo />
        <div className="flex items-center justify-center flex-wrap gap-6">
          {navItems.map((item, index) => (
            <NavLink key={index} label={item.label} href={item.href} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-7.5 self-stretch">
        <SocialIcons />
        <ContactInfos />
      </div>
      <div className="w-full flex items-center justify-center pt-4 px-30 border-t-2 border-fondation-white-dark-active">
        <p className="font-bold text-center text-nowrap text-fondation-white-dark-active text-sm lg:text-base">
          Designed by{" "}
          <a
            href="https://linkedin.com/in/votre-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-fondation-orange-dark-hover"
          >
            @mahmood.fazile
          </a>{" "}
          UI/UX designer
        </p>
      </div>
    </footer>
  );
};
