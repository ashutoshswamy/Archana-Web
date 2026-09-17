"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Axis = "y" | "x" | "scale" | "scaleX" | "none";

interface RevealOptions {
  axis?: Axis;
  distance?: number;
  duration?: number;
  delay?: number;
  /** Stagger direct children instead of the element itself. */
  stagger?: number;
  /** Play once the element scrolls into view instead of immediately on mount. */
  onScroll?: boolean;
  start?: string;
  ease?: string;
  fade?: boolean;
}

/**
 * Replaces framer-motion's fadeInUp/slideInLeft/slideInRight/scaleIn +
 * staggerContainer variants with a single GSAP-driven reveal.
 */
export function useReveal<T extends Element>(opts: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const {
    axis = "y",
    distance = 30,
    duration = 0.6,
    delay = 0,
    stagger = 0,
    onScroll = false,
    start = "top 85%",
    ease = "power2.out",
    fade = true,
  } = opts;

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = stagger ? gsap.utils.toArray(ref.current.children) : ref.current;

      const from: gsap.TweenVars = {};
      const to: gsap.TweenVars = { duration, delay, ease };
      if (fade) {
        from.opacity = 0;
        to.opacity = 1;
      }
      if (axis === "y") {
        from.y = distance;
        to.y = 0;
      } else if (axis === "x") {
        from.x = distance;
        to.x = 0;
      } else if (axis === "scale") {
        from.scale = 0.9;
        to.scale = 1;
      } else if (axis === "scaleX") {
        from.scaleX = 0;
        to.scaleX = 1;
        from.transformOrigin = "left center";
      }

      gsap.set(targets, from);
      gsap.to(targets, {
        ...to,
        stagger: stagger || 0,
        scrollTrigger: onScroll
          ? { trigger: ref.current, start, once: true }
          : undefined,
      });
    },
    { scope: ref }
  );

  return ref as RefObject<T>;
}
