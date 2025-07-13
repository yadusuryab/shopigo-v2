
 export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shopigo",
    "url": "https://myshopigo.shop",
    "logo": "https://myshopigo.shop/icons/icon.svg", // update if needed
    "sameAs": [
      "https://www.instagram.com/getshopigo",
      "https://www.facebook.com/getshopigo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@myshopigo.shop",
      "contactType": "customer support",
      "availableLanguage": ["English", "Malayalam"]
    }
  };


  export const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Shopigo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shopigo is an all-in-one platform that helps small businesses create professional e-commerce websites with no coding."
        }
      },
      {
        "@type": "Question",
        "name": "What are the pricing plans for Shopigo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a free plan with ads, a ₹500/month plan with custom domain support, and a ₹1200/month plan with full features including domain and priority support."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my own domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, custom domain integration is included in the ₹500/month and ₹1200/month plans."
        }
      },
      {
        "@type": "Question",
        "name": "Is any coding required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No coding is needed. Shopigo handles everything from design to hosting. Just focus on your sales."
        }
      }
    ]
  };
  
  export const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Shopigo Website Builder",
    "image": "https://myshopigo.shop/thumbnail.png",
    "description": "Launch a professional website in minutes. No code, no stress. Plans start at ₹0.",
    "brand": {
      "@type": "Brand",
      "name": "Shopigo"
    },
    "offers": [
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "0",
        "url": "https://myshopigo.shop/pricing",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "500",
        "url": "https://myshopigo.shop/pricing",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "1200",
        "url": "https://myshopigo.shop/pricing",
        "availability": "https://schema.org/InStock"
      }
    ]
  };
  export const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Shopigo Website Builder",
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Smith"
        },
        "reviewBody": "The design capabilities are top-notch, making our work so much easier."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Leeman"
        },
        "reviewBody": "It's intuitive, functional, easy-to-setup and presents content beautifully."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2"
    }
  };
  export const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myshopigo.shop"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://myshopigo.shop/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pricing",
        "item": "https://myshopigo.shop/pricing"
      }
    ]
  };
  export const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shopigo",
    "image": "https://myshopigo.shop/thumbnail.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kannur",
      "addressLocality": "Kannur",
      "addressRegion": "Kerala",
      "postalCode": "670501",
      "addressCountry": "IN"
    },
    "url": "https://myshopigo.shop",
    "telephone": "+91-9495314108",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 09:00-21:00",
    "sameAs": [
      "https://www.instagram.com/getshopigo",
      "https://www.facebook.com/getshopigo"
    ]
  };
        