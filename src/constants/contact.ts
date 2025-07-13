import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "+91 9495314108",
        icon: PhoneIcon
    },
    {
        title: "Shopigo Address",
        value: "Kerala, India",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: "support@myshopigo.shop",
        icon: MailIcon
    }
] as const;
