import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";

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

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner with Logistics Trucks Background */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop"
            alt="Track Cargo Logistics Fleet"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/90" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
            Mission &amp; Vision
          </h1>

          {/* Breadcrumb matching exact reference screenshot */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-3 font-medium uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-orange transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/about-us" className="hover:text-orange transition-colors">
              About us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-orange">Mission &amp; Vision</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 shadow-lg border border-slate-100 space-y-10 sm:space-y-12">
            {/* Our Mission */}
            <article className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Our Mission :
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed sm:leading-8 font-normal">
                We&apos;re Best Relocation Company through the delivery of top quality and superior services in packing and moving, loading and unloading, warehouse and transportation that is tailor-made harmonious with client&apos;s demand. We&apos;re deliver relocation with logistics and Moving so on deliver our recognized clients with one stop solution by achieving functional excellence and industry leading client satisfaction with Safety.
              </p>
            </article>

            {/* Middle Feature Image - 2 Movers with boxes in apartment */}
            <div className="relative w-full h-[240px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/images/mission-vision.jpg"
                alt="Track Cargo Movers carefully packing and shifting household goods"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>

            {/* Our Vision */}
            <article className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Our Vision :
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed sm:leading-8 font-normal">
                Our vision is to grow as a client- centric organization that provides the top most services to everyone. Making it To be the most popular, cost-effective, and best packers and movers in India, contributing to a change in quality of life by implementing environmentally maintainable methods. priority to serve each consumer as an individual. To make sure the smooth transfer and movement of their employees by providing domestic service but also housing and helping them settle in the new city.
              </p>
            </article>

            {/* Highlights Grid */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-navy font-heading">100% Transit Safety</h3>
                  <p className="text-xs text-slate-500 mt-1">Multi-layer protective packaging &amp; comprehensive transit coverage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-navy font-heading">Trained Moving Crews</h3>
                  <p className="text-xs text-slate-500 mt-1">In-house uniformed professionals experienced in handling delicate goods.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-navy font-heading">Pan-India Reach</h3>
                  <p className="text-xs text-slate-500 mt-1">Direct connected branches and GPS container fleet nationwide.</p>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action Card */}
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  Ready for a Seamless, Safe Move?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Speak directly with our moving supervisors for instant free estimates.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${companyData.phones.primary}`}
                  className="px-5 py-2.5 rounded-xl bg-white text-navy font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition flex items-center gap-2 shadow"
                >
                  <Phone className="w-3.5 h-3.5 text-orange" />
                  <span>{companyData.phones.primaryFormatted}</span>
                </a>

                <Link
                  href="/enquiry"
                  className="px-5 py-2.5 rounded-xl bg-orange hover:bg-orange-hover text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow-glow-orange"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

