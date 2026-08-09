import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import updatesData from "@/data/updates.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/codes/", label: "Codes" },
  { href: "/items/", label: "Items" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/farming/", label: "Farming" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Updates", item: "https://digclean-wiki.wiki/updates/" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Dig & Clean Wiki Updates",
  url: "https://digclean-wiki.wiki/updates/",
  description: "Track Dig & Clean code releases, item value changes, new shovels and sprays, and official Roblox events.",
};

export const metadata: Metadata = {
  title: "Dig & Clean Updates: Codes, Items, Gear & Events Tracker",
  description: "Track the latest Dig & Clean updates: active codes, item value changes, new shovels and sprays, and official Roblox events. Updated daily.",
  alternates: { canonical: "https://digclean-wiki.wiki/updates/" },
};

export default function UpdatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Updates
        </h1>
        <LastUpdated date={updatesData.lastUpdated} note="We recheck codes, item values, and official sources daily." />
        <p className="text-lg text-dirt/80 mt-4">
          Roblox games change fast. This page tracks the latest Dig & Clean code drops, item value tweaks, new shovels and spray bottles, and official events so you never miss a free reward or a better farming route.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 md:col-span-2 space-y-4">
          <h2 className="font-headline font-bold text-2xl text-dirt">Latest update log</h2>
          <div className="divide-y divide-dirt/10">
            {updatesData.entries.map((entry: { date: string; title: string; body: string }) => (
              <div key={entry.title} className="py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-dirt/50">{entry.date}</p>
                <h3 className="font-headline font-bold text-lg text-dirt mt-1">{entry.title}</h3>
                <p className="text-dirt/80 mt-1">{entry.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 space-y-4">
          <h2 className="font-headline font-bold text-2xl text-dirt">What we track</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Active and expired codes</li>
            <li>Item sell values and rarity changes</li>
            <li>New shovels, detectors, and sprays</li>
            <li>Official Roblox events and milestones</li>
            <li>Farming route adjustments</li>
          </ul>
          <p className="text-sm text-dirt/70">
            Most stats come from the official Roblox page and verified community sources. We mark uncertain info as estimates.
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How to stay current</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li>Check this page after every Dig & Clean update or event announcement.</li>
          <li>Bookmark the <a href="/codes/" className="text-water hover:underline">Codes page</a> for the fastest redemption workflow.</li>
          <li>Use the <a href="/items/" className="text-water hover:underline">Item Database</a> to verify current sell values before donating to the museum.</li>
          <li>Review the <a href="/shovels/" className="text-water hover:underline">Shovels guide</a> after new gear drops to see if your upgrade order changes.</li>
        </ol>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
