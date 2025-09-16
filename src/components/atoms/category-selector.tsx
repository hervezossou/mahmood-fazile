import type { MouseEventHandler } from "react";
import clsx from "clsx";

interface CategorySelectorProps {
    category: string;
    isSelected: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const CategorySelector = ({ category, isSelected, onClick }: CategorySelectorProps) => {

    const baseStyle = "h-[54px] w-max flex items-center justify-center px-10 py-3.5 gap-2.5 rounded-lg transition-all ease-in-out duration-500 font-bold text-base text-fondation-white-normal-active";
    return (
        <button
            className={clsx(baseStyle, `${isSelected ? "bg-gradint text-white" : "bg-white/8"}`)}
            onClick={onClick}
            aria-pressed={isSelected}
        >
            {category}
        </button>
    )
}