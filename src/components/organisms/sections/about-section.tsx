import { SectionHeader } from "@/components/molecules/section-header";
import ImageFrame from "@/components/molecules/image-frame";
import manInBlack from "@/assets/images/man-in-black.png";
import { Button } from "@/components/atoms/button";
import SkillCard from "@/components/molecules/skill-card";
import { skills } from "@/lib/data";

export const AboutSection = () => {
    return (
        <section
            id="about-me"
            className="w-full flex flex-col items-center gap-10 lg:gap-12.5"
        >
            <SectionHeader
                title="About Me"
                subtitle="User Interface and User Experience and Also Video Editing"
            />

            <div className="w-full flex flex-col items-center justify-between gap-8.5 xl:flex-row lg:gap-25">
                <ImageFrame
                    imageUrl={manInBlack}
                    borderRadius="261.5px 261.5px 12px 12px"
                    className="w-80 h-[472.6px] shrink-0 lg:w-[523px] lg:h-[676px]"
                    imageClassName="w-[395.7px] h-[564.88px] lg:w-[566px] lg:h-[808px]"
                />
                <div className="flex flex-col items-center gap-6 xl:items-start lg:gap-10">
                    <p className="font-medium text-fondation-white-dark-hover text-justify text-base lg:text-xl lg:leading-[190%] max-h-[494px]">
                        A software engineer, the modern-day architect of digital realms,
                        navigates the ethereal landscapes of code, sculpting intangible
                        structures that shape our technological world. With fingers poised
                        over keyboards like virtuoso pianists, they compose symphonies of
                        logic, their minds a labyrinth of algorithms and solutions.Their
                        canvas is a screen, a vast expanse where lines of code dance in
                        intricate patterns, weaving the fabric of programs and applications.
                        Each keystroke is a brushstroke, crafting intricate architectures
                        and breathing life into innovative designs.In this digital atelier,
                        they don the mantle of problem solvers, confronting bugs and
                        glitches like valiant knights in an ever-evolving quest for
                        perfection. Debugging becomes a noble pursuit, unraveling the
                        mysteries hidden within the tangled webs of code. designs.In this
                        digital atelier.
                    </p>
                    <Button label="Download CV" variant="contained" />
                </div>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:justify-between lg:gap-auto">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} icon={skill.icon} name={skill.name} percentage={skill.percentage} />
                ))}
            </div>
        </section>
    );
};
