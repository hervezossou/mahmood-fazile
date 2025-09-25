import { SectionHeader } from "@/components/molecules/section-header"
import ServiceCard from "@/components/molecules/service-card"
import { services } from "@/lib/data"

export const ServicesSection = () => {
    return (
        <section
            id="services"
            className="w-full flex flex-col items-center gap-10 lg:gap-12.5"
        >
            <SectionHeader
                title="Services"
                subtitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"
            />
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </section>
    )
}