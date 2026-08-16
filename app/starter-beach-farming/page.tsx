import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import { AdBanner } from "@/components/ad-banner";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/farming/", label: "Farming" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/items/", label: "Items" },
  { href: "/cleaning/", label: "Cleaning" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Starter Beach Farming", item: "https://digclean-wiki.wiki/starter-beach-farming/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to farm Gold on the Dig & Clean Starter Beach",
  description: "A step-by-step farming route for new Dig & Clean players on the Starter Beach, optimized for fast Gold and early shovel upgrades.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Spawn and grab the free tools",
      text: "Equip the Plastic Shovel, Rusty Detector, and Basic Spray Bottle before leaving the starting area.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Walk the shoreline loop clockwise",
      text: "Follow the beach from the spawn point around the waterline, pinging with the detector as you move.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dig, clean, sell, repeat",
      text: "Finish every find, clean it fully, sell at the shop, and restart the loop.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Starter Beach Farming Route: Fast Gold for Beginners",
  description: "Learn the best Dig & Clean Starter Beach farming route for new players. Fast Gold loop, item tips, and when to upgrade your shovel.",
  alternates: { canonical: "https://digclean-wiki.wiki/starter-beach-farming/" },
};

export default function StarterBeachFarmingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <AdBanner />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Starter Beach Farming Route
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Route based on verified starter island gameplay and community farming reports." />
        <p className="text-lg text-dirt/80 mt-4">
          The Starter Beach is where every Dig & Clean player begins. It is also one of the most efficient early Gold farms if you follow a tight loop. This guide gives a step-by-step route, explains which items to sell, and tells you exactly when to buy your first shovel upgrade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Why This Route Works</h2>
          <p className="text-dirt/80 leading-relaxed">
            The Starter Beach has the lowest dig-strength gates and the shortest travel distances. That means the Plastic Shovel can finish targets without resetting, and the basic spray bottle cleans finds before you reach the shop. A clockwise shoreline loop covers the highest density of pings in the smallest area.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Expected Earnings</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Common junk: 5-25 Gold each</li>
            <li>Uncommon finds: 30-80 Gold each</li>
            <li>Rare beach items: 100-200 Gold each</li>
            <li>Goal: 500-1,000 Gold in 10-15 minutes</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Step-by-Step Starter Beach Loop</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Spawn and equip free tools.</strong> Plastic Shovel, Rusty Detector, and Basic Spray Bottle are enough.</li>
          <li><strong>Walk to the shoreline.</strong> Most starter pings appear on sand near the waterline.</li>
          <li><strong>Turn on the detector.</strong> Move slowly and wait for each ping before digging.</li>
          <li><strong>Dig one target completely.</strong> Do not start a second dig until the first is collectable.</li>
          <li><strong>Clean the find.</strong> Rotate the camera to spray all sides; see the <a href="/cleaning/" className="text-water hover:underline">Cleaning guide</a> for tips.</li>
          <li><strong>Sell everything.</strong> At this stage, Gold is more valuable than museum slots.</li>
          <li><strong>Restart the loop.</strong> Repeat until you hit your Gold target.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">When to Upgrade</h2>
        <p className="text-dirt/80 leading-relaxed">
          Buy the Wood Shovel (500 Gold estimate) as soon as the dig meter starts feeling slow. After that, save for the Stone Shovel (1,600 Gold estimate) before leaving the beach. For exact upgrade order and prices, check the <a href="/shovels/" className="text-water hover:underline">Best Shovels guide</a>.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
