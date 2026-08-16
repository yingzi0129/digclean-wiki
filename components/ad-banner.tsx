"use client";

import { useEffect, useRef, useState } from "react";

interface AdBannerProps {
  className?: string;
}

export function AdBanner({ className = "" }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const zoneId = "321bd7da56b6c32afe1e52eae178c833";
    const scriptId = `adsterra-${zoneId}`;

    // Do not inject twice on the same page.
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = `https://pl30873520.effectivecpmnetwork.com/${zoneId}/invoke.js`;
      script.onerror = () => {
        setError("Ad script failed to load. Ad blocker or network issue.");
      };
      // Append to the specific container; Adsterra will look for the sibling container div.
      container.parentElement?.insertBefore(script, container);
    }

    const checkFilled = () => {
      const hasContent =
        container.querySelector("iframe, img, a, .native-ad") !== null ||
        container.childNodes.length > (script?.parentElement === container.parentElement ? 0 : 0);
      if (hasContent) setFilled(true);
    };

    const observer = new MutationObserver(checkFilled);
    observer.observe(container, { childList: true, subtree: true });

    // Adsterra often fills within a few seconds; give it a generous window.
    const timers = [
      setTimeout(checkFilled, 1000),
      setTimeout(checkFilled, 3000),
      setTimeout(() => {
        checkFilled();
        observer.disconnect();
      }, 12000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`w-full flex flex-col items-center justify-center min-h-[140px] py-5 ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <div className="text-xs uppercase tracking-wider text-dirt/50 font-semibold mb-2">Advertisement</div>
      <div className="w-full max-w-[728px] min-h-[90px] bg-dirt/5 border border-dirt/10 rounded-lg relative">
        <div ref={containerRef} id="container-321bd7da56b6c32afe1e52eae178c833" className="w-full flex justify-center" />
        {!filled && !error && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-dirt/40 font-medium">Loading advertisement…</span>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-red-500/70 font-medium">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
