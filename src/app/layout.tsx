import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLd,
  localBusinessJsonLd,
  productJsonLd,
  reviewJsonLd,
} from "@/utils/struct-data";
import Script from "next/script";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9427726908265759"
     crossOrigin="anonymous"></script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Script
          id="product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <Script
          id="review"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
        <Script
          id="breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Script
          id="localbiz"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H5MLZF5SED"
        ></Script>
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H5MLZF5SED');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
          base.variable,
          heading.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
