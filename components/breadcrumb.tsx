import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-dirt/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="inline-flex items-center gap-1 hover:text-water transition-colors">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label + index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-dirt/40" />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-water transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-dirt font-medium" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
