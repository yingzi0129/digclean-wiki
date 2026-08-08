"use client";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dig & Clean Wiki",
  url: "https://digclean-wiki.wiki",
  description:
    "Find every Roblox Dig & Clean item, value, rarity, and keep-or-sell tip in our interactive database. Plus active codes and the best shovel for your stage.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://digclean-wiki.wiki/items/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Dig & Clean",
  applicationSubCategory: "Roblox game",
  operatingSystem: "Roblox",
  url: "https://www.roblox.com/games/83038462357724/Dig-Clean",
  gamePlatform: "Roblox",
  publisher: {
    "@type": "Organization",
    name: "Squeaky Clean!",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dig & Clean Wiki",
  url: "https://digclean-wiki.wiki",
  description: "Unofficial fan wiki and database for the Roblox game Dig & Clean.",
};
