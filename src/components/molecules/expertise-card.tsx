import clsx from "clsx";

interface ExpertiseCardProps {
    value: string
    label: string;
    hasBorder: boolean
}

export const ExpertiseCard = ({ value, label, hasBorder }: ExpertiseCardProps) => {
    return (
        <div className={clsx("flex flex-col items-start gap-3 py-1.5", `${hasBorder && "pr-4 lg:pr-7.5 border-fondation-white-dark-hover border-r-1"}`)}>
            <h4 className="font-extrabold text-xl text-[#FD6F00] xl:text-2xl">
                {value}
            </h4>
            <span className="font-bold text-base text-nowrap text-fondation-white-normal-hover xl:text-xl">
                {label}
            </span>
        </div>
    )
}