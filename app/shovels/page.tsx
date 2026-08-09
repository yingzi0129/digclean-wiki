import { Metadata } from "next";
import type { Shovel, Detector, Spray } from "@/types";
import { LastUpdated, RelatedLinks } from "@/components";
import shovelsData from "@/data/shovels.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/items/", label: "Items" },
  { href: "/farming/", label: "Farming" },
  { href: "/beginner/", label: "Beginner Guide" },
  { href: "/museum/", label: "Museum" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Shovels", item: "https://digclean-wiki.wiki/shovels/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to upgrade Dig & Clean shovels, detectors, and spray bottles",
  description: "A step-by-step guide to the recommended Dig & Clean gear upgrade order: shovel first, then detector, then spray bottle.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upgrade your shovel first",
      text: "Shovel power decides how fast you dig and which spots you can clear. Upgrade the shovel that removes your current bottleneck.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upgrade your detector second",
      text: "Detector luck determines the rarity of buried finds. A better detector shows more valuable spots.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Upgrade your spray bottle last",
      text: "Spray bottles only speed up cleaning. Buy them after shovel and detector are strong enough for the current island.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Best Shovel: Tier List & Upgrade Guide",
  description: "Compare every Dig & Clean shovel by power, walk speed, and price. Find the best shovel for your current stage and budget, plus the exact upgrade order we recommend.",
  alternates: { canonical: "https://digclean-wiki.wiki/shovels/" },
};

export default function ShovelsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Best Shovels & Upgrade Guide
        </h1>
        <LastUpdated date={shovelsData.lastUpdated} note={shovelsData.confidence} />
        <p className="text-lg text-dirt/80 mt-4">
          The right gear saves hours of grinding. In Dig & Clean, shovel power decides how fast you dig and which buried spots you can reach, while detector luck decides the rarity of what you find. This guide lists the confirmed free starter gear and the community-reported upgrade path, then gives a safe upgrade order so you do not waste coins on sidegrades.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Why Shovel Power Matters</h2>
          <p className="text-dirt/80 leading-relaxed">
            Every buried item has a dig meter. Higher shovel power fills the meter faster and lets you clear harder spots. If your power is too low, rare and legendary spots may reset before you finish. Power is the first stat to raise when you move to a harder island.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Why Detector Luck Matters</h2>
          <p className="text-dirt/80 leading-relaxed">
            Detector luck controls the rarity of the spots you locate. A lucky detector finds more Rare, Epic, and Legendary dig sites, which are worth far more when cleaned and sold or displayed. The community upgrade priority is: shovel first, then detector, then spray.
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Dig & Clean Shovel by Stage</h2>
        <p className="text-dirt/70 mb-4">
          Dig & Clean does not publish a full public gear catalog. The free Plastic Shovel, Rusty Detector, and Basic Spray Bottle are confirmed from the official Roblox description. The upgrade path below is compiled from community guides (All Things How, Sportskeeda) and should be treated as a target list, not exact live prices. Always verify the in-game shop before buying.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Stage</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Recommended Shovel</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Why This Pick</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              {shovelsData.byStage.map((s) => (
                <tr key={s.stage}>
                  <td className="p-4 font-medium text-dirt">{s.stage}</td>
                  <td className="p-4 font-headline font-bold text-water">{s.shovel}</td>
                  <td className="p-4 text-dirt/80">{s.why}</td>
                  <td className="p-4 text-xs text-dirt/60">{s.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">All Dig & Clean Shovels Compared</h2>
        <p className="text-dirt/70 mb-4">
          Prices and stats below are community estimates. Treat them as upgrade targets, not exact shop numbers. When official prices are released, we will update this table and note the source.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Shovel</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Power</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Walk Speed</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Price</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Best For</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              {shovelsData.shovels.map((s: Shovel) => (
                <tr key={s.name}>
                  <td className="p-4 font-medium text-dirt">{s.name}</td>
                  <td className="p-4 text-dirt/80">{s.power}</td>
                  <td className="p-4 text-dirt/80">{s.walkSpeed}%</td>
                  <td className="p-4 font-headline font-bold text-gold">{s.price.toLocaleString("en-US")}</td>
                  <td className="p-4 text-dirt/80">{s.bestFor}</td>
                  <td className="p-4 text-xs text-dirt/60">{s.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">All Detectors</h2>
          <p className="text-dirt/70 mb-4 text-sm">Higher luck = better rarity finds. Range = detection distance.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[400px]">
              <thead>
                <tr className="bg-dirt/5 border-b border-dirt/10">
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Detector</th>
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Luck</th>
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Range</th>
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dirt/5">
                {shovelsData.detectors.map((d: Detector) => (
                  <tr key={d.name}>
                    <td className="p-3 font-medium text-dirt text-sm">{d.name}</td>
                    <td className="p-3 text-dirt/80 text-sm">{d.luck}</td>
                    <td className="p-3 text-dirt/80 text-sm">{d.range}</td>
                    <td className="p-3 font-headline font-bold text-gold text-sm">{d.price.toLocaleString("en-US")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">All Spray Bottles</h2>
          <p className="text-dirt/70 mb-4 text-sm">Higher power = faster cleaning. Range = spray width.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[400px]">
              <thead>
                <tr className="bg-dirt/5 border-b border-dirt/10">
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Spray</th>
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Power</th>
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Range</th>
                  <th className="p-3 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dirt/5">
                {shovelsData.sprays.map((s: Spray) => (
                  <tr key={s.name}>
                    <td className="p-3 font-medium text-dirt text-sm">{s.name}</td>
                    <td className="p-3 text-dirt/80 text-sm">{s.power}</td>
                    <td className="p-3 text-dirt/80 text-sm">{s.range}</td>
                    <td className="p-3 font-headline font-bold text-gold text-sm">{s.price.toLocaleString("en-US")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Recommended Upgrade Order</h2>
          <ol className="list-decimal list-inside text-dirt/80 space-y-3">
            <li><strong>Plastic Shovel / Rusty Detector / Basic Spray</strong> — Free starter kit. Learn the dig meter and the Workstation flow.</li>
            <li><strong>Wood → Metal → Amethyst Shovel</strong> — Prioritize shovel power until you can dig rare spots comfortably.</li>
            <li><strong>Copper → Silver → Gold → Platinum Detector</strong> — Raise luck once you can dig the spots it finds.</li>
            <li><strong>Rubber → Copper → Steel Spray Bottle</strong> — Buy sprays last; they only save cleaning time.</li>
            <li><strong>Titanium / Cobalt / Diamond Shovel</strong> — Endgame power for Shipwreck Cove legendary spots.</li>
          </ol>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Upgrade Rules</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Upgrade when you notice dig times slowing down at your current best spot.</li>
            <li>Prioritize power if you are hunting rare, epic, or legendary items.</li>
            <li>Prioritize detector luck if you only see junk and common signals.</li>
            <li>Do not skip the detector completely — it also raises the rarity of every find.</li>
            <li>Save a travel fund before buying a late-game shovel; Shipwreck Cove costs a one-time fee reported around one million coins.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Common Mistakes</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li><strong>Buying every small upgrade:</strong> Skipping minor shovels and saving for the next big tier usually saves money overall.</li>
          <li><strong>Ignoring the travel cost:</strong> A strong shovel is useless if you cannot afford the trip to Shipwreck Cove.</li>
          <li><strong>Maxing spray before power:</strong> Cleaning speed never earns more than a shovel that reaches rarer items.</li>
          <li><strong>Using DIG tier lists:</strong> DIG is a different game with its own prices and shovel names. Double-check that a guide is actually about Dig & Clean before following it.</li>
        </ul>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">What is the best shovel in Dig & Clean?</h4>
            <p className="text-sm text-dirt/80">For the starter island, the Amethyst Shovel is the community-recommended target. For endgame, Ruby, Carbon, and Diamond Shovels offer the highest power and walk speed.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Should I buy speed or power?</h4>
            <p className="text-sm text-dirt/80">Power first. Once you can dig the current island cleanly, walk speed and faster cycles become the next priority.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Are these prices official?</h4>
            <p className="text-sm text-dirt/80">No. Only the free starter gear is confirmed. All other costs are community estimates from gameplay videos and player reports. Verify in the live shop before buying.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Where should I farm with the starter shovel?</h4>
            <p className="text-sm text-dirt/80">Stay on Starter Island and dig junk and common items until you can afford the Wood, then Metal, then Amethyst Shovel.</p>
          </div>
        </div>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <p className="text-dirt/70 mb-3">Ready to farm smarter?</p>
        <a href="/farming/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          See Dig & Clean money farming tips
        </a>
      </div>
    </div>
  );
}
