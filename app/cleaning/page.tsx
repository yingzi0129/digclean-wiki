import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import { AdBanner } from "@/components/ad-banner";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/sprays/", label: "Sprays" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/items/", label: "Items" },
  { href: "/museum/", label: "Museum" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Cleaning", item: "https://digclean-wiki.wiki/cleaning/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to clean items fast in Dig & Clean",
  description: "Learn how the spray-clean reveal mechanic works in Dig & Clean, plus tips to finish every find faster and avoid missed dirt patches.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pick up the dirty find",
      text: "After digging, collect the object and bring it to a workstation or your cleaning area.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Spray from multiple angles",
      text: "Rotate the camera and spray from the top, sides, and back. Dirt can hide on surfaces you do not see from the front.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Watch for the clean shimmer",
      text: "The item starts to sparkle and change color when it is nearly clean. Stop spraying once the identity and rarity appear.",
    },
  ],
};

export const metadata: Metadata = {
  title: "How to Clean Items in Dig & Clean: Spray & Reveal Guide",
  description: "Learn the Dig & Clean spray-clean reveal mechanic. Clean finds faster, avoid missed dirt, and decide whether to sell or donate each item.",
  alternates: { canonical: "https://digclean-wiki.wiki/cleaning/" },
};

export default function CleaningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <AdBanner />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          How to Clean Items in Dig & Clean
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Cleaning mechanics are based on the official Roblox description and verified gameplay." />
        <p className="text-lg text-dirt/80 mt-4">
          Cleaning is where a buried object turns into Gold or a museum piece. In Dig & Clean you use a spray bottle to wash dirt off every find until its true identity, rarity, and value appear. A slow or incomplete clean costs time and can even hide the item&apos;s real worth. This guide explains the reveal mechanic and shows how to clean faster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How the Reveal Mechanic Works</h2>
          <p className="text-dirt/80 leading-relaxed">
            Every dirty object is covered in brown patches. As you spray, the patches shrink and the object&apos;s real color starts to show. Once enough dirt is removed, the item name, rarity, and sell value pop up. Until then, you cannot know whether you are holding common junk or a legendary artifact.
          </p>
          <p className="text-dirt/80 leading-relaxed mt-4">
            The spray bottle has two hidden factors: power and range. Higher power removes dirt faster. Higher range lets one spray hit a wider area. Both matter, but power is usually the bottleneck on large legendary finds.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Common Cleaning Mistakes</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li>Only spraying from the front and missing dirt on the back.</li>
            <li>Stopping too early before the item is fully revealed.</li>
            <li>Upgrading the spray bottle before the shovel or detector.</li>
            <li>Trying to clean multiple objects at once instead of finishing one.</li>
            <li>Ignoring small crevices where dirt patches hide.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Step-by-Step Fast Cleaning Route</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Dig one object completely</strong> before moving to the next. Half-dug finds reset and waste time.</li>
          <li><strong>Carry the find to a flat, open area</strong> where you can rotate the camera freely.</li>
          <li><strong>Spray the top first</strong>, then move down the sides in a spiral pattern.</li>
          <li><strong>Rotate the camera 180 degrees</strong> and repeat on the back side.</li>
          <li><strong>Watch for the shimmer</strong>. Once the rarity color shows, give it a final pass and stop.</li>
          <li><strong>Decide immediately</strong>: sell for Gold or keep for the museum. See the <a href="/items/" className="text-water hover:underline">item database</a> for keep-or-sell advice.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Spray Bottle Upgrade Tips</h2>
        <p className="text-dirt/80 leading-relaxed">
          The Basic Spray Bottle is free and fine for the first island. Upgrade only when cleaning takes longer than digging or traveling. The rule of thumb is: shovel first, detector second, spray bottle third. For exact bottle stats and prices, check the <a href="/sprays/" className="text-water hover:underline">Spray Bottle guide</a>.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
