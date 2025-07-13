import { Metadata } from "next";

export const generateMetadata = ({
  title = `Shopigo – Premium No‑Code Websites for Small Businesses`,
  description = `Shopigo helps small brands and Instagram sellers launch premium, mobile-friendly websites—no code, no ads, custom domains, full support. Get online fast!`,
  image = "/shopigo-share.png",
  icons = [
    { rel: "apple-touch-icon", sizes: "32x32", url: "/icons/icon.svg" },
    { rel: "icon", sizes: "32x32", url: "/icons/icon.svg" },
  ],
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: image ? [image] : undefined,
  },
  icons,
  ...(noIndex && { robots: { index: false, follow: false } }),
});
