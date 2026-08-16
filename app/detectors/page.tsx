import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import { AdBanner } from "@/components/ad-banner";
import shovelsData from "@/data/shovels.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/cleaning/", label: "Cleaning" },
  { href: "/farming/", label: "Farming" },
  { href: "/items/", label: "Items" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Detectors", item: "https://digclean-wiki.wiki/detectors/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to upgrade detectors in Dig & Clean",
  description: "Compare every Dig & Clean detector by luck and range, then pick the best detector upgrade for your current farming stage.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Start with the Rusty Detector",
      text: "The free Rusty Detector is enough to find common and uncommon buried items on the starter island.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upgrade when rare finds become the goal",
      text: "Higher luck increases the chance that your detector pings Rare, Epic, and Legendary dig sites.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Balance range with farming route length",
      text: "Longer range finds more spots without walking, which saves time on repetitive loops.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Best Detector Upgrades: Luck & Range Guide",
  description: "Compare every Dig & Clean detector by luck and range. Learn the best detector upgrade order for rare and legendary item farming.",
  alternates: { canonical: "https://digclean-wiki.wiki/detectors/" },
};

export default function DetectorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <AdBanner />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Best Detector Upgrades
        </h1>
        <LastUpdated date={shovelsData.lastUpdated} note={shovelsData.confidence} />
        <p className="text-lg text-dirt/80 mt-4">
          The detector is what decides whether you spend your session digging common junk or uncovering legendary artifacts. A higher-luck detector pings more valuable buried spots, while longer range lets you find those spots without zigzagging across the map. This guide ranks every detector and explains the best upgrade path for each stage of the game.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Why Detector Luck Matters</h2>
          <p className="text-dirt/80 leading-relaxed">
            Luck controls the rarity distribution of the dig sites the detector reveals. With low luck, most pings are common or junk. With high luck, the same farming route produces more Rare, Epic, and Legendary targets. This is why serious farmers upgrade their detector right after their shovel.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Why Range Matters</h2>
          <p className="text-dirt/80 leading-relaxed">
            Range is the distance at which the detector spots a buried item. A longer range means fewer steps between pings, which shortens farming loops and reduces the chance of missing hidden spots behind rocks or dunes.
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">All Dig & Clean Detectors Compared</h2>
        <p className="text-dirt/70 mb-4">
          The Rusty Detector is confirmed free starter gear. Other prices and stats are community-reported estimates; verify in-game before buying.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Detector</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Luck</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Range</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              {shovelsData.detectors.map((d) => (
                <tr key={d.name}>
                  <td className="p-4 font-medium text-dirt">{d.name}</td>
                  <td className="p-4 text-dirt/80">{d.luck}</td>
                  <td className="p-4 text-dirt/80">{d.range}</td>
                  <td className="p-4 font-headline font-bold text-gold">{d.price.toLocaleString("en-US")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Recommended Detector Upgrade Order</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Rusty Detector</strong> — Free starter. Use it to learn the ping system.</li>
          <li><strong>Copper Detector</strong> — First upgrade when you want more rare pings.</li>
          <li><strong>Silver Detector</strong> — Mid-game pick for Shipwreck Cove rare farming.</li>
          <li><strong>Gold / Platinum Detector</strong> — Late-game option for legendary hunts.</li>
        </ol>
        <p className="text-dirt/70 mt-4">
          Pair your detector with the right shovel. See the <a href="/shovels/" className="text-water hover:underline">Best Shovels guide</a> for the full gear plan.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
