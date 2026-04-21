"use client";

import { useState, useMemo } from "react";

const CATEGORIES = {
  UNDERWEIGHT: { 
    label: "Underweight", 
    color: "#6b9fd4", 
    feedback: "Consider consulting our nutritionists to optimize your caloric and nutrient intake for a healthy balance." 
  },
  NORMAL: { 
    label: "Normal", 
    color: "#7a9e82", 
    feedback: "Excellent. You are within a healthy BMI range. Maintaining this balance is key to clinical longevity." 
  },
  OVERWEIGHT: { 
    label: "Overweight", 
    color: "#c8783a", 
    feedback: "Slightly above the clinical range. We can help you identify small, sustainable adjustments to your nutrition habits." 
  },
  OBESE: { 
    label: "Obese", 
    color: "#c45a2a", 
    feedback: "Higher risk category. A guided clinical nutrition plan may be beneficial to support your metabolic health." 
  },
};

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const result = useMemo(() => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return null;

    const bmi = w / (h * h);
    let category;
    if (bmi < 18.5) category = CATEGORIES.UNDERWEIGHT;
    else if (bmi < 25) category = CATEGORIES.NORMAL;
    else if (bmi < 30) category = CATEGORIES.OVERWEIGHT;
    else category = CATEGORIES.OBESE;

    return { value: bmi.toFixed(1), ...category };
  }, [height, weight]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (result) setIsCalculated(true);
  };

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Height (cm)</label>
          <input
            type="number"
            placeholder="175"
            value={height}
            onChange={(e) => { setHeight(e.target.value); setIsCalculated(false); }}
            className="w-full bg-transparent border-b-2 border-[var(--color-rule)] py-3 text-[1.4rem] font-display text-[var(--color-forest)] focus:border-[var(--color-amber)] outline-none transition-all appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Weight (kg)</label>
          <input
            type="number"
            placeholder="70"
            value={weight}
            onChange={(e) => { setWeight(e.target.value); setIsCalculated(false); }}
            className="w-full bg-transparent border-b-2 border-[var(--color-rule)] py-3 text-[1.4rem] font-display text-[var(--color-forest)] focus:border-[var(--color-amber)] outline-none transition-all appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <button
          type="submit"
          disabled={!height || !weight}
          className="poso-button poso-button-amber w-full disabled:opacity-50"
        >
          Calculate
        </button>
      </form>

      {isCalculated && result && (
        <div className="pt-8 border-t border-[var(--color-rule)] animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-[5rem] font-semibold text-[var(--color-forest)] leading-none mb-2">{result.value}</span>
            <span 
              className="px-6 py-2 rounded-full text-white text-[0.75rem] font-bold uppercase tracking-widest mb-6"
              style={{ backgroundColor: result.color }}
            >
              {result.label}
            </span>
            <p className="text-[0.87rem] leading-relaxed text-[var(--color-text-muted)] font-body max-w-[32ch]">
              {result.feedback}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
