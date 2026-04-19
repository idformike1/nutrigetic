"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

function getErrors(form) {
  return {
    name: form.name.trim() ? "" : "Enter your name",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
      ? ""
      : "Enter a valid email address",
    phone: form.phone.trim() === "" || /^\d+$/.test(form.phone.trim())
      ? ""
      : "Enter numbers only",
    message: form.message.trim() ? "" : "Enter your message"
  };
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const errors = getErrors(form);
  const isInvalid = Object.values(errors).some(Boolean);

  function updateField(field, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value
    }));
    setSuccessMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isInvalid) {
      return;
    }

    setForm(initialForm);
    setSuccessMessage("Thanks. Your consultation request has been received.");
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="form-control"
          aria-describedby="name-error"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p id="name-error" className="text-sm text-slate-600">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="form-control"
          aria-describedby="email-error"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p id="email-error" className="text-sm text-slate-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-slate-800">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="form-control"
          aria-describedby="phone-error"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? (
          <p id="phone-error" className="text-sm text-slate-600">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="form-control"
          aria-describedby="message-error"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-slate-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {successMessage ? (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 ring-1 ring-green-100">
          {successMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isInvalid}
        className="mt-2 inline-flex rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(217,119,6,0.24)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:ring-slate-200"
      >
        Book Consultation
      </button>
    </form>
  );
}
