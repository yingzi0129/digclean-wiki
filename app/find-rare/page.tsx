import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/rare-items/", label: "Rare Items" },
  { href: "/detectors/", label: "Detectors" },
  { href: "/cove-farming/", label: "Cove Farming" },
  { href: "/museum/", label: "Museum" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Find Rare Items", item: "https://digclean-wiki.wiki/find-rare/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to find rare items in Dig & Clean",
  description: "Learn how to find Rare, Epic, and Legendary items in Dig & Clean by improving detector luck, choosing the right islands, and targeting high-rarity dig sites.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upgrade your detector",
      text: "Higher detector luck increases the chance of Rare, Epic, and Legendary pings.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Farm at Shipwreck Cove",
      text: "Shipwreck Cove has the best spawn rates for high-rarity items.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Skip common pings",
      text: "Only dig Rare+ pings to maximize high-value finds per hour.",
    },
  ],
};

export const metadata: Metadata = {
  title: "How to Find Rare Items in Dig & Clean: Epic & Legendary Tips",
  description: "Learn how to find Rare, Epic, and Legendary items in Dig & Clean. Upgrade your detector, pick the right island, and focus on high-rarity pings.",
  alternates: { canonical: "https://digclean-wiki.wiki/find-rare/" },
};

export default function FindRarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          How to Find Rare Items in Dig & Clean
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Rarity spawn data based on community reports and verified high-level gameplay." />
        <p className="text-lg text-dirt/80 mt-4">
          Rare, Epic, and Legendary items are the backbone of both high Gold income and a valuable museum in Dig & Clean. They do not spawn randomly; your detector luck, your current island, and which pings you choose to dig all affect how many premium finds you get per hour. This guide breaks down the fastest way to farm rare items.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">What Affects Rarity</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Detector luck:</strong> Higher luck = more Rare+ pings.</li>
            <li><strong>Island difficulty:</strong> Harder islands spawn better base rarity.</li>
            <li><strong>Dig site strength:</strong> Stronger glowing spots usually hide better items.</li>
            <li><strong>Event boosts:</strong> Some updates temporarily raise legendary spawn rates.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Rare Farming Setup</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Island:</strong> Shipwreck Cove</li>
            <li><strong>Shovel:</strong> Titanium or higher</li>
            <li><strong>Detector:</strong> Gold or Platinum</li>
            <li><strong>Spray:</strong> Steel or better</li>
            <li><strong>Backpack:</strong> Empty for long runs</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Step-by-Step Rare Farm</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Unlock Shipwreck Cove.</strong> Save 1,000,000 Gold for the boat ticket.</li>
          <li><strong>Upgrade detector first.</strong> See the <a href="/detectors/" className="text-water hover:underline">Detector guide</a> for the best path.</li>
          <li><strong>Run the cove loop.</strong> Follow the route in the <a href="/cove-farming/" className="text-water hover:underline">Shipwreck Cove farming guide</a>.</li>
          <li><strong>Skip common pings.</strong> Only dig yellow/orange/red rarity signals.</li>
          <li><strong>Clean carefully.</strong> Large legendary items hide dirt in crevices.</li>
          <li><strong>Donate first copy.</strong> Send Rare+ items to the <a href="/museum/" className="text-water hover:underline">museum</a>; sell duplicates.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Current Rare & Legendary Items</h2>
        <p className="text-dirt/80 leading-relaxed">
          The exact rare item pool changes as the game updates. For the current list of Rare, Epic, and Legendary finds with sell values, use the <a href="/items/" className="text-water hover:underline">Item Database</a>.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
