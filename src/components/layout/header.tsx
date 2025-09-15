import { useState } from "react"

import { Icon } from "@iconify/react"
import { Logo } from "@/components/atoms/logo"
import { Button } from "@/components/atoms/button"
import { DesktopNavBar } from "@/components/molecules/navigation/desktop-navbar"
import { MobileNavPanel } from "@/components/molecules/navigation/mobile-navbar"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="mb-16 relative w-full h-max flex items-center justify-between gap-auto lg:px-20 xl:mt-12.5">
            <div className="w-full hidden lg:flex lg:items-center lg:justify-between">
                <Logo />
                <DesktopNavBar />
                <Button
                    label="Hire Me"
                    variant="contained"
                />
            </div>
            <div className="w-full flex items-center justify-between py-4 px-5 md:px-10 border-b-1 border-b-fondation-white-dark-hover lg:hidden">
                <Icon
                    icon="gg:menu-left-alt"
                    width={32}
                    height={32}
                    className="text-fondation-white-dark-hover"
                    onClick={() => setIsOpen(!isOpen)}
                />
                <Logo />
                <Button
                    label="Hire Me"
                    variant="contained"
                />
            </div>
            {isOpen && <MobileNavPanel isOpen={isOpen} />}
        </header>
    )
}