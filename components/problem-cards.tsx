"use client";

import { BookOpen, Coins, Gem, Rocket, SprayCan, Ticket, Newspaper } from "lucide-react";

const cards = [
  { href: "/beginner/", icon: BookOpen, title: "Beginner Guide", desc: "Learn the core loop, controls, and what to focus on first." },
  { href: "/farming/", icon: Coins, title: "Money Farming", desc: "Fast farming loops for starter and Shipwreck Cove stages." },
  { href: "/shovels/", icon: Rocket, title: "Best Shovels", desc: "Compare power, speed, and price to pick your next upgrade." },
  { href: "/sprays/", icon: SprayCan, title: "Best Sprays", desc: "Find the right spray bottle for faster cleaning and revealing." },
  { href: "/codes/", icon: Ticket, title: "Active Codes", desc: "Check verified codes, redemption steps, and where to watch." },
  { href: "/rare-items/", icon: Gem, title: "Rare Items", desc: "Find legendary drops and decide whether to sell or donate." },
  { href: "/updates/", icon: Newspaper, title: "Latest Updates", desc: "New codes, item changes, and official event tracking." },
];

export function ProblemCards() {
  return (
    <div className="space-y-6" id="guides">
      <div className="text-center">
        <h2 className="font-headline font-bold text-3xl text-dirt">Dig & Clean Guides</h2>
        <p className="text-dirt/70 mt-2">Pick your goal and get straight to the answer.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="group bg-foam rounded-xl p-5 card-shadow border border-dirt/20 hover:border-water/50 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-water/10 text-water flex items-center justify-center group-hover:bg-water group-hover:text-white transition-colors">
              <c.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-dirt">{c.title}</h3>
              <p className="text-dirt/70 text-sm mt-1">{c.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
