"use client";

import { useMemo, useState, Fragment } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import type { Item } from "@/types";
import { JsonLd } from "./JsonLd";

export function RarityBadge({ rarity }: { rarity: string }) {
  const map: Record<string, string> = {
    Junk: "bg-rarity-junk/10 text-rarity-junk border-rarity-junk/30",
    Common: "bg-rarity-common/10 text-rarity-common border-rarity-common/30",
    Uncommon: "bg-rarity-uncommon/10 text-rarity-uncommon border-rarity-uncommon/30",
    Rare: "bg-rarity-rare/10 text-rarity-rare border-rarity-rare/30",
    Epic: "bg-rarity-epic/10 text-rarity-epic border-rarity-epic/30",
    Legendary: "bg-rarity-legendary/10 text-rarity-legendary border-rarity-legendary/30",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border uppercase ${map[rarity] || map.Common}`}>
      {rarity}
    </span>
  );
}

export function RecBadge({ rec }: { rec: string }) {
  if (rec === "Keep") {
    return <span className="inline-block px-3 py-1 rounded text-xs font-bold bg-status-keep/10 text-status-keep">KEEP</span>;
  }
  return <span className="inline-block px-3 py-1 rounded text-xs font-bold bg-status-sell/10 text-status-sell">SELL</span>;
}

export function ConfidenceBadge({ label }: { label: string }) {
  const isOfficial = label.toLowerCase().includes("official");
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${isOfficial ? "bg-water/10 text-water border-water/30" : "bg-dirt/10 text-dirt/70 border-dirt/20"}`}>
      {label}
    </span>
  );
}

export function LastUpdated({ date, note }: { date: string; note?: string }) {
  return (
    <p className="text-xs text-dirt/60 mb-2">Last updated: {date}{note ? ` · ${note}` : ""}</p>
  );
}

function ItemDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 py-2 border-b border-dirt/10 last:border-b-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-dirt/60">{label}</span>
      <div className="text-sm text-dirt/80">{children}</div>
    </div>
  );
}

export function ItemTable({ items }: { items: Item[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-left border-collapse">
        <thead>
          <tr className="bg-dirt/5 border-b border-dirt/10">
            <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Name</th>
            <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Rarity</th>
            <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold text-right">Value</th>
            <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold text-center">Recommendation</th>
            <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Location</th>
            <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold text-center">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dirt/5">
          {items.map((item, idx) => (
            <Fragment key={item.id}>
              <tr className={`hover:bg-dirt/5 transition-colors ${idx % 2 === 1 ? "bg-white/30" : ""}`}>
                <td className="p-4 font-medium text-dirt">{item.name}</td>
                <td className="p-4"><RarityBadge rarity={item.rarity} /></td>
                <td className="p-4 font-headline text-right font-bold text-gold">{item.value.toLocaleString("en-US")}</td>
                <td className="p-4 text-center"><RecBadge rec={item.recommendation} /></td>
                <td className="p-4 text-sm text-dirt/80">{item.location}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => toggle(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-water hover:text-water/80 transition-colors"
                    type="button"
                    aria-expanded={expanded[item.id]}
                    aria-controls={`details-${item.id}`}
                  >
                    {expanded[item.id] ? (
                      <><ChevronUp className="w-4 h-4" /> Less</>
                    ) : (
                      <><ChevronDown className="w-4 h-4" /> More</>
                    )}
                  </button>
                </td>
              </tr>
              {expanded[item.id] && (
                <tr id={`details-${item.id}`} className="bg-sand/30">
                  <td colSpan={6} className="p-4">
                    <div className="max-w-3xl">
                      <ItemDetail label="Sell Price">{item.sellPrice.toLocaleString("en-US")} Gold</ItemDetail>
                      <ItemDetail label="Museum Value">{item.museumValue}</ItemDetail>
                      <ItemDetail label="Location">{item.location}</ItemDetail>
                      <ItemDetail label="Description">{item.description}</ItemDetail>
                      <ItemDetail label="Keep / Sell Reason">{item.keepReason}</ItemDetail>
                      <ItemDetail label="Confidence"><ConfidenceBadge label={item.confidence} /></ItemDetail>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ItemCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-foam rounded-xl p-4 border border-dirt/20 card-shadow hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full z-0 opacity-30 bg-rarity-${item.rarity.toLowerCase()}`}></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-headline font-bold text-lg text-dirt">{item.name}</h3>
          <RarityBadge rarity={item.rarity} />
        </div>
        <div className="flex items-center gap-3 text-sm mb-2">
          <span className="text-gold font-bold flex items-center gap-1">${item.value.toLocaleString("en-US")}</span>
          <RecBadge rec={item.recommendation} />
        </div>
        <div className="text-xs text-dirt/70 flex items-center gap-1 mb-3">{item.location}</div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-xs font-semibold text-water hover:text-water/80 flex items-center justify-center gap-1 py-1.5 border border-water/30 rounded-lg hover:bg-water/5 transition-colors"
          type="button"
        >
          {open ? <><ChevronUp className="w-4 h-4" /> Hide details</> : <><ChevronDown className="w-4 h-4" /> Show details</>}
        </button>
        {open && (
          <div className="mt-3 space-y-2 text-xs border-t border-dirt/10 pt-3">
            <p><strong className="text-dirt/70">Sell Price:</strong> {item.sellPrice.toLocaleString("en-US")} Gold</p>
            <p><strong className="text-dirt/70">Museum Value:</strong> {item.museumValue}</p>
            <p><strong className="text-dirt/70">Reason:</strong> {item.keepReason}</p>
            <p><strong className="text-dirt/70">Confidence:</strong> <ConfidenceBadge label={item.confidence} /></p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ItemDatabase({ items, featured }: { items: Item[]; featured?: number }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("value");
  const rarities = ["All", "Junk", "Common", "Uncommon", "Rare", "Epic", "Legendary"];

  const filtered = useMemo(() => {
    let list = [...items];
    if (filter !== "All") list = list.filter((i) => i.rarity === filter);
    if (q.trim()) list = list.filter((i) => i.name.toLowerCase().includes(q.toLowerCase()));
    list.sort((a, b) => {
      if (sort === "value") return b.value - a.value;
      if (sort === "name") return a.name.localeCompare(b.name);
      const r = { Junk: 0, Common: 1, Uncommon: 2, Rare: 3, Epic: 4, Legendary: 5 };
      return (r[b.rarity as keyof typeof r] || 0) - (r[a.rarity as keyof typeof r] || 0);
    });
    return list;
  }, [items, q, filter, sort]);

  const display = featured ? filtered.slice(0, featured) : filtered;

  return (
    <div>
      <div className="p-4 md:p-6 border-b border-dirt/10 bg-white/50 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dirt/50 w-4 h-4" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-foam border border-dirt/30 rounded-lg focus:ring-2 focus:ring-water focus:border-water outline-none text-dirt placeholder-dirt/50 text-sm"
            placeholder="Search items..."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2">
            {rarities.map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${filter === r ? "bg-dirt text-white" : "border border-dirt/20 text-dirt hover:bg-dirt/5"}`}
                type="button"
              >
                {r}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="pl-3 pr-8 py-1.5 bg-foam border border-dirt/30 rounded-lg text-sm font-medium text-dirt focus:ring-2 focus:ring-water focus:border-water outline-none"
          >
            <option value="value">Sort by: Value</option>
            <option value="name">Sort by: Name</option>
            <option value="rarity">Sort by: Rarity</option>
          </select>
        </div>
      </div>
      <div className="hidden md:block">
        <ItemTable items={display} />
      </div>
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {display.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export function YouTube({ videoId, title }: { videoId: string; title: string }) {
  const [load, setLoad] = useState(false);
  return (
    <div className="w-full max-w-4xl mx-auto bg-foam rounded-xl card-shadow border border-dirt/20 p-4">
      <div className="relative w-full aspect-video bg-dirt/20 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer group" onClick={() => setLoad(true)}>
        {!load ? (
          <>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <p className="text-center text-dirt/70 text-sm mt-4 font-medium">{title}</p>
    </div>
  );
}

export function YouTube({ videoId, title }: { videoId: string; title: string }) {
  const steps = [
    { icon: "radar", title: "Detect", text: "Use your detector to find buried items under the sand." },
    { icon: "dig", title: "Dig", text: "Equip a shovel and dig where the signal is strongest." },
    { icon: "clean", title: "Clean", text: "Wash off dirt and rust to reveal the real item underneath." },
    { icon: "museum", title: "Museum", text: "Keep rare finds for your museum. Sell the rest for cash." },
  ];
  return (
    <div className="bg-foam rounded-xl p-8 card-shadow border border-dirt/20">
      <h2 className="font-headline font-bold text-3xl text-dirt text-center mb-8">How to Play</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-water/10 text-water flex items-center justify-center">
              <StepIcon name={s.icon} />
            </div>
            <h4 className="font-headline font-bold text-lg text-dirt">{s.title}</h4>
            <p className="text-sm text-dirt/70 hidden md:block">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepIcon({ name }: { name: string }) {
  if (name === "radar") return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>;
  if (name === "dig") return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 22l-2-2 6-6-6-6 2-2 8 8-8 8z"/></svg>;
  if (name === "clean") return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>;
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h20"/><path d="M5 20v-8l4-4 5 4 6-6v14"/></svg>;
}

export function FAQ() {
  const faqs = [
    { q: "Is this an official Dig & Clean wiki?", a: "No. This is an unofficial fan site made by players, for players. We are not affiliated with Roblox Corporation or the Dig & Clean developers." },
    { q: "What is the best shovel in Dig & Clean?", a: "The best shovel depends on your stage and budget. Early players should focus on affordable options with decent power, while late-game players can invest in higher power shovels like Ruby, Carbon, or Diamond. Check our Shovels page for stage-by-stage picks." },
    { q: "How do I redeem Dig & Clean codes?", a: "Open the game, look for the codes button or menu, enter the code exactly as shown, and confirm. Visit our Codes page for the latest active codes and step-by-step help." },
    { q: "Should I sell or keep my items?", a: "Keep rare, epic, and legendary items for your museum display. Sell common junk and duplicates to fund your next shovel upgrade." },
    { q: "How often is this site updated?", a: "We check active codes and game data regularly. Items, shovels, and stats are updated after major game updates or at least weekly." },
    { q: "Can I play Dig & Clean on mobile?", a: "Yes. Dig & Clean is available on Roblox across PC, mobile, and console. See our Controls page for platform-specific tips." },
    { q: "Where do you get your item values?", a: "We compile values from community testing and cross-check with other players. Values may change as the game updates. Individual item names and values are estimates where the official catalog has not been published." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="space-y-6">
      <JsonLd data={schema} />
      <h2 className="font-headline font-bold text-3xl text-dirt text-center">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((f) => (
          <div key={f.q} className="bg-foam p-6 rounded-xl border border-dirt/20">
            <h4 className="font-headline font-bold text-lg text-dirt mb-2">{f.q}</h4>
            <p className="text-sm text-dirt/80">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RelatedLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
      <h3 className="font-headline font-bold text-xl text-dirt mb-4">Related Pages</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="bg-white/50 rounded-xl p-3 border border-dirt/10 hover:border-water/50 hover:-translate-y-0.5 transition-all text-center text-sm font-semibold text-dirt">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
