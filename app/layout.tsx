// Build timestamp: force new favicon deploy
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dig & Clean Wiki: Item Database, Codes & Best Shovels (2026)",
    template: "%s — Dig & Clean Wiki",
  },
  description: "Find every Dig & Clean item, value, rarity, and keep-or-sell tip in our interactive database. Plus active codes and the best shovel for your stage.",
  metadataBase: new URL("https://digclean-wiki.wiki"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dig & Clean Wiki",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function TopNav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/items/", label: "Items" },
    { href: "/codes/", label: "Codes" },
    { href: "/shovels/", label: "Shovels" },
    { href: "/sprays/", label: "Sprays" },
    { href: "/farming/", label: "Farming" },
    { href: "/cleaning/", label: "Cleaning" },
    { href: "/museum/", label: "Museum" },
    { href: "/beginner/", label: "Beginner" },
    { href: "/updates/", label: "Updates" },
  ];
  return (
    <header className="bg-foam border-b border-dirt/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-headline font-extrabold text-dirt text-lg md:text-xl flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-water text-white grid place-items-center text-sm">D</span>
          Dig & Clean Wiki
        </a>
        <nav className="hidden md:flex gap-6 font-body text-sm font-semibold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-dirt hover:text-water transition-colors">{l.label}</a>
          ))}
        </nav>
        <MobileNav links={links} />
      </div>
    </header>
  );
}

function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="md:hidden">
      <details className="group relative">
        <summary className="list-none cursor-pointer p-2 text-dirt">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-56 bg-foam rounded-xl border border-dirt/10 shadow-card p-2 z-50">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block px-4 py-2 rounded-lg text-dirt hover:bg-sand font-semibold text-sm">{l.label}</a>
          ))}
        </div>
      </details>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-sand border-t border-dirt/10 py-10 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="font-headline font-bold text-dirt mb-3">Dig & Clean Wiki</div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-body text-xs uppercase tracking-wider text-dirt font-semibold">
          <a href="/privacy/" className="hover:text-water transition-colors">Privacy Policy</a>
          <a href="/terms/" className="hover:text-water transition-colors">Terms of Service</a>
          <a href="/cookie-policy/" className="hover:text-water transition-colors">Cookie Policy</a>
          <a href="https://www.roblox.com/games/83038462357724/Dig-Clean" target="_blank" rel="noopener noreferrer" className="hover:text-water transition-colors">Roblox Game Page</a>
        </div>
        <a
          href="mailto:support@digclean-wiki.wiki"
          className="inline-flex items-center gap-2 mt-5 bg-water text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-water/90 transition-colors shadow-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          support@digclean-wiki.wiki
        </a>
        <p className="text-sm text-dirt/70 mt-4 max-w-xl mx-auto leading-relaxed">
          Unofficial fan site. Not affiliated with Roblox Corporation or the Dig & Clean developers. Roblox and Dig & Clean are trademarks of their respective owners.
        </p>
      </div>
    </footer>
  );
}
