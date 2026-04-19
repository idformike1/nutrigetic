"use client";

import { useState } from "react";

function getBmiCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi < 25) {
    return "Normal";
  }

  if (bmi < 30) {
    return "Overweight";
  }

  return "Obese";
}

function getHeightError(height) {
  const heightValue = Number(height);

  if (height === "" || heightValue < 100 || heightValue > 250) {
    return "Enter height between 100-250 cm";
  }

  return "";
}

function getWeightError(weight) {
  const weightValue = Number(weight);

  if (weight === "" || weightValue < 30 || weightValue > 250) {
    return "Enter weight between 30-250 kg";
  }

  return "";
}

export default function BmiCalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const heightError = getHeightError(height);
  const weightError = getWeightError(weight);
  const isFormInvalid = Boolean(heightError || weightError);

  function handleSubmit(event) {
    event.preventDefault();

    if (isFormInvalid) {
      setResult(null);
      return;
    }

    const heightValue = Number(height);
    const weightValue = Number(weight);
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / heightInMeters ** 2;

    setResult({
      value: bmi.toFixed(1),
      category: getBmiCategory(bmi)
    });
  }

  return (
    <main>
      <section className="section-spacing">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center stack-5">
            <span className="eyebrow">
              Wellness Tool
            </span>
            <h1 className="hero-heading">
              BMI Calculator
            </h1>
            <p className="body-copy mx-auto max-w-2xl sm:text-lg">
              Calculate your body mass index using height and weight, then review the general BMI
              category for quick context.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="height" className="text-sm font-medium text-slate-800">
                  Height (cm)
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  min="100"
                  max="250"
                  step="0.1"
                  value={height}
                  onChange={(event) => {
                    setHeight(event.target.value);
                    setResult(null);
                  }}
                  className="form-control"
                  placeholder="170"
                  aria-describedby="height-error"
                  aria-invalid={Boolean(heightError)}
                />
                {heightError ? (
                  <p id="height-error" className="text-sm text-slate-600">
                    {heightError}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="weight" className="text-sm font-medium text-slate-800">
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  min="30"
                  max="250"
                  step="0.1"
                  value={weight}
                  onChange={(event) => {
                    setWeight(event.target.value);
                    setResult(null);
                  }}
                  className="form-control"
                  placeholder="68"
                  aria-describedby="weight-error"
                  aria-invalid={Boolean(weightError)}
                />
                {weightError ? (
                  <p id="weight-error" className="text-sm text-slate-600">
                    {weightError}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isFormInvalid}
                className="inline-flex w-full justify-center rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(217,119,6,0.24)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:ring-slate-200"
              >
                Calculate BMI
              </button>
            </form>

            {result ? (
              <div className="mt-8 rounded-lg bg-green-50 p-5 ring-1 ring-green-100">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-green-700">
                  Your result
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight text-slate-900">
                      {result.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">BMI value</p>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-100">
                    {result.category}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
