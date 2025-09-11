import clsx from "clsx"
import type { MouseEvent } from "react"
import type { NavLink as NavLinkProps } from "@/lib/types"

export const NavLink = ({ label, href }: NavLinkProps) => {
    const isActive = window.location.hash === href

    const baseStyle = "font-display text-xl transition-colors"

    const handleClick =
        (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" }) // smooth scroll
            }
        }

    return (
        <a
            href={href}
            onClick={handleClick(href)}
            className={clsx(
                baseStyle,
                isActive
                    ? "text-fondation-orange-normal underline"
                    : "text-fondation-white-dark-hover hover:text-fondation-orange-normal"
            )}
            aria-current={isActive ? "true" : "false"}
        >
            {label}
        </a>
    )
}
