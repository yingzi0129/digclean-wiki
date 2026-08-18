import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";
import { RarityBadge, RecBadge, ConfidenceBadge } from "@/components";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowLeft, Shovel, MapPin, Coins, Landmark } from "lucide-react";
import { AdBanner } from "@/components/ad-banner";

interface ItemPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return itemsData.items.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: ItemPageProps): Metadata {
  const item = itemsData.items.find((i) => i.id === params.id);
  if (!item) return { title: "Item Not Found" };

  const title = `${item.name} — ${item.rarity} Dig & Clean Item Value & Keep/Sell Guide`;
  const description = `${item.name} is a ${item.rarity} Dig & Clean item worth ${item.value.toLocaleString("en-US")} Gold. Found in ${item.location}. Recommendation: ${item.recommendation}. See sell price, museum value, and best shovel.`;

  return {
    title,
    description,
    alternates: { canonical: `https://digclean-wiki.wiki/items/${item.id}/` },
    openGraph: {
      title,
      description,
      url: `https://digclean-wiki.wiki/items/${item.id}/`,
      images: ["/og-image.png"],
    },
  };
}

export default function ItemDetailPage({ params }: ItemPageProps) {
  const item = itemsData.items.find((i) => i.id === params.id);
  if (!item) notFound();

  const relatedItems = itemsData.items.filter(
    (i) => i.location === item.location && i.id !== item.id
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.description,
    category: `${item.rarity} Dig & Clean Item`,
    offers: {
      "@type": "Offer",
      price: item.sellPrice.toString(),
      priceCurrency: "Gold",
      availability: "https://schema.org/InStock",
      url: `https://digclean-wiki.wiki/items/${item.id}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
      { "@type": "ListItem", position: 2, name: "Items", item: "https://digclean-wiki.wiki/items/" },
      { "@type": "ListItem", position: 3, name: item.name, item: `https://digclean-wiki.wiki/items/${item.id}/` },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb items={[{ label: "Items", href: "/items/" }, { label: item.name }]} />

      <Link
        href="/items/"
        className="inline-flex items-center gap-2 text-water font-medium hover:underline w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Item Database
      </Link>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <RarityBadge rarity={item.rarity} />
            <RecBadge rec={item.recommendation} />
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
            {item.name}
          </h1>
          <p className="text-dirt/70 mt-2 text-lg">{item.description}</p>
          <p className="text-xs text-dirt/50 mt-3">
            Last updated: {itemsData.lastUpdated} · <ConfidenceBadge label={item.confidence} />
          </p>
        </div>

        <div className="bg-foam rounded-xl p-6 card-shadow border border-dirt/20 min-w-[260px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5"><Coins className="w-4 h-4 text-water" /> Sell Price</span>
              <span className="font-headline font-bold text-gold">{item.sellPrice.toLocaleString("en-US")} Gold</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5"><Landmark className="w-4 h-4 text-water" /> Museum Value</span>
              <span className="font-medium text-dirt">{item.museumValue}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirt/70 flex items-center gap-1.5"><MapPin className="w-4 h-4 text-water" /> Location</span>
              <span className="font-medium text-dirt">{item.location}</span>
            </div>
          </div>
        </div>
      </div>

      <AdBanner />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Keep or Sell?</h2>
          <p className="text-dirt/80 leading-relaxed">{item.keepReason}</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/60 border border-dirt/10 text-sm text-dirt/80">
            Recommendation: <RecBadge rec={item.recommendation} />
          </div>
        </div>

        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4 flex items-center gap-2">
            <Shovel className="w-6 h-6 text-water" /> Best Shovel for This Item
          </h2>
          <p className="text-dirt/80 leading-relaxed">
            {item.location === "Shipwreck Cove"
              ? "Shipwreck Cove items spawn on the later island, so you need a shovel with enough power to clear harder dig spots. Aim for at least the Amethyst Shovel before focusing on these rare finds, then upgrade toward Ruby or Diamond for legendary spawns."
              : "Starter Beach items can be dug with the free Plastic Shovel, but farming gets faster once you upgrade to Wood or Metal Shovel. Prioritize power over speed until common spots clear in one cycle."}
          </p>
          <Link href="/shovels/" className="inline-flex items-center gap-1 text-water font-medium hover:underline mt-4">
            See all Dig & Clean shovels →
          </Link>
        </div>
      </div>

      {relatedItems.length > 0 && (
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">More Items from {item.location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedItems.map((i) => (
              <Link
                key={i.id}
                href={`/items/${i.id}/`}
                className="group bg-white rounded-xl p-4 border border-dirt/10 hover:border-water/50 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline font-bold text-dirt">{i.name}</span>
                  <RarityBadge rarity={i.rarity} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gold font-bold">{i.value.toLocaleString("en-US")} Gold</span>
                  <RecBadge rec={i.recommendation} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
