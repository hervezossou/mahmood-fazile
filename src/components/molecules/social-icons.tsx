import { SocialIcon } from "@/components/atoms/social-icon";
import { Icon } from "@iconify/react";

interface SocialIconConfig {
  icon: string;
  href: string;
  name: string;
}

const socialIcons: SocialIconConfig[] = [
  {
    icon: "mdi:instagram",
    href: "https://instagram.com/votre-profil",
    name: "instagram",
  },
  {
    icon: "mingcute:linkedin-line",
    href: "https://linkedin.com/in/votre-profil",
    name: "linkedin",
  },
  {
    icon: "icon-park-outline:dribble",
    href: "https://dribbble.com/votre-profil",
    name: "dribbble",
  },
  {
    icon: "ri:behance-line",
    href: "https://behance.net/votre-profil",
    name: "behance",
  },
];

export const SocialIcons = () => {
  return (
    <div className="flex items-center justify-between gap-5 max-w-[220px]">
      {socialIcons.map(({ icon, href, name }) => (
        <SocialIcon key={name} href={href}>
          <Icon
            icon={icon}
            width={24}
            height={24}
            className="text-fondation-white-dark transition-colors group-hover:text-fondation-orange-dark-hover"
            aria-hidden="true"
          />
        </SocialIcon>
      ))}
    </div>
  );
};
