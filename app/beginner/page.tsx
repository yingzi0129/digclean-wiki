import { Metadata } from "next";
import { RelatedLinks } from "@/components";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/items/", label: "Items" },
  { href: "/codes/", label: "Codes" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/farming/", label: "Farming" },
  { href: "/controls/", label: "Controls" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Beginner Guide", item: "https://digclean-wiki.wiki/beginner/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to start playing Dig & Clean",
  description: "A beginner step-by-step guide to the Dig & Clean core loop: detect, dig, clean, display or sell, and upgrade.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Detect buried items",
      text: "Equip your detector and walk until the signal peaks. Detector luck and range determine what you find.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Dig the spot",
      text: "Switch to your shovel and dig where the signal is strongest. Higher shovel power finishes the dig faster.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Clean the find",
      text: "Carry the dirty item to a cleaning station and spray it until the real item is revealed. Rarity affects whether to keep or sell.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Display or sell",
      text: "Keep rare, epic, and legendary items for your museum display. Sell junk and common duplicates to fund upgrades.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Upgrade smartly",
      text: "Prioritize shovel power first, then detector luck, then spray speed. Use our Shovels and Items pages to plan your next purchase.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Beginner Guide",
  description: "New to Dig & Clean? Learn the controls, the core loop, and what to focus on first in this beginner-friendly guide.",
  alternates: { canonical: "https://digclean-wiki.wiki/beginner/" },
};

export default function BeginnerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Beginner Guide
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Dig & Clean is a Roblox game about finding, digging up, cleaning, and displaying buried treasure. This beginner guide walks you through the controls, the core loop, and the first goals to chase. The official Roblox description says it all: dig up dirty junk and buried treasure, spray it clean, hunt for the rarest items, show off your best finds in your own museum, and buy better shovels and spray bottles.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">The Core Loop</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Detect:</strong> Hold your detector and follow the signal. Colorful or strong signals usually mean higher rarity.</li>
          <li><strong>Dig:</strong> Switch to your shovel and dig where the signal peaks. Power shortens the dig meter.</li>
          <li><strong>Clean:</strong> Carry the dirty item to a Workstation, press the action prompt, and spray it clean.</li>
          <li><strong>Display or Sell:</strong> Add rare items to your museum. Sell the rest to fund upgrades.</li>
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">What to Focus On First</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Complete the tutorial if the game offers one.</li>
            <li>Sell junk items to buy your first shovel upgrade.</li>
            <li>Keep one of each rare item for your museum.</li>
            <li>Check active codes for starter boosts.</li>
            <li>Upgrade shovel power before anything else.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Common Beginner Mistakes</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Holding onto every item. Junk takes up bag space and slows progress.</li>
            <li>Ignoring the museum. Display bonuses add up over time.</li>
            <li>Upgrading shovels too early or too evenly. Focus on the next big power tier.</li>
            <li>Buying sprays before a better shovel or detector.</li>
            <li>Traveling to Shipwreck Cove before you can dig its rare spots.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">First-Hour Goals</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li>Learn the Workstation location near your museum.</li>
          <li>Fill every empty museum slot with whatever you find.</li>
          <li>Sell duplicates and junk to afford the Wood or Metal Shovel.</li>
          <li>Save toward the Amethyst Shovel and Platinum Detector targets.</li>
          <li>Watch for stronger detector signals — they lead to better rewards.</li>
        </ol>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Start exploring the item database
        </a>
      </div>
    </div>
  );
}
