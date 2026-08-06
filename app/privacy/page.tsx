import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Dig & Clean Wiki",
  description: "Privacy Policy for Dig & Clean Wiki. Learn what data we collect, how we use it, and your rights.",
  alternates: { canonical: "https://digclean-wiki.wiki/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      <h1 className="font-headline font-extrabold text-4xl text-dirt mb-2">Privacy Policy</h1>
      <p className="text-sm text-dirt/60 mb-6">Last updated: August 6, 2026</p>

      <div className="prose prose-dirt max-w-none">
        <p>This Privacy Policy explains how digclean-wiki.wiki (“we”, “us”, or “our”) collects, uses, and protects information when you visit our website. This is an <strong>unofficial fan site</strong> for the Roblox game Dig & Clean. We are not affiliated with Roblox Corporation or the Dig & Clean developers.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">1. Information We Collect</h2>
        <p>We do not ask you to create an account, log in, or submit personal information to use this site.</p>
        <p>However, when you visit our website, some information is collected automatically by our hosting and analytics providers:</p>
        <ul className="list-disc list-inside text-dirt/80 space-y-1">
          <li><strong>Log and device data:</strong> your IP address, browser type, operating system, device type, and the pages you visit. This is collected by our hosting provider (Cloudflare) to deliver content and protect the site.</li>
          <li><strong>Usage analytics:</strong> We do not currently use Google Analytics 4 or Microsoft Clarity. If we enable them later, this policy will be updated to list them.</li>
          <li><strong>Cookies and similar technologies:</strong> our hosting provider may use essential cookies. We do not use advertising cookies because this site does not currently show ads.</li>
        </ul>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">2. How We Use Information</h2>
        <p>We use this information only to:</p>
        <ul className="list-disc list-inside text-dirt/80 space-y-1">
          <li>Keep the site running and secure</li>
          <li>Understand how visitors use the site</li>
          <li>Improve content, tools, and user experience</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">3. Third-Party Services</h2>
        <ul className="list-disc list-inside text-dirt/80 space-y-1">
          <li><strong>Cloudflare</strong> (hosting/CDN): https://www.cloudflare.com/privacypolicy/</li>
          <li><strong>YouTube</strong> (embedded videos, no-cookie mode): https://policies.google.com/privacy</li>
        </ul>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">4. Cookies</h2>
        <p>We use essential cookies to keep the site working. We do not currently use analytics or advertising cookies. If that changes, this policy will be updated.</p>
        <p>You can manage or disable cookies through your browser settings.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">5. Children’s Privacy</h2>
        <p>This site is intended for general audiences, including Roblox players. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, please contact us and we will delete it promptly.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">6. Your Rights</h2>
        <p>Depending on your location, you may have the right to access, correct, or delete personal information. Since we do not collect identifiable personal information directly, most requests can be handled by managing cookies or contacting your analytics provider. You may also contact us for questions.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">7. Contact Us</h2>
        <p>Email: support@digclean-wiki.wiki</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">8. Changes</h2>
        <p>We may update this Privacy Policy from time to time. The “Last updated” date at the top shows the current version.</p>
      </div>
    </div>
  );
}
