import { Metadata } from "next";
import { RelatedLinks } from "@/components";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/items/", label: "Items" },
  { href: "/rare-items/", label: "Rare Items" },
  { href: "/farming/", label: "Farming" },
  { href: "/shovels/", label: "Shovels" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Museum", item: "https://digclean-wiki.wiki/museum/" },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Museum Guide: Donations, Bonuses & Best Items",
  description: "Learn how the Dig & Clean museum works, which items to donate, and how to maximize your passive income from visitors.",
  alternates: { canonical: "https://digclean-wiki.wiki/museum/" },
};

export default function MuseumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Museum Guide
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          The museum is one of the most important parts of Dig & Clean. The official Roblox description says the goal is to &ldquo;show off your best finds in your own museum.&rdquo; Donated items earn passive income from visitors and help you unlock more progression. This guide explains what to donate, how to optimize slots, and which items are worth keeping for display.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How the Museum Works</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Find the museum building near the spawn area or Workstation.</li>
            <li>Open the donation menu and select a clean item from your inventory.</li>
            <li>Each donated item fills a slot and earns visitor coins over time.</li>
            <li>Higher-rarity and higher-value items usually give more visitor income.</li>
            <li>Some slots are locked behind progress or spending coins; upgrade when you can afford it.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">What to Donate</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Keep first:</strong> Rare, Epic, and Legendary items.</li>
            <li><strong>Replace duplicates:</strong> A higher-value version of the same item often gives more income than the lower-value one.</li>
            <li><strong>Never donate:</strong> Junk or Common items unless you need to fill the very first slot and have nothing else.</li>
            <li><strong>Save items:</strong> If a museum slot is locked, hold the rare item in your inventory until you unlock the slot.</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Museum Slot Upgrade Order</h2>
          <p className="text-dirt/80 mb-4">
            Unlocking new museum slots costs coins. The best strategy is to unlock only when you already have a high-value item waiting to fill the slot. An empty slot earns nothing, so opening slots before you have displays is usually a waste of early income.
          </p>
          <ol className="list-decimal list-inside text-dirt/80 space-y-2">
            <li><strong>Fill free slots first.</strong> Donate your best Rare, Epic, or Legendary items before spending coins on more slots.</li>
            <li><strong>Unlock the next slot only when you have a replacement ready.</strong> This keeps every slot earning immediately.</li>
            <li><strong>Prioritize rarity over value.</strong> A high-rarity item with lower sell value may earn more passive visitor income than a high-sell-value Common item.</li>
            <li><strong>Revisit after moving to Shipwreck Cove.</strong> New legendary drops often replace older Rare displays, so keep swapping up.</li>
          </ol>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Items to Display Early</h2>
          <p className="text-dirt/80 mb-4">
            Early players cannot reach legendary spots yet. Focus on items that are easy to find but still better than Junk or Common. Replace them as soon as you find higher-rarity items.
          </p>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Uncommon:</strong> Good first displays while you save for better gear.</li>
            <li><strong>Rare:</strong> The first income milestone. Start replacing Uncommons with these.</li>
            <li><strong>Epic:</strong> Strong mid-game displays, worth donating even over some legendaries if you have duplicates.</li>
            <li><strong>Legendary:</strong> Endgame displays. Always donate the first copy unless you urgently need the sell price for a shovel.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Museum Tips</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Donate your best item as soon as you unlock the next slot.</li>
          <li>Compare sell value to expected visitor income. Rare items often beat selling in the long run.</li>
          <li>Use museum income to buy your next detector upgrade before you leave an island.</li>
          <li>Keep rare items even if they look dirty; you must clean them before donating.</li>
          <li>Sort by museum value in the item database to find the best candidates.</li>
        </ul>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Do I lose items when I donate them?</h4>
            <p className="text-sm text-dirt/80">Yes. The item is removed from your inventory and placed on display. Plan to keep one copy of your rarest finds.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Can I take items back?</h4>
            <p className="text-sm text-dirt/80">This depends on the current game version. In most cases, museum donations are permanent. Check the in-game menu before confirming.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">What is the best museum item?</h4>
            <p className="text-sm text-dirt/80">Legendary items are generally the best displays. Epic and Rare items are strong for early players who cannot yet reach legendaries.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Does museum income stack with boosts?</h4>
            <p className="text-sm text-dirt/80">Income may be affected by game passes such as 2x Gold. Specific mechanics are community-estimated; verify in-game.</p>
          </div>
        </div>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Browse items to donate
        </a>
      </div>
    </div>
  );
}
