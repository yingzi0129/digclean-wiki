import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dig & Clean Money Farming — Best Way to Make Money Fast",
  description: "Learn the fastest Dig & Clean money farming routes, from starter beach loops to late-game legendary spots. Updated after every major patch.",
  alternates: { canonical: "https://digclean-wiki.wiki/farming/" },
};

export default function FarmingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          How to Make Money Fast in Dig & Clean
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Want to fund your next shovel upgrade? These Dig & Clean money farming routes focus on fast digs, quick cleans, and reliable sell points. Pick the loop that matches your shovel power and current area.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">Starter Beach Loop</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li><strong>Best for:</strong> New players with basic shovels</li>
            <li><strong>What to dig:</strong> Junk and common items</li>
            <li><strong>Why it works:</strong> Short walks, fast cleans, and easy respawns</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">Shipwreck Cove Loop</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li><strong>Best for:</strong> Players with strong shovels who have paid 1,000,000 coins to travel</li>
            <li><strong>What to dig:</strong> Rare, epic, and legendary items</li>
            <li><strong>Why it works:</strong> Permanent 2X luck boost doubles your rare finds</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Farming Tips</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Sell junk immediately. It clogs your bag and slows your loop.</li>
          <li>Keep rare items for the museum only if the display bonus beats the sell price.</li>
          <li>Upgrade your shovel first, then detector, then spray bottle on each island.</li>
          <li>Farm during quieter server times to avoid contested dig spots.</li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-dirt/70 mb-3">Need the right tool?</p>
        <a href="/shovels/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Compare Dig & Clean shovels
        </a>
      </div>
    </div>
  );
}
