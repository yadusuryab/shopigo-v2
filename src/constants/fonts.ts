import { Poppins, Space_Grotesk } from "next/font/google";

export const heading = Poppins({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: "300"
});

export const base = Poppins({
    subsets: ["latin"],
    variable: "--font-base",
    weight: "200"
});

export const custom = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-custom",
});