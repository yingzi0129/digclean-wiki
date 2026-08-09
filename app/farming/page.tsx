import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

const links = {
  home: { label: "Home", href: "/" },
  items: { label: "Item Database", href: "/items/" },
  codes: { label: "Codes", href: "/codes/" },
  shovels: { label: "Shovels", href: "/shovels/" },
  farming: { label: "Farming", href: "/farming/" },
  beginner: { label: "Beginner Guide", href: "/beginner/" },
  controls: { label: "Controls", href: "/controls/" },
  museum: { label: "Museum", href: "/museum/" },
  rare: { label: "Rare Items", href: "/rare-items/" },
};

const navKeys = ["items", "codes", "shovels", "farming", "beginner"] as const;
const relatedKeys = ["items", "shovels", "farming", "beginner", "controls"] as const;

export const metadata: Metadata = {
  title: "Dig & Clean Money Farming — Best Way to Make Money Fast",
  description: "Learn the fastest Dig & Clean money farming routes, from starter beach loops to late-game legendary spots. Updated after every major patch.",
  alternates: { canonical: "https://digclean-wiki.wiki/farming/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: navKeys.map((k, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: links[k].label,
    item: `https://digclean-wiki.wiki${links[k].href}`,
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to farm money fast in Dig & Clean",
  description:
    "A step-by-step guide to the two best Dig & Clean farming loops: the Starter Beach Loop and the Shipwreck Cove Loop.",
  step: [
    {
      "@type": "HowToStep",
      name: "Starter Beach Loop",
      text: "Equip the Rusty Detector, sweep the Starter Island beach, dig only junk and common spots, clean at the Workstation, and sell everything to fund early upgrades.",
      url: "https://digclean-wiki.wiki/farming/#starter-beach-loop",
    },
    {
      "@type": "HowToStep",
      name: "Shipwreck Cove Loop",
      text: "Unlock Shipwreck Cove for one million coins, use a strong shovel and detector, dig rare+ spots under the permanent 2X luck boost, keep rares for the museum, and sell duplicates.",
      url: "https://digclean-wiki.wiki/farming/#shipwreck-cove-loop",
    },
  ],
};

const faqs = [
  {
    q: "Which loop is best for new players?",
    a: "The Starter Beach Loop. It uses free starter gear, has short walks, and turns junk into coins quickly.",
  },
  {
    q: "When should I move to Shipwreck Cove?",
    a: "When you can comfortably afford the one-time travel fee (community-reported around one million coins) and still have a strong enough shovel to dig the rare spots there.",
  },
  {
    q: "Should I sell or keep rare items while farming?",
    a: "Keep the first copy of every Rare, Epic, or Legendary item for the museum. Sell duplicates and all junk/common items to keep the loop fast.",
  },
  {
    q: "Do game passes help farming?",
    a: "Yes, but only buy them if you play regularly. 2x Gold (599 R$) and 2x Luck (199 R$) are the most farming-relevant passes. Instant Clean (249 R$) saves time but does not increase earnings directly.",
  },
  {
    q: "Why is my farming income low?",
    a: "Common causes: low shovel power, not cleaning before selling, carrying too much junk, or contesting dig spots on busy servers. Fix the weakest link first.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FarmingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          How to Make Money Fast in Dig & Clean
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Want to fund your next shovel or unlock Shipwreck Cove? These Dig & Clean money farming routes focus on fast digs, quick cleans, and reliable sell points. The official Roblox page confirms the core loop: dig up dirty junk and treasure, spray it clean, hunt rare items, show your best finds in your museum, and buy better shovels and spray bottles. These two loops apply that loop to real money-making.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">Starter Beach Loop</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li><strong>Best for:</strong> New players with Plastic Shovel and Rusty Detector</li>
            <li><strong>What to dig:</strong> Junk and Common items</li>
            <li><strong>Why it works:</strong> Short walks, fast cleans, and easy respawns</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">Shipwreck Cove Loop</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li><strong>Best for:</strong> Players with strong shovels who have paid the one-time travel fee</li>
            <li><strong>What to dig:</strong> Rare, Epic, and Legendary items</li>
            <li><strong>Why it works:</strong> The second map is reported to apply a permanent 2X luck boost, doubling rare finds</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Starter Beach Loop: Step-by-Step</h2>
        <p className="text-dirt/80 mb-4">
          This is the recommended first farm. It needs no travel fee and no premium gear. The All Things How Dig & Clean guide (Aug 6, 2026) reports that the starter beach is packed with junk and common finds that respawn quickly. The goal is not big drops — it is fast cycles. Fast cycles mean more digs per hour, more cleans per hour, and more coins per hour than waiting for a single rare spot that might take a minute to finish with a weak shovel.
        </p>
        <ol className="list-decimal list-inside text-dirt/80 space-y-2">
          <li><strong>Equip the Rusty Detector.</strong> Sweep the beach near the cleaning Workstation. The Workstation is your sell point and your cleaning point, so staying close to it minimizes travel time.</li>
          <li><strong>Watch for signals.</strong> White or green hits are usually junk or common. They dig fast and sell fast, which is exactly what you want early on.</li>
          <li><strong>Switch to your shovel.</strong> Dig only the weakest spots your starter tool can clear quickly. If a spot takes more than a few seconds, move on and find a weaker one.</li>
          <li><strong>Carry the dirty item to the Workstation.</strong> Press the action prompt and hold spray to clean it. Cleaning is required before you can see the item and sell it.</li>
          <li><strong>Decide instantly.</strong> Junk and common duplicates go to the Sell Shop; keep one Sand Dollar or Starfish if you have an empty museum slot, but never hold multiple copies.</li>
          <li><strong>Reinvest.</strong> Buy the Wood Shovel as soon as possible, then save toward the Amethyst Shovel and Platinum Detector targets. These are the community-recommended starter-island breakpoints.</li>
          <li><strong>Repeat.</strong> A fast loop is worth more than one lucky drop early on. Consistency beats variance until you can afford Shipwreck Cove travel.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20" id="shipwreck-cove-loop">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Shipwreck Cove Loop: Step-by-Step</h2>
        <p className="text-dirt/80 mb-4">
          Shipwreck Cove is the community name for the second map. Unlocking it requires a one-time payment to the pirate NPC, reported by community guides as around one million coins. Once there, the map is said to grant a permanent 2X luck boost, which makes Rare+ drops far more common. Treat that number as a community estimate and confirm the live price in-game before you travel. The luck boost is a major income multiplier because it increases the percentage of high-value spots in every cycle, so even a slightly slower dig speed can be more profitable than grinding the starter beach once you have enough power to clear the rare spots.
        </p>
        <ol className="list-decimal list-inside text-dirt/80 space-y-2">
          <li><strong>Save for travel.</strong> Farm Starter Island until you have the travel fee plus enough left for a better shovel. Arriving at Shipwreck Cove with only the starter shovel is risky because rare spots may be too slow to finish.</li>
          <li><strong>Talk to the Pirate NPC.</strong> Select the travel option and pay the fee to reach Shipwreck Cove. The NPC is usually on the starter island near the docks or a travel sign.</li>
          <li><strong>Confirm the luck boost.</strong> Look for the 2X LUCK or similar on-screen label when you arrive. If it is missing, check recent patch notes because permanent boost mechanics can change.</li>
          <li><strong>Equip a strong detector and shovel.</strong> Community guides recommend at least Amethyst Shovel power; higher is better for legendary spots. A Platinum Detector or better also helps you find rare spots more often.</li>
          <li><strong>Chase colorful detector signals.</strong> Rare, Epic, and Legendary spots take longer but pay far more per dig. Do not waste time on weak signals unless you are just trying to clear bag space.</li>
          <li><strong>Clean fully.</strong> Rarity is only revealed after cleaning, so never leave an item dirty. A dirty legendary item looks the same as dirty junk until you spray it.</li>
          <li><strong>Keep first copies.</strong> Store one of each Rare, Epic, and Legendary item in the museum; sell duplicates. Museum income from these items stacks over time and can fund your next upgrades.</li>
          <li><strong>Upgrade locally.</strong> Repeat the shovel-first, then detector, then spray order on the new island. Shipwreck Cove has stronger gear that lets you finish even the legendary dig meters efficiently.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Earnings Comparison</h2>
        <p className="text-dirt/80 mb-4">
          These are relative estimates based on community reports, not exact live numbers. Your real earnings depend on detector luck, shovel power, cleaning speed, server competition, and whether you use game passes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Loop</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Target Finds</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Coins per Dig (est.)</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Cycle Speed</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Best Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              <tr>
                <td className="p-4 font-medium text-dirt">Starter Beach Loop</td>
                <td className="p-4 text-dirt/80">Junk, Common</td>
                <td className="p-4 text-dirt/80">5-52</td>
                <td className="p-4 text-dirt/80">Very fast</td>
                <td className="p-4 text-dirt/80">Early upgrades, travel fund</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-dirt">Shipwreck Cove Loop</td>
                <td className="p-4 text-dirt/80">Rare, Epic, Legendary</td>
                <td className="p-4 text-dirt/80">120-5,000+</td>
                <td className="p-4 text-dirt/80">Slower per dig, but higher total</td>
                <td className="p-4 text-dirt/80">Mid-to-late game income</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Farming Tips</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Sell junk immediately. It clogs your bag and slows your loop. Every second you spend sorting junk is a second you are not digging.</li>
            <li>Keep rare items for the museum only if the display bonus beats the sell price. For Rare, Epic, and Legendary items, museum income usually wins over time.</li>
            <li>Upgrade your shovel first, then detector, then spray bottle on each island. Shovel power is the bottleneck for Rare+ spots; detector luck is the bottleneck for finding them.</li>
            <li>Farm during quieter server times to avoid contested dig spots. If another player is already digging a spot, move to the next signal.</li>
            <li>Clean every item fully. Rarity is only revealed after spraying, and a dirty Epic item sells for the same as a dirty Common item if you never clean it.</li>
            <li>Revisit the farming page after patches. New maps, new tools, or economy changes can change which loop is best.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Common Farming Mistakes</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Hoarding every item. Bag space is a hidden speed limit. Sell or donate as soon as you decide.</li>
            <li>Buying small upgrades instead of saving for a big tier jump. A single Amethyst Shovel often beats three minor upgrades.</li>
            <li>Traveling to Shipwreck Cove without enough shovel power to dig rare spots. If you can only clear junk there, you are slower than the starter beach.</li>
            <li>Ignoring museum income. High-rarity displays can passively earn thousands of coins per second, which compounds while you farm elsewhere.</li>
            <li>Skipping detector upgrades. Luck determines the quality of every find. A better detector finds more Rare+ spots from the same beach.</li>
            <li>Not using codes when they are available. Even a small coin boost can shorten the early grind. Check our Codes page for active codes.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white/50 rounded-xl p-4 border border-dirt/10">
              <h4 className="font-headline font-bold text-lg text-dirt mb-2">{f.q}</h4>
              <p className="text-sm text-dirt/80">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Related Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {relatedKeys.map((k) => (
            <a
              key={k}
              href={links[k].href}
              className="bg-white/50 rounded-xl p-4 border border-dirt/10 hover:border-water/50 hover:-translate-y-0.5 transition-all text-center"
            >
              <span className="font-headline font-bold text-dirt">{links[k].label}</span>
            </a>
          ))}
        </div>
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
