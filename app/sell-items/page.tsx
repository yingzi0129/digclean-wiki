import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/items/", label: "Items" },
  { href: "/museum/", label: "Museum" },
  { href: "/farming/", label: "Farming" },
  { href: "/shovels/", label: "Shovels" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Sell Items", item: "https://digclean-wiki.wiki/sell-items/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to sell items in Dig & Clean for the most Gold",
  description: "Learn when to sell Dig & Clean finds versus donating them to the museum, plus the fastest way to turn items into Gold.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Clean the item fully",
      text: "A dirty item cannot be sold for its full value. Use the spray bottle until the identity and price appear.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Check rarity and value",
      text: "Use the item database to compare sell price against museum collection value.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Sell or donate",
      text: "Sell duplicates and low-rarity junk. Donate the first copy of Rare, Epic, and Legendary items.",
    },
  ],
};

export const metadata: Metadata = {
  title: "How to Sell Items in Dig & Clean: Maximize Gold Income",
  description: "Learn when to sell Dig & Clean items versus donating them. Maximize Gold income while building a valuable museum collection.",
  alternates: { canonical: "https://digclean-wiki.wiki/sell-items/" },
};

export default function SellItemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          How to Sell Items in Dig & Clean
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Sell values are verified from the current item database." />
        <p className="text-lg text-dirt/80 mt-4">
          Selling is the main way to fund shovel, detector, and spray upgrades in Dig & Clean. But not every find should be sold. Some items are worth far more in the museum than their Gold price suggests. This guide explains when to sell, when to donate, and the fastest workflow for turning cleaned finds into cash.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">When to Sell</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>You need immediate Gold for the next shovel or detector upgrade.</li>
            <li>The item is Common, Uncommon, or low-value Junk.</li>
            <li>You already donated one copy and have a duplicate.</li>
            <li>You are farming Gold, not collecting museum sets.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">When to Donate</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>The item is Rare, Epic, or Legendary.</li>
            <li>It is the first copy of a unique find.</li>
            <li>You are chasing museum completion or set bonuses.</li>
            <li>You already have enough Gold for the next upgrade.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Fast Sell Workflow</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Clean the item completely.</strong> Dirty items are worth far less or cannot be sold.</li>
          <li><strong>Sort by rarity.</strong> Put Common and Uncommon items in the sell pile immediately.</li>
          <li><strong>Check the database.</strong> Use the <a href="/items/" className="text-water hover:underline">Item Database</a> to see exact sell values.</li>
          <li><strong>Decide on Rare+ items.</strong> Donate the first copy; sell duplicates unless you need quick cash.</li>
          <li><strong>Sell at the shop.</strong> Sell everything in your sell pile before starting the next loop.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Rarity Sell Priority</h2>
        <p className="text-dirt/80 leading-relaxed">
          Junk and Common items are safe to sell every time. Uncommon items are usually safe too unless you are early in a set. Rare items should be donated once, then sold if duplicated. Epic and Legendary items should almost always be donated first, because their collection value usually exceeds the sell price over time. For a deeper breakdown, read the <a href="/museum/" className="text-water hover:underline">Museum guide</a>.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
