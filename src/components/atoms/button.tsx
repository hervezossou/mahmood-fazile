import type { ButtonVariant } from "@/lib/types";
import clsx from "clsx";

interface ButtonProps {
    label: string;
    variant: ButtonVariant
    onClick?: () => void;
}

export const Button = ({ label, variant, onClick }: ButtonProps) => {

    const baseStyle = "w-max h-[33px] lg:h-[43px] flex items-center justify-center px-5 py-2 rounded-md lg:px-10 lg:py-3 gap-2.5 font-medium lg:font-bold font-display text-sm lg:text-base cursor-pointer"

    const variantStyle = {
        contained: "bg-gradint text-white",
        outlined: "bg-none border-2 border-fondation-white-dark-hover text-fondation-white-dark-hover"
    }

    return (
        <button
            type="button"
            className={clsx(baseStyle, variantStyle[variant])}
            onClick={onClick}
        >
            {label}
        </button>
    )
}