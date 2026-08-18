import { Metadata } from "next";
import { RelatedLinks } from "@/components";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { AdBanner } from "@/components/ad-banner";

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
    { "@type": "ListItem", position: 2, name: "Rare Items", item: "https://digclean-wiki.wiki/rare-items/" },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Rare Items: Legendary Drops & Where to Find Them",
  description: "A showcase of the rarest Dig & Clean items. Learn where to look, which shovels and detectors to use, and how to decide whether to sell or donate each legendary drop.",
  alternates: { canonical: "https://digclean-wiki.wiki/rare-items/" },
};

export default function RareItemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <AdBanner />
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumb items={[{ label: "Rare Items" }]} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Rare Items
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Rare items are the long-term goal in Dig & Clean. The official Roblox description says players should &ldquo;hunt for the rarest items&rdquo; and &ldquo;show off your best finds in your own museum.&rdquo; This page explains how rarity works, which tools improve your odds, and what to do when you finally see a legendary detector signal.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How Rarity Works</h2>
        <p className="text-dirt/80 mb-4">
          Detector luck determines the rarity of the buried spot you find. Higher rarity spots are harder to dig and take longer, but they reward much more valuable items. The game is said to have permanent 2X luck in Shipwreck Cove according to community reports — treat that as a community estimate until confirmed by an official source.
        </p>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li><strong>Junk & Common:</strong> Most frequent, low sell value, safe to sell.</li>
          <li><strong>Uncommon:</strong> Slightly rarer, useful for early museum slots.</li>
          <li><strong>Rare:</strong> Worth keeping for the museum; sell duplicates.</li>
          <li><strong>Epic:</strong> Strong museum pieces and high sell value.</li>
          <li><strong>Legendary:</strong> Best museum income and the biggest flex items.</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Tools for Rare Items</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Detector:</strong> Gold or Platinum Detectors have the highest community-reported luck on the starter island.</li>
            <li><strong>Shovel:</strong> Amethyst, Titanium, or higher power shovels are needed to finish legendary dig meters.</li>
            <li><strong>Spray bottle:</strong> A strong spray bottle shortens the cleaning step between rare digs.</li>
            <li><strong>Game pass:</strong> 2x Luck doubles the chance of seeing rare signals, but it is a Robux purchase, not required.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Where to Find Rare Items</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Starter Island:</strong> Rare and Epic signals can appear anywhere; beach edges and dunes are popular spots.</li>
            <li><strong>Shipwreck Cove:</strong> Community reports say this island has a permanent 2X luck boost, making Rare+ items more common.</li>
            <li><strong>Busy servers:</strong> More players can spawn more dig spots, but also more competition.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Should You Sell or Donate a Legendary?</h2>
        <p className="text-dirt/80 mb-4">
          The default rule is: keep one copy of every rare item for the museum. The museum visitor income usually beats the one-time sell price for Rare, Epic, and Legendary items. If you find a duplicate and need coins for an upgrade, sell it.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Rarity</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">First Copy</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Duplicates</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              <tr>
                <td className="p-4 font-medium text-dirt">Junk / Common</td>
                <td className="p-4 text-dirt/80">Donate only if you have an empty slot and nothing better.</td>
                <td className="p-4 text-dirt/80">Sell immediately.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-dirt">Uncommon</td>
                <td className="p-4 text-dirt/80">Fine for early slots, replace later.</td>
                <td className="p-4 text-dirt/80">Sell if you need bag space.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-dirt">Rare</td>
                <td className="p-4 text-dirt/80">Donate unless you are broke and the sell price unlocks a big upgrade.</td>
                <td className="p-4 text-dirt/80">Sell or gift to other players if trading exists.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-dirt">Epic</td>
                <td className="p-4 text-dirt/80">Donate almost always.</td>
                <td className="p-4 text-dirt/80">Sell only if you have better displays already.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-dirt">Legendary</td>
                <td className="p-4 text-dirt/80">Donate always. These are the best museum earners.</td>
                <td className="p-4 text-dirt/80">Sell or keep for collection goals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Do I need Robux to find legendary items?</h4>
            <p className="text-sm text-dirt/80">No. 2x Luck and 2x Gold game passes speed up progress, but legendaries can be found with free tools and patience.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">How do I know if a spot is legendary?</h4>
            <p className="text-sm text-dirt/80">Detector signals vary by color and strength. The strongest, most colorful signals are usually Rare or higher. The exact color-coding is not officially confirmed.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Are rare item values fixed?</h4>
            <p className="text-sm text-dirt/80">No. Sell prices and museum values are community estimates. Use the item database as a guideline and verify in-game.</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-dirt/10">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">Can I trade rare items?</h4>
            <p className="text-sm text-dirt/80">Trading status depends on the current game version. Check the in-game menu or official announcements.</p>
          </div>
        </div>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          View the full item database
        </a>
      </div>
    </div>
  );
}
