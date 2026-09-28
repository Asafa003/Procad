"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { MobileMenu } from "./MobileMenu";
import { HeaderScrollWatcher } from "./HeaderScrollWatcher";
import { Button } from "@/components/ui/Button";

/**
 * Header shell. Scroll/hero state lives solely in HeaderScrollWatcher and is
 * threaded through via render-prop so we only pay for one scroll listener,
 * not one per subcomponent.
 */
export function Header() {
  return (
    <HeaderScrollWatcher>
      {({ overHero }) => (
        <div className="container-procad flex h-20 items-center justify-between gap-6">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            Procad Construction
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            <Nav />
            {/* <Button
              href="/request-a-quote"
              className={
                overHero
                  ? "h-10 bg-background px-5 text-foreground hover:bg-accent hover:text-background"
                  : "h-10 px-5"
              }
            >
              Request a quote
            </Button> */}
          </div>
          <MobileMenu />
        </div>
      )}
    </HeaderScrollWatcher>
  );
}
