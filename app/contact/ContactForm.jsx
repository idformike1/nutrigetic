"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (name, value) => {
    let error = "";
    if (name === "name" && !value.trim()) error = "Identification required";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Valid email required";
    if (name === "phone" && value && !/^\d+$/.test(value)) error = "Digits only";
    if (name === "message" && !value.trim()) error = "Context required";
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const error = validate(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-[var(--color-cream-dark)] text-[var(--color-forest)] rounded-full flex items-center justify-center mx-auto mb-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 className="font-display text-4xl text-[var(--color-forest)] mb-4">Request Received</h2>
        <p className="text-[var(--color-text-muted)] mb-10 max-w-[32ch] mx-auto">
          Our team has received your clinical details and will reach out within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[var(--color-amber)] font-medium uppercase tracking-[0.1em] text-sm hover:opacity-75 transition-opacity"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <label className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Full Name</label>
          <input 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Sarah Jenkins"
            className="w-full bg-transparent border-b-2 border-[var(--color-rule)] py-3 text-[var(--color-forest)] font-body focus:border-[var(--color-amber)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/30"
          />
          {errors.name && <span className="text-[0.65rem] text-[var(--color-amber)] uppercase font-medium mt-1">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Clinical Email</label>
          <input 
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@provider.com"
            className="w-full bg-transparent border-b-2 border-[var(--color-rule)] py-3 text-[var(--color-forest)] font-body focus:border-[var(--color-amber)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/30"
          />
          {errors.email && <span className="text-[0.65rem] text-[var(--color-amber)] uppercase font-medium mt-1">{errors.email}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Contact Number (Optional)</label>
        <input 
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 00000 00000"
          className="w-full bg-transparent border-b-2 border-[var(--color-rule)] py-3 text-[var(--color-forest)] font-body focus:border-[var(--color-amber)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/30"
        />
        {errors.phone && <span className="text-[0.65rem] text-[var(--color-amber)] uppercase font-medium mt-1">{errors.phone}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Consultation Goals</label>
        <textarea 
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about your objectives..."
          className="w-full bg-transparent border-b-2 border-[var(--color-rule)] py-3 text-[var(--color-forest)] font-body focus:border-[var(--color-amber)] outline-none transition-colors resize-none placeholder:text-[var(--color-text-muted)]/30"
        />
        {errors.message && <span className="text-[0.65rem] text-[var(--color-amber)] uppercase font-medium mt-1">{errors.message}</span>}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--color-forest)] text-[var(--color-cream)] py-4 rounded-full font-body font-medium uppercase tracking-[0.08em] hover:bg-[var(--color-amber)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <span className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
        ) : null}
        {isSubmitting ? "Processing..." : "Request Consultation"}
      </button>
    </form>
  );
}
