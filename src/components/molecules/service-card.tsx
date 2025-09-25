import type { Service } from '@/lib/types';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <div
            className={clsx(
                'flex flex-col items-center justify-center w-full bg-white/4 transition-colors ease-in-out duration-300 md:h-[322px] p-[34px] gap-4 group hover:bg-fondation-orange-normal md:gap-[34px] rounded-2xl md:rounded-3xl',
                service.className
            )}
        >
            <div className="flex flex-col items-center gap-2">
                <Icon
                    icon={service.icon}
                    width={34}
                    height={34}
                    className="text-fondation-orange-normal group-hover:text-fondation-white-normal"
                />
                <h3 className="text-xl text-center font-bold text-fondation-orange-normal group-hover:text-fondation-white-normal leading-[160%]">
                    {service.name}
                </h3>
            </div>
            <p className="font-medium text-base text-center text-fondation-white-darker group-hover:text-fondation-white-normal md:text-xl">
                {service.description}
            </p>
        </div>
    );
};

export default ServiceCard;