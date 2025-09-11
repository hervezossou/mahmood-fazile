import type { ReactNode } from "react"

interface SocialIconProps {
    children: ReactNode;
    href: string;
}

export const SocialIcon = ({ children, href }: SocialIconProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className="size-10 flex items-center justify-center bg-white/5 border-2 border-fondation-white-dark-hover group transition-colors hover:border-fondation-orange-dark-hover rounded-full"
        >
            {children}
        </a>
    )
}