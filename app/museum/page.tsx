import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dig & Clean Museum Guide: Best Displays",
  description: "Learn how the Dig & Clean museum works, which items to display, and how to maximize your museum bonus.",
  alternates: { canonical: "https://digclean-wiki.wiki/museum/" },
};

export default function MuseumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Museum Guide: Best Displays
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          The museum is where your best Dig & Clean finds earn passive value. This guide explains how displays work and which items are worth keeping instead of selling.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How the Museum Works</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Place cleaned items into display slots.</li>
          <li>Higher rarity items usually give better bonuses.</li>
          <li>Some displays may reward complete sets or themes.</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">What to Keep for the Museum</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li>Rare, Epic, and Legendary items</li>
            <li>Items with high museum value compared to their sell price</li>
            <li>Duplicate rare items only if you have extra slots</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">What to Sell</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li>Junk and most Common items</li>
            <li>Duplicate low-value items</li>
            <li>Items where the sell price clearly beats the museum bonus</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <a href="/rare-items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Find museum-worthy items
        </a>
      </div>
    </div>
  );
}
