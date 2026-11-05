import { ClipboardCheck, Package, Truck, Home, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      icon: ClipboardCheck,
      title: "Free Pre-Move Survey",
      subtitle: "Virtual or Doorstep",
      desc: "Our move specialist visits your home or reviews a video walk-through to assess volume, fragile assets, elevator access, and packing needs.",
    },
    {
      num: "02",
      icon: Package,
      title: "Systematic Multi-Layer Pack",
      subtitle: "Trained Carpenters & Crew",
      desc: "Uniformed experts arrive with 5-ply cartons, bubble wrap, wardrobe boxes, and foam pads. Furniture is dismantled and color-coded.",
    },
    {
      num: "03",
      icon: Truck,
      title: "GPS-Tracked Safe Transit",
      subtitle: "Dedicated Sealed Containers",
      desc: "Goods are loaded using hydraulic lifters and secured with ratchet belts. Real-time satellite updates track the truck directly to destination.",
    },
    {
      num: "04",
      icon: Home,
      title: "Unpacking & Reassembly",
      subtitle: "Complete Room Placement",
      desc: "We unload, unpack, assemble beds, dining tables, and modular units, placing every item in its designated room and clearing packing debris.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <span>Seamless 4-Step Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
            How Track Cargo Executes Your Move
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            A standardized, stress-free relocation blueprint designed for flawless execution from departure to arrival.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-lg transition-all relative flex flex-col group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-slate-200 group-hover:text-orange/20 transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-orange uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>
                <h3 className="font-heading font-bold text-lg text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                  {step.desc}
                </p>

                {/* Subtle indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <span>Phase {step.num} Execution</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

