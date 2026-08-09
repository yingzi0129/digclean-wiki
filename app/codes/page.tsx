import { Metadata } from "next";
import type { CodeRow } from "@/types";
import codesData from "@/data/codes.json";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components";

const related = [
  { href: "/", label: "Home" },
  { href: "/items/", label: "Items" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/farming/", label: "Farming" },
  { href: "/beginner/", label: "Beginner Guide" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Codes", item: "https://digclean-wiki.wiki/codes/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to redeem Dig & Clean codes",
  description: "Step-by-step instructions for redeeming Dig & Clean codes in Roblox.",
  step: codesData.howToRedeem.map((step, idx) => ({
    "@type": "HowToStep",
    position: idx + 1,
    name: `Step ${idx + 1}`,
    text: step,
  })),
};

export const metadata: Metadata = {
  title: "Dig & Clean Codes (August 2026) — Rewards & How to Redeem",
  description: "All active Dig & Clean codes in one place. Updated daily. No working codes? We tell you where to watch for the next drop, plus exact redemption steps and common fake-code warnings.",
  alternates: { canonical: "https://digclean-wiki.wiki/codes/" },
};

export default function CodesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Codes (August 2026)
        </h1>
        <p className="text-xs text-dirt/60 mt-2">Last updated: {codesData.lastUpdated} · Checked regularly against the official Roblox page and Squeaky Clean! group.</p>
        <p className="text-lg text-dirt/80 mt-4">
          Looking for active Dig & Clean codes? This page lists every verified working code, the reward, and exactly how to redeem it. If no codes are active right now, we also show the safest places to watch for the next drop and the fake-code traps to avoid.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 text-center">
          <p className="text-xs uppercase tracking-widest text-dirt/60 mb-2">Active Codes</p>
          <p className="font-headline font-bold text-4xl text-dirt">{codesData.active.length}</p>
        </div>
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 text-center">
          <p className="text-xs uppercase tracking-widest text-dirt/60 mb-2">Expired Codes</p>
          <p className="font-headline font-bold text-4xl text-dirt/60">{codesData.expired.length}</p>
        </div>
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 text-center">
          <p className="text-xs uppercase tracking-widest text-dirt/60 mb-2">Last Official Check</p>
          <p className="font-headline font-bold text-4xl text-water">{codesData.lastUpdated}</p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Active Dig & Clean Codes</h2>
        {codesData.active.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dirt/5 border-b border-dirt/10">
                  <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Code</th>
                  <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Reward</th>
                  <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dirt/5">
                {codesData.active.map((c: CodeRow) => (
                  <tr key={c.code}>
                    <td className="p-4 font-medium text-dirt font-mono">{c.code}</td>
                    <td className="p-4 text-dirt/80">{c.reward}</td>
                    <td className="p-4"><span className="inline-block px-3 py-1 rounded text-xs font-bold bg-status-keep/10 text-status-keep">ACTIVE</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 bg-sand/50 rounded-xl border border-dirt/10">
            <p className="text-dirt/80 font-medium">No active codes right now.</p>
            <p className="text-sm text-dirt/60 mt-1">{codesData.note}</p>
          </div>
        )}
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Expired Codes</h2>
        {codesData.expired.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dirt/5 border-b border-dirt/10">
                  <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Code</th>
                  <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Reward</th>
                  <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dirt/5">
                {codesData.expired.map((c: CodeRow) => (
                  <tr key={c.code} className="opacity-70">
                    <td className="p-4 font-medium text-dirt font-mono line-through">{c.code}</td>
                    <td className="p-4 text-dirt/80">{c.reward}</td>
                    <td className="p-4"><span className="inline-block px-3 py-1 rounded text-xs font-bold bg-dirt/10 text-dirt/70">EXPIRED</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-dirt/60">No expired codes recorded yet. We add them as codes go inactive so you can see what used to work.</p>
        )}
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How to Redeem Dig & Clean Codes</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          {codesData.howToRedeem.map((step: string) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="text-sm text-dirt/60 mt-4">Codes are case-sensitive. Copy and paste to avoid typos.</p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Where to Find New Codes</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          {codesData.whereToWatch.map((source: string) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Watch Out for Fake Code Sites</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          {codesData.warnings.map((warning: string) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Codes FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {codesData.faq.map((f: { q: string; a: string }) => (
            <div key={f.q} className="bg-white/50 rounded-xl p-4 border border-dirt/10">
              <h4 className="font-headline font-bold text-lg text-dirt mb-2">{f.q}</h4>
              <p className="text-sm text-dirt/80">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Back to the full item database
        </a>
      </div>
    </div>
  );
}
