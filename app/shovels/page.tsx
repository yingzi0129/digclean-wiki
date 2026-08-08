import { Metadata } from "next";
import type { StagePick, Shovel } from "@/types";
import { LastUpdated } from "@/components";
import shovelsData from "@/data/shovels.json";

export const metadata: Metadata = {
  title: "Dig & Clean Best Shovel: Tier List & Upgrade Guide",
  description: "Compare every Dig & Clean shovel by speed, power, and price. Find the best shovel for your current stage and budget.",
  alternates: { canonical: "https://digclean-wiki.wiki/shovels/" },
};

export default function ShovelsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Best Shovels & Upgrade Guide
        </h1>
        <LastUpdated date={shovelsData.lastUpdated} note={shovelsData.confidence} />
        <p className="text-lg text-dirt/80 mt-4">
          The right shovel saves time and earns more money. This Dig & Clean shovel guide breaks down the confirmed upgrade path by speed, power, and price, plus our stage-by-stage picks for new and experienced players.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Dig & Clean Shovel by Stage</h2>
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
              {shovelsData.byStage.map((s: StagePick) => (
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
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Shovel</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Speed</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Power</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Price</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Best For</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              {shovelsData.shovels.map((s: Shovel) => (
                <tr key={s.name}>
                  <td className="p-4 font-medium text-dirt">{s.name}</td>
                  <td className="p-4 text-dirt/80">{s.speed}/5</td>
                  <td className="p-4 text-dirt/80">{s.power}/5</td>
                  <td className="p-4 font-headline font-bold text-gold">{s.price.toLocaleString("en-US")}</td>
                  <td className="p-4 text-dirt/80">{s.bestFor}</td>
                  <td className="p-4 text-xs text-dirt/60">{s.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">When Should You Upgrade?</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Upgrade when you notice dig times slowing down at your current spot.</li>
          <li>Prioritize power if you are hunting rare and legendary items.</li>
          <li>Prioritize speed if you are farming common items for quick cash.</li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-dirt/70 mb-3">Ready to farm smarter?</p>
        <a href="/farming/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          See Dig & Clean money farming tips
        </a>
      </div>
    </div>
  );
}
