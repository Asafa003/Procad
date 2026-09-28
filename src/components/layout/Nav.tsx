"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navigation.primary.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative py-1 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
              isActive ? "text-accent" : "text-current hover:text-accent",
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100",
                isActive && "scale-x-100",
              )}
              aria-hidden
            />
          </Link>
        );
      })}
    </nav>
  );
}
