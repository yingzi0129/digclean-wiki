import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Search, Ticket, Shovel } from "lucide-react";
import { ItemDatabase, YouTube, HowToPlay, FAQ } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd, websiteSchema, videoGameSchema, organizationSchema } from "@/components/JsonLd";
import { HeroTools } from "@/components/hero-tools";
import { ProblemCards } from "@/components/problem-cards";
import { ResourceCards } from "@/components/resource-cards";
import Link from "next/link";

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

      <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-1.5 rounded-full border border-dirt/10 shadow-sm text-sm font-semibold text-dirt/80">
            <span className="w-2 h-2 rounded-full bg-status-keep" />
            Updated August 2026
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-dirt leading-tight tracking-tight">
            Dig & Clean Wiki
          </h1>
          <p className="text-2xl md:text-3xl font-headline font-bold text-water">
            Items, Codes & Best Shovels
          </p>
          <p className="text-lg md:text-xl text-dirt/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            No more scrolling through long articles. Find item values, active codes, and your next shovel upgrade in one place.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-dirt/70 bg-white/60 px-3 py-1.5 rounded-full border border-dirt/10">
              <Search className="w-4 h-4 text-water" /> Search items
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-dirt/70 bg-white/60 px-3 py-1.5 rounded-full border border-dirt/10">
              <Ticket className="w-4 h-4 text-water" /> Check codes
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-dirt/70 bg-white/60 px-3 py-1.5 rounded-full border border-dirt/10">
              <Shovel className="w-4 h-4 text-water" /> Find shovels
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/items/"
              className="inline-flex items-center gap-2 bg-water text-white font-semibold text-base px-7 py-3 rounded-xl hover:bg-water/90 transition-colors shadow-sm"
            >
              Open Item Database <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/codes/"
              className="inline-flex items-center gap-2 bg-white border border-dirt/20 text-dirt font-semibold text-base px-7 py-3 rounded-xl hover:border-water/50 transition-colors"
            >
              Check Codes
            </Link>
          </div>
          <p className="text-xs text-dirt/50 pt-2">This is an unofficial fan site. Not affiliated with Roblox or Dig & Clean.</p>
        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none mx-auto relative">
          <div className="absolute inset-0 bg-water/10 blur-3xl rounded-full" />
          <Image
            src="/hero.jpg"
            alt="Dig & Clean game scene: a spray bottle washing a blue diamond embedded in a rock"
            width={600}
            height={450}
            className="relative w-full h-auto rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300"
            priority
          />
        </div>
      </section>

      <HeroTools />

      <ProblemCards />

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
        <p className="text-center text-xs text-dirt/50 mt-4">Stats checked regularly from public Roblox game data.</p>
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
