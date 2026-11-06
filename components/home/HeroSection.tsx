"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues, MoveSizeOptions } from "@/lib/validations";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Truck,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function HeroSection() {
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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // fallback if canvas not available
      }
    }, 600);
  };

  return (
    <section className="relative bg-gradient-to-b from-navy-900 via-navy to-navy-800 text-white overflow-hidden py-12 lg:py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-amber-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>ISO 9001:2015 Certified Relocation Services</span>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="hidden sm:inline text-slate-300">Govt. Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              Moving Made <span className="text-gradient-orange">Effortless</span>. Delivered Across India.
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              15+ years of trust. 165,000+ satisfied relocations. Zero-scratch guarantee, 4-layer packaging, and real-time GPS-tracked container fleet.
            </p>

            {/* Trust Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {companyData.trustChips.map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-medium leading-tight">{chip}</span>
                </div>
              ))}
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`tel:${companyData.phones.primary}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-base shadow-glow-orange hover:shadow-xl transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Call Now: {companyData.phones.primaryFormatted}</span>
              </a>

              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>WhatsApp Instant Estimate</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Ratings & Social Proof bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-amber-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-300 font-semibold text-sm shrink-0">
                4.8 / 5.0
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-center sm:text-left">Based on 1,200+ verified customer reviews</span>
            </div>
          </div>

          {/* Right Column: Instant Free Quote Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-navy-800/90 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-glow-navy relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-orange to-amber text-navy-900 font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Fast 10-Min Callback
              </div>

              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-orange font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Instant Estimate</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                    Get Your Free Moving Quote
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Transparent, all-inclusive pricing with zero hidden charges.
                  </p>
                </div>
                <div className="hidden sm:block bg-white px-2 py-1 rounded-xl shrink-0 shadow-sm">
                  <Image
                    src="/heder-logo.png"
                    alt="Track Cargo"
                    width={90}
                    height={28}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Quote Request Received!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our move coordinator will call you within 10 minutes with an accurate volumetric estimate and special discount.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        reset();
                      }}
                      className="text-xs text-orange hover:underline font-semibold"
                    >
                      Calculate another quote →
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      {...register("fullName")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-navy-900/80 border ${
                        errors.fullName ? "border-rose-500" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange transition`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-0.5 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mobile Number (for WhatsApp quote) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-medium">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="98765 43210"
                        {...register("phone")}
                        className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-navy-900/80 border ${
                          errors.phone ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange transition`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-0.5 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Moving From *
                      </label>
                      <input
                        type="text"
                        placeholder="Chennai / Locality"
                        {...register("fromCity")}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-navy-900/80 border ${
                          errors.fromCity ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange transition`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Moving To *
                      </label>
                      <input
                        type="text"
                        placeholder="City or Locality"
                        {...register("toCity")}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-navy-900/80 border ${
                          errors.toCity ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange transition`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Move Size *
                      </label>
                      <select
                        {...register("moveSize")}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-orange transition"
                      >
                        {MoveSizeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-navy-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Tentative Move Date
                      </label>
                      <input
                        type="date"
                        {...register("moveDate")}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-orange transition"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Calculating Estimate...
                      </span>
                    ) : (
                      <>
                        <span>Get Instant Moving Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange" />
                      10-min response
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      No spam guarantee
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

