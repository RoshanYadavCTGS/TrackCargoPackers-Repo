"use client";

import { useState } from "react";
import {
  CalendarCheck2,
  HandCoins,
  Truck,
  Package,
  Sparkles,
  Clock,
} from "lucide-react";

interface StepItem {
  id: number;
  number: string;
  title: string;
  badge: string;
  icon: typeof CalendarCheck2;
  shortDesc: string;
  turnaround: string;
}

const STEPS: StepItem[] = [
  {
    id: 0,
    number: "01",
    title: "Book your Services",
    badge: "Instant Setup",
    icon: CalendarCheck2,
    shortDesc: "Schedule online or book a free doorstep survey.",
    turnaround: "5 Mins Booking",
  },
  {
    id: 1,
    number: "02",
    title: "Low Cost",
    badge: "Best Price",
    icon: HandCoins,
    shortDesc: "All-inclusive pricing with zero hidden charges.",
    turnaround: "Guaranteed Quote",
  },
  {
    id: 2,
    number: "03",
    title: "Loading",
    badge: "Careful Handling",
    icon: Truck,
    shortDesc: "5-layer protective packing & hydraulic loading.",
    turnaround: "Same-Day Crew",
  },
  {
    id: 3,
    number: "04",
    title: "Move Day",
    badge: "Zero Hassle",
    icon: Package,
    shortDesc: "GPS transit, safe unloading, and room setup.",
    turnaround: "On-Time Arrival",
  },
];

export default function HowItWorksAnimatic() {
  // Step 2 ("Low Cost", index 1) is active by default to match reference image
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange/5 via-amber/5 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Simple 4-Step Moving Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed">
            A seamless, stress-free relocation from your initial booking to the final handover on move day.
          </p>
        </div>

        {/* 4 Interactive Process Steps */}
        <div className="relative">
          {/* Desktop/Tablet Horizontal Steps with Connecting Dashed Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-start relative">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isLast = idx === STEPS.length - 1;

              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  {/* Connecting Line to Next Step (Desktop Only) */}
                  {!isLast && (
                    <div
                      className="hidden lg:block absolute top-12 left-1/2 w-full -z-0 pointer-events-none"
                      style={{ transform: "translateX(45px)" }}
                    >
                      <svg
                        className="w-[calc(100%-90px)] h-4 overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <line
                          x1="0"
                          y1="8"
                          x2="100%"
                          y2="8"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeDasharray="6 6"
                          className={`${
                            activeStep >= idx && activeStep > idx
                              ? "text-orange animate-flow-line"
                              : "text-orange/35 animate-flow-line"
                          }`}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Step Interactive Container */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    aria-label={`Select ${step.title}`}
                    className="group relative flex flex-col items-center text-center cursor-pointer focus:outline-none transition-all duration-300 w-full"
                  >
                    {/* Leaf-shaped Icon Badge */}
                    <div className="relative mb-5">
                      <div
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl rounded-tr-lg flex items-center justify-center transition-all duration-300 relative ${
                          isActive
                            ? "bg-gradient-to-tr from-orange via-orange to-amber text-white shadow-glow-orange scale-105 -translate-y-2 ring-4 ring-orange/20"
                            : "bg-orange/10 text-orange border-2 border-orange/20 group-hover:bg-orange/20 group-hover:border-orange/50 group-hover:scale-102 group-hover:-translate-y-1 shadow-soft"
                        }`}
                      >
                        {/* Ping beacon for active step */}
                        {isActive && (
                          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange text-[10px] font-extrabold text-white items-center justify-center shadow-xs">
                              •
                            </span>
                          </span>
                        )}

                        <Icon
                          className={`w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 ${
                            isActive
                              ? "scale-110"
                              : "group-hover:scale-110 group-hover:rotate-3"
                          }`}
                          strokeWidth={isActive ? 2.2 : 1.9}
                        />

                        {/* Floating Step Number Pill */}
                        <div
                          className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase transition-colors shadow-xs ${
                            isActive
                              ? "bg-navy text-white"
                              : "bg-white text-slate-700 border border-slate-200"
                          }`}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Step Title (Exact content from user image) */}
                    <h3
                      className={`font-heading font-extrabold text-lg sm:text-xl transition-colors tracking-tight ${
                        isActive
                          ? "text-orange"
                          : "text-navy group-hover:text-orange"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-500 mt-1.5 max-w-[220px] leading-relaxed">
                      {step.shortDesc}
                    </p>

                    {/* Turnaround Badge */}
                    <div className="mt-3">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-orange/15 text-orange border border-orange/30 font-bold"
                            : "bg-slate-100 text-slate-600 group-hover:bg-orange/10 group-hover:text-orange"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{step.turnaround}</span>
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
