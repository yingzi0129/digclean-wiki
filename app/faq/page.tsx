import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { AdBanner } from "@/components/ad-banner";
import { RelatedLinks } from "@/components";

const site = "https://digclean-wiki.wiki";

const related = [
  { href: "/", label: "Home" },
  { href: "/beginner/", label: "Beginner Guide" },
  { href: "/items/", label: "Items" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/codes/", label: "Codes" },
];

const faqs = [
  {
    q: "How do I play Dig & Clean?",
    a: "Equip a detector to find buried items, equip a shovel to dig them up, then use a spray bottle to clean off dirt and rust. Once an item is clean, you can sell it for gold or donate it to your museum.",
  },
  {
    q: "What is the best shovel in Dig & Clean?",
    a: "The best shovel depends on your stage. On the starter island, the Amethyst Shovel is the community-recommended target. For Shipwreck Cove and endgame legendary farming, Ruby, Carbon, and Diamond Shovels are the strongest options.",
  },
  {
    q: "What is the best detector in Dig & Clean?",
    a: "The Platinum Detector has the highest community-reported luck and range for the starter island. Pair it with a strong shovel so you can dig the rare and legendary pings it finds.",
  },
  {
    q: "Should I sell or keep my items?",
    a: "Keep Rare, Epic, and Legendary items for your museum unless you need immediate gold for a big upgrade. Sell Junk and most Common items. Keep only one copy of each item for the museum unless you are collecting duplicates.",
  },
  {
    q: "How do I redeem Dig & Clean codes?",
    a: "Open the game, find the codes button or menu, enter the code exactly as shown, and confirm. Codes are case-sensitive and expire quickly, so redeem them as soon as possible.",
  },
  {
    q: "Where are rare items in Dig & Clean?",
    a: "Rare items can spawn anywhere, but beach edges and busy servers often produce more pings. Community reports say Shipwreck Cove has a permanent 2X luck boost, making Rare+ items more common there.",
  },
  {
    q: "How much does Shipwreck Cove cost?",
    a: "Community reports say Shipwreck Cove costs around one million coins to unlock as a one-time travel fee. Verify the current price in-game before saving up.",
  },
  {
    q: "Do I need Robux to progress?",
    a: "No. 2X Luck and 2X Gold game passes speed up progress, but all core gameplay can be done with free tools and patience.",
  },
  {
    q: "How do I farm money fast?",
    a: "Farm a loop of junk and common items with a decent shovel, sell everything, and save for the next shovel tier. Repeat until you can comfortably dig rare spots. Check the money farming guide for route tips.",
  },
  {
    q: "What does museum value do?",
    a: "Museum value generates passive visitor income over time. Rare, Epic, and Legendary items usually earn more from visitors than their one-time sell price, so keep your first copy.",
  },
  {
    q: "Where does this site get its data?",
    a: "Free starter gear and the basic game loop are confirmed by the official Roblox page. Most prices, stats, and drop rates come from community testing and player guides. Always verify in-game before making a big purchase.",
  },
  {
    q: "Is this an official Dig & Clean wiki?",
    a: "No. This is an unofficial fan site. We are not affiliated with Roblox Corporation or the Dig & Clean developers.",
  },
];

const howToSchema = {
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${site}/` }, { "@type": "ListItem", position: 2, name: "FAQ", item: `${site}/faq/` }],
};

export const metadata: Metadata = {
  title: "Dig & Clean FAQ: Codes, Best Shovels, Items & How to Play",
  description:
    "Answers to the most common Dig & Clean questions: best shovel, best detector, keep or sell, how to redeem codes, rare items, and how to farm money fast.",
  alternates: { canonical: `${site}/faq/` },
  openGraph: {
    title: "Dig & Clean FAQ: Codes, Best Shovels, Items & How to Play",
    description:
      "Answers to the most common Dig & Clean questions: best shovel, best detector, keep or sell, how to redeem codes, rare items, and how to farm money fast.",
    url: `${site}/faq/`,
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AdBanner />

      <Breadcrumb items={[{ label: "FAQ" }]} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean FAQ
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Quick answers to the most common Dig & Clean questions. If you want a deeper walkthrough, start
          with the{" "}
          <Link href="/beginner/" className="text-water hover:underline">
            Beginner Guide
          </Link>{" "}
          or browse the{" "}
          <Link href="/items/" className="text-water hover:underline">
            Item Database
          </Link>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {faqs.map((f) => (
          <div key={f.q} className="bg-foam rounded-xl p-6 border border-dirt/20 card-shadow">
            <h2 className="font-headline font-bold text-lg text-dirt mb-2">{f.q}</h2>
            <p className="text-sm text-dirt/80 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Still have a question?</h2>
        <p className="text-dirt/80 leading-relaxed mb-4">
          The fastest way to get an answer is to check the related guides below. We update item values, codes,
          and gear recommendations after every major game update.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/beginner/" className="inline-flex items-center gap-1 text-water hover:underline font-medium">
            Beginner Guide →
          </Link>
          <Link href="/shovels/" className="inline-flex items-center gap-1 text-water hover:underline font-medium">
            Best Shovels →
          </Link>
          <Link href="/detectors/" className="inline-flex items-center gap-1 text-water hover:underline font-medium">
            Best Detectors →
          </Link>
          <Link href="/items/" className="inline-flex items-center gap-1 text-water hover:underline font-medium">
            Item Database →
          </Link>
          <Link href="/codes/" className="inline-flex items-center gap-1 text-water hover:underline font-medium">
            Active Codes →
          </Link>
        </div>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
