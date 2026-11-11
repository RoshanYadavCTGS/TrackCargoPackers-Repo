import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  Sparkles,
  Info,
  IndianRupee,
} from "lucide-react";
import { companyData } from "@/data/company";

export interface RateRow {
  shiftingType: string;
  badge?: string;
  rates: {
    d50_150: string;
    d150_400: string;
    d400_800: string;
    d800_1200: string;
    d1200_1700: string;
    d1700_2500: string;
    d2500_3500: string;
  };
}

export const rateListData: RateRow[] = [
  {
    shiftingType: "1 BHK house shifting charges",
    badge: "Most Popular",
    rates: {
      d50_150: "15k to 25k",
      d150_400: "20k to 28k",
      d400_800: "28k to 38k",
      d800_1200: "35k to 48k",
      d1200_1700: "45k to 58k",
      d1700_2500: "55k to 85k",
      d2500_3500: "85k to 150k",
    },
  },
  {
    shiftingType: "2 BHK house shifting cost",
    rates: {
      d50_150: "25k to 35k",
      d150_400: "28k to 38k",
      d400_800: "35k to 45k",
      d800_1200: "45k to 55k",
      d1200_1700: "55k to 75k",
      d1700_2500: "75k to 95k",
      d2500_3500: "95k to 150k",
    },
  },
  {
    shiftingType: "3 BHK house relocation cost",
    rates: {
      d50_150: "35k to 45k",
      d150_400: "45k to 55k",
      d400_800: "55k to 65k",
      d800_1200: "65k to 75k",
      d1200_1700: "75k to 85k",
      d1700_2500: "85k to 120k",
      d2500_3500: "120k to 165k",
    },
  },
  {
    shiftingType: "4 BHK house shifting cost",
    rates: {
      d50_150: "45k to 55k",
      d150_400: "55k to 65k",
      d400_800: "65k to 75k",
      d800_1200: "75k to 85k",
      d1200_1700: "85k to 95k",
      d1700_2500: "95k to 130k",
      d2500_3500: "130k to 175k",
    },
  },
  {
    shiftingType: "5 BHK house shifting charges",
    rates: {
      d50_150: "55k to 65k",
      d150_400: "65k to 75k",
      d400_800: "75k to 85k",
      d800_1200: "85k to 95k",
      d1200_1700: "95k to 105k",
      d1700_2500: "105k to 120k",
      d2500_3500: "130k to 180k",
    },
  },
  {
    shiftingType: "Car Transport cost",
    badge: "Auto Carrier",
    rates: {
      d50_150: "8k to 15k",
      d150_400: "15k to 20k",
      d400_800: "20k to 25k",
      d800_1200: "25k to 35k",
      d1200_1700: "35k to 45k",
      d1700_2500: "45k to 55k",
      d2500_3500: "55k to 65k",
    },
  },
  {
    shiftingType: "Few Office items shifting cost",
    rates: {
      d50_150: "15k to 25k",
      d150_400: "20k to 28k",
      d400_800: "28k to 38k",
      d800_1200: "35k to 48k",
      d1200_1700: "45k to 58k",
      d1700_2500: "55k to 85k",
      d2500_3500: "85k to 150k",
    },
  },
];

export default function RateListTable() {
  return (
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-t border-slate-200/80 relative overflow-hidden" id="rate-list">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange/5 via-amber/5 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Arrow Accents matching user's screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3.5 border border-orange/20 shadow-xs">
            <IndianRupee className="w-3.5 h-3.5" />
            <span>Transparent Pricing Policy</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-orange">→</span>
            <span>Packers and Movers Rate List for Nearby in India</span>
            <span className="text-orange">←</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed">
            Standard estimated moving tariffs across highway distance slabs. All rates cover multi-layer packing, transport container, and careful handling.
          </p>
        </div>

        {/* Beautiful Rate Card Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Mobile scroll hint */}
          <div className="lg:hidden bg-amber-50 px-4 py-2 border-b border-amber-200/70 text-[11px] text-amber-900 font-semibold flex items-center justify-between">
            <span>⇄ Swipe horizontally to view all distance slabs</span>
            <span className="text-orange font-bold">7 Slabs</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gradient-to-r from-navy via-navy to-navy-900 text-white text-xs sm:text-sm font-heading">
                  <th className="py-4 px-5 sm:px-6 font-extrabold border-r border-navy-800 tracking-wider sticky left-0 bg-navy z-20 shadow-[2px_0_6px_rgba(0,0,0,0.2)]">
                    Shifting Type
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center border-r border-navy-800/60 whitespace-nowrap">
                    50 to 150 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center border-r border-navy-800/60 whitespace-nowrap">
                    150 to 400 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center border-r border-navy-800/60 whitespace-nowrap">
                    400 to 800 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center border-r border-navy-800/60 whitespace-nowrap">
                    800 to 1200 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center border-r border-navy-800/60 whitespace-nowrap">
                    1200 to 1700 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center border-r border-navy-800/60 whitespace-nowrap">
                    1700 to 2500 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 font-bold text-center whitespace-nowrap">
                    2500 to 3500 Km
                    <span className="block text-[11px] font-normal text-slate-300">(Rs.)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-slate-200">
                {rateListData.map((row, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={idx}
                      className={`group transition-colors hover:bg-orange/5 ${
                        isEven ? "bg-white" : "bg-slate-100/70"
                      }`}
                    >
                      <td className={`py-4 px-5 sm:px-6 font-bold text-navy border-r border-slate-200/70 sticky left-0 z-10 shadow-[2px_0_6px_rgba(0,0,0,0.06)] ${
                        isEven ? "bg-white group-hover:bg-[#FFF9F5]" : "bg-slate-100 group-hover:bg-[#FFF9F5]"
                      }`}>
                        <div className="flex items-center gap-2">
                          <span>{row.shiftingType}</span>
                          {row.badge && (
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange/10 text-orange border border-orange/20 hidden sm:inline-block">
                              {row.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 border-r border-slate-200/70 whitespace-nowrap">
                        {row.rates.d50_150}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 border-r border-slate-200/70 whitespace-nowrap">
                        {row.rates.d150_400}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 border-r border-slate-200/70 whitespace-nowrap">
                        {row.rates.d400_800}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 border-r border-slate-200/70 whitespace-nowrap">
                        {row.rates.d800_1200}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 border-r border-slate-200/70 whitespace-nowrap">
                        {row.rates.d1200_1700}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 border-r border-slate-200/70 whitespace-nowrap">
                        {row.rates.d1700_2500}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-semibold text-slate-700 whitespace-nowrap">
                        {row.rates.d2500_3500}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner with Inclusions and Call to Action */}
          <div className="bg-slate-50 border-t border-slate-200 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Multi-Layer Corrugated Packing Included
              </span>
              <span className="inline-flex items-center gap-1.5 text-navy">
                <ShieldCheck className="w-4 h-4 text-orange shrink-0" />
                Transit Insurance Cover Available
              </span>
              <span className="inline-flex items-center gap-1.5 text-blue-700">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                Real-Time GPS Highway Tracking
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/enquiry"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-1.5"
              >
                <span>Book Free Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`tel:${companyData.phones.primary}`}
                className="hidden sm:inline-flex px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-navy text-xs font-bold transition border border-slate-300 items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-orange" />
                <span>{companyData.phones.primaryFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Note disclaimer */}
        <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
          * Note: Rates are estimated indicators based on standard volume and highway tolls. Final binding quotation is provided after our free physical or video volumetric survey.
        </p>
      </div>
    </section>
  );
}

