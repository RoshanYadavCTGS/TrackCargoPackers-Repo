import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import {
  PackageCheck,
  Truck,
  Home,
  Building2,
  Car,
  Bike,
  Globe,
  Warehouse,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

const iconMap: Record<string, any> = {
  PackageCheck,
  Truck,
  Home,
  Building2,
  Car,
  Bike,
  Globe,
  Warehouse,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <span>Specialized Relocation Portfolio</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
            End-to-End Moving Solutions Tailored to You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From single-room apartments to multi-floor corporate IT campuses, our specialized logistics divisions ensure 100% damage-free transit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || PackageCheck;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Image Header with Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-orange flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold bg-orange/90 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">
                      {service.pricingRange}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading font-bold text-lg text-navy group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {service.shortBenefit}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 flex-grow">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/${service.slug}`}
                      className="text-xs font-bold text-navy group-hover:text-orange transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      Insured
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all banner */}
        <div className="mt-12 text-center">
          <Link
            href="/service"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-navy-800 shadow-md hover:shadow-lg transition-all"
          >
            <span>View All Detailed Moving Solutions</span>
            <ArrowRight className="w-4 h-4 text-orange" />
          </Link>
        </div>
      </div>
    </section>
  );
}

