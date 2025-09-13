import type { ChangeEvent } from "react";

interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder?: string;
}

export const Textarea = ({
  label,
  value,
  onChange,
  name,
  placeholder,
}: TextareaProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-sm font-medium text-fondation-white-normal sr-only"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full xl:w-[491px] bg-white/5 rounded-lg px-6 py-3.5 text-fondation-white-dark-hover placeholder:text-fondation-white-dark-hover focus:outline-2 focus:outline-fondation-orange-normal"
        rows={5}
        aria-required="true"
      />
    </div>
  );
};
