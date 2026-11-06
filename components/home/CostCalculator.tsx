"use client";

import { useState } from "react";
import {
  domesticMovingRates,
  vehicleRelocationRates,
  calculateEstimatedPrice,
} from "@/data/pricing";
import { formatCurrencyINR } from "@/lib/utils";
import { MoveSizeOptions } from "@/lib/validations";
import { ArrowRight, ShieldCheck, Clock, CheckCircle, Sparkles } from "lucide-react";
import QuoteModal from "@/components/shared/QuoteModal";

export default function CostCalculator() {
  const [activeTab, setActiveTab] = useState<"calculator" | "domestic" | "vehicle">("calculator");
  const [calcMoveSize, setCalcMoveSize] = useState<string>("2 BHK");
  const [calcDistance, setCalcDistance] = useState<number>(350);
  const [calcVehicle, setCalcVehicle] = useState<"none" | "bike" | "car" | "both">("none");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMoveSize, setSelectedMoveSize] = useState<string>("2 BHK");

  const estimate = calculateEstimatedPrice(calcMoveSize, calcDistance, calcVehicle);

  return (
    <section className="py-16 sm:py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>100% Transparent Price Policy</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
              Instant Relocation Cost Estimator & Rates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Calculate your estimated moving charges based on distance and inventory, or review our standard all-inclusive rate cards.
            </p>
          </div>

          {/* Tab selector */}
          <div className="mt-6 lg:mt-0 flex items-center bg-slate-100 p-1.5 rounded-2xl w-full sm:w-fit overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "calculator"
                  ? "bg-navy text-white shadow-md"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Interactive Estimator
            </button>
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "domestic"
                  ? "bg-navy text-white shadow-md"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Household Rate Card
            </button>
            <button
              onClick={() => setActiveTab("vehicle")}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "vehicle"
                  ? "bg-navy text-white shadow-md"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Car & Bike Rates
            </button>
          </div>
        </div>

        {/* Dynamic content based on tab */}
        {activeTab === "calculator" && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    1. Select Inventory / Move Size
                  </label>
                  <select
                    value={calcMoveSize}
                    onChange={(e) => setCalcMoveSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-semibold focus:outline-none focus:border-orange transition"
                  >
                    {MoveSizeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">
                      2. Approximate Distance: <span className="text-orange">{calcDistance} KM</span>
                    </label>
                    <span className="text-xs text-slate-500 font-medium">
                      {calcDistance <= 50
                        ? "Local City Move"
                        : calcDistance <= 400
                        ? "Regional Corridor"
                        : "Long Distance Interstate"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={2500}
                    step={10}
                    value={calcDistance}
                    onChange={(e) => setCalcDistance(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>Local (10-50 km)</span>
                    <span>Bangalore (350 km)</span>
                    <span>Hyderabad (650 km)</span>
                    <span>Delhi (2200 km)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    3. Vehicle Transport Addon
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: "none", label: "No Vehicle" },
                      { id: "bike", label: "+ Motorcycle / Bike" },
                      { id: "car", label: "+ Car (Sedan/SUV)" },
                      { id: "both", label: "+ Bike & Car" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCalcVehicle(item.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition text-center cursor-pointer ${
                          calcVehicle === item.id
                            ? "bg-navy text-white border-navy"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Result Display */}
              <div className="lg:col-span-5 bg-navy text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange/20 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-1.5 text-orange font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Estimated Budget Range</span>
                  </div>

                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {formatCurrencyINR(estimate.minPrice)} – {formatCurrencyINR(estimate.maxPrice)}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Estimated for {calcMoveSize} ({calcDistance} km)
                  </div>

                  <div className="mt-6 space-y-3 pt-6 border-t border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Recommended Fleet:</span>
                      <span className="font-bold text-white">{estimate.recommendedVehicle}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Transit Duration:</span>
                      <span className="font-bold text-emerald-400">{estimate.estimatedTransitTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Packing Material:</span>
                      <span className="font-bold text-white">4-Layer Corrugated & Bubble</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Insurance Included:</span>
                      <span className="font-bold text-emerald-400">100% Comprehensive</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      setSelectedMoveSize(calcMoveSize);
                      setModalOpen(true);
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Lock In This Price & Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="block text-center text-[10px] text-slate-400 mt-2">
                    Final price confirmed after free survey. No advance required.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "domestic" && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white text-xs sm:text-sm font-heading font-bold">
                    <th className="py-4 px-6">Home Size / Move Type</th>
                    <th className="py-4 px-6">Within Chennai</th>
                    <th className="py-4 px-6">Up to 400 KM</th>
                    <th className="py-4 px-6">Up to 1000 KM</th>
                    <th className="py-4 px-6">1000+ KM</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {domesticMovingRates.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-orange/5 transition-colors bg-white font-medium text-slate-700"
                    >
                      <td className="py-4 px-6">
                        <div className="font-bold text-navy text-sm sm:text-base">
                          {row.moveType}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-orange" />
                          <span>Packing: {row.packingTime}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-emerald-700">
                        {row.withinCity}
                      </td>
                      <td className="py-4 px-6">{row.upto400km}</td>
                      <td className="py-4 px-6">{row.upto1000km}</td>
                      <td className="py-4 px-6 font-semibold text-navy">
                        {row.above1000km}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => {
                            setSelectedMoveSize(row.moveType);
                            setModalOpen(true);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-orange hover:bg-orange-hover text-white text-xs font-bold transition shadow-sm cursor-pointer whitespace-nowrap"
                        >
                          Book Move
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "vehicle" && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white text-xs sm:text-sm font-heading font-bold">
                    <th className="py-4 px-6">Vehicle Category</th>
                    <th className="py-4 px-6">Transit Mode</th>
                    <th className="py-4 px-6">Up to 400 KM</th>
                    <th className="py-4 px-6">Up to 1000 KM</th>
                    <th className="py-4 px-6">1000+ KM</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {vehicleRelocationRates.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-orange/5 transition-colors bg-white font-medium text-slate-700"
                    >
                      <td className="py-4 px-6 font-bold text-navy text-sm sm:text-base">
                        {row.vehicleType}
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-navy">
                          {row.transitMode}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-emerald-700">{row.upto400km}</td>
                      <td className="py-4 px-6">{row.upto1000km}</td>
                      <td className="py-4 px-6 font-semibold text-navy">{row.above1000km}</td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => {
                            setSelectedMoveSize(row.vehicleType);
                            setModalOpen(true);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-orange hover:bg-orange-hover text-white text-xs font-bold transition shadow-sm cursor-pointer whitespace-nowrap"
                        >
                          Book Carrier
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Note banner */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All rates include standard 5-ply cartons, bubble wrapping, certified rigging labor, vehicle fuel, and basic transit insurance.
            </span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="text-orange font-bold hover:underline shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span>Request Exact Customized Survey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultMoveSize={selectedMoveSize}
      />
    </section>
  );
}
