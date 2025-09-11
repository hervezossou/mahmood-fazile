import { ContactInfo } from "@/components/atoms/contact-info";

const infos = [
    { icon: "lucide:mail", text: "Mahmood.fazile7005@gmail.com", href: "mailto:Mahmood.fazile7005@gmail.com" },
    { icon: "lucide:phone", text: "+93 729 107 005", href: "tel:+9329107005" }
]

export const ContactInfos = () => {
    return (
        <div className="w-full flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
            {infos.map((item, index) => (
                <ContactInfo
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    href={item.href}
                />
            ))}
        </div>
    )
}