import { NavLink } from "@/components/atoms/nav-link"
import { navItems } from "@/lib/data"

export const MobileNavBar = () => {
    return (
        <nav className="flex items-center justify-between max-w-[653px] h-6 gap-15">
            {navItems.map((item, index) => (
                <NavLink href={item.href} label={item.label} key={index} />
            ))}
        </nav>
    )
}
