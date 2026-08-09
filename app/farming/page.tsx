import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

const links = {
  home: { label: "Home", href: "/" },
  items: { label: "Item Database", href: "/items/" },
  codes: { label: "Codes", href: "/codes/" },
  shovels: { label: "Shovels", href: "/shovels/" },
  sprays: { label: "Sprays", href: "/sprays/" },
  farming: { label: "Farming", href: "/farming/" },
  cleaning: { label: "Cleaning", href: "/cleaning/" },
  museum: { label: "Museum", href: "/museum/" },
  beginner: { label: "Beginner Guide", href: "/beginner/" },
  controls: { label: "Controls", href: "/controls/" },
  rare: { label: "Rare Items", href: "/rare-items/" },
  updates: { label: "Updates", href: "/updates/" },
};

const navKeys = ["items", "codes", "shovels", "sprays", "farming", "cleaning", "museum", "beginner", "updates"] as const;
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
    a: "The Starter Beach Loop is best. It needs no upfront investment and lets you learn the detect-dig-clean-sell cycle while earning your first upgrades.",
  },
  {
    q: "When should I move to Shipwreck Cove?",
    a: "Move when you have at least a Titanium-class shovel, a Gold-class detector, and one million Gold for the boat unlock. Going earlier will slow you down.",
  },
  {
    q: "Should I sell or keep rare finds while farming?",
    a: "Donate the first copy of each Rare, Epic, or Legendary item to your museum. Sell duplicates and all Common/Uncommon items to fund your next upgrade.",
  },
  {
    q: "How much Gold can I make per hour?",
    a: "Starter Beach earns roughly 2,000-4,000 Gold per hour with free gear. Shipwreck Cove can earn 8,000-15,000+ Gold per hour with strong gear and efficient cleaning.",
  },
  {
    q: "Do codes affect farming?",
    a: "Codes usually give free Gold or boosts, which can speed up farming indirectly by skipping early grind time. Check the Codes page for the latest active rewards.",
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
          Dig & Clean Money Farming Guide
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          The fastest way to get rich in Dig & Clean is to follow a tight farming loop: detect, dig, clean, sell, repeat. This guide breaks down the two best loops in the game, shows you exactly what gear you need, and explains when to sell versus donate your finds.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 text-center">
          <p className="text-xs uppercase tracking-widest text-dirt/60 mb-2">Starter Beach</p>
          <p className="font-headline font-bold text-4xl text-water">2-4K/h</p>
          <p className="text-sm text-dirt/70 mt-2">Free gear, fast learning curve</p>
        </div>
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 text-center">
          <p className="text-xs uppercase tracking-widest text-dirt/60 mb-2">Shipwreck Cove</p>
          <p className="font-headline font-bold text-4xl text-gold">8-15K+/h</p>
          <p className="text-sm text-dirt/70 mt-2">1M Gold unlock, 2X luck boost</p>
        </div>
        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 text-center">
          <p className="text-xs uppercase tracking-widest text-dirt/60 mb-2">Sell Priority</p>
          <p className="font-headline font-bold text-4xl text-dirt">Junk → Rare</p>
          <p className="text-sm text-dirt/70 mt-2">Keep Epic/Legendary first copy</p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20" id="starter-beach-loop">
        <h2 className="font-headline font-bold text-3xl text-dirt mb-4">Starter Beach Loop</h2>
        <p className="text-dirt/80 leading-relaxed mb-6">
          Every player starts here, and it is one of the most reliable early Gold sources if you follow a route instead of wandering. The loop takes about two to three minutes once you are efficient.
        </p>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3 mb-6">
          <li><strong>Equip free tools.</strong> Plastic Shovel, Rusty Detector, and Basic Spray Bottle are enough to start.</li>
          <li><strong>Walk the shoreline clockwise.</strong> The beach has the densest cluster of low-strength dig spots.</li>
          <li><strong>Ping before you dig.</strong> Let the detector mark a spot; do not guess where items are buried.</li>
          <li><strong>Dig only common and uncommon pings.</strong> Rare spots may be too slow with the starter shovel, costing more time than they are worth.</li>
          <li><strong>Clean at the Workstation.</strong> Use the spray bottle until the item name and value appear.</li>
          <li><strong>Sell everything.</strong> At this stage, Gold matters more than museum slots.</li>
          <li><strong>Restart the loop.</strong> P respawn quickly on the starter island.</li>
        </ol>
        <div className="bg-sand/50 rounded-xl p-5 border border-dirt/10">
          <p className="font-semibold text-dirt mb-2">Starter Beach earnings</p>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li>Junk items: 5-25 Gold each</li>
            <li>Common items: 25-75 Gold each</li>
            <li>Uncommon items: 80-180 Gold each</li>
            <li>Rare beach finds (slow): 200-400 Gold each</li>
          </ul>
          <p className="text-dirt/80 text-sm mt-3">A clean run earns roughly 2,000-4,000 Gold per hour, enough for the first few shovel upgrades.</p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20" id="shipwreck-cove-loop">
        <h2 className="font-headline font-bold text-3xl text-dirt mb-4">Shipwreck Cove Loop</h2>
        <p className="text-dirt/80 leading-relaxed mb-6">
          Shipwreck Cove costs one million Gold to unlock, but it comes with a permanent 2X luck boost and a higher baseline rarity for buried items. This is where you transition from earning small change to farming legendary artifacts.
        </p>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3 mb-6">
          <li><strong>Recommended gear:</strong> Titanium or better shovel, Gold or Platinum detector, Steel spray bottle.</li>
          <li><strong>Unlock the cove.</strong> Save 1,000,000 Gold and buy the boat ticket.</li>
          <li><strong>Run the outer ring.</strong> Legendary and Epic pings cluster near shipwrecks and rock outcrops.</li>
          <li><strong>Skip common pings.</strong> Your time is worth more than low-value junk at this stage.</li>
          <li><strong>Dig rare+ spots.</strong> These have high dig strength; weak shovels will reset the meter.</li>
          <li><strong>Clean carefully.</strong> Large finds hide dirt on the back side. Rotate the camera.</li>
          <li><strong>Keep first copy, sell duplicates.</strong> Rare+ items fill museum slots and fund future upgrades.</li>
        </ol>
        <div className="bg-sand/50 rounded-xl p-5 border border-dirt/10">
          <p className="font-semibold text-dirt mb-2">Shipwreck Cove earnings</p>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li>Rare items: 300-600 Gold</li>
            <li>Epic items: 1,000-2,500 Gold</li>
            <li>Legendary items: 3,000-5,000+ Gold</li>
          </ul>
          <p className="text-dirt/80 text-sm mt-3">A focused run can yield 8,000-15,000+ Gold per hour, depending on spawn luck and cleaning speed.</p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-3xl text-dirt mb-4">Earnings Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Loop</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Unlock Cost</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Gear Needed</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Gold / Hour</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              <tr>
                <td className="p-4 font-medium text-dirt">Starter Beach</td>
                <td className="p-4 text-dirt/80">Free</td>
                <td className="p-4 text-dirt/80">Free starter tools</td>
                <td className="p-4 font-headline font-bold text-gold">2,000-4,000</td>
                <td className="p-4 text-dirt/80">New players, early upgrades</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-dirt">Shipwreck Cove</td>
                <td className="p-4 text-dirt/80">1,000,000 Gold</td>
                <td className="p-4 text-dirt/80">Titanium+ shovel, Gold+ detector</td>
                <td className="p-4 font-headline font-bold text-gold">8,000-15,000+</td>
                <td className="p-4 text-dirt/80">Mid-to-late game farming</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-3xl text-dirt mb-4">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white/50 rounded-xl p-5 border border-dirt/10">
              <h4 className="font-headline font-bold text-lg text-dirt mb-2">{f.q}</h4>
              <p className="text-sm text-dirt/80">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h3 className="font-headline font-bold text-2xl text-dirt mb-4">Related Guides</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedKeys.map((k) => (
            <a key={k} href={links[k].href} className="bg-white/50 rounded-xl p-3 border border-dirt/10 hover:border-water/50 hover:-translate-y-0.5 transition-all text-center text-sm font-semibold text-dirt">
              {links[k].label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
