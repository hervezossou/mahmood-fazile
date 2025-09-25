import type { Project } from "@/lib/types"

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="w-full flex flex-col items-start transition-transform ease-in-out duration-300 hover:scale-105 lg:w-[415px]">
            <div
                className="max-w-[415px] rounded-t-[28px]"
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50%",
                    backgroundColor: "lightgray",
                    mixBlendMode: "exclusion",
                    width: "415px",
                    height: "415px",
                }}
            >
            </div>
            <div className="w-full flex items-center justify-between gap-auto p-4 bg-white/8 rounded-b-[16px] font-bold text-base leading-[160%] tracking-[3%]">
                <h4 className="text-fondation-white-normal-active">
                    {project.name}
                </h4>
                <span className="text-fondation-white-dark-hover">
                    {project.category.name}
                </span>
            </div>
        </div>
    )
}