/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.agentic4biz.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 1.0,
    sitemapSize: 7000,
    exclude: [],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        }
      ],
    },
  };