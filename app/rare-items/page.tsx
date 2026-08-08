import { Metadata } from "next";
import type { Item } from "@/types";
import { LastUpdated, RarityBadge } from "@/components";
import itemsData from "@/data/items.json";

export const metadata: Metadata = {
  title: "Dig & Clean Rare Items Guide — Where to Find Them",
  description: "Discover the rarest Dig & Clean items, where to find them, and whether they belong in your museum or the shop.",
  alternates: { canonical: "https://digclean-wiki.wiki/rare-items/" },
};

export default function RareItemsPage() {
  const rareItems = itemsData.items.filter((i: Item) => ["Rare", "Epic", "Legendary"].includes(i.rarity));
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Rare Items Guide
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note={itemsData.confidence} />
        <p className="text-lg text-dirt/80 mt-4">
          Some Dig & Clean items are worth far more than their sell price. This rare items guide lists hard-to-find treasures, their locations, and why collectors keep them.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Rare, Epic & Legendary Items</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Item</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Rarity</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold text-right">Value</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Location</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Museum Worth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              {rareItems.map((item: Item) => (
                <tr key={item.id}>
                  <td className="p-4 font-medium text-dirt">{item.name}</td>
                  <td className="p-4"><RarityBadge rarity={item.rarity} /></td>
                  <td className="p-4 font-headline font-bold text-gold text-right">{item.value.toLocaleString("en-US")}</td>
                  <td className="p-4 text-dirt/80">{item.location}</td>
                  <td className="p-4 text-sm text-dirt/80">{item.recommendation === "Keep" ? "Strong display piece" : "Sell unless duplicate slot"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How to Find Rare Items</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Upgrade your shovel. Higher power unlocks deeper dig spots.</li>
          <li>Move to Shipwreck Cove (1,000,000 coins) for the permanent 2X luck boost.</li>
          <li>Farm during off-peak hours to avoid competition at rare spawn points.</li>
        </ul>
      </div>

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Compare all item values
        </a>
      </div>
    </div>
  );
}
