import { Icon } from '@iconify/react';
import clsx from 'clsx';

interface SkillCardProps {
    icon: string;
    name: string;
    percentage: number;
    className?: string;
}

const SkillCard = ({ icon, name, percentage, className }: SkillCardProps) => {
    // Normaliser le pourcentage entre 0 et 100
    const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);

    // Paramètres du cercle
    const radius = 60; // rayon
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (normalizedPercentage / 100) * circumference;

    return (
        <div className={clsx('flex flex-col items-center gap-4', className)}>
            {/* Gray Circle progression */}
            <div className="relative w-[131px] h-[130px]">
                <svg width="131" height="130" className="absolute inset-0 rotate-90">
                    <circle
                        cx="65.5"
                        cy="65"
                        r={radius}
                        stroke="#D9D9D9"
                        strokeOpacity="0.2"
                        strokeWidth="12"
                        fill="none"
                    />
                </svg>

                {/* Orange Circle Progression */}
                <svg width="131" height="130" className="absolute inset-0 rotate-0">
                    <circle
                        cx="65.5"
                        cy="65"
                        r={radius}
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="131" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FD6F00" />
                            <stop offset="1" stopColor="#E46400" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Centered Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon={icon} width={60} height={60} className="text-fondation-white-dark-hover" />
                </div>
            </div>
            {/* Texte (pourcentage et nom) */}
            <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-bold text-gradint lg:text-3xl">{normalizedPercentage}%</span>
                <span className="font-bold text-lg text-fondation-white-dark-hover lg:text-2xl">{name}</span>
            </div>
        </div>
    );
};

export default SkillCard;