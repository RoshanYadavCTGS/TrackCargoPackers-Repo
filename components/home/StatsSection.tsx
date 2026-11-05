import { companyData } from "@/data/company";
import { Award, Users, Truck, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Award,
      value: companyData.stats.yearsExperience,
      label: "Years of Relocation Excellence",
      detail: "Operational since 2011",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      value: companyData.stats.satisfiedClients,
      label: "Happy Homes & Offices Shifted",
      detail: "Verified customer base",
      color: "from-orange to-amber",
    },
    {
      icon: Truck,
      value: companyData.stats.vehicles,
      label: "Container Fleet & Carriers",
      detail: "GPS-enabled all India network",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Star,
      value: `${companyData.stats.googleRating}★`,
      label: "Google Verified Rating",
      detail: `Over ${companyData.stats.totalReviews} genuine reviews`,
      color: "from-amber-400 to-orange",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-3">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white mb-3 shadow-md`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                {item.value}
              </span>
              <span className="font-semibold text-slate-800 text-xs sm:text-sm mt-1">
                {item.label}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {item.detail}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

