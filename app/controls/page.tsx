import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dig & Clean Controls for PC, Mobile & Console",
  description: "Master the Dig & Clean controls on every platform: PC, mobile, and console. Quick reference for movement, detection, digging, and cleaning.",
  alternates: { canonical: "https://digclean-wiki.wiki/controls/" },
};

export default function ControlsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col gap-8">
      <div className="max-w-3xl">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt leading-tight">
          Dig & Clean Controls for PC, Mobile & Console
        </h1>
        <p className="text-lg text-dirt/80 mt-4">
          Whether you play on PC, mobile, or console, this Dig & Clean controls guide covers the basics. Controls may change slightly after game updates, so check in-game settings for the latest layout.
        </p>
      </div>

      <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
        <h2 className="font-headline font-bold text-2xl text-dirt mb-4">PC Controls</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[400px]">
            <thead>
              <tr className="bg-dirt/5 border-b border-dirt/10">
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Action</th>
                <th className="p-4 font-body text-xs uppercase tracking-widest text-dirt/60 font-semibold">Key</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dirt/5">
              <tr><td className="p-4">Move</td><td className="p-4 font-mono">W A S D</td></tr>
              <tr><td className="p-4">Jump</td><td className="p-4 font-mono">Space</td></tr>
              <tr><td className="p-4">Use Detector</td><td className="p-4 font-mono">Left Click</td></tr>
              <tr><td className="p-4">Dig</td><td className="p-4 font-mono">Left Click</td></tr>
              <tr><td className="p-4">Clean</td><td className="p-4 font-mono">Hold Click</td></tr>
              <tr><td className="p-4">Open Menu</td><td className="p-4 font-mono">M / Esc</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">Mobile Controls</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li>Move: Virtual joystick on the left.</li>
            <li>Actions: Tap on-screen buttons for detector, shovel, and clean.</li>
            <li>Menu: Tap the menu icon, usually in a corner.</li>
          </ul>
        </div>
        <div className="bg-foam rounded-xl p-6 md:p-8 card-shadow border border-dirt/20">
          <h3 className="font-headline font-bold text-xl text-dirt mb-2">Console Controls</h3>
          <ul className="list-disc list-inside text-dirt/80 text-sm space-y-1">
            <li>Move: Left Stick</li>
            <li>Camera: Right Stick</li>
            <li>Jump: A / X</li>
            <li>Action: RT / R2</li>
            <li>Menu: Menu / Options</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <a href="/beginner-guide/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Now learn the best strategies
        </a>
      </div>
    </div>
  );
}
