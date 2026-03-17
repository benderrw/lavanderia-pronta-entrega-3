import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";

export function useGsapFadeIn<T extends HTMLElement>(
  options: { delay?: number } = {},
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: options.delay ?? 0,
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, [options.delay]);

  return ref;
}

