"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues, MoveSizeOptions } from "@/lib/validations";
import { companyData } from "@/data/company";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      fromCity: "Chennai",
      toCity: "",
      moveSize: "2 BHK",
      moveDate: "",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {}
    }, 600);
  };

  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4" />
            <span>Formal Relocation Proposal</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight">
            Book a Free Pre-Move Survey
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Get an itemized, guaranteed moving proposal with no hidden clauses. Our survey officer will provide a precise volumetric estimate.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-navy">
                Enquiry Successfully Registered!
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                Thank you! Your relocation request has been queued. A dedicated move planner from Track Cargo will contact you within 10 minutes to arrange a physical or video walk-through survey.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${companyData.phones.primary}`}
                  className="px-6 py-3 rounded-xl bg-navy text-white text-xs font-bold uppercase tracking-wider"
                >
                  Call Now: {companyData.phones.primaryFormatted}
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    reset();
                  }}
                  className="text-xs font-semibold text-orange hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Babu"
                    {...register("fullName")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.fullName ? "border-rose-500" : "border-slate-300"
                    } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                    Phone Number (Active WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    maxLength={10}
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? "border-rose-500" : "border-slate-300"
                    } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                    Origin City / Locality *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai (Anna Nagar)"
                    {...register("fromCity")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.fromCity ? "border-rose-500" : "border-slate-300"
                    } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                  />
                  {errors.fromCity && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.fromCity.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                    Destination City / Locality *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bangalore (Whitefield)"
                    {...register("toCity")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.toCity ? "border-rose-500" : "border-slate-300"
                    } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                  />
                  {errors.toCity && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.toCity.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                    Move Size & Items *
                  </label>
                  <select
                    {...register("moveSize")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange transition"
                  >
                    {MoveSizeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                    Preferred Relocation Date
                  </label>
                  <input
                    type="date"
                    {...register("moveDate")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange transition"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Registering Survey Request...</span>
                  ) : (
                    <>
                      <span>Submit Survey Request & Lock Discount</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-500 pt-2 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free Doorstep Survey
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-orange" />
                  10-Min Fast Callback
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

