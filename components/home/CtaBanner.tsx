"use client";

import { useState } from "react";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { companyData } from "@/data/company";
import QuoteModal from "@/components/shared/QuoteModal";

export default function CtaBanner() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-navy-950 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-navy-900 via-navy-800/90 to-navy-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/15 border border-orange/30 text-orange font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Relocation Booking</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
              Ready for a Seamless, Zero-Damage Move?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
              Book your free volumetric home assessment today. Get a guaranteed binding quote with 100% transit insurance included.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Transit Insurance
              </span>
              <span>•</span>
              <span>Dedicated Relocation Manager</span>
              <span>•</span>
              <span>Zero Hidden Charges</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${companyData.phones.primary}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange" />
              <span>{companyData.phones.primaryFormatted}</span>
            </a>

            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}

