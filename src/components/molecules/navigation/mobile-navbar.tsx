import { NavLink } from "@/components/atoms/nav-link";
import { navItems } from "@/lib/data";

interface MobileNavPanelProps {
  isOpen: boolean;
}

export const MobileNavPanel = ({ isOpen }: MobileNavPanelProps) => {
  return (
    <nav className={`absolute top-17 left-0 z-50 w-full h-screen flex flex-col bg-fondation-grey-dark items-center gap-10 p-10 transform transition-transform ease-in-out duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      {navItems.map((item, index) => (
        <NavLink
          href={item.href}
          label={item.label}
          key={index}
        />
      ))}
    </nav>
  );
};
