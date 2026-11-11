import { companyData } from "@/data/company";
import { ShieldCheck, Award, Users, Truck, Clock, CheckCircle2, HeartHandshake, ArrowRight, TrendingUp, Building2, MapPin, PhoneCall, Mail, Navigation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HowItWorksAnimatic from "@/components/about/HowItWorksAnimatic";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

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
                <div className="text-lg font-extrabold text-navy font-heading mt-0.5">{companyData.stats.googleRating}★</div>
                <div className="text-[11px] text-slate-500 font-medium whitespace-nowrap">Over {companyData.stats.totalReviews} Genuine Reviews</div>
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
      <section className="py-10 sm:py-14 bg-white">
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

      {/* Relocation Assurance & Nationwide Infrastructure */}
      <section className="py-8 sm:py-10 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 text-navy border border-slate-200/90 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3.5 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-wider border border-orange/20">
                <ShieldCheck className="w-3.5 h-3.5 text-orange" />
                <span>Our Relocation Assurance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy tracking-tight">
                Safe, Insured &amp; GPS-Tracked Relocation Across 140+ Cities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From specialized multi-layer packing and custom crating to sealed weatherproof container trucks, every relocation is executed by our certified in-house crew with 100% transit insurance and zero hidden fees.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  100% Transit Safe Protocol
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/70">
                  <Truck className="w-3.5 h-3.5 text-orange shrink-0" />
                  Company-Owned Container Fleet
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/70">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Guaranteed On-Time Dispatch
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative z-10 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-orange hover:bg-orange-hover text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-glow-orange hover:shadow-xl whitespace-nowrap active:scale-98 shrink-0 cursor-pointer"
            >
              <span>Get A Free Moving Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Milestones & Growth Stats — Rich Modern Card Grid */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 border-y border-slate-200/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy tracking-tight">
              Milestones That Define Our Excellence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-2.5 leading-relaxed">
              Every number reflects our relentless commitment to safe, reliable, and stress-free relocation for families and businesses.
            </p>
          </div>

          {/* 4 Feature Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
            {/* Stat 1: 15+ Years of Relocation Excellence */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-orange/40 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange/10 text-orange border border-orange/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-orange group-hover:to-amber group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/90 px-3 py-1 rounded-full">
                    Legacy
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-navy group-hover:text-orange transition-colors tracking-tight">
                  {companyData.stats.yearsExperience}
                </div>
                <div className="text-base sm:text-lg font-bold text-navy mt-1.5">
                  Years of Relocation Excellence
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Over 15+ years of specialized packing, handling, and pan-India highway moving expertise.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Industry Veteran
                </span>
              </div>
            </div>

            {/* Stat 2: 20+ Team Members */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-orange/40 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange/10 text-orange border border-orange/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-orange group-hover:to-amber group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/90 px-3 py-1 rounded-full">
                    Crew
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-navy group-hover:text-orange transition-colors tracking-tight">
                  20+
                </div>
                <div className="text-base sm:text-lg font-bold text-navy mt-1.5">
                  Team Members
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Certified in-house move supervisors, carpenters, and trained packing specialists.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Trained In-House
                </span>
              </div>
            </div>

            {/* Stat 3: 129% Fastest Growing Agency */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-orange/40 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange/10 text-orange border border-orange/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-orange group-hover:to-amber group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/90 px-3 py-1 rounded-full">
                    Growth
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-navy group-hover:text-orange transition-colors tracking-tight">
                  129%
                </div>
                <div className="text-base sm:text-lg font-bold text-navy mt-1.5">
                  Fastest Growing Agency
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Year-on-year expansion in fleet capacity, intercity routes, and client retention.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-lg border border-orange/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Rapid Scaling
                </span>
              </div>
            </div>

            {/* Stat 4: 253+ Completed Projects */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-orange/40 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange/10 text-orange border border-orange/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-orange group-hover:to-amber group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/90 px-3 py-1 rounded-full">
                    Execution
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-navy group-hover:text-orange transition-colors tracking-tight">
                  253+
                </div>
                <div className="text-base sm:text-lg font-bold text-navy mt-1.5">
                  Completed Projects
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Residential shifting, corporate relocations, and delicate asset logistics delivered safely.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% On-Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Animated Interactive 4-Step Journey */}
      <HowItWorksAnimatic />

      {/* Central Logistics Depot & Headquarters */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle ambient background glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>Physical Headquarters & Dispatch Depot</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
              Our Central Logistics Depot
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed">
              Visit our primary Chennai operations facility or connect directly with our round-the-clock dispatch supervisors.
            </p>
          </div>

          {/* 2-Column Depot Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Card: Hub Address & Direct Operational Channels (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-soft hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Header status bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open 24/7 • Active Fleet Dispatch
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                    IBA &amp; ISO Certified Hub
                  </span>
                </div>

                {/* Depot Title */}
                <div className="mt-5">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                    {companyData.name}
                  </h3>
                  <p className="text-xs text-orange font-bold uppercase tracking-wider mt-1">
                    Primary Operations &amp; Container Fleet Depot
                  </p>
                </div>

                {/* Address block with map pin */}
                <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 mt-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange/10 text-orange border border-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Facility Location
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-navy mt-1 leading-relaxed">
                      {companyData.address.full}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange hover:text-orange-hover mt-2.5 transition group cursor-pointer"
                    >
                      <span>Get Directions on Google Maps</span>
                      <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Direct Contact Channels Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                  {/* Phone Lines */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-orange/30 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Direct Dispatch
                      </span>
                    </div>
                    <a
                      href={`tel:${companyData.phones.primary}`}
                      className="text-xs sm:text-sm font-bold text-navy hover:text-orange transition block"
                    >
                      {companyData.phones.primaryFormatted}
                    </a>
                    <a
                      href={`tel:${companyData.phones.secondary}`}
                      className="text-[11px] font-medium text-slate-500 hover:text-orange transition block mt-0.5"
                    >
                      Alt: {companyData.phones.secondaryFormatted}
                    </a>
                  </div>

                  {/* Email Support */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-orange/30 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Official Mail
                      </span>
                    </div>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-xs sm:text-sm font-bold text-navy hover:text-orange transition block truncate"
                    >
                      {companyData.email}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Fast 15-min inquiry response
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours Bar */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-navy">{companyData.workingHours}</span>
                  <span className="text-slate-500 hidden sm:inline"> — Active highway vehicle transit &amp; customer assistance</span>
                </div>
              </div>
            </div>

            {/* Right Card: Supervisor Consultation & Facility Highlights (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-navy via-navy to-navy-900 rounded-3xl p-7 sm:p-9 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-navy-800">
              {/* Decorative accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>On-Site Move Supervision</span>
                </div>

                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  Speak With A Senior Move Supervisor
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Planning a residential, vehicle, or commercial relocation? Visit our depot for an in-person planning session or connect instantly with our dispatch team.
                </p>

                {/* Facility Features Checklist */}
                <div className="space-y-2.5 mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Secure 15,000+ sq.ft warehousing facility</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24/7 CCTV surveillance &amp; hydraulic crane loading</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated carpentry &amp; multi-layer packing crew</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Weatherproof, satellite-tracked container fleet</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-orange hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
                >
                  <span>Request Free Depot Survey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition border border-white/15 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
                  <span>Instant WhatsApp Assistance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

