import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Dig & Clean Wiki",
  description: "Cookie Policy for Dig & Clean Wiki. Learn what cookies we use and how to manage them.",
  alternates: { canonical: "https://digclean-wiki.wiki/cookie-policy/" },
  robots: { index: false, follow: true },
};

export default function CookiePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      <h1 className="font-headline font-extrabold text-4xl text-dirt mb-2">Cookie Policy</h1>
      <p className="text-sm text-dirt/60 mb-6">Last updated: August 6, 2026</p>

      <div className="prose prose-dirt max-w-none">
        <p>This Cookie Policy explains how digclean-wiki.wiki uses cookies and similar technologies.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device by your browser. They help websites work properly and provide useful analytics.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">Cookies We Use</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Category</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Purpose</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              <tr>
                <td className="p-4">Essential</td>
                <td className="p-4">Site delivery, security, and basic functionality</td>
                <td className="p-4">Cloudflare service cookies</td>
              </tr>
              <tr>
                <td className="p-4">Analytics</td>
                <td className="p-4">Understand how visitors use the site</td>
                <td className="p-4">None currently enabled</td>
              </tr>
              <tr>
                <td className="p-4">Third-party/Embedded</td>
                <td className="p-4">Video playback and related services</td>
                <td className="p-4">YouTube cookies (no-cookie mode)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">We do not currently use advertising cookies because this site does not show ads.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">Managing Cookies</h2>
        <p>You can manage or delete cookies through your browser settings.</p>

        <h2 className="font-headline font-bold text-2xl text-dirt mt-8 mb-3">Changes</h2>
        <p>We may update this Cookie Policy from time to time. The “Last updated” date at the top shows the current version.</p>
      </div>
    </div>
  );
}
