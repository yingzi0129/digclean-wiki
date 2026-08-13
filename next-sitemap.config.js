/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://digclean-wiki.wiki',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'dist',
  exclude: ['/privacy', '/terms', '/cookie-policy', '/privacy/', '/terms/', '/cookie-policy/'],
  transform: async (config, path) => {
    const hubPaths = ['/codes/', '/items/', '/shovels/', '/sprays/', '/farming/', '/beginner/', '/rare-items/', '/cleaning/', '/museum/', '/controls/', '/multiplayer/', '/detectors/', '/sell-items/', '/dig-faster/', '/find-rare/', '/cove-farming/', '/starter-beach-farming/'];
    const detailPaths = ['/items/'];

    let priority = 0.7;
    if (path === '/') {
      priority = 1.0;
    } else if (hubPaths.includes(path)) {
      priority = 0.9;
    } else if (detailPaths.some((p) => path.startsWith(p) && path !== p && path.length > p.length)) {
      priority = 0.8;
    } else {
      priority = 0.5;
    }

    return {
      loc: path,
      changefreq: 'daily',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
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
