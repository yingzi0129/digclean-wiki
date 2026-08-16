import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import { AdBanner } from "@/components/ad-banner";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/farming/", label: "Farming" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/detectors/", label: "Detectors" },
  { href: "/museum/", label: "Museum" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Shipwreck Cove Farming", item: "https://digclean-wiki.wiki/cove-farming/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to farm Gold and rare items at Shipwreck Cove in Dig & Clean",
  description: "A step-by-step farming route for the Shipwreck Cove area in Dig & Clean, optimized for rare, epic, and legendary finds.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Unlock Shipwreck Cove",
      text: "Save 1,000,000 Gold and buy the boat ticket to reach the cove.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Equip strong shovel and detector",
      text: "Use at least a Titanium-class shovel and a Gold-class detector to handle legendary dig sites.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Run the coastal loop",
      text: "Circle the cove clockwise, pinging for rare+ targets and skipping common junk.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Shipwreck Cove Farming Route: Rare & Legendary Items",
  description: "Learn the best Shipwreck Cove farming route in Dig & Clean. Target Rare, Epic, and Legendary finds with the right shovel and detector setup.",
  alternates: { canonical: "https://digclean-wiki.wiki/cove-farming/" },
};

export default function CoveFarmingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <AdBanner />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Shipwreck Cove Farming Route
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Route based on community reports and verified high-level gameplay." />
        <p className="text-lg text-dirt/80 mt-4">
          Shipwreck Cove is the first major difficulty spike in Dig & Clean. The island costs one million Gold to unlock, but it is also where Rare, Epic, and Legendary items spawn most reliably. This guide gives a loop route, gear requirements, and a keep-or-sell plan so you earn back the ticket price quickly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Why Farm Shipwreck Cove</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Higher base spawn rate for Rare, Epic, and Legendary items.</li>
            <li>Premium items sell for 500-5,000 Gold each.</li>
            <li>Best place to fill museum slots with high-rarity pieces.</li>
            <li>Loop is compact once you learn the path.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Recommended Gear</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Shovel:</strong> Titanium or higher for legendary dig sites.</li>
            <li><strong>Detector:</strong> Gold or Platinum for legendary pings.</li>
            <li><strong>Spray:</strong> Steel or better to clean large finds quickly.</li>
            <li><strong>Backpack:</strong> Empty before starting the loop.</li>
          </ul>
          <p className="text-dirt/70 text-sm mt-4">
            See the <a href="/shovels/" className="text-water hover:underline">Shovels</a> and <a href="/detectors/" className="text-water hover:underline">Detectors</a> guides for exact upgrade paths.
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">The Shipwreck Cove Loop</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Spawn at the dock.</strong> Equip your best shovel, detector, and spray.</li>
          <li><strong>Head clockwise along the beach.</strong> Most legendary pings cluster near shipwrecks and rock outcrops.</li>
          <li><strong>Ping continuously.</strong> Skip common pings unless they are directly on your path.</li>
          <li><strong>Dig rare+ targets fully.</strong> Legendary spots have high dig strength; weak shovels will reset the meter.</li>
          <li><strong>Clean on-site.</strong> Use the <a href="/cleaning/" className="text-water hover:underline">cleaning guide</a> to remove all dirt fast.</li>
          <li><strong>Decide keep or sell.</strong> Donate the first Epic or Legendary copy to the <a href="/museum/" className="text-water hover:underline">museum</a>; sell duplicates.</li>
          <li><strong>Return to the dock.</strong> Sell routine finds, then restart the loop.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Earnings Estimate</h2>
        <p className="text-dirt/80 leading-relaxed">
          With the right gear, one Shipwreck Cove loop can yield 5,000-15,000 Gold depending on how many Epic and Legendary items spawn. Even after the 1,000,000 Gold unlock cost, dedicated farming here pays for itself faster than staying on the Starter Beach.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
