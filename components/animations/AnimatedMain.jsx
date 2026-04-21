"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global Motion Registry - Nutrigetic 2026
 * Standardizes high-performance staggered entry using GSAP Batch.
 * 
 * FIX: Resolved Hero-to-Services gap by injecting refresh logic and 
 * refining trigger start points for better viewport entry.
 */

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedMain({ children }) {
  const mainRef = useRef(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Resolve layout height discrepancies after initial load/LCP
    const refreshRegistry = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshRegistry);

    const ctx = gsap.context(() => {
      // 1. Immediate Hero Entry
      const hero = root.querySelector("[data-gsap-hero]");
      if (hero) {
        gsap.fromTo(hero, 
          { opacity: 0, y: 30 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: "power4.out", 
            delay: 0.2,
            onComplete: refreshRegistry 
          }
        );
      }

      // 2. Uniform Section Batched Staggers
      const sections = gsap.utils.toArray("[data-gsap-section]");
      
      sections.forEach((section, index) => {
        const staggerItems = section.querySelectorAll("[data-gsap-card], [data-gsap-stagger]");
        
        // Dynamic start point: Earlier entry for subsequent sections to prevent "void" stutter
        const startPoint = index === 0 ? "top 80%" : "top 90%";

        if (staggerItems.length > 0) {
          ScrollTrigger.batch(staggerItems, {
            start: startPoint,
            onEnter: (batch) => {
              gsap.fromTo(batch, 
                { opacity: 0, y: 40 },
                { 
                  opacity: 1, 
                  y: 0, 
                  stagger: 0.15, 
                  duration: 0.8, 
                  ease: "power3.out",
                  overwrite: true 
                }
              );
            },
            onLeaveBack: (batch) => {
              gsap.set(batch, { opacity: 0, y: 40, overwrite: true });
            }
          });
        } else {
          gsap.fromTo(section, 
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 1, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 92%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    }, root);

    // Watch for internal layout changes
    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    resizeObserver.observe(root);

    return () => {
      ctx.revert();
      window.removeEventListener("load", refreshRegistry);
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={mainRef}>{children}</div>;
}
