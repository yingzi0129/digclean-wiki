/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://digclean-wiki.wiki',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'dist',
  exclude: ['/privacy', '/terms', '/cookie-policy', '/privacy/', '/terms/', '/cookie-policy/'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
  },
};
