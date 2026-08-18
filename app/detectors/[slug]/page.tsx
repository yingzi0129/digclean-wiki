import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Radar, Navigation, Coins, Gauge, Target } from "lucide-react";
import shovelsData from "@/data/shovels.json";
import { slugify } from "@/lib/utils";
import { JsonLd } from "@/components/JsonLd";
import { AdBanner } from "@/components/ad-banner";
import { LastUpdated, RelatedLinks } from "@/components";

interface Props {
  params: { slug: string };
}

const site = "https://digclean-wiki.wiki";

const related = [
  { href: "/", label: "Home" },
  { href: "/detectors/", label: "All Detectors" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/items/", label: "Items" },
  { href: "/farming/", label: "Farming" },
];

export function generateStaticParams() {
  return shovelsData.detectors.map((d) => ({ slug: slugify(d.name) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const detector = shovelsData.detectors.find((d) => slugify(d.name) === params.slug);
  if (!detector) return { title: "Detector Not Found" };

  const title = `${detector.name} — Dig & Clean Luck & Range Stats`;
  const description = `${detector.name} has ${detector.luck} luck, ${detector.range} range, and costs ${detector.price.toLocaleString("en-US")} Gold in Dig & Clean. Best for: ${detector.bestFor}.`;

  return {
    title,
    description,
    alternates: { canonical: `${site}/detectors/${params.slug}/` },
    openGraph: {
      title,
      description,
      url: `${site}/detectors/${params.slug}/`,
      type: "article",
      images: ["/og-image.png"],
    },
  };
}

export default function DetectorDetailPage({ params }: Props) {
  const detector = shovelsData.detectors.find((d) => slugify(d.name) === params.slug);
  if (!detector) notFound();

  const slug = params.slug;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: detector.name,
    description: `${detector.name} is a Dig & Clean detector with ${detector.luck} luck and ${detector.range} range.`,
    category: "Dig & Clean Detector",
    offers: {
      "@type": "Offer",
      price: detector.price.toString(),
      priceCurrency: "Gold",
      availability: "https://schema.org/InStock",
      url: `${site}/detectors/${slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
      { "@type": "ListItem", position: 2, name: "Detectors", item: `${site}/detectors/` },
      { "@type": "ListItem", position: 3, name: detector.name, item: `${site}/detectors/${slug}/` },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AdBanner />

      <Link
        href="/detectors/"
        className="inline-flex items-center gap-2 text-water font-medium hover:underline w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Detectors
      </Link>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <Radar className="w-8 h-8 text-water" />
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-dirt/10 text-dirt/70 border-dirt/20">
              {detector.confidence}
            </span>
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
            {detector.name}
          </h1>
          <p className="text-lg text-dirt/80 mt-3">{detector.bestFor}.</p>
          <LastUpdated date={shovelsData.lastUpdated} note={shovelsData.confidence} />
        </div>

        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 min-w-[280px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-water" /> Luck
              </span>
              <span className="font-headline font-bold text-dirt text-lg">{detector.luck}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-water" /> Range
              </span>
              <span className="font-headline font-bold text-dirt text-lg">{detector.range}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-water" /> Price
              </span>
              <span className="font-headline font-bold text-gold text-lg">
                {detector.price.toLocaleString("en-US")} Gold
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-water" /> What {detector.luck} Luck Means
          </h2>
          <p className="text-dirt/80 leading-relaxed">
            Detector luck multiplies the rarity chance of the dig sites you find. {detector.luck} luck means
            the game weights rare, epic, and legendary spawns {detector.luck} compared with the Rusty
            Detector baseline. Higher luck is the fastest way to move from junk farming to rare item
            hunting, but it only helps if your shovel is strong enough to dig the pings it finds.
          </p>
        </div>

        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Is the {detector.name} Worth Buying?</h2>
          <p className="text-dirt/80 leading-relaxed">
            {detector.price === 0
              ? "This is the free starter detector. It is the only option when you begin, so use it to learn how pings work and when to dig."
              : `At ${detector.price.toLocaleString(
                  "en-US"
                )} Gold, buy the ${detector.name} only when you can already dig the rare spots it will reveal. If your shovel power is low, invest in the shovel first, then return for this detector.`}
          </p>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Detector Upgrade Order Reminder</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-2">
          <li>
            <strong>Rusty Detector</strong> — free starter; use it to learn the ping system.
          </li>
          <li>
            <strong>Copper / Silver Detector</strong> — early upgrades when you want more rare pings.
          </li>
          <li>
            <strong>Gold / Platinum Detector</strong> — late starter-island target for legendary hunts.
          </li>
        </ol>
        <p className="text-dirt/70 text-sm mt-4">
          Data source: official Roblox description (Rusty Detector confirmed free); other stats are
          community estimates. Verify in-game before buying.
        </p>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <Link
          href="/detectors/"
          className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors"
        >
          Compare all Dig & Clean detectors
        </Link>
      </div>
    </div>
  );
}
