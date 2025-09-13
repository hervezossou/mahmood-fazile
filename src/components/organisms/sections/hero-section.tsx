import ImageFrame from "@/components/molecules/image-frame"
import manInBlack from "@/assets/images/man-in-black.png";
import { Button } from "@/components/atoms/button";
import { SocialIcons } from "@/components/molecules/social-icons";
import { ExpertiseCard } from "@/components/molecules/expertise-card";
import { expertise } from "@/lib/data";

export const HeroSection = () => {
    return (
        <section id="home" className="w-full flex flex-col items-center gap-15 justify-between xl:flex-row">
            <div className="flex flex-col items-center justify-between gap-10 xl:gap-20 xl:items-start">
                <div className="flex flex-col items-center gap-10 xl:items-start xl:gap-15">
                    <div className="w-full flex flex-col items-center gap-[17px] xl:items-start">
                        <div className="flex flex-col items-center gap-2.5 xl:items-start lg:gap-6">
                            <div className="flex flex-col items-center gap-2.5 xl:items-start">
                                <h4 className="font-semibold text-fondation-white-dark-active text-base lg:text-2xl">
                                    Hi, I am
                                </h4>
                                <p className="font-bold text-fondation-white-dark-hover text-xl lg:text-[28px]">
                                    Mahmood Fazile
                                </p>
                            </div>
                            <p className="text-gradint font-black text-[50px] lg:text-[70px]">UI/UX Designer</p>
                        </div>
                        <SocialIcons />
                    </div>
                    <div className="flex items-center gap-6">
                        <Button
                            label="Hire Me"
                            variant="contained"
                        />
                        <Button
                            label="Download CV"
                            variant="outlined"
                        />
                    </div>
                </div>
                <div className="w-full h-[99px] bg-white/4 rounded-lg flex items-center gap-3.5 md:gap-7.5 p-4 md:p-6 md:w-max md:h-[125px]">
                    {expertise.map((item, index) => (
                        <ExpertiseCard
                            key={index}
                            value={item.value}
                            label={item.label}
                            hasBorder={index < expertise.length - 1}
                        />
                    ))}
                </div>
            </div>
            <ImageFrame
                imageUrl={manInBlack}
                backgroundPosition="-0.268px 0px"
                backgroundSize="100.103% 100%"
                borderRadius="100%"
                className="size-80 shrink-0 md:size-[382.99px] lg:size-[618px]"
            />
        </section>
    )
}