"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export interface HeaderState {
  scrolled: boolean;
  overHero: boolean;
}

interface HeaderScrollWatcherProps {
  children: ReactNode | ((state: HeaderState) => ReactNode);
}

/**
 * Single source of truth for header scroll/hero state. Subscribes to scroll
 * position once and shares the derived state with children via render-prop,
 * avoiding duplicate scroll listeners across Header subcomponents.
 */
export function HeaderScrollWatcher({ children }: HeaderScrollWatcherProps) {
  const scrolled = useScrollPosition(40);
  const pathname = usePathname();
  const overHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        overHero
          ? "border-b border-transparent bg-transparent text-background"
          : scrolled
            ? "border-b border-border bg-background/95 text-foreground backdrop-blur-sm"
            : "border-b border-transparent bg-transparent text-foreground",
      )}
    >
      {typeof children === "function" ? children({ scrolled, overHero }) : children}
    </header>
  );
}
