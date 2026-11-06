import { ClipboardCheck, Package, Truck, Home, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Free Pre-Move Survey",
      subtitle: "Virtual or Doorstep",
      desc: "Our move specialist visits your home or reviews a video walk-through to assess volume, fragile assets, elevator access, and packing needs.",
    },
    {
      icon: Package,
      title: "Systematic Multi-Layer Pack",
      subtitle: "Trained Carpenters & Crew",
      desc: "Uniformed experts arrive with 5-ply cartons, bubble wrap, wardrobe boxes, and foam pads. Furniture is dismantled and color-coded.",
    },
    {
      icon: Truck,
      title: "GPS-Tracked Safe Transit",
      subtitle: "Dedicated Sealed Containers",
      desc: "Goods are loaded using hydraulic lifters and secured with ratchet belts. Real-time satellite updates track the truck directly to destination.",
    },
    {
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
            <span>Seamless Relocation Methodology</span>
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
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors mb-4">
                  <Icon className="w-6 h-6" />
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

