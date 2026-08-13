"use client";

import { BookOpen, Search, Ticket, Shovel } from "lucide-react";

const cards = [
  { href: "/items/", icon: Search, title: "Item Database", desc: "Search every Dig & Clean item by rarity, value, and keep-or-sell advice." },
  { href: "/codes/", icon: Ticket, title: "Active Codes", desc: "See every active Dig & Clean code, plus where to watch for the next drop." },
  { href: "/shovels/", icon: Shovel, title: "Best Shovels", desc: "Compare shovels by power, walk speed, and price. Find the right pick for your stage." },
  { href: "/beginner/", icon: BookOpen, title: "Beginner Guide", desc: "New to Dig & Clean? Learn the controls, the loop, and what to focus on first." },
];

export function ResourceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c) => (
        <a key={c.href} href={c.href} className="group bg-foam rounded-xl p-6 card-shadow border border-dirt/20 hover:border-water/50 hover:-translate-y-1 transition-all flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-water/10 text-water flex items-center justify-center group-hover:bg-water group-hover:text-white transition-colors">
            <c.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-xl text-dirt mb-2">{c.title}</h3>
            <p className="text-dirt/70 text-sm">{c.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
