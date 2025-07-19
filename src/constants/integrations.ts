export type Integration = {
  name: string;
  description: string;
  url: string;
  type: "ecommerce" | "landing" | "all";
};


export const INTEGRATION_CATEGORIES = [
    { label: "All Projects", value: "all" },
    { label: "Ecommerce Sites", value: "ecommerce" },
    { label: "Landing Pages", value: "landing" },
] as const;

export const INTEGRATIONS: Integration[] = [
    {
        name: "The Style Zone",
        description: "Trendy fashion ecommerce store built for mobile-first customers.",
        url: "https://thestylezone.in",
        type: "ecommerce",
      },
      {
        name: "Delta Garage",
        description: "Custom-built ecommerce store for automotive accessories.",
        url: "https://deltagarage.in",
        type: "ecommerce",
      },
      {
        name: "Brand Corner",
        description: "Minimalistic ecommerce platform for a multi-brand retailer.",
        url: "https://brandcorner.co.in",
        type: "ecommerce",
      },
      {
        name: "Footmart",
        description: "Footwear ecommerce store with fast checkout and clean UI.",
        url: "https://footmart.co.in",
        type: "ecommerce",
      },
      {
        name: "Moto Store",
        description: "Performance bike gear and accessories store.",
        url: "https://motostore.co.in",
        type: "ecommerce",
      },
      {
        name: "Groovex",
        description: "Personal care ecommerce site built with Shopigo.",
        url: "https://groovex.myshopigo.shop",
        type: "ecommerce",
      },
      {
        name: "Shopigo Demo Store",
        description: "Live demo of Shopigo ecommerce features.",
        url: "https://shop.myshopigo.shop",
        type: "ecommerce",
      },
      {
        name: "Bcore",
        description: "Landing page for a Tuition and Computer Education Institute with clean structure.",
        url: "https://bcore.in",
        type: "landing",
      },
      {
        name: "MyShopigo",
        description: "Landing page for your official website.",
        url: "https://myshopigo.shop",
        type: "landing",
      },
]; 