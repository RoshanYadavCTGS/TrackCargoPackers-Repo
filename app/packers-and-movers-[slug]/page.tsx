import { notFound } from "next/navigation";
import Link from "next/link";
import { citiesData } from "@/data/cities";
import { companyData } from "@/data/company";
import {
  MapPin,
  Star,
  ShieldCheck,
  Phone,
  Truck,
  ArrowRight,
  CheckCircle2,
  Navigation,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return citiesData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = citiesData.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
  };
}

export default async function CityLandingPage({ params }: Props) {
  const { slug } = await params;
  const city = citiesData.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="bg-surface">
      {/* City Hero */}
      <section className="bg-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/20 text-orange font-bold text-xs uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>{city.state} Regional Logistics Hub</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Packers and Movers in {city.cityName}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              {city.intro}
            </p>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-300">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-bold text-white text-sm">{city.rating}</span>
                <span className="text-slate-400">({city.reviewCount} Reviews)</span>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Insured Goods
              </span>
              <span>•</span>
              <span>Hub: {city.hubLocation}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/enquiry"
                className="px-6 py-3 rounded-xl bg-orange hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-glow-orange flex items-center gap-2"
              >
                <span>Book Move in {city.cityName}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${city.phone}`}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/20 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange" />
                <span>Call {city.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Routes & Localities */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Localities Covered */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-bold text-orange uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Doorstep Pickup Across City</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                Localities Served in {city.cityName}
              </h2>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Our local dispatch vehicles operate daily across all residential and business sectors:
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {city.keyLocalities.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Popular Routes */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-bold text-orange uppercase tracking-wider mb-2">
                <Navigation className="w-4 h-4" />
                <span>Intercity Corridors</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                Popular Relocation Routes
              </h2>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Direct container trucks connecting {city.cityName} with major metropolises:
              </p>

              <div className="space-y-3">
                {city.popularRoutes.map((route, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-orange/40 transition"
                  >
                    <div className="font-bold text-sm text-navy flex items-center gap-2">
                      <Truck className="w-4 h-4 text-orange" />
                      <span>{route}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-orange hover:underline flex items-center gap-1"
                    >
                      <span>Inquire Rate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

