"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { companyData } from "@/data/company";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "Relocation Inquiry",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {}
    }, 600);
  };

  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>24x7 Customer Support & Dispatch</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight">
            Contact Track Cargo Packers & Movers
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Have a question about an upcoming relocation, transit insurance, or tracking? Our support desk is at your service around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange/15 rounded-full blur-2xl pointer-events-none" />

              <h2 className="font-heading font-extrabold text-2xl text-white mb-6">
                Central Operations Desk
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-orange">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Head Office Address
                    </div>
                    <div className="text-slate-200 mt-1 leading-relaxed">
                      {companyData.address.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-orange">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Direct Support & Dispatch
                    </div>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href={`tel:${companyData.phones.primary}`}
                          className="font-bold text-white hover:text-orange transition"
                        >
                          {companyData.phones.primaryFormatted} (Primary)
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${companyData.phones.secondary}`}
                          className="font-medium text-slate-300 hover:text-white transition"
                        >
                          {companyData.phones.secondaryFormatted} (Helpdesk)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-orange">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Email Inquiries
                    </div>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-slate-200 hover:text-orange transition font-medium block mt-1"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-orange">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Working Hours
                    </div>
                    <div className="text-slate-200 mt-1 font-medium">
                      {companyData.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
            <h2 className="font-heading font-extrabold text-2xl text-navy mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below and an assigned relocation manager will reply within 30 minutes.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-navy">Message Delivered!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Track Cargo Packers & Movers. One of our senior moving coordinators will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    reset();
                  }}
                  className="text-xs font-bold text-orange hover:underline pt-2"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Sharma"
                      {...register("name")}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.name ? "border-rose-500" : "border-slate-300"
                      } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      {...register("phone")}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="anand@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.email ? "border-rose-500" : "border-slate-300"
                      } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Subject *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Household Shifting to Bangalore"
                      {...register("subject")}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.subject ? "border-rose-500" : "border-slate-300"
                      } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the inventory, preferred date, pickup and drop locations..."
                    {...register("message")}
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors.message ? "border-rose-500" : "border-slate-300"
                    } text-slate-900 text-sm focus:outline-none focus:border-orange transition`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Regional Branch Offices Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-2 border border-orange/20">
              <Building2 className="w-3.5 h-3.5 text-orange" />
              <span>11 Nationwide Branch Hubs</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-navy">
              Looking for a Regional Branch Office?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Find complete contact info and addresses for our offices in Hyderabad, Mumbai, Chennai, Ahmedabad, Bangalore, Delhi, Jaipur, Faridabad, Chandigarh, and Visakhapatnam.
            </p>
          </div>
          <Link
            href="/branches"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white text-xs font-bold uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition flex items-center gap-2"
          >
            <span>View All 11 Branches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

