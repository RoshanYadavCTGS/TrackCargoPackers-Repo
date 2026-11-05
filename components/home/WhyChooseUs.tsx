import {
  ShieldCheck,
  Navigation,
  Layers,
  Clock4,
  BadgeCheck,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseUs() {
  const packagingLayers = [
    {
      layer: "Layer 1",
      title: "Virgin High-Density Air Bubble Wrap",
      desc: "Shock-absorbing microscopic air pockets cushioning fragile glass, porcelain, and electronics against highway vibration.",
    },
    {
      layer: "Layer 2",
      title: "5-Ply & 7-Ply Heavy Corrugated Sheets",
      desc: "Structural impact barrier resisting blunt force, crushing, and pressure during container stacking.",
    },
    {
      layer: "Layer 3",
      title: "Moisture & Dust Barrier Stretch Film",
      desc: "Waterproof sealing safeguarding mattresses, wooden polish, and upholstery from monsoons and highway dust.",
    },
    {
      layer: "Layer 4",
      title: "Hardened Foam Edge & Corner Protectors",
      desc: "Reinforced angular guards for luxury tables, mirrors, TV screens, and wardrobe edges.",
    },
  ];

  const pillars = [
    {
      icon: Navigation,
      title: "Live GPS Fleet Tracking",
      desc: "Real-time satellite tracking for all intercity container trucks. Receive automated WhatsApp alerts at every state border and transit hub.",
    },
    {
      icon: ShieldCheck,
      title: "100% Comprehensive Transit Insurance",
      desc: "Full-value compensation policy covering accidental damages, road risks, and natural incidents. Fast-track paperless claim processing.",
    },
    {
      icon: UserCheck,
      title: "Background-Verified Moving Crews",
      desc: "In-house, uniformed, and police-verified packing specialists trained in precision rigging, carpentry, and electrical appliance handling.",
    },
    {
      icon: Clock4,
      title: "Strict On-Time Delivery Guarantee",
      desc: "Guaranteed pickup and scheduled delivery dates with dedicated route pilots and zero unnecessary transshipment delays.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-navy text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4 border border-white/10">
            <BadgeCheck className="w-4 h-4 text-orange" />
            <span>The Track Cargo Safety Engineering</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Why Over 165,000 Families & Corporates Trust Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            We don&apos;t just move cartons; we protect your lifetime of cherished memories with industrialized logistics precision.
          </p>
        </div>

        {/* 4-Layer Packaging Architecture Feature Card */}
        <div className="bg-navy-800/80 border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-orange font-bold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Proprietary Packaging Standard</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                4-Layer Armor Shield Packaging System
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-orange/20 border border-orange/30 text-amber-300 text-xs font-semibold w-fit">
              Zero Scratch • Zero Breakage Protocol
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {packagingLayers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-navy-900/60 border border-white/10 rounded-2xl p-5 relative flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-orange uppercase tracking-wider">
                    {layer.layer}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-base text-white mb-2 leading-snug">
                  {layer.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed flex-grow">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-navy-800/40 border border-white/10 rounded-2xl p-6 hover:bg-navy-800/70 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/20 text-orange flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white mb-2 font-heading">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

