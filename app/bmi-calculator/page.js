"use client";

import AnimatedMain from "../../components/animations/AnimatedMain";
import BmiCalculator from "../../components/tools/BmiCalculator";

export default function BmiCalculatorPage() {
  return (
    <AnimatedMain>
      <div className="bg-[var(--color-cream)] pt-[10rem] pb-[7rem] px-4">
        <div className="container max-w-[900px] grid lg:grid-cols-[1.2fr_0.8fr] gap-0 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-hover)]">
          {/* Left - Calculator UI */}
          <div className="bg-[var(--color-white)] p-8 md:p-[3.5rem]">
            <span className="poso-label">Clinical Tools</span>
            <h1 className="font-display text-[2.5rem] text-[var(--color-forest)] mt-4 mb-2">BMI Calculator</h1>
            <p className="text-[var(--color-text-muted)] text-[0.9rem] mb-10">
              Calculate your Body Mass Index with pinpoint clinical accuracy. Designed for those seeking sustainable wellness through data.
            </p>
            <BmiCalculator />
          </div>

          {/* Right - Informational Panel */}
          <div className="bg-[var(--color-forest)] p-8 md:p-[3rem] text-[var(--color-cream)] flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl mb-8">BMI Categories</h2>
              <div className="flex flex-col gap-6">
                {[
                  { label: "Underweight", range: "< 18.5", dot: "bg-[#6b9fd4]" },
                  { label: "Normal", range: "18.5 - 24.9", dot: "bg-[var(--color-sage)]" },
                  { label: "Overweight", range: "25.0 - 29.9", dot: "bg-[var(--color-amber)]" },
                  { label: "Obese", range: "30.0 +", dot: "bg-[#c45a2a]" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                      <span className="text-sm font-medium tracking-wide">{item.label}</span>
                    </div>
                    <span className="text-sm opacity-40 font-body">{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-[0.75rem] opacity-40 leading-relaxed mt-12 border-t border-white/10 pt-6">
              Note: BMI is a clinical guideline based on height and weight. For a full metabolic profile, we recommend a 1-on-1 nutritional consultation.
            </p>
          </div>
        </div>
      </div>
    </AnimatedMain>
  );
}
