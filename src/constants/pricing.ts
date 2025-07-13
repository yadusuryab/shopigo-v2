export type PlanFeature = {
    text: string;
};

export type Plan = {
    name: string;
    badge?: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    buttonText: string;
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter Plan",
        badge: "Free",
        description: "Good for testing and early-stage brands",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Mobile-friendly website" },
            { text: "Basic Shopigo templates" },
            { text: "Shopigo ads on your site" },
            { text: "No custom domain" },
        ],
        buttonText: "Try for Free",
    },
    {
        name: "Growth Plan",
        badge: "Best Value",
        description: "Perfect for growing brands and online sellers",
        price: {
            monthly: 500,
            yearly: 5000, // optional discount or same
        },
        features: [
            { text: "No ads on your site" },
            { text: "Connect your own domain" },
            { text: "Basic support via WhatsApp & Email" },
            { text: "Access to all templates" },
        ],
        buttonText: "Start with ₹500 Plan",
        popular: true,
    },
    {
        name: "Pro+ Plan",
        badge: "Premium",
        description: "Ideal for serious brands who want the best",
        price: {
            monthly: 1200,
            yearly: 12000,
        },
        features: [
            { text: "Free custom domain (1 year)" },
            { text: "Full support + priority response" },
            { text: "Feature updates on request" },
            { text: "No ads + all premium templates" },
        ],
        buttonText: "Go Premium",
    }
];


export const MARQUEE_ITEMS = [
    "Mobile-Friendly Websites",
    "Custom Domain Ready",
    "Zero Coding Needed",
    "Built for Instagram Stores",
    "Fast Loading Speed",
    "No Ads on Paid Plans",
    "24/7 Support Access",
    "Made for Small Businesses",
    "Smooth Checkout Experience",
    "Look Premium, Sell More"
];

