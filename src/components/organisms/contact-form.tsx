import { useState } from "react";
import { InputField } from "@/components/atoms/input-field";
import { SelectField } from "@/components/atoms/select-field";
import { Textarea } from "@/components/atoms/textarea";
import { Button } from "@/components/atoms/button";
import { serviceOptions } from "@/lib/data";

export const ContactForm = () => {
    const [name, SetName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [timeline, setTimeline] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form
            name="contact"
            className="w-full max-w-[1012px] flex flex-col items-center justify-between gap-4 lg:gap-7.5 py-10"
        >
            <div className="w-full flex flex-col items-start justify-between gap-4 lg:flex-row">
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    name="username"
                    placeholder="Nestor Juntao"
                />
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="nestorjuntao@gmail.com"
                />
            </div>
            <div className="w-full flex flex-col items-start justify-between gap-4 lg:flex-row">
                <InputField
                    label="Phone Number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone-number"
                    placeholder="+33 6 44 21 41 34"
                />
                <SelectField
                    label="Select interest"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    name="service-interest"
                    options={serviceOptions}
                />
            </div>
            <div className="w-full flex flex-col items-start justify-between gap-4 lg:flex-row">
                <InputField
                    label="Timeline"
                    type="text"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    name="timeline"
                    placeholder="UTC+2"
                />
                <Textarea
                    label="Project details"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    placeholder="Project details..."
                />
            </div>
            <div className="flex flex-col items-center self-stretch lg:items-end lg:justify-center">
                <Button label="Send" variant="outlined" />
            </div>
        </form>
    );
};
