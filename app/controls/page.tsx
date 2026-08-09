import { Metadata } from "next";
import { RelatedLinks } from "@/components";
import { JsonLd } from "@/components/JsonLd";

const related = [
  { href: "/", label: "Home" },
  { href: "/beginner/", label: "Beginner Guide" },
  { href: "/items/", label: "Items" },
  { href: "/shovels/", label: "Shovels" },
  { href: "/farming/", label: "Farming" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://digclean-wiki.wiki/" },
    { "@type": "ListItem", position: 2, name: "Controls", item: "https://digclean-wiki.wiki/controls/" },
  ],
};

export const metadata: Metadata = {
  title: "Dig & Clean Controls: PC, Mobile, Console Guide",
  description: "Master Dig & Clean controls on PC, mobile, and console. Learn how to detect, dig, clean, sprint, emote, and manage your inventory.",
  alternates: { canonical: "https://digclean-wiki.wiki/controls/" },
};

export default function ControlsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Controls Guide
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Dig & Clean is playable on PC, Mobile, Tablet, and Console, according to the official Roblox page. This page covers the controls you will use the most: detecting, digging, cleaning, sprinting, and managing your inventory. If a shortcut does not work for you, check the in-game Settings menu because controls can change with updates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">PC Controls</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>WASD</strong> — Move</li>
            <li><strong>Left Click / Tap</strong> — Dig or interact</li>
            <li><strong>Space</strong> — Jump</li>
            <li><strong>Shift</strong> — Sprint</li>
            <li><strong>E</strong> — Equip detector / open nearby prompt</li>
            <li><strong>Number keys</strong> — Quick-select tools</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Mobile / Tablet Controls</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Virtual joystick</strong> — Move</li>
            <li><strong>Action buttons</strong> — Dig, clean, interact</li>
            <li><strong>Tool icon</strong> — Equip detector or shovel</li>
            <li><strong>Swipe</strong> — Adjust camera</li>
            <li><strong>Pinch</strong> — Zoom in/out</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Console Controls</h2>
          <ul className="list-disc list-inside text-dirt/80 space-y-2">
            <li><strong>Left stick</strong> — Move</li>
            <li><strong>Right stick</strong> — Camera</li>
            <li><strong>A / X</strong> — Jump / interact</li>
            <li><strong>RT / R2</strong> — Dig or use equipped tool</li>
            <li><strong>D-pad</strong> — Tool select</li>
            <li><strong>Menu button</strong> — Inventory / settings</li>
          </ul>
        </div>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">Advanced Tips</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-2">
          <li>Keep your detector out while moving. You will catch signals without constant switching.</li>
          <li>Sprint between close spots. The walk-speed stat on shovels stacks with sprint.</li>
          <li>Clean in batches if you have a fast spray bottle; single-clean if you are slow and need museum space.</li>
          <li>Check your inventory weight. Full bags force you back to the Workstation more often.</li>
          <li>Use emotes to hide your busy hands — a fun way to signal to other players.</li>
        </ul>
      </div>

      <RelatedLinks links={related} />

      <div className="text-center">
        <a href="/beginner/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Read the Beginner Guide
        </a>
      </div>
    </div>
  );
}
