import Link from "next/link";
import { citiesData } from "@/data/cities";
import { MapPin, Navigation, ArrowRight, Building, Truck } from "lucide-react";

export default function RoutesLocalities() {
  const chennai = citiesData.find((c) => c.slug === "chennai") || citiesData[0];

  const popularIntercityRoutes = [
    { from: "Chennai", to: "Bangalore", time: "Same Day / 24 Hrs", distance: "350 KM" },
    { from: "Chennai", to: "Hyderabad", time: "24 - 48 Hrs", distance: "630 KM" },
    { from: "Chennai", to: "Coimbatore", time: "24 Hrs", distance: "510 KM" },
    { from: "Chennai", to: "Mumbai", time: "2 - 3 Days", distance: "1,340 KM" },
    { from: "Chennai", to: "Delhi NCR", time: "3 - 4 Days", distance: "2,200 KM" },
    { from: "Chennai", to: "Kolkata", time: "3 - 4 Days", distance: "1,670 KM" },
    { from: "Chennai", to: "Pune", time: "2 - 3 Days", distance: "1,190 KM" },
    { from: "Chennai", to: "Kochi / Kerala", time: "24 - 36 Hrs", distance: "690 KM" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Pan-India Transit Corridors</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
            High-Frequency Moving Routes & Localities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Daily scheduled container departures from Chennai connecting every metro, tier-1, and tier-2 city across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Intercity Corridors */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-orange" />
                <h3 className="font-heading font-bold text-xl text-navy">
                  Express Intercity Relocation Routes
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Daily Departures
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {popularIntercityRoutes.map((route, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200/80 hover:border-orange/50 transition-colors flex items-center justify-between group shadow-sm"
                >
                  <div>
                    <div className="font-bold text-sm text-navy group-hover:text-orange transition-colors flex items-center gap-1.5">
                      <span>{route.from}</span>
                      <span className="text-orange">→</span>
                      <span>{route.to}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {route.distance} • Transit: {route.time}
                    </div>
                  </div>
                  <Link
                    href={`/contact?from=${route.from}&to=${route.to}`}
                    className="p-1.5 rounded-lg bg-slate-50 group-hover:bg-orange group-hover:text-white text-slate-400 transition"
                    aria-label={`Inquire move ${route.from} to ${route.to}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Chennai Metropolitan Localities */}
          <div className="lg:col-span-5 bg-navy text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-orange font-bold text-xs uppercase tracking-wider mb-2">
                <Building className="w-4 h-4" />
                <span>Local Shifting In Chennai</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                100% Coverage Across Chennai & Suburbs
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Fast 2-hour dispatch for local household and apartment shifting across all major residential sectors:
              </p>

              {/* Localities tags */}
              <div className="flex flex-wrap gap-2">
                {chennai.keyLocalities.map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:bg-white/20 transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-orange" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Chennai Central Hub</div>
                <div className="text-sm font-bold text-white">Thiruverkadu & OMR Depots</div>
              </div>
              <Link
                href="/branches"
                className="px-4 py-2 rounded-xl bg-orange hover:bg-orange-hover text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>View Branches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

