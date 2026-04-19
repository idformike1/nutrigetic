"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedMain({ children }) {
  const mainRef = useRef(null);

  useEffect(() => {
    const root = mainRef.current;

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const hero = root.querySelector("[data-gsap-hero]");

      if (hero) {
        gsap.fromTo(
          hero,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: hero,
              start: "top 85%",
              once: true
            },
            y: 0
          }
        );
      }

      gsap.utils.toArray("[data-gsap-section]").forEach((section) => {
        const cards = section.querySelectorAll("[data-gsap-card]");
        const timeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true
          }
        });

        timeline.fromTo(
          section,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, duration: 0.6, y: 0 }
        );

        if (cards.length > 0) {
          timeline.fromTo(
            cards,
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, duration: 0.5, stagger: 0.1, y: 0 },
            "-=0.25"
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <main ref={mainRef}>{children}</main>;
}
