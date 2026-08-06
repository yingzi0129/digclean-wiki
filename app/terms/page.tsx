import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Dig & Clean Wiki",
  description: "Terms of Service for Dig & Clean Wiki. Read about usage rules, disclaimers, and intellectual property.",
  alternates: { canonical: "https://digclean-wiki.wiki/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      <h1 className="font-headline font-extrabold text-4xl text-dirt mb-2">Terms of Service</h1>
      <p className="text-sm text-dirt/60 mb-6">Last updated: August 6, 2026</p>

      <div className="prose prose-dirt max-w-none">
        <p>Welcome to digclean-wiki.wiki (“the Site”). These Terms of Service govern your use of the Site. By using the Site, you agree to these terms. If you do not agree, please do not use the Site.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">1. Unofficial Fan Site</h2>
        <p>This is an <strong>unofficial fan site</strong> for the Roblox game Dig & Clean. We are not affiliated with, endorsed by, or sponsored by Roblox Corporation or the Dig & Clean developers. All trademarks, game names, images, and assets belong to their respective owners.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">2. Use of the Site</h2>
        <p>You may use the Site for personal, non-commercial reference. You agree not to:</p>
        <ul className="list-disc list-inside text-dirt/80 space-y-1">
          <li>Use the Site for any illegal activity</li>
          <li>Attempt to interfere with the Site’s operation or security</li>
          <li>Use automated tools to scrape, spam, or abuse the Site</li>
          <li>Submit malware, viruses, or harmful code</li>
          <li>Use the Site to promote cheats, hacks, exploits, or unauthorized third-party software related to Roblox</li>
        </ul>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">3. Content and Accuracy</h2>
        <p>All game data, item values, codes, shovel stats, and guides are compiled from community sources and public information. We update the Site regularly, but we cannot guarantee that all information is always current, accurate, or complete. The Site is provided <strong>“as is”</strong> for informational purposes only.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">4. Intellectual Property</h2>
        <p>Game-related names, images, and assets displayed on this Site are the property of their respective owners. We do not claim ownership of Roblox, Dig & Clean, or any third-party trademarks. If you are a rights holder and believe content on this Site violates your rights, please contact us.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">5. Disclaimer of Warranties</h2>
        <p>We provide the Site on an “as is” and “as available” basis. We do not guarantee that the Site will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, we disclaim all warranties of any kind.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or reliance on its content.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">7. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. The “Last updated” date at the top shows the current version. Continued use of the Site after changes means you accept the updated terms.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">8. Contact Us</h2>
        <p>Email: support@digclean-wiki.wiki</p>
      </div>
    </div>
  );
}
