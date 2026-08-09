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
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showUpgradeTip, setShowUpgradeTip] = useState(false);

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

  const handleSearch = () => {
    if (!searchQ.trim()) return;
    window.location.href = `/items/?q=${encodeURIComponent(searchQ)}`;
  };

  const handleUpgrade = () => {
    setShowUpgradeTip(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* 实时感 banner */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base font-semibold text-dirt/80 mb-8 md:mb-10">
        <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-dirt/10 shadow-sm">
          <Ticket className="w-4 h-4 text-water" />
          Codes checked: {codesData.lastUpdated}
        </span>
        <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-dirt/10 shadow-sm">
          <Search className="w-4 h-4 text-water" />
          Items updated: {itemsData.lastUpdated}
        </span>
        <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-dirt/10 shadow-sm">
          <Coins className="w-4 h-4 text-water" />
          Players online: 10K-22K
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 物品搜索 */}
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20 relative">
          <h3 className="font-headline font-bold text-xl text-dirt mb-4 flex items-center gap-2">
            <Search className="w-6 h-6 text-water" />
            Search items
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={searchQ}
              onChange={(e) => {
                setSearchQ(e.target.value);
                setShowSearchResults(true);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="e.g. Ancient Idol, Sand Dollar..."
              className="flex-1 min-w-0 pl-4 pr-4 py-3 bg-white border border-dirt/30 rounded-lg focus:ring-2 focus:ring-water focus:border-water outline-none text-dirt text-base"
            />
            <button
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 bg-water text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-water/90 transition-colors"
            >
              Search <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {showSearchResults && searchResults.length > 0 && (
            <div className="mt-3 bg-white rounded-lg border border-dirt/10 shadow-sm overflow-hidden">
              {searchResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/items/?q=${encodeURIComponent(item.name)}`}
                  className="flex items-center justify-between px-4 py-2.5 text-sm hover:bg-sand/50 transition-colors border-b border-dirt/5 last:border-b-0"
                >
                  <span className="text-dirt font-medium">{item.name}</span>
                  <span className="text-dirt/60 text-xs">{item.rarity}</span>
                </Link>
              ))}
            </div>
          )}
          <p className="text-sm text-dirt/60 mt-4">
            Find value, rarity, and keep-or-sell advice instantly.
          </p>
        </div>

        {/* 铲子升级计算器 */}
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-4 flex items-center gap-2">
            <Shovel className="w-6 h-6 text-water" />
            Next shovel upgrade
          </h3>
          <div className="space-y-3">
            <input
              value={gold}
              onChange={(e) => {
                setGold(e.target.value.replace(/[^0-9,]/g, ""));
                setShowUpgradeTip(false);
              }}
              placeholder="How much Gold do you have?"
              className="w-full px-4 py-3 bg-white border border-dirt/30 rounded-lg focus:ring-2 focus:ring-water focus:border-water outline-none text-dirt text-base"
            />
            <select
              value={currentShovel}
              onChange={(e) => {
                setCurrentShovel(e.target.value);
                setShowUpgradeTip(false);
              }}
              className="w-full px-4 py-3 bg-white border border-dirt/30 rounded-lg text-dirt text-base focus:ring-2 focus:ring-water focus:border-water outline-none"
            >
              <option value="">Current shovel (optional)</option>
              {shovelsData.shovels.map((s) => (
                <option key={s.name} value={s.name}>{s.name} ({s.price.toLocaleString("en-US")} Gold)</option>
              ))}
            </select>
            <button
              onClick={handleUpgrade}
              className="w-full inline-flex items-center justify-center gap-2 bg-water text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-water/90 transition-colors"
            >
              Find upgrade <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {showUpgradeTip && upgradeTip && (
            <div className="mt-4 p-4 bg-sand/50 rounded-lg border border-dirt/10 text-sm">
              {upgradeTip.type === "buy" ? (
                <>
                  <p className="font-semibold text-dirt text-base">Buy the <span className="text-water">{upgradeTip.target.name}</span></p>
                  <p className="text-dirt/70 text-sm mt-1">
                    Cost: {upgradeTip.target.price.toLocaleString("en-US")} Gold · You will have {upgradeTip.remaining?.toLocaleString("en-US")} Gold left
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-dirt text-base">Save {upgradeTip.need?.toLocaleString("en-US")} more Gold</p>
                  <p className="text-dirt/70 text-sm mt-1">
                    Next target: {upgradeTip.target.name} ({upgradeTip.target.price.toLocaleString("en-US")} Gold)
                  </p>
                </>
              )}
              <Link href="/shovels/" className="inline-flex items-center gap-1 text-water text-sm font-semibold mt-2 hover:underline">
                See full shovel guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
          {!showUpgradeTip && (
            <p className="text-sm text-dirt/60 mt-4">
              Enter your Gold and current shovel, then click Find upgrade.
            </p>
          )}
        </div>
      </div>

      {/* Codes 状态快速入口 */}
      <div className="mt-6 bg-foam rounded-xl p-5 md:p-6 card-shadow border border-dirt/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-water/10 text-water flex items-center justify-center">
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <p className="font-headline font-bold text-lg text-dirt">Codes status</p>
            <p className="text-sm text-dirt/70">{codesStatus} · Last checked {codesData.lastUpdated}</p>
          </div>
        </div>
        <Link
          href="/codes/"
          className="inline-flex items-center gap-2 bg-water text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-water/90 transition-colors"
        >
          Check codes <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
