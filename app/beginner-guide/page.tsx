import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dig & Clean Beginner Guide: How to Play",
  description: "New to Dig & Clean? Learn the controls, the core loop, and what to focus on first in this beginner-friendly guide.",
  alternates: { canonical: "https://digclean-wiki.wiki/beginner-guide/" },
};

export default function BeginnerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Beginner Guide: How to Play
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Dig & Clean is a Roblox game about finding, digging up, cleaning, and displaying buried treasure. This beginner guide walks you through the controls, the core loop, and the first goals to chase.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">The Core Loop</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Detect:</strong> Hold your detector and follow the signal.</li>
          <li><strong>Dig:</strong> Switch to your shovel and dig where the signal peaks.</li>
          <li><strong>Clean:</strong> Wash the item at a cleaning station with your spray bottle.</li>
          <li><strong>Display or Sell:</strong> Add rare items to your museum. Sell the rest.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">What to Focus On First</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Complete the tutorial if the game offers one.</li>
          <li>Sell junk items to buy your first shovel upgrade.</li>
          <li>Keep one of each rare item for your museum.</li>
          <li>Check active codes for starter boosts.</li>
        </ul>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Common Beginner Mistakes</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Holding onto every item. Junk takes up bag space and slows progress.</li>
          <li>Ignoring the museum. Display bonuses add up over time.</li>
          <li>Upgrading shovels too early. Balance power with your current farming goals.</li>
        </ul>
      </div>

      <div className="text-center">
        <a href="/items/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Start exploring the item database
        </a>
      </div>
    </div>
  );
}
