import clsx from "clsx";
import type { Expertise } from "@/lib/types";
import CountUp from "react-countup";

interface ExpertiseCardProps {
    expertise: Expertise;
    hasBorder: boolean;
}

export const ExpertiseCard = ({ expertise, hasBorder }: ExpertiseCardProps) => {
    return (
        <div className={clsx("flex flex-col items-start gap-3 py-1.5", `${hasBorder && "pr-4 lg:pr-7.5 border-fondation-white-dark-hover border-r-1"}`)}>
            <h4 className="font-extrabold text-xl text-[#FD6F00] xl:text-2xl">
                <CountUp
                    start={0}
                    end={expertise.value}
                    duration={1.75}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                    suffix="+"
                />
            </h4>
            <span className="font-bold text-base text-nowrap text-fondation-white-normal-hover xl:text-xl">
                {expertise.label}
            </span>
        </div>
    )
}