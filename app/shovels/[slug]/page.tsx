import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Shovel, MapPin, Gauge, Coins, Dumbbell, Navigation } from "lucide-react";
import shovelsData from "@/data/shovels.json";
import itemsData from "@/data/items.json";
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
  { href: "/shovels/", label: "All Shovels" },
  { href: "/detectors/", label: "Detectors" },
  { href: "/items/", label: "Items" },
  { href: "/farming/", label: "Farming" },
];

export function generateStaticParams() {
  return shovelsData.shovels.map((s) => ({ slug: slugify(s.name) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const shovel = shovelsData.shovels.find((s) => slugify(s.name) === params.slug);
  if (!shovel) return { title: "Shovel Not Found" };

  const title = `${shovel.name} — Dig & Clean Stats, Price & Best Use`;
  const description = `${shovel.name} has ${shovel.power} power, ${shovel.walkSpeed}% walk speed, and costs ${shovel.price.toLocaleString("en-US")} Gold in Dig & Clean. Best for: ${shovel.bestFor}. Location: ${shovel.location}.`;

  return {
    title,
    description,
    alternates: { canonical: `${site}/shovels/${params.slug}/` },
    openGraph: {
      title,
      description,
      url: `${site}/shovels/${params.slug}/`,
      type: "article",
      images: ["/og-image.png"],
    },
  };
}

export default function ShovelDetailPage({ params }: Props) {
  const shovel = shovelsData.shovels.find((s) => slugify(s.name) === params.slug);
  if (!shovel) notFound();

  const slug = params.slug;
  const relatedItems = itemsData.items.filter((i) => shovel.items?.includes(i.name));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: shovel.name,
    description: `${shovel.name} is a Dig & Clean shovel with ${shovel.power} power and ${shovel.walkSpeed}% walk speed.`,
    category: "Dig & Clean Shovel",
    offers: {
      "@type": "Offer",
      price: shovel.price.toString(),
      priceCurrency: "Gold",
      availability: "https://schema.org/InStock",
      url: `${site}/shovels/${slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
      { "@type": "ListItem", position: 2, name: "Shovels", item: `${site}/shovels/` },
      { "@type": "ListItem", position: 3, name: shovel.name, item: `${site}/shovels/${slug}/` },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AdBanner />

      <Link
        href="/shovels/"
        className="inline-flex items-center gap-2 text-water font-medium hover:underline w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Shovels
      </Link>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <Shovel className="w-8 h-8 text-water" />
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-dirt/10 text-dirt/70 border-dirt/20">
              {shovel.confidence}
            </span>
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
            {shovel.name}
          </h1>
          <p className="text-lg text-dirt/80 mt-3">
            {shovel.bestFor}. This shovel is found at {shovel.location} and costs{" "}
            {shovel.price.toLocaleString("en-US")} Gold.
          </p>
          <LastUpdated date={shovelsData.lastUpdated} note={shovelsData.confidence} />
        </div>

        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 min-w-[280px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-water" /> Power
              </span>
              <span className="font-headline font-bold text-dirt text-lg">{shovel.power}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-water" /> Walk Speed
              </span>
              <span className="font-headline font-bold text-dirt text-lg">{shovel.walkSpeed}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-water" /> Price
              </span>
              <span className="font-headline font-bold text-gold text-lg">
                {shovel.price.toLocaleString("en-US")} Gold
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-water" /> Location
              </span>
              <span className="font-medium text-dirt">{shovel.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4 flex items-center gap-2">
            <Gauge className="w-6 h-6 text-water" /> When to Use the {shovel.name}
          </h2>
          <p className="text-dirt/80 leading-relaxed">
            The {shovel.name} is best described as: <strong>{shovel.bestFor}</strong>. With {shovel.power}{" "}
            power and {shovel.walkSpeed}% walk speed, it sits at the {shovel.location} stage of the Dig &
            Clean upgrade path. Use it when the previous shovel starts slowing down your dig loops, or when
            you move to the next island and need enough power to finish harder dig meters.
          </p>
        </div>

        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Is the {shovel.name} Worth It?</h2>
          <p className="text-dirt/80 leading-relaxed">
            {shovel.price === 0
              ? "This is free starter gear, so it is the obvious first choice. You will outgrow it quickly, but it is enough to learn the dig meter and farm early beach items."
              : `At ${shovel.price.toLocaleString("en-US")} Gold, the ${shovel.name} is worth buying only if it removes a clear bottleneck. Compare it with the next tier: if the price jump is small and the power gain is large, skip ahead. If the gap is large, this tier is a reasonable stepping stone.`}
          </p>
        </div>
      </div>

      {relatedItems.length > 0 && (
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">
            Items You Can Dig With the {shovel.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedItems.map((item) => (
              <Link
                key={item.id}
                href={`/items/${item.id}/`}
                className="group bg-white rounded-xl p-4 border border-dirt/10 hover:border-water/50 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline font-bold text-dirt group-hover:text-water transition-colors">
                    {item.name}
                  </span>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold border uppercase ${
                      item.rarity === "Junk"
                        ? "bg-rarity-junk/10 text-rarity-junk border-rarity-junk/30"
                        : item.rarity === "Common"
                        ? "bg-rarity-common/10 text-rarity-common border-rarity-common/30"
                        : item.rarity === "Uncommon"
                        ? "bg-rarity-uncommon/10 text-rarity-uncommon border-rarity-uncommon/30"
                        : item.rarity === "Rare"
                        ? "bg-rarity-rare/10 text-rarity-rare border-rarity-rare/30"
                        : item.rarity === "Epic"
                        ? "bg-rarity-epic/10 text-rarity-epic border-rarity-epic/30"
                        : "bg-rarity-legendary/10 text-rarity-legendary border-rarity-legendary/30"
                    }`}
                  >
                    {item.rarity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gold font-bold">{item.value.toLocaleString("en-US")} Gold</span>
                  <span className="text-xs text-dirt/60">{item.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Shovel Upgrade Context</h2>
        <p className="text-dirt/80 leading-relaxed mb-4">
          In Dig & Clean, shovel power decides how fast you clear a dig spot. Walk speed helps you move
          between spots faster. The recommended upgrade order is: start with the free Plastic Shovel, save
          for Wood / Metal / Amethyst on the starter island, then move into Titanium / Cobalt / Carbon for
          Shipwreck Cove, and finally Ruby or Diamond for endgame legendary farming. Always compare the
          power gain to the price before buying.
        </p>
        <p className="text-dirt/70 text-sm">
          Data source: official Roblox description (free starter gear confirmed) and community reports
          from player guides. Treat non-official prices and stats as estimates and verify in-game before
          purchasing.
        </p>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <Link
          href="/shovels/"
          className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors"
        >
          Compare all Dig & Clean shovels
        </Link>
      </div>
    </div>
  );
}
