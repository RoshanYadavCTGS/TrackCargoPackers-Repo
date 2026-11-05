import { companyData } from "@/data/company";
import { ShieldCheck, Award, Users, Truck, Clock, CheckCircle2, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us - 15+ Years of Relocation Excellence in Chennai",
  description:
    "Learn about Track Cargo Packers & Movers, our founding story in Chennai, infrastructure, trained crew, and commitment to zero-damage shifting across India.",
};

export default function AboutPage() {
  return (
    <div className="bg-surface">
      {/* Page Header */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-orange/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Award className="w-3.5 h-3.5 text-orange" />
              <span>15+ Years Of Relocation Trust</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Pioneering Stress-Free Moving Across India
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Founded in Chennai with a single truck and a vision to eliminate moving anxieties, Track Cargo has evolved into one of South India&apos;s most reputable logistics networks, relocating over 165,000 households and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Legacy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Track Cargo Logistics Center"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-3xl shadow-xl border border-white/10 hidden sm:block max-w-xs">
                <div className="text-3xl font-extrabold text-orange font-heading">165,000+</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
                  Verified relocations executed with zero loss guarantee.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-orange uppercase tracking-wider">
                Our Journey & Principles
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
                Built On Transparency, Rigor & Empathy
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Relocating isn&apos;t just moving furniture; it is transitioning lives. We recognized early on that the Indian moving industry was fraught with unvetted subcontractors, delayed deliveries, and surprise pricing demands.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track Cargo was established to redefine that reality. We invested in our own covered container fleet, established in-house carpenter training academies, and partnered with premier transit insurers to deliver complete peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Zero Hidden Charges Guarantee",
                  "In-House Uniformed Crews",
                  "100% Paperless Transit Insurance",
                  "Real-Time Satellite GPS Alerts",
                  "ISO 9001:2015 Process Audits",
                  "24x7 Direct Dispatch Desk",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/mission-vision"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange hover:text-orange-hover transition-colors group"
                >
                  <span>Read Our Full Mission &amp; Vision Statement</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Spotlight */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span>Our Principles &amp; Roadmap</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Mission &amp; Vision
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Discover our commitment to providing top-quality packing, moving, warehouse, and safe relocation services across India with industry-leading client satisfaction.
              </p>
            </div>

            <Link
              href="/mission-vision"
              className="relative z-10 px-6 py-3.5 rounded-xl bg-orange hover:bg-orange-hover text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-glow-orange whitespace-nowrap"
            >
              <span>Explore Mission &amp; Vision</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-orange">
                {companyData.stats.yearsExperience}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">Years of Service</div>
              <div className="text-xs text-slate-400">Headquartered in Chennai</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
                {companyData.stats.satisfiedClients}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">Relocations Completed</div>
              <div className="text-xs text-slate-400">Domestic & Corporate</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-amber-400">
                {companyData.stats.vehicles}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">Fleet Container Units</div>
              <div className="text-xs text-slate-400">Nationwide Network</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-emerald-400">
                {companyData.stats.googleRating}★
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">Customer Rating</div>
              <div className="text-xs text-slate-400">{companyData.stats.totalReviews} Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & HQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
              Our Central Logistics Depot
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Visit our primary Chennai hub or reach out to our senior operations dispatchers.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <h3 className="font-heading font-bold text-xl text-navy">{companyData.name}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-md">
                {companyData.address.full}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <span>📞 {companyData.phones.primaryFormatted}</span>
                <span>✉️ {companyData.email}</span>
                <span>⏱️ {companyData.workingHours}</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-orange hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-md whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

