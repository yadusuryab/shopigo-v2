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
      name: "STANDARD PACKAGE",
      badge: "Basic",
      description: "For self-managed sellers. No support included.",
      price: {
        monthly: 1000,
        yearly: 3000,
      },
      features: [
        { text: "Mobile-friendly website setup" },
        { text: "UPI payment gateway" },
        { text: "Unlimited products" },
        { text: "Admin dashboard" },
        { text: "No support included" },
      ],
      buttonText: "Let's Talk",
    },
    {
      name: "PREMIUM PACKAGE",
      badge: "Best Value",
      description: "Same store with full WhatsApp support.",
      price: {
        monthly: 0,
        yearly: 6000,
      },
      features: [
        { text: "Mobile-friendly website setup" },
        { text: "UPI payment gateway" },
        { text: "Unlimited products" },
        { text: "Admin dashboard" },
        { text: "Full WhatsApp support included" },
      ],
      buttonText: "Let's Talk",
      popular: true,
    },
  ];
  

export const MARQUEE_ITEMS = [
    "SHOPIGO",
    "GET YOUR SHOPIGO WEBSITE NOW",
    "BUILD YOUR BRAND",
   
];

