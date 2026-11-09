import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Telescope,
  Truck,
  Compass,
  Award,
  Sparkles,
  Clock,
  Users,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision - Track Cargo Packers and Movers",
  description:
    "Explore the Mission and Vision of Track Cargo Packers and Movers: delivering top quality packing, moving, loading, unloading, warehouse, and safe relocation services across India.",
  keywords: [
    "track cargo mission and vision",
    "track cargo packers movers mission",
    "packers and movers vision",
    "trusted relocation company india",
  ],
  alternates: {
    canonical: "https://trackcargopackers.in/mission-vision",
  },
};

/**
 * --------------------------------------------------------------------------
 * PAGE CONFIGURATION / IMAGE CUSTOMIZATION
 * To update the featured image, simply change `featuredImage` and `featuredImageAlt` below.
 * You can use any local image path in /public (e.g., "/images/mission-vision.jpg")
 * or any remote image URL configured in next.config.ts.
 * --------------------------------------------------------------------------
 */
const missionVisionConfig = {
  // Main showcase image (Change this path anytime to update the image)
  featuredImage: "/images/mission.jpg",
  featuredImageAlt: "Track Cargo professional movers carefully packing and shifting household goods",
  badgeText: "15+ Years Of Relocation Trust",
  experienceYears: "15+ Years",
  movesCompleted: "165,000+",
  citiesCovered: "140+ Cities",
  safetyScore: "99.8%",
};

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner with Seamless Tri-Image Composite from Gallery Only (No Blur, No Harsh Seams) */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Layer 1: Left Image (Real Packing Operations) - 100% sharp base */}
          <div className="absolute inset-y-0 left-0 w-[52%] z-0">
            <Image
              src="/gallery/gal15.jpeg"
              alt="Track Cargo Packing Operations"
              fill
              priority
              className="object-cover object-center"
              sizes="52vw"
            />
          </div>

          {/* Layer 2: Center Image (Loaded Moving Truck) - dissolves directly on top of Layer 1 */}
          <div
            className="absolute inset-y-0 left-[26%] w-[50%] z-[1]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
            }}
          >
            <Image
              src="/gallery/gal9.jpeg"
              alt="Track Cargo Moving Truck Fleet"
              fill
              priority
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>

          {/* Layer 3: Right Image (Vehicle Carrier Transport) - dissolves directly on top of Layer 2 */}
          <div
            className="absolute inset-y-0 right-0 w-[48%] z-[2]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
            }}
          >
            <Image
              src="/gallery/gal7.jpeg"
              alt="Track Cargo Vehicle Carrier Loading"
              fill
              priority
              className="object-cover object-center"
              sizes="48vw"
            />
          </div>

          {/* Targeted contrast scrim strictly for text legibility on the left - middle & right remain completely clear, vivid, and unblurred */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[48%] lg:w-[42%] bg-gradient-to-r from-navy-950/85 via-navy-950/50 to-transparent pointer-events-none z-[3]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white drop-shadow-md">
            Mission &amp; Vision
          </h1>

          {/* Breadcrumb matching exact reference screenshot (HOME › ABOUT US › MISSION & VISION) */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-100 mt-3 font-semibold uppercase tracking-wider drop-shadow-sm"
          >
            <Link href="/" className="hover:text-orange transition-colors">
              HOME
            </Link>
            <span className="text-slate-300 font-normal">›</span>
            <Link href="/about-us" className="hover:text-orange transition-colors">
              ABOUT US
            </Link>
            <span className="text-slate-300 font-normal">›</span>
            <span className="text-orange font-bold">MISSION &amp; VISION</span>
          </nav>
        </div>
      </section>

      {/* 1. Quick Stats & Trust Pillars Strip */}
      <section className="bg-white border-b border-slate-200/80 py-6 sm:py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange/30 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
                  {missionVisionConfig.movesCompleted}
                </div>
                <div className="text-xs text-slate-500 font-medium">Relocations Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/30 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
                  {missionVisionConfig.citiesCovered}
                </div>
                <div className="text-xs text-slate-500 font-medium">Pan-India Network</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
                  {missionVisionConfig.safetyScore}
                </div>
                <div className="text-xs text-slate-500 font-medium">Zero-Damage Safety Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-500/30 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
                  {missionVisionConfig.experienceYears}
                </div>
                <div className="text-xs text-slate-500 font-medium">Relocation Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Core Mission / Vision Cards */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Header Title introducing the philosophy */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-wider border border-orange/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guiding Principles of Track Cargo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Driven by Purpose, Guided by Quality &amp; Trust
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every relocation we undertake is backed by our unwavering mission to eliminate moving anxieties and our bold vision for India&apos;s most reliable, customer-centric, and sustainable logistics network.
            </p>
          </div>

          {/* Cards Grid: Our Mission & Our Vision side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* OUR MISSION CARD */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange border border-orange/20 flex items-center justify-center shadow-xs">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider border border-orange/20">
                    Our Mission
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight">
                    Delivering Excellence With Safety &amp; Integrity
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    We&apos;re Best Relocation Company through the delivery of top quality and superior services in packing and moving, loading and unloading, warehouse and transportation that is tailor-made harmonious with client&apos;s demand. We&apos;re deliver relocation with logistics and Moving so on deliver our recognized clients with one stop solution by achieving functional excellence and industry leading client satisfaction with Safety.
                  </p>
                </div>

                {/* Key Mission Pillars */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>Tailor-Made Harmony:</strong> Customized shifting schedules and vehicle allocations aligned with client demands.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>Functional Safety:</strong> Multi-layer protective packaging for fragile items, glassware, and electronics.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>One-Stop Solution:</strong> Complete end-to-end relocation spanning packing, moving, storage, and unboxing.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* OUR VISION CARD */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center shadow-xs">
                    <Telescope className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-200">
                    Our Vision
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight">
                    Shaping the Future of Sustainable Relocation
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Our vision is to grow as a client-centric organization that provides the top most services to everyone. Making it To be the most popular, cost-effective, and best packers and movers in India, contributing to a change in quality of life by implementing environmentally maintainable methods. priority to serve each consumer as an individual. To make sure the smooth transfer and movement of their employees by providing domestic service but also housing and helping them settle in the new city.
                  </p>
                </div>

                {/* Key Vision Pillars */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>Client-Centric Priority:</strong> Valuing each client as an individual with personalized care and dedicated managers.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>Environmentally Sustainable:</strong> Clean logistics, reusable containers, and eco-conscious packing materials.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>Pan-India Settling Support:</strong> Easing employee and domestic transfers with holistic settlement assistance.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. FEATURED SHOWCASE IMAGE (EASILY CUSTOMIZABLE & UPDATABLE) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange">
                  Fleet &amp; Packaging Operations
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mt-1">
                  Professional Packing &amp; Moving in Action
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Transit Safe Protocol</span>
              </div>
            </div>

            {/*
              NOTE: To update or replace this image, update `featuredImage` in `missionVisionConfig` at the top of this file!
            */}
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <Image
                src={missionVisionConfig.featuredImage}
                alt={missionVisionConfig.featuredImageAlt}
                fill
                priority
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />

              {/* Floating badge on top of image */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-navy-950/90 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-white/15 shadow-lg">
                <Award className="w-4 h-4 text-orange" />
                <span>{missionVisionConfig.badgeText}</span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 text-center mt-3">
              Track Cargo Packers &amp; Movers — Certified On-Site Packing &amp; Shifting Fleet
            </p>
          </div>

          {/* 4. Core Values Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
                Our 4 Pillars of Operational Trust
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                How our mission and vision translate into everyday peace-of-mind for our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-navy font-heading mb-1">100% Transit Safe</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Multi-tier bubble wrapping, edge guards, and waterproof containers safeguard every possession.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-navy font-heading mb-1">On-Time Dispatch</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Scheduled pickup and guaranteed transit windows backed by dedicated relocation coordinators.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-navy font-heading mb-1">In-House Trained Staff</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Verified, background-checked moving technicians with rigorous furniture handling training.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-navy font-heading mb-1">Transparent Pricing</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Clear, itemized volumetric quotes with no hidden charges, toll surcharges, or unexpected surprises.
                </p>
              </div>
            </div>
          </div>

          {/* 5. "Let Us Help You" Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-soft text-center max-w-4xl mx-auto">
            {/* Top Brand Orange Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-orange to-amber rounded-full mx-auto mb-6" />

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight mb-6">
              Let Us Help You
            </h2>

            {/* Body Text for Track Cargo */}
            <div className="space-y-4 max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed sm:leading-8">
              <p>
                Track Cargo Packers &amp; Movers can provide you with the resources, guidance, and dedicated support you need to achieve the best possible mobility experience for your family or your organization. We bring together personalized relocation solutions, expansive national reach across 140+ cities, innovative tracking technology, and an unmatched supply chain to transform household and corporate moving into a safe, seamless journey.
              </p>
              <p>
                If you would like to know more about how we can help you meet your evolving relocation needs and ensure that your move remains agile, damage-free, and cost-effective for the future, please contact us now.
              </p>
            </div>

            {/* Centered "Get In Touch" Button with Track Cargo Brand Orange */}
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-sm tracking-wider uppercase shadow-glow-orange hover:shadow-xl transition-all duration-200 active:scale-98 cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
