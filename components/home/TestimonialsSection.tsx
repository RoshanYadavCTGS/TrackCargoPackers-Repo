import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { Star, ShieldCheck, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">
            Verified Experiences from Real Relocations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Read unedited feedback from homeowners, vehicle owners, and corporate facility heads who trusted Track Cargo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Rating & Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(item.rating)
                            ? "fill-amber-400 text-amber-400"
                            : i < item.rating
                            ? "fill-amber-400/50 text-amber-400"
                            : "text-slate-200"
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1">
                      {item.rating}
                    </span>
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Move route tag */}
                <div className="text-[11px] font-bold text-orange uppercase tracking-wider mb-2">
                  {item.location}
                </div>

                {/* Move Type */}
                <div className="text-xs font-semibold text-slate-800 mb-3">
                  {item.moveType}
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-600 leading-relaxed italic relative">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-xs text-navy">{item.name}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

