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
    { "@type": "ListItem", position: 2, name: "Sprays", item: "https://digclean-wiki.wiki/sprays/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to choose the best spray bottle in Dig & Clean",
  description: "Compare every Dig & Clean spray bottle by power and range, then pick the right upgrade for your current stage without wasting Gold.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Start with the Basic Spray Bottle",
      text: "Every new player receives the Basic Spray Bottle for free. It is strong enough to clean common and uncommon finds on the starter beach.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upgrade only when cleaning becomes the bottleneck",
      text: "If you are waiting on the spray meter more than the dig meter, it is time to buy a higher-power spray.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Balance power and range",
      text: "Higher range covers more of the object at once, while higher power removes dirt faster. Pick based on whether you clean many small items or a few large legendary ones.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Spray Bottles: Best Spray & Upgrade Guide",
  description: "Compare every Dig & Clean spray bottle by power, range, and price. Learn the best spray upgrade order so you clean faster without wasting Gold.",
  alternates: { canonical: "https://digclean-wiki.wiki/sprays/" },
};

export default function SpraysPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <AdBanner />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Spray Bottles & Upgrade Guide
        </h1>
        <LastUpdated date={shovelsData.lastUpdated} note={shovelsData.confidence} />
        <p className="text-lg text-dirt/80 mt-4">
          The spray bottle is the second half of every Dig & Clean run. After you dig up a buried object, you spray it clean to reveal its real identity, rarity, and value. A weak spray turns this step into a bottleneck, but an oversized spray upgrade wastes Gold that should go into your shovel or detector first. This guide explains the spray stat system, ranks every bottle, and gives a safe upgrade order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How Spray Power Works</h2>
          <p className="text-dirt/80 leading-relaxed">
            Spray power controls how quickly dirt patches disappear from a find. Higher power means fewer seconds spent revealing the item. This matters most on large legendary objects with many dirty surfaces, because those surfaces take noticeably longer with the starter bottle.
          </p>
          <p className="text-dirt/80 leading-relaxed mt-4">
            Spray range controls the width of the water stream. A wider range can hit more dirt at once, which is helpful for bulky objects but less important than raw power for most farming routes.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">When to Upgrade Your Spray</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Your spray meter is the slowest part of the loop.</li>
            <li>You are hunting rare or legendary finds that have large dirty surfaces.</li>
            <li>Your shovel and detector are already comfortable for your current island.</li>
            <li>You have leftover Gold after the next recommended shovel purchase.</li>
          </ul>
          <p className="text-dirt/70 text-sm mt-4">
            In general, sprays should be the third gear priority after shovel and detector.
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">All Dig & Clean Spray Bottles Compared</h2>
        <p className="text-dirt/70 mb-4">
          Prices and stats below are compiled from community guides. Treat them as upgrade targets, not guaranteed shop values. The Basic Spray Bottle is confirmed free starter gear.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Spray Bottle</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Power</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Range</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              {shovelsData.sprays.map((s) => (
                <tr key={s.name}>
                  <td className="p-4 font-medium text-dirt">{s.name}</td>
                  <td className="p-4 text-dirt/80">{s.power}</td>
                  <td className="p-4 text-dirt/80">{s.range}</td>
                  <td className="p-4 font-headline font-bold text-gold">{s.price.toLocaleString("en-US")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Recommended Spray Upgrade Order</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Basic Spray Bottle</strong> — Free starter. Use it until cleaning slows you down.</li>
          <li><strong>Rubber Spray Bottle</strong> — First budget upgrade if you farm common and uncommon items.</li>
          <li><strong>Copper Spray Bottle</strong> — Mid-game pick when rare finds start appearing.</li>
          <li><strong>Steel Spray Bottle</strong> — Late-game option for legendary farming and large objects.</li>
        </ol>
        <p className="text-dirt/70 mt-4">
          For the full gear upgrade order, read the <a href="/shovels/" className="text-water hover:underline">Best Shovels guide</a>.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
