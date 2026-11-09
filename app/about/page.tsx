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
      <section className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-wider border border-orange/20">
                <Award className="w-3.5 h-3.5 text-orange" />
                <span>15+ Years Of Relocation Trust</span>
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight leading-tight">
                Pioneering <span className="text-orange">Stress-Free</span> Moving Across India
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                Founded in Chennai with a single truck and a vision to eliminate moving anxieties, Track Cargo has evolved into one of South India&apos;s most reputable logistics networks, relocating over <span className="font-semibold text-navy">165,000 households and businesses</span>.
              </p>
            </div>

            {/* Right-side credibility badges - fits in existing horizontal row on desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-center shadow-xs">
                <div className="flex items-center justify-center gap-0.5 text-amber-500 text-xs">
                  {"★".repeat(5)}
                </div>
                <div className="text-lg font-extrabold text-navy font-heading mt-0.5">4.9 / 5.0</div>
                <div className="text-[11px] text-slate-500 font-medium whitespace-nowrap">4,850+ Google Reviews</div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-center shadow-xs">
                <div className="text-[10px] font-bold text-orange uppercase tracking-wider">IBA &amp; ISO 9001</div>
                <div className="text-base font-extrabold text-navy font-heading mt-0.5 whitespace-nowrap">Certified Movers</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Govt. Approved
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar matching strip with trust pillars - exact navbar height */}
        <div className="w-full min-h-[72px] lg:h-[80px] py-3 lg:py-0 bg-navy border-t border-navy-800 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-xs font-bold leading-tight truncate">100% Transit Safe</div>
                  <div className="text-slate-400 text-[10px] leading-tight hidden sm:block">Zero damage protocol</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-xs font-bold leading-tight truncate">On-Time Delivery</div>
                  <div className="text-slate-400 text-[10px] leading-tight hidden sm:block">Guaranteed dispatch</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-xs font-bold leading-tight truncate">GPS Fleet</div>
                  <div className="text-slate-400 text-[10px] leading-tight hidden sm:block">Live satellite tracking</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-xs font-bold leading-tight truncate">Zero Hidden Fees</div>
                  <div className="text-slate-400 text-[10px] leading-tight hidden sm:block">100% transparent quote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Legacy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative pb-6 sm:pb-0">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                <Image
                  src="/about1.jpg"
                  alt="Track Cargo Logistics Fleet"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-2 right-2 sm:-bottom-6 sm:right-2 lg:-right-6 bg-navy text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-white/10 max-w-[220px] sm:max-w-xs z-10">
                <div className="text-2xl sm:text-3xl font-extrabold text-orange font-heading">165,000+</div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium leading-snug">
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

