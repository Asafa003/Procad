"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps the app with a single MotionConfig so every Motion-driven animation
 * (Reveal, Stagger, MobileMenu, ProjectGallery, PageTransition) automatically
 * disables transform/layout animation when the user has requested reduced
 * motion at the OS level, while still allowing simple opacity fades.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
