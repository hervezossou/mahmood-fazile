import type { ChangeEvent } from "react";

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: { value: string; label: string }[];
}

export const SelectField = ({
  label,
  value,
  onChange,
  name,
  options,
}: SelectFieldProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-sm font-medium text-fondation-white-normal sr-only"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="h-[54px] w-full lg:w-[491px] bg-white/5 rounded-lg px-6 py-3.5 text-fondation-white-dark-hover placeholder:text-fondation-white-dark-hover focus:outline-2 focus:outline-fondation-orange-normal"
        aria-required="true"
      >
        <option value="" disabled>
          Service of interest
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="flex justify-start gap-5 hover:bg-fondation-orange-normal hover:text-fondation-white-normal p-2.5 transition-all duration-300"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
