"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { PROJECT_TYPES } from "@/lib/constants";
import { Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success && state.message) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-green-800/30 bg-green-900/10 p-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center border border-green-800/30 bg-green-900/20">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <p className="font-display text-2xl tracking-wide text-white">
          {state.message}
        </p>
        <p className="text-sm text-gray-500">
          We typically respond within a few hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="flex items-center gap-3 border border-red/20 bg-red/5 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-red" />
          <p className="text-sm text-red">{state.message}</p>
        </div>
      )}

      {/* Full Name */}
      <div className="group">
        <label
          htmlFor="name"
          className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors duration-200 group-focus-within:text-red"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full border-b border-l-0 border-r-0 border-t-0 border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-gray-700 transition-colors duration-200 focus:border-red focus:outline-none"
          placeholder="John Smith"
        />
      </div>

      {/* Phone + Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="group">
          <label
            htmlFor="phone"
            className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors duration-200 group-focus-within:text-red"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-2 w-full border-b border-l-0 border-r-0 border-t-0 border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-gray-700 transition-colors duration-200 focus:border-red focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="group">
          <label
            htmlFor="email"
            className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors duration-200 group-focus-within:text-red"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 w-full border-b border-l-0 border-r-0 border-t-0 border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-gray-700 transition-colors duration-200 focus:border-red focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Project Type */}
      <div className="group">
        <label
          htmlFor="projectType"
          className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors duration-200 group-focus-within:text-red"
        >
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="mt-2 w-full border-b border-l-0 border-r-0 border-t-0 border-white/10 bg-transparent px-0 py-3 text-white transition-colors duration-200 focus:border-red focus:outline-none"
        >
          <option value="" disabled className="bg-charcoal">
            Select a project type
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-charcoal">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="group">
        <label
          htmlFor="description"
          className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors duration-200 group-focus-within:text-red"
        >
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="mt-2 w-full resize-none border-b border-l-0 border-r-0 border-t-0 border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-gray-700 transition-colors duration-200 focus:border-red focus:outline-none"
          placeholder="Tell us about your project: scope, timeline, budget, anything relevant..."
        />
      </div>

      {/* Preferred Contact Method */}
      <fieldset>
        <legend className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
          Preferred Contact Method
        </legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Phone", "Email", "Either"].map((method) => (
            <label
              key={method}
              className="group/radio flex cursor-pointer items-center gap-2 border border-white/10 px-4 py-2.5 transition-all duration-200 has-[:checked]:border-red/50 has-[:checked]:bg-red/10"
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                defaultChecked={method === "Either"}
                className="sr-only"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 transition-colors duration-200 group-has-[:checked]/radio:text-white">
                {method}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="group mt-4 flex w-full items-center justify-center gap-3 bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-bright hover:gap-4 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4"
      >
        {pending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </>
        ) : (
          <>
            Submit Request
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
