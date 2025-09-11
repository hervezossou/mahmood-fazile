import { Icon } from "@iconify/react";

interface ContactInfoProps {
    icon: string;
    text: string;
    href: string;
}

export const ContactInfo = ({ icon, text, href }: ContactInfoProps) => {
    return (
        <a href={href} className="max-w-[289px] h-6 flex items-center gap-3.5 transition-colors text-fondation-white-dark-hover hover:text-fondation-orange-dark-hover">
            <Icon
                icon={icon}
                width={24}
                height={24}
                aria-hidden="true"
            />
            <span className="font-bold text-base lg:text-xl">
                {text}
            </span>
        </a>
    )
}