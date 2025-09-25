import { useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { CategorySelector } from "@/components/atoms/category-selector";
import { categories } from "@/lib/data";
import { fakedProjects } from "@/lib/data";
import { ProjectCard } from "@/components/molecules/project-card";

export const WorkSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [parent] = useAutoAnimate();

    const filteredProject = fakedProjects.filter((project) => project.category.id === selectedCategory);

    return (
        <section
            id="portfolio"
            className="w-full flex flex-col items-center gap-10 lg:gap-12.5"
        >
            <div className="flex flex-col items-center gap-4.5 lg:gap-10">
                <h2 className="font-bold text-2xl lg:text-[40px] text-fondation-white-light text-center tracking-[1.2px]">
                    Portfolio
                </h2>
                <div className="flex items-center justify-center flex-wrap gap-4 lg:gap-6">
                    {categories.map((category) => (
                        <CategorySelector
                            key={category.id}
                            category={category.name}
                            isSelected={selectedCategory === category.id}
                            onClick={() => setSelectedCategory(category.id)}
                        />
                    ))}
                </div>
            </div>
            <div ref={parent} className="w-full grid grid-cols-1 gap-4 justify-between transition-all ease-in-out duration-500 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-auto xl:gap-y-6">
                {selectedCategory === "all"
                    ? fakedProjects.map((project) => (
                        <ProjectCard key={`${project.name}-${project.category.id}`} project={project} />
                    ))
                    : filteredProject.map((project) => (
                        <ProjectCard key={`${project.name}-${project.category.id}`} project={project} />
                    ))}
            </div>
        </section>
    )
}