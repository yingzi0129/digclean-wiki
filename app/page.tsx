import { Metadata } from "next";
import Image from "next/image";
import { ItemDatabase, YouTube, ResourceCards, HowToPlay, FAQ } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd, websiteSchema, videoGameSchema, organizationSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dig & Clean Wiki — Item Database, Codes & Best Gear",
  description: "Find every Dig & Clean item, value, rarity, and keep-or-sell tip in our interactive database. Plus active codes and the best shovel for your stage.",
  alternates: { canonical: "https://digclean-wiki.wiki/" },
  openGraph: {
    title: "Dig & Clean Wiki — Item Database, Codes & Best Gear",
    description: "Search Dig & Clean items by rarity and value. Check active codes and find the best shovel for your stage.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 pt-12 pb-8 flex flex-col gap-16 md:gap-24">
      <JsonLd data={websiteSchema} />
      <JsonLd data={videoGameSchema} />
      <JsonLd data={organizationSchema} />
      <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-dirt leading-tight tracking-tight">
            Dig & Clean Wiki — Your Toolbox for Items, Codes & Shovels
          </h1>
          <p className="text-lg md:text-xl text-dirt/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            No more scrolling through long articles. Search every Dig & Clean item, check active codes, and find the best shovel for your stage in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#database" className="inline-flex justify-center items-center gap-2 bg-water text-white font-headline font-bold text-lg px-8 py-4 rounded-xl hover:bg-water/90 hover:-translate-y-0.5 transition-all active:scale-95 shadow-lg shadow-water/20">
              Open Item Database
            </a>
            <a href="/codes/" className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-water text-water font-headline font-bold text-lg px-8 py-4 rounded-xl hover:bg-water/10 hover:-translate-y-0.5 transition-all active:scale-95">
              Check Codes
            </a>
          </div>
          <p className="text-xs text-dirt/60">This is an unofficial fan site. Not affiliated with Roblox or Dig & Clean.</p>
        </div>
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full group-hover:bg-water/20 transition-colors duration-500"></div>
          <Image
            src="/hero.jpg"
            alt="Dig & Clean game scene showing a spray bottle washing a blue gem on sandy ground"
            width={800}
            height={600}
            className="relative w-full h-auto rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300"
            priority
          />
        </div>
      </section>

      <section className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 divide-dirt/10">
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Active Players</p>
            <p className="font-headline font-bold text-3xl text-gold">10K-22K</p>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Total Visits</p>
            <p className="font-headline font-bold text-3xl text-dirt">2.5M+</p>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Rating</p>
            <p className="font-headline font-bold text-3xl text-dirt">93.6%</p>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Favorites</p>
            <p className="font-headline font-bold text-3xl text-dirt">1.2M</p>
          </div>
        </div>
        <p className="text-center text-xs text-dirt/50 mt-4">Stats updated weekly from public Roblox game data.</p>
      </section>

      <section className="space-y-6 flex flex-col items-center">
        <h2 className="font-headline font-bold text-3xl text-dirt">Watch the Dig & Clean Loop</h2>
        <YouTube videoId="Y1d8Fv7GzSw" title="Dig & Clean Gameplay & Secrets" />
      </section>

      <section className="space-y-6" id="database">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline font-bold text-3xl text-dirt">Interactive Item Database</h2>
            <p className="text-dirt/70 mt-1">Search, filter, and sort every item. See value, rarity, and whether to keep it for your museum or sell for cash.</p>
          </div>
          <a href="/items/" className="hidden md:inline-flex items-center gap-1 text-water font-medium hover:underline">
            View All Items
          </a>
        </div>
        <div className="bg-foam rounded-xl card-shadow border border-dirt/20 overflow-hidden flex flex-col">
          <ItemDatabase items={itemsData.items} featured={8} />
          <div className="p-4 text-center border-t border-dirt/10 bg-white/50">
            <a href="/items/" className="text-water font-medium hover:underline inline-flex items-center gap-1">
              View All Items <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <ResourceCards />
      <HowToPlay />
      <FAQ />
    </div>
  );
}
