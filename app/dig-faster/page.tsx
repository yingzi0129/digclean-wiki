import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/beginner/", label: "Beginner" },
  { href: "/farming/", label: "Farming" },
  { href: "/controls/", label: "Controls" },
  { href: "/shovels/", label: "Shovels" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Dig Faster", item: "https://digclean-wiki.wiki/dig-faster/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to dig faster in Dig & Clean",
  description: "Speed up your Dig & Clean digging with better shovels, faster movement, and smarter route choices.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upgrade shovel power",
      text: "Higher power fills the dig meter faster and prevents high-strength spots from resetting.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Increase walk speed",
      text: "Some shovels and gear add walk speed, shortening time between pings.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Follow a tight loop",
      text: "A planned route reduces backtracking and keeps the detector active more often.",
    },
  ],
};

export const metadata: Metadata = {
  title: "How to Dig Faster in Dig & Clean: Speed & Efficiency Tips",
  description: "Learn how to dig faster in Dig & Clean. Upgrade your shovel, boost walk speed, and follow tighter farming loops to earn more Gold per hour.",
  alternates: { canonical: "https://digclean-wiki.wiki/dig-faster/" },
};

export default function DigFasterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          How to Dig Faster in Dig & Clean
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Dig speed tips based on verified gameplay and community farming reports." />
        <p className="text-lg text-dirt/80 mt-4">
          Digging faster is one of the easiest ways to increase your hourly Gold in Dig & Clean. There are three levers: shovel power, walk speed, and route planning. This guide explains how each one works and gives practical upgrades that make the dig meter disappear as fast as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Shovel Power</h2>
          <p className="text-dirt/80 leading-relaxed">
            Power fills the dig meter faster. It also determines whether you can finish high-strength legendary spots before they reset. Power is the first stat to upgrade when digging feels slow.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Walk Speed</h2>
          <p className="text-dirt/80 leading-relaxed">
            Walk speed shortens the time between dig sites. Some shovels add walk speed bonuses, making them better than pure power shovels for long farming loops.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Route Tightness</h2>
          <p className="text-dirt/80 leading-relaxed">
            A tight loop keeps the detector active and reduces dead time. Follow the shoreline or cliff edge in a circle rather than zigzagging randomly.
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Fast Dig Upgrade Order</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Plastic → Wood → Stone → Metal Shovel</strong> — Raise power early so the starter beach loop never stalls.</li>
          <li><strong>Amethyst Shovel</strong> — The community-recommended starter-island target for power and speed.</li>
          <li><strong>Titanium / Cobalt / Diamond Shovel</strong> — Endgame picks for Shipwreck Cove legendary sites.</li>
          <li><strong>Always pair with a better detector</strong> — Fast digging is wasted on common junk. See the <a href="/detectors/" className="text-water hover:underline">Detector guide</a>.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Pro Tips</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Dig one target fully before starting another. Partial digs reset.</li>
          <li>Use the detector continuously while moving; do not stop to scan.</li>
          <li>Sell junk immediately so backpack space never interrupts the loop.</li>
          <li>Upgrade your spray bottle only after shovel and detector are comfortable.</li>
        </ul>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
