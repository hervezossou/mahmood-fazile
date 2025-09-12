import { Icon } from "@iconify/react"
import type { ButtonVariant } from "@/lib/types";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  icon?: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

export const Button = ({ label, icon, variant, onClick }: ButtonProps) => {
  const baseStyle =
    "w-max h-[33px] lg:h-[48px] flex items-center justify-center px-5 py-2 rounded-md lg:px-8 lg:py-3 gap-2.5 font-medium lg:font-bold font-display text-sm lg:text-base cursor-pointer";

  const variantStyle = {
    contained: "bg-gradint text-white",
    outlined:
      "bg-none border-2 border-fondation-white-dark-hover text-fondation-white-dark-hover hover:bg-fondation-white-normal-hover hover:text-fondation-black-normal",
  };

  return (
    <button
      type="button"
      className={clsx(baseStyle, variantStyle[variant])}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} width={24} height={24} />}{label}
    </button>
  );
};
