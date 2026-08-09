import { Metadata } from "next";
import { LastUpdated, RelatedLinks } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/beginner/", label: "Beginner" },
  { href: "/controls/", label: "Controls" },
  { href: "/farming/", label: "Farming" },
  { href: "/shovels/", label: "Shovels" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Multiplayer", item: "https://digclean-wiki.wiki/multiplayer/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to play Dig & Clean multiplayer with friends",
  description: "Learn how to join friends, split farming roles, and earn more Gold together in Dig & Clean multiplayer.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Invite friends to your Roblox server",
      text: "Use Roblox's join or party system to land in the same Dig & Clean server.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Split roles",
      text: "One player digs, another cleans, and a third sells or organizes museum donations.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Share rare pings",
      text: "Call out legendary detector pings so everyone can gather around high-value spots.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Multiplayer Co-op Tips: Play With Friends",
  description: "Learn how to play Dig & Clean with friends. Split roles, share rare pings, and farm Gold faster together.",
  alternates: { canonical: "https://digclean-wiki.wiki/multiplayer/" },
};

export default function MultiplayerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Multiplayer Co-op Tips
        </h1>
        <LastUpdated date={itemsData.lastUpdated} note="Multiplayer info based on standard Roblox co-op mechanics and community reports." />
        <p className="text-lg text-dirt/80 mt-4">
          Dig & Clean is relaxing solo, but it becomes much more efficient with friends. In multiplayer you can split the work, cover more ground, and share rare item pings. This guide covers how to join the same server, the best roles for a co-op squad, and how to avoid the common mistakes that slow groups down.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">How to Join Friends</h2>
          <p className="text-dirt/80 leading-relaxed">
            The easiest way to play together is through Roblox&apos;s join system. One player loads Dig & Clean, then sends the server link or uses the Roblox friend/party invite. Make sure everyone is on the same region to avoid connection issues.
          </p>
          <p className="text-dirt/80 leading-relaxed mt-4">
            If a server is full, have everyone leave and rejoin from the same friend&apos;s profile. Private VIP servers are not required but can remove random-player competition for rare dig sites.
          </p>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Best Co-op Roles</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Digger:</strong> High-power shovel, focuses on uncovering finds.</li>
            <li><strong>Cleaner:</strong> Strong spray bottle, cleans finds as soon as they are dug.</li>
            <li><strong>Runner:</strong> Fast movement, sells items and manages museum donations.</li>
            <li><strong>Scout:</strong> High-luck detector, pings rare+ targets for the group.</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Co-op Farming Strategy</h2>
        <ol className="list-decimal list-inside text-dirt/80 space-y-3">
          <li><strong>Pick one island.</strong> Everyone works the same loop so pings are shared.</li>
          <li><strong>Dig and clean in parallel.</strong> One player digs while another starts cleaning nearby.</li>
          <li><strong>Call out legendary pings.</strong> Group up on Epic and Legendary spots so no one wastes time on junk.</li>
          <li><strong>Split sell runs.</strong> One player handles the shop while the rest keep farming.</li>
          <li><strong>Share museum donations.</strong> Decide who needs which item for their collection before selling duplicates.</li>
        </ol>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Common Mistakes</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Everyone digs the same spot instead of splitting tasks.</li>
          <li>No one calls out rare pings, so legendary spots are missed.</li>
          <li>Players spread across islands and cannot share items.</li>
          <li>Backpacks fill up because no one is assigned to sell runs.</li>
        </ul>
        <p className="text-dirt/80 leading-relaxed mt-4">
          For the best solo and group controls, see the <a href="/controls/" className="text-water hover:underline">Controls guide</a>. For farming routes, check the <a href="/farming/" className="text-water hover:underline">Farming guide</a>.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
