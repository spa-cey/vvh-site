"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { PROJECT_TYPES } from "@/lib/constants";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success && state.message) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-green-800/50 bg-green-900/20 p-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <p className="text-lg font-semibold text-white">{state.message}</p>
        <p className="text-sm text-gray-400">
          We typically respond within a few hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="flex items-center gap-3 border border-red/30 bg-red/10 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-red" />
          <p className="text-sm text-red">{state.message}</p>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-400"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full border border-charcoal-light bg-charcoal px-4 py-3 text-white placeholder:text-gray-700 transition-colors focus:border-red focus:outline-none"
          placeholder="John Smith"
        />
      </div>

      {/* Phone + Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-400"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-2 w-full border border-charcoal-light bg-charcoal px-4 py-3 text-white placeholder:text-gray-700 transition-colors focus:border-red focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-400"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 w-full border border-charcoal-light bg-charcoal px-4 py-3 text-white placeholder:text-gray-700 transition-colors focus:border-red focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-400"
        >
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="mt-2 w-full border border-charcoal-light bg-charcoal px-4 py-3 text-white transition-colors focus:border-red focus:outline-none"
        >
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-400"
        >
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="mt-2 w-full resize-none border border-charcoal-light bg-charcoal px-4 py-3 text-white placeholder:text-gray-700 transition-colors focus:border-red focus:outline-none"
          placeholder="Tell us about your project — scope, timeline, budget, anything relevant..."
        />
      </div>

      {/* Preferred Contact Method */}
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          Preferred Contact Method
        </legend>
        <div className="mt-3 flex flex-wrap gap-6">
          {["Phone", "Email", "Either"].map((method) => (
            <label key={method} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                defaultChecked={method === "Either"}
                className="h-4 w-4 border-charcoal-light bg-charcoal text-red accent-red"
              />
              <span className="text-sm text-gray-400">{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 bg-red px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-red-bright disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Request
          </>
        )}
      </button>
    </form>
  );
}
