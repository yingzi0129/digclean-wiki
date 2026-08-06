import { Metadata } from "next";
import type { CodeRow } from "@/types";
import { LastUpdated } from "@/components";
import codesData from "@/data/codes.json";

export const metadata: Metadata = {
  title: "Dig & Clean Codes (August 2026) — Rewards & How to Redeem",
  description: "All active Dig & Clean codes in one place. Updated daily. No working codes? We tell you where to watch for the next drop.",
  alternates: { canonical: "https://digclean-wiki.wiki/codes/" },
};

export default function CodesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Codes (August 2026)
        </h1>
        <LastUpdated date={codesData.lastUpdated} note="Checked daily against the official Roblox page and Squeaky Clean! group." />
        <p className="text-lg text-dirt/80 mt-4">
          Looking for active Dig & Clean codes? We keep this page updated with the latest redeemable codes, rewards, and instructions. If no codes are working right now, scroll down to see where new codes usually drop first.
        </p>
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
          <p className="text-dirt/60">No expired codes recorded yet. We add them as codes go inactive.</p>
        )}
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How to Redeem Dig & Clean Codes</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li>Launch Dig & Clean on Roblox.</li>
          <li>Look for the Codes button on the main screen or in the settings menu.</li>
          <li>Type the code exactly as it appears above.</li>
          <li>Press Confirm and check your inventory or currency.</li>
        </ol>
        <p className="text-sm text-dirt/60 mt-4">Codes are case-sensitive. Copy and paste to avoid typos.</p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Where to Find New Codes</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Official Dig & Clean social channels</li>
          <li>The game’s Roblox description or update notes</li>
          <li>Community Discord servers and YouTube creators</li>
        </ul>
        <p className="text-sm text-dirt/60 mt-4">We never list codes from unofficial script or exploit sites.</p>
      </div>

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Back to the full item database
        </a>
      </div>
    </div>
  );
}
