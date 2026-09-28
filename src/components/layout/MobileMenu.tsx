"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { DURATION, EASE_OUT, STAGGER_CHILD_DELAY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="flex size-11 items-center justify-center"
      >
        <Menu className="size-6" aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-background text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.base }}
          >
            <div className="container-procad flex h-20 items-center justify-between">
              <span className="font-display text-lg font-semibold tracking-tight">
                Procad Construction
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-11 items-center justify-center"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            <motion.nav
              className="container-procad flex flex-1 flex-col justify-center gap-6"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: STAGGER_CHILD_DELAY } } }}
            >
              {navigation.primary.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_OUT } },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-semibold tracking-tight text-foreground"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_OUT } },
                }}
                className="pt-6"
              >
                <Button href="/request-a-quote" onClick={() => setOpen(false)} showArrow>
                  Request a quote
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
