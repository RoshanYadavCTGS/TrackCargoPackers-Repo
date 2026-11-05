"use client";

import { useState } from "react";
import { branchLocations } from "@/data/branches";
import { citywiseItems, citywiseCategories } from "@/data/citywise";
import { companyData } from "@/data/company";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  ShieldCheck,
  ArrowRight,
  Search,
  MessageCircle,
  Navigation,
} from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/shared/QuoteModal";

export default function BranchesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<string>("Chennai");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // State for citywise section
  const [citywiseCategory, setCitywiseCategory] = useState<string>("all");
  const [citywiseSearch, setCitywiseSearch] = useState<string>("");

  const filteredBranches = branchLocations.filter(
    (b) =>
      b.branchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCitywise = citywiseItems.filter((item) => {
    const matchesCategory =
      citywiseCategory === "all" || item.category === citywiseCategory;
    const matchesSearch =
      citywiseSearch === "" ||
      item.title.toLowerCase().includes(citywiseSearch.toLowerCase()) ||
      item.cityName.toLowerCase().includes(citywiseSearch.toLowerCase()) ||
      item.slug.toLowerCase().includes(citywiseSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3 border border-orange/20">
            <Building2 className="w-4 h-4 text-orange" />
            <span>Pan-India Logistics Infrastructure</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight">
            Our Nationwide Branch Network
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            With 11 verified regional office hubs and dispatch terminals across India, Track Cargo ensures seamless container routing, zero midway transshipment, and local on-ground support.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search branch offices (e.g. Mumbai, Delhi, Ahmedabad...)"
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm placeholder-slate-400 shadow-soft focus:outline-none focus:border-orange transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white rounded-3xl p-7 sm:p-8 border ${
                branch.isHeadquarters
                  ? "border-orange shadow-lg ring-2 ring-orange/20"
                  : "border-slate-200 shadow-soft hover:shadow-xl hover:-translate-y-1"
              } transition-all duration-300 flex flex-col justify-between relative group`}
            >
              {branch.isHeadquarters && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-orange to-amber text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Head Office
                </div>
              )}

              <div>
                {/* Branch Office Title */}
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy group-hover:text-orange transition-colors mb-3 tracking-tight">
                  {branch.branchName}
                </h2>

                {/* Exact Address */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[72px] mb-6">
                  {branch.address}
                </p>

                {/* Phone & Email Section */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 text-orange flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-orange" />
                    </div>
                    <a
                      href={`tel:${branch.phone}`}
                      className="font-bold text-navy hover:text-orange transition"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 text-orange flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-orange" />
                    </div>
                    <a
                      href={`mailto:${branch.email}`}
                      className="font-medium text-slate-600 hover:text-orange transition"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>

                {/* Operations metadata */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange" />
                    {branch.workingHours}
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    {branch.fleetCapacity}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedBranch(branch.city);
                    setIsQuoteOpen(true);
                  }}
                  className="flex-grow py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white text-xs font-bold uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book from {branch.city}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${branch.phone.replace(/[^0-9]/g, "")}?text=Hello%20Track%20Cargo%20${encodeURIComponent(
                    branch.branchName
                  )}%2C%20I%20need%20moving%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition"
                  aria-label={`WhatsApp ${branch.branchName}`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-soft max-w-md mx-auto mt-8">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-navy">No Office Found</h3>
            <p className="text-xs text-slate-500 mt-1">
              No branch matches &quot;{searchQuery}&quot;. Try searching for Chennai, Mumbai, Bangalore, or Delhi.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* Citywise Packers and Movers Section */}
        {/* ========================================================================= */}
        <section className="mt-20 sm:mt-28 pt-12 border-t border-slate-200" id="citywise">
          {/* Navy & Orange Brand Banner Header */}
          <div className="w-full bg-gradient-to-r from-navy-900 via-navy to-navy-800 text-white text-center py-5 px-6 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/15 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-white/10">
                <Navigation className="w-3.5 h-3.5 text-orange" />
                <span>Pan-India Moving Network</span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-3xl tracking-tight text-white">
                Citywise Packers and Movers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                Verified local shifting, intercity container corridors, and dedicated regional fleet across India.
              </p>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {citywiseCategories.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? citywiseItems.length
                      : citywiseItems.filter((i) => i.category === cat.id).length;
                  const isActive = citywiseCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCitywiseCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                          : "bg-white text-navy hover:text-orange hover:bg-orange/5 border border-slate-200"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Search */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={citywiseSearch}
                  onChange={(e) => setCitywiseSearch(e.target.value)}
                  placeholder="Filter 140+ cities & routes..."
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-orange transition shadow-2xs"
                />
                {citywiseSearch && (
                  <button
                    onClick={() => setCitywiseSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Citywise Pill Buttons Grid (Brand Navy & Orange Palette) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
            {filteredCitywise.map((item) => (
              <Link
                key={item.id}
                href={`/packers-and-movers-${item.slug}`}
                className="bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl sm:rounded-2xl text-center shadow-soft hover:shadow-glow-orange hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 block truncate group"
                title={item.title}
              >
                <span className="group-hover:underline underline-offset-2">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          {filteredCitywise.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-soft max-w-sm mx-auto mt-6">
              <Navigation className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-xs text-slate-600">
                No city or route matches &quot;{citywiseSearch}&quot;.
              </p>
              <button
                onClick={() => {
                  setCitywiseSearch("");
                  setCitywiseCategory("all");
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-navy hover:bg-orange text-white text-xs font-bold transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Central Support Callout */}
        <div className="mt-20 bg-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-orange font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Pan-India 24x7 Centralized Dispatch</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Need Moving Services in Another City?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              We operate continuous container transit between all 28 states and union territories. Contact our national helpline for immediate container booking.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${companyData.phones.primary}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-glow-orange"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {companyData.phones.primaryFormatted}</span>
            </a>
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultFromCity={selectedBranch}
      />
    </div>
  );
}
