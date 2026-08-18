import { Metadata } from "next";
import { ItemDatabase, LastUpdated, RelatedLinks } from "@/components";
import { Breadcrumb } from "@/components/breadcrumb";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";
import { AdBanner } from "@/components/ad-banner";

const related = [
  { href: "/shovels/", label: "Shovels" },
  { href: "/farming/", label: "Farming" },
  { href: "/rare-items/", label: "Rare Items" },
  { href: "/museum/", label: "Museum" },
  { href: "/beginner/", label: "Beginner Guide" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Items", item: "https://digclean-wiki.wiki/items/" },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Items: Full Database & Value Guide",
  description: "Search and filter every Dig & Clean item by rarity, value, and type. Know exactly what to keep for your museum and what to sell.",
  alternates: { canonical: "https://digclean-wiki.wiki/items/" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dig & Clean Item Database",
  itemListElement: itemsData.items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `https://digclean-wiki.wiki/items/${item.id}/`,
    name: item.name,
  })),
};

export default function ItemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      <Breadcrumb items={[{ label: "Items" }]} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Items Database & Value Guide
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note={itemsData.confidence} />
        <p className="text-lg text-dirt/80 mt-4">
          Welcome to the most complete Dig & Clean item database we can build from public sources. Search by name, filter by rarity, or sort by value to find out what your latest discovery is worth. Each item includes a keep-or-sell recommendation based on community data, plus an expandable detail panel with sell price, museum value, location, and confidence label.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How to Use This Database</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Use the search bar to find any item by name.</li>
          <li>Filter by rarity: Junk, Common, Uncommon, Rare, Epic, or Legendary.</li>
          <li>Sort by value to spot your biggest sellers.</li>
          <li>Check the Recommendation column to decide: Keep for museum, or Sell for cash.</li>
          <li>Click <strong>More</strong> on any row to reveal sell price, museum value, reason, and confidence label.</li>
        </ul>
      </div>

      <AdBanner />

      <div className="bg-foam rounded-xl card-shadow border border-dirt/20 overflow-hidden flex flex-col">
        <ItemDatabase items={itemsData.items} />
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Keep or Sell? Quick Rules</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li><strong>Keep:</strong> Rare, Epic, and Legendary items with high museum value.</li>
          <li><strong>Sell:</strong> Junk and most Common items unless you are filling a display slot.</li>
          <li><strong>When in doubt:</strong> compare the sell value to the museum bonus. Rare items usually earn more from museum visitors over time.</li>
        </ul>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <p className="text-dirt/70 mb-3">Not sure what shovel to use?</p>
        <a href="/shovels/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Find the best Dig & Clean shovels
        </a>
      </div>
    </div>
  );
}
