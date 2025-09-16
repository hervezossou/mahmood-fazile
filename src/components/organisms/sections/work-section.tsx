import { useState } from "react"
import { CategorySelector } from "@/components/atoms/category-selector";

export const WorkSection = () => {

    const categories = [
        {
            id: "all",
            name: "All"
        },
        {
            id: "website-design",
            name: "Website Design"
        },
        {
            id: "app-mobile-design",
            name: "App Mobile Design"
        },
        {
            id: "app-desktop",
            name: "App Desktop"
        },
        {
            id: "branding",
            name: "Branding"
        }
    ]
    const [selectedCategory, setSelectedCategory] = useState("all");

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
            <div className="flex items-center justify-between xl:px-20 xl:gap-6"></div>
        </section>
    )
}