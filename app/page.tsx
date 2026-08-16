import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Search, Ticket, Shovel, Gem, BookOpen, Coins, Newspaper, ChevronRight } from "lucide-react";
import { ItemDatabase, YouTube, HowToPlay, FAQ } from "@/components";
import itemsData from "@/data/items.json";
import { JsonLd, websiteSchema, videoGameSchema, organizationSchema } from "@/components/JsonLd";
import { HeroTools } from "@/components/hero-tools";
import { ProblemCards } from "@/components/problem-cards";
import { ResourceCards } from "@/components/resource-cards";
import { AdBanner } from "@/components/ad-banner";
import Link from "next/link";
import statsData from "@/data/stats.json";

const quickPaths = [
  { href: "/beginner/", icon: BookOpen, label: "Beginner Guide" },
  { href: "/farming/", icon: Coins, label: "Money Farming" },
  { href: "/shovels/", icon: Shovel, label: "Best Shovels" },
  { href: "/codes/", icon: Ticket, label: "Active Codes" },
  { href: "/rare-items/", icon: Gem, label: "Rare Items" },
];

const latestUpdates = [
  { title: "Update 1 live: 2 active codes available", date: "Aug 13, 2026", href: "/codes/" },
  { title: "Item database refreshed for August 2026", date: "Aug 9, 2026", href: "/items/" },
  { title: "Farming guide expanded to 1,333 words", date: "Aug 9, 2026", href: "/farming/" },
  { title: "New Cleaning and Sprays sections live", date: "Aug 9, 2026", href: "/cleaning/" },
  { title: "Museum guide now available", date: "Aug 9, 2026", href: "/museum/" },
];

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
            <Link
              href="/items/"
              className="inline-flex items-center gap-1.5 text-sm text-dirt/70 bg-white/60 hover:bg-white px-3 py-1.5 rounded-full border border-dirt/10 hover:border-water/30 transition-colors"
            >
              <Search className="w-4 h-4 text-water" /> Search items
            </Link>
            <Link
              href="/codes/"
              className="inline-flex items-center gap-1.5 text-sm text-dirt/70 bg-white/60 hover:bg-white px-3 py-1.5 rounded-full border border-dirt/10 hover:border-water/30 transition-colors"
            >
              <Ticket className="w-4 h-4 text-water" /> Active codes
            </Link>
            <Link
              href="/shovels/"
              className="inline-flex items-center gap-1.5 text-sm text-dirt/70 bg-white/60 hover:bg-white px-3 py-1.5 rounded-full border border-dirt/10 hover:border-water/30 transition-colors"
            >
              <Shovel className="w-4 h-4 text-water" /> Best shovels
            </Link>
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

      <AdBanner />

      {/* 快速入口：按问题选工具 */}
      <section className="space-y-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-dirt/60 mb-2">Quick start</p>
          <h2 className="font-headline font-bold text-2xl md:text-3xl text-dirt">Choose your next step</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {quickPaths.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="inline-flex items-center gap-2 bg-white border border-dirt/20 hover:border-water hover:bg-water/5 text-dirt font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              <p.icon className="w-4 h-4 text-water" />
              {p.label}
              <ChevronRight className="w-4 h-4 text-dirt/40" />
            </Link>
          ))}
        </div>
      </section>

      <ProblemCards />

      {/* Latest updates 折叠列表 */}
      <section className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-water/10 text-water flex items-center justify-center">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline font-bold text-2xl text-dirt">Latest updates</h2>
              <p className="text-sm text-dirt/70">New codes, item changes, and official event tracking.</p>
            </div>
          </div>
          <Link href="/updates/" className="hidden sm:inline-flex items-center gap-1 text-water font-medium hover:underline">
            View all updates <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-dirt/10">
          {latestUpdates.map((u) => (
            <Link
              key={u.href + u.title}
              href={u.href}
              className="flex items-center justify-between py-3 hover:bg-white/40 px-2 -mx-2 rounded-lg transition-colors"
            >
              <span className="font-medium text-dirt">{u.title}</span>
              <span className="text-sm text-dirt/50 whitespace-nowrap">{u.date}</span>
            </Link>
          ))}
        </div>
        <Link href="/updates/" className="sm:hidden w-full text-center inline-flex items-center justify-center gap-1 text-water font-medium hover:underline">
          View all updates <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 divide-dirt/10">
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Active Players</p>
            <p className="font-headline font-bold text-3xl text-gold">{statsData.ccu}</p>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Total Visits</p>
            <p className="font-headline font-bold text-3xl text-dirt">{statsData.visits}</p>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Rating</p>
            <p className="font-headline font-bold text-3xl text-dirt">{statsData.rating}</p>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <p className="font-body text-xs uppercase tracking-widest text-dirt/60 mb-1">Favorites</p>
            <p className="font-headline font-bold text-3xl text-dirt">{statsData.favorites}</p>
          </div>
        </div>
        <p className="text-center text-xs text-dirt/50 mt-4">{statsData.source}</p>
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
