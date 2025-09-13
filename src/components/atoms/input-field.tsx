import type { ChangeEvent } from "react";
import clsx from "clsx";

interface InputFieldProps {
  label: string;
  type: "text" | "email" | "tel" | "date";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  className?: string;
}

export const InputField = ({
  label,
  type,
  value,
  onChange,
  name,
  placeholder,
  className,
}: InputFieldProps) => {
  return (
    <div className={clsx("w-full flex flex-col gap-1", className)}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-fondation-white-normal sr-only"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[54px] w-full xl:w-[491px] bg-white/5 rounded-lg px-6 py-3.5 text-fondation-white-dark-hover placeholder:text-fondation-white-dark-hover focus:outline-2 focus:outline-fondation-orange-normal"
        aria-required="true"
      />
    </div>
  );
};
