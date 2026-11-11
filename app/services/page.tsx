import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import RateListTable from "@/components/services/RateListTable";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Relocation & Shifting Services - Track Cargo Packers & Movers",
  description:
    "Explore our complete range of shifting services in Chennai and across India: Household moving, corporate shifting, car carriers, bike transport, and climate-controlled warehousing.",
};

export default function ServicesPage() {
  return (
    <div className="bg-surface">
      {/* Header */}
      <section className="bg-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/20 text-orange font-bold text-xs uppercase tracking-wider mb-4">
            <span>Enterprise & Domestic Logistics</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Comprehensive Relocation Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Every relocation is managed by specialized logistics crews equipped with proprietary 4-layer packaging, hydraulic container carriers, and dedicated route pilots.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pt-8 sm:pt-12 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {servicesData.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Image side */}
                  <div
                    className={`lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  {/* Text side */}
                  <div
                    className={`lg:col-span-7 space-y-4 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-bold text-orange uppercase tracking-wider">
                        {service.tagline}
                      </span>
                      <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {service.pricingRange}
                      </span>
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href={`/${service.slug}`}
                        className="px-5 py-2.5 rounded-xl bg-navy hover:bg-navy-800 text-white text-xs font-bold transition flex items-center gap-2 shadow-sm"
                      >
                        <span>View Detailed Process & FAQs</span>
                        <ArrowRight className="w-3.5 h-3.5 text-orange" />
                      </Link>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>100% Insured</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packers and Movers Rate List for Nearby in India */}
      <RateListTable />
    </div>
  );
}

