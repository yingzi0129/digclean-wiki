"use client";

import { useMemo, useState } from "react";
import { Search, ArrowRight, Coins, Shovel, Ticket } from "lucide-react";
import itemsData from "@/data/items.json";
import shovelsData from "@/data/shovels.json";
import codesData from "@/data/codes.json";
import Link from "next/link";

export function HeroTools() {
  const [searchQ, setSearchQ] = useState("");
  const [gold, setGold] = useState<string>("");
  const [currentShovel, setCurrentShovel] = useState<string>("");

  const searchResults = useMemo(() => {
    if (!searchQ.trim()) return [];
    return itemsData.items
      .filter((i) => i.name.toLowerCase().includes(searchQ.toLowerCase()))
      .slice(0, 5);
  }, [searchQ]);

  const upgradeTip = useMemo(() => {
    const amount = Number(gold.replace(/,/g, ""));
    if (!amount || amount <= 0) return null;
    const current = currentShovel
      ? shovelsData.shovels.find((s) => s.name.toLowerCase() === currentShovel.toLowerCase())
      : undefined;
    const candidates = shovelsData.shovels.filter((s) => s.price > 0 && s.price <= amount * 1.2);
    const next = candidates
      .filter((s) => !current || s.price > current.price)
      .sort((a, b) => b.price - a.price)[0];
    if (!next) {
      const cheapest = shovelsData.shovels.filter((s) => s.price > 0).sort((a, b) => a.price - b.price)[0];
      return { type: "save", target: cheapest, need: cheapest.price - amount };
    }
    return { type: "buy", target: next, remaining: amount - next.price };
  }, [gold, currentShovel]);

  const codesStatus = codesData.active.length > 0
    ? `${codesData.active.length} active code${codesData.active.length > 1 ? "s" : ""}`
    : "No active codes";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 实时感 banner */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm font-medium text-dirt/70 mb-6 md:mb-8">
        <span className="inline-flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-dirt/10">
          <Ticket className="w-3.5 h-3.5 text-water" />
          Codes checked: {codesData.lastUpdated}
        </span>
        <span className="inline-flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-dirt/10">
          <Search className="w-3.5 h-3.5 text-water" />
          Items updated: {itemsData.lastUpdated}
        </span>
        <span className="inline-flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-dirt/10">
          <Coins className="w-3.5 h-3.5 text-water" />
          Players online: 10K-22K
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* 物品搜索 */}
        <div className="bg-foam rounded-xl p-5 md:p-6 card-shadow border border-dirt/20 relative">
          <h3 className="font-headline font-bold text-lg text-dirt mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-water" />
            Search items
          </h3>
          <div className="relative">
            <input
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="e.g. Ancient Idol, Sand Dollar..."
              className="w-full pl-4 pr-10 py-2.5 bg-white border border-dirt/30 rounded-lg focus:ring-2 focus:ring-water focus:border-water outline-none text-dirt text-sm"
            />
          </div>
          {searchResults.length > 0 && (
            <div className="mt-2 bg-white rounded-lg border border-dirt/10 shadow-sm overflow-hidden">
              {searchResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/items/?q=${encodeURIComponent(item.name)}`}
                  className="flex items-center justify-between px-4 py-2 text-sm hover:bg-sand/50 transition-colors border-b border-dirt/5 last:border-b-0"
                >
                  <span className="text-dirt font-medium">{item.name}</span>
                  <span className="text-dirt/60 text-xs">{item.rarity}</span>
                </Link>
              ))}
            </div>
          )}
          <p className="text-xs text-dirt/60 mt-3">
            Find value, rarity, and keep-or-sell advice instantly.
          </p>
        </div>

        {/* 铲子升级计算器 */}
        <div className="bg-foam rounded-xl p-5 md:p-6 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-lg text-dirt mb-3 flex items-center gap-2">
            <Shovel className="w-5 h-5 text-water" />
            Next shovel upgrade
          </h3>
          <div className="space-y-3">
            <input
              value={gold}
              onChange={(e) => setGold(e.target.value.replace(/[^0-9,]/g, ""))}
              placeholder="How much Gold do you have?"
              className="w-full px-4 py-2.5 bg-white border border-dirt/30 rounded-lg focus:ring-2 focus:ring-water focus:border-water outline-none text-dirt text-sm"
            />
            <select
              value={currentShovel}
              onChange={(e) => setCurrentShovel(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-dirt/30 rounded-lg text-dirt text-sm focus:ring-2 focus:ring-water focus:border-water outline-none"
            >
              <option value="">Current shovel (optional)</option>
              {shovelsData.shovels.map((s) => (
                <option key={s.name} value={s.name}>{s.name} ({s.price.toLocaleString("en-US")} Gold)</option>
              ))}
            </select>
          </div>
          {upgradeTip && (
            <div className="mt-3 p-3 bg-sand/50 rounded-lg border border-dirt/10 text-sm">
              {upgradeTip.type === "buy" ? (
                <>
                  <p className="font-semibold text-dirt">Buy the <span className="text-water">{upgradeTip.target.name}</span></p>
                  <p className="text-dirt/70 text-xs mt-1">
                    Cost: {upgradeTip.target.price.toLocaleString("en-US")} Gold · You will have {upgradeTip.remaining?.toLocaleString("en-US")} Gold left
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-dirt">Save {upgradeTip.need?.toLocaleString("en-US")} more Gold</p>
                  <p className="text-dirt/70 text-xs mt-1">
                    Next target: {upgradeTip.target.name} ({upgradeTip.target.price.toLocaleString("en-US")} Gold)
                  </p>
                </>
              )}
              <Link href="/shovels/" className="inline-flex items-center gap-1 text-water text-xs font-semibold mt-2 hover:underline">
                See full shovel guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
          {!upgradeTip && (
            <p className="text-xs text-dirt/60 mt-3">
              Enter your Gold and current shovel to get the next best upgrade.
            </p>
          )}
        </div>
      </div>

      {/* Codes 状态快速入口 */}
      <div className="mt-4 bg-foam rounded-xl p-4 md:p-5 card-shadow border border-dirt/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-water/10 text-water flex items-center justify-center">
            <Ticket className="w-5 h-5" />
          </div>
          <div>
            <p className="font-headline font-bold text-dirt">Codes status</p>
            <p className="text-xs text-dirt/70">{codesStatus} · Last checked {codesData.lastUpdated}</p>
          </div>
        </div>
        <Link
          href="/codes/"
          className="inline-flex items-center gap-2 bg-water text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-water/90 transition-colors"
        >
          Check codes <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
