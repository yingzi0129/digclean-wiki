"use client";

import { useEffect, useRef, useState } from "react";

interface AdBannerProps {
  className?: string;
}

export function AdBanner({ className = "" }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!containerRef.current) return;

    // Avoid duplicate script injection; the script idempotency is handled by Adsterra,
    // but we guard against React Strict Mode double-mount in development.
    const id = "adsterra-invoke-script";
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl30873520.effectivecpmnetwork.com/321bd7da56b6c32afe1e52eae178c833/invoke.js";

    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.warn("Adsterra script failed to load");
    };

    containerRef.current.appendChild(script);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center min-h-[120px] py-4 ${className}`}
        aria-label="Advertisement"
        role="complementary"
      >
        <div className="text-xs uppercase tracking-wider text-dirt/40 font-semibold mb-2">Advertisement</div>
        <div className="w-full max-w-[728px] min-h-[90px] bg-dirt/5 rounded-lg" />
      </div>
    );
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center min-h-[120px] py-4 ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <div className="text-xs uppercase tracking-wider text-dirt/40 font-semibold mb-2">Advertisement</div>
      <div className="w-full max-w-[728px] min-h-[90px]">
        <div ref={containerRef} id="container-321bd7da56b6c32afe1e52eae178c833" className="w-full flex justify-center" />
      </div>
    </div>
  );
}
