"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  className?: string;
}

export function AdBanner({ className = "" }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !containerRef.current) return;

    // Prevent duplicate script injection
    const existing = document.querySelector(
      'script[src="https://pl30873520.effectivecpmnetwork.com/321bd7da56b6c32afe1e52eae178c833/invoke.js"]'
    );
    if (existing) {
      loadedRef.current = true;
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl30873520.effectivecpmnetwork.com/321bd7da56b6c32afe1e52eae178c833/invoke.js";

    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.warn("Ad script failed to load");
    };

    containerRef.current.appendChild(script);
    loadedRef.current = true;
  }, []);

  return (
    <div
      className={`w-full flex justify-center items-center min-h-[90px] py-4 ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <div className="w-full max-w-[728px] min-h-[90px]">
        <div ref={containerRef} id="container-321bd7da56b6c32afe1e52eae178c833" className="w-full" />
      </div>
    </div>
  );
}
