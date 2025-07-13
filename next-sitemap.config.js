/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://myshopigo.shop", // your domain here!
    generateRobotsTxt: true, // ✅ also generate robots.txt
    sitemapSize: 5000,
 // optional: if you want to hide private routes
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
  };
  