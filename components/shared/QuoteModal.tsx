"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues, MoveSizeOptions } from "@/lib/validations";
import { X, CheckCircle2, ShieldCheck, Truck, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMoveSize?: string;
  defaultFromCity?: string;
  defaultToCity?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultMoveSize,
  defaultFromCity = "Chennai",
  defaultToCity = "",
}: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      fromCity: defaultFromCity,
      toCity: defaultToCity,
      moveSize: defaultMoveSize || "2 BHK",
      moveDate: "",
    },
  });

  if (!isOpen) return null;

  const onSubmit = (data: QuoteFormValues) => {
    setSubmitting(true);
    // Simulate immediate processing
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti fallback
      }
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-2rem)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy px-4 sm:px-6 py-3.5 sm:py-4 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shrink-0">
              <Image
                src="/heder-logo.png"
                alt="Track Cargo Packers & Movers"
                width={130}
                height={40}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse shrink-0"></span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-orange truncate">
                  Instant Moving Estimate
                </span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold font-heading truncate">
                Guaranteed Quotation
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-navy">
                Quotation Request Received!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you! Our dedicated Chennai move coordinator is reviewing your route and inventory. We will call you within <strong className="text-navy">15 minutes</strong> with a personalized all-inclusive price quote.
              </p>

              <div className="bg-surface rounded-xl p-4 max-w-md mx-auto flex items-center justify-around text-xs text-slate-600 border border-slate-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-orange" />
                  <span>GPS Container</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-navy" />
                  <span>Zero Delay SLA</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/9350895820?text=Hello%20I%20just%20requested%20a%20quote%20on%20your%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full font-semibold text-sm transition shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full font-semibold text-sm hover:bg-slate-200 transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-surface border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition"
                  />
                  {errors.fullName && (
                    <p className="text-rose-500 text-xs mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-sm font-medium">
                      +91
                    </span>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      className="w-full px-3.5 py-2.5 bg-surface border border-slate-300 rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Moving From (City / Area) *
                  </label>
                  <input
                    {...register("fromCity")}
                    type="text"
                    placeholder="e.g. Chennai (Anna Nagar)"
                    className="w-full px-3.5 py-2.5 bg-surface border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition"
                  />
                  {errors.fromCity && (
                    <p className="text-rose-500 text-xs mt-1">{errors.fromCity.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Moving To (Destination) *
                  </label>
                  <input
                    {...register("toCity")}
                    type="text"
                    placeholder="e.g. Bangalore / Hyderabad"
                    className="w-full px-3.5 py-2.5 bg-surface border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition"
                  />
                  {errors.toCity && (
                    <p className="text-rose-500 text-xs mt-1">{errors.toCity.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Move Size & Volume *
                  </label>
                  <select
                    {...register("moveSize")}
                    className="w-full px-3.5 py-2.5 bg-surface border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition"
                  >
                    {MoveSizeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.moveSize && (
                    <p className="text-rose-500 text-xs mt-1">{errors.moveSize.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Moving Date
                  </label>
                  <input
                    {...register("moveDate")}
                    type="date"
                    className="w-full px-3.5 py-2.5 bg-surface border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition"
                  />
                </div>
              </div>

              {/* Trust disclaimer */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <span>
                  <strong>100% Free & No Obligation:</strong> Guaranteed fixed rates, free virtual survey, zero hidden move-day charges.
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-orange to-amber-500 hover:from-orange-hover hover:to-orange text-white font-bold rounded-full shadow-glow-orange hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
              >
                {submitting ? (
                  <span>Calculating Best Route & Rate...</span>
                ) : (
                  <>
                    <span>Get Instant Free Quote</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
