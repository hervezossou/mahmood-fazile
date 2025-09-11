interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-4.5">
      <h2 className="font-bold text-2xl lg:text-[40px] text-fondation-white-light text-center tracking-[1.2px]">
        {title}
      </h2>
      <p className="font-medium text-base lg:text-xl text-fondation-white-dark-active text-center leading-[32px] tracking-[0.6px]">
        {subtitle}
      </p>
    </div>
  );
};
