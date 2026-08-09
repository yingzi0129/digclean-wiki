import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/items/", label: "Items" },
  { href: "/cleaning/", label: "Cleaning" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/farming/", label: "Farming" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Museum", item: "https://digclean-wiki.wiki/museum/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to build and organize your Dig & Clean museum",
  description: "Learn how the Dig & Clean museum works, which items to donate, and how to balance collection goals with Gold income.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Unlock the museum",
      text: "Progress through the beginner tutorial until the museum area becomes available.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Donate your first Rare or Epic item",
      text: "Museum slots are limited early on, so prioritize the highest rarity items you find.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Sell duplicates and low-value junk",
      text: "Use common and uncommon duplicates to fund shovel, detector, and spray upgrades.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Museum Guide: Donate, Display & Collect",
  description: "Learn how the Dig & Clean museum works, which items to donate, and how to balance your collection with Gold income.",
  alternates: { canonical: "https://digclean-wiki.wiki/museum/" },
};

export default function MuseumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Museum Guide
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Museum mechanics are based on verified gameplay and the official Roblox description." />
        <p className="text-lg text-dirt/80 mt-4">
          The museum is the long-term goal that keeps Dig & Clean interesting after your first farming loop. Instead of selling every find, you donate your best discoveries to build a personal display collection. This guide explains how the museum works, which items are worth keeping, and how to balance donations with the Gold you need for upgrades.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How the Museum Works</h2>
          <p className="text-dirt/80 leading-relaxed">
            After you clean a find, you can sell it at the shop for Gold or carry it to the museum donation stand. Donated items appear on display shelves and count toward your collection progress. Some games of this type reward completion badges or bonus income for full sets, so it is usually worth saving one copy of each unique find.
          </p>
          <p className="text-dirt/80 leading-relaxed mt-4">
            Museum slots are limited early on. You want to fill them with the rarest items you own, because common junk takes up the same space as a legendary artifact.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">What to Donate vs Sell</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Legendary / Epic:</strong> Almost always donate the first copy.</li>
            <li><strong>Rare:</strong> Donate one, sell duplicates.</li>
            <li><strong>Uncommon:</strong> Sell unless you are close to a set bonus.</li>
            <li><strong>Common / Junk:</strong> Sell for immediate Gold.</li>
            <li><strong>Duplicates:</strong> Keep only if the item has sentimental or set value.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Museum Strategy by Stage</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Starter Beach:</strong> Sell almost everything. You need Gold for the first shovel upgrades.</li>
          <li><strong>Mid Game:</strong> Start saving one copy of each Rare find. Sell the rest to fund travel.</li>
          <li><strong>Late Game:</strong> Target full Epic and Legendary sets at Shipwreck Cove. Sell only duplicates.</li>
          <li><strong>End Game:</strong> Reorganize displays by theme or rarity and chase missing legendary pieces.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Farming for the Museum</h2>
        <p className="text-dirt/80 leading-relaxed">
          Legendary items spawn most often at Shipwreck Cove, but only if your detector luck and shovel power are high enough. For efficient routes, read the <a href="/farming/" className="text-water hover:underline">Farming guide</a>. If you need exact item values, use the <a href="/items/" className="text-water hover:underline">Item Database</a> to compare sell price against collection value.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
