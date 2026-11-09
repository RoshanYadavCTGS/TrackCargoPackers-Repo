"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues, MoveSizeOptions } from "@/lib/validations";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  MapPin,
  Navigation,
  User,
  Calendar,
  CheckCircle2,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

interface ServiceQuoteFormProps {
  serviceTitle: string;
  serviceSlug: string;
}

function getDefaultMoveSize(slug: string): string {
  if (slug.includes("bike")) return "1 BHK + Bike";
  if (slug.includes("car")) return "2 BHK + Bike + Car";
  if (slug.includes("office")) return "Office / Commercial Shifting";
  if (slug.includes("warehous") || slug.includes("storage")) return "Few items / Single Room";
  return "2 BHK";
}

export default function ServiceQuoteForm({ serviceTitle, serviceSlug }: ServiceQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultMoveSize = getDefaultMoveSize(serviceSlug);

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
      moveSize: defaultMoveSize,
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
      } catch (e) {}
    }, 500);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xl relative overflow-hidden">
      {/* Top Header Banner Ribbon */}
      <div className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-orange to-amber text-white font-heading font-extrabold text-center text-xs sm:text-sm uppercase tracking-wider shadow-glow-orange mb-5 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0" />
        <span className="truncate">Request A Free Quote</span>
      </div>

      <div className="text-center mb-4">
        <div className="text-xs font-bold text-navy truncate">
          {serviceTitle} Quote &amp; Survey
        </div>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Fast 10-min callback • 100% Free Doorstep Estimate
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-heading font-bold text-base text-navy">
            Quote Request Received!
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Thank you! A senior logistics coordinator for <span className="font-semibold text-navy">{serviceTitle}</span> will contact you within <span className="font-bold text-navy">10 minutes</span> with an itemized rate.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${companyData.phones.primary}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange hover:text-orange-hover hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Or Call Direct: {companyData.phones.primaryFormatted}</span>
            </a>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              reset();
            }}
            className="text-[11px] text-slate-400 hover:text-slate-600 underline block mx-auto pt-2 cursor-pointer"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
          {/* Your Full Name */}
          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
              Your Full Name <span className="text-orange">*</span>
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Ramesh Babu"
                {...register("fullName")}
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border ${
                  errors.fullName ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50/50"
                } text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition`}
              />
            </div>
            {errors.fullName && (
              <span className="text-[10px] text-rose-500 mt-0.5 block font-medium">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
              Phone Number (WhatsApp) <span className="text-orange">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-bold pointer-events-none">
                +91
              </span>
              <input
                type="tel"
                maxLength={10}
                placeholder="9876543210"
                {...register("phone")}
                className={`w-full pl-11 pr-3 py-2.5 rounded-xl border ${
                  errors.phone ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50/50"
                } text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition`}
              />
            </div>
            {errors.phone && (
              <span className="text-[10px] text-rose-500 mt-0.5 block font-medium">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* From City & To City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                Moving From <span className="text-orange">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-orange absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Chennai"
                  {...register("fromCity")}
                  className={`w-full pl-9 pr-2.5 py-2.5 rounded-xl border ${
                    errors.fromCity ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50/50"
                  } text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition`}
                />
              </div>
              {errors.fromCity && (
                <span className="text-[10px] text-rose-500 mt-0.5 block font-medium">
                  {errors.fromCity.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                Moving To <span className="text-orange">*</span>
              </label>
              <div className="relative">
                <Navigation className="w-3.5 h-3.5 text-blue-600 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Destination City"
                  {...register("toCity")}
                  className={`w-full pl-9 pr-2.5 py-2.5 rounded-xl border ${
                    errors.toCity ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50/50"
                  } text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition`}
                />
              </div>
              {errors.toCity && (
                <span className="text-[10px] text-rose-500 mt-0.5 block font-medium">
                  {errors.toCity.message}
                </span>
              )}
            </div>
          </div>

          {/* Move Size / Inventory */}
          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
              Move Size &amp; Items <span className="text-orange">*</span>
            </label>
            <select
              {...register("moveSize")}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition cursor-pointer"
            >
              {MoveSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.moveSize && (
              <span className="text-[10px] text-rose-500 mt-0.5 block font-medium">
                {errors.moveSize.message}
              </span>
            )}
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
              Preferred Relocation Date
            </label>
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <input
                type="date"
                {...register("moveDate")}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition cursor-pointer"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange via-orange to-amber hover:from-orange-hover hover:to-orange text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 disabled:opacity-50"
            >
              {loading ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <span>Request Instant Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-[11px] text-slate-500 pt-1 text-center font-medium">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Insured
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-orange" />
              10-Min Callback
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              Zero Hidden Fees
            </span>
          </div>

          {/* Quick Call & WhatsApp Assistance */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            <a
              href={`tel:${companyData.phones.primary}`}
              className="flex-1 py-2 px-3 rounded-lg bg-navy/5 hover:bg-navy/10 text-navy text-[11px] font-bold transition flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-orange" />
              <span>Call Dispatch</span>
            </a>
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[11px] font-bold transition flex items-center justify-center gap-1.5 border border-emerald-200"
            >
              <WhatsAppIcon className="w-3 h-3 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}

