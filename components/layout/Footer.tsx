import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { citiesData } from "@/data/cities";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: About & Trust */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group" aria-label="Track Cargo Home">
              <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-md flex items-center w-fit group-hover:scale-102 transition-transform">
                <Image
                  src="/heder-logo.png"
                  alt="Track Cargo Packers & Movers"
                  width={180}
                  height={55}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Chennai&apos;s leading logistics & domestic relocation company. Over 15 years of excellence, 165K+ verified moves, full transit insurance, and GPS-tracked container fleet across India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Insured Transit</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live GPS Fleet</span>
              </div>
            </div>
          </div>

          {/* Column 2: Relocation Services */}
          <div>
            <h4 className="text-white font-bold font-heading text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-orange rounded-full"></span>
              Relocation Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Key Cities */}
          <div>
            <h4 className="text-white font-bold font-heading text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-orange rounded-full"></span>
              Quick Links & Cities
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="space-y-2">
                <div>
                  <Link href="/about-us" className="text-slate-400 hover:text-white transition">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    href="/mission-vision"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Mission & Vision
                  </Link>
                </div>
                <div>
                  <Link href="/branches" className="text-slate-400 hover:text-white transition">
                    Branch Network
                  </Link>
                </div>
                <div>
                  <Link href="/gallery" className="text-slate-400 hover:text-white transition">
                    Moving Gallery
                  </Link>
                </div>
                <div>
                  <Link href="/enquiry" className="text-slate-400 hover:text-white transition">
                    Calculate Quote
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact-us"
                    className="text-orange hover:text-amber transition font-semibold"
                  >
                    Contact Support →
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                {citiesData.slice(0, 6).map((city) => (
                  <div key={city.slug}>
                    <Link
                      href={`/packers-and-movers-${city.slug}`}
                      className="text-slate-400 hover:text-white transition text-xs block"
                    >
                      Movers in {city.cityName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Registered Office & Contact */}
          <div>
            <h4 className="text-white font-bold font-heading text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-orange rounded-full"></span>
              Chennai Head Office
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-1" />
                <span className="text-slate-400 leading-relaxed text-xs">
                  {companyData.address.shop}, {companyData.address.street},{" "}
                  {companyData.address.annexe}, {companyData.address.locality},{" "}
                  {companyData.address.city} - {companyData.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange shrink-0" />
                <div className="flex flex-col text-xs">
                  <a
                    href={`tel:${companyData.phones.primary}`}
                    className="text-white font-semibold hover:text-orange transition"
                  >
                    {companyData.phones.primaryFormatted}
                  </a>
                  <a
                    href={`tel:${companyData.phones.secondary}`}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {companyData.phones.secondaryFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-slate-400 hover:text-white transition text-xs"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange shrink-0" />
                <span className="text-slate-400 text-xs">
                  {companyData.workingHours}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold transition shadow-sm"
                >
                  <span>Chat on WhatsApp (Instant)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All Rights Reserved. Reg. Logistics Provider.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Chennai Central Dispatch Hub</span>
            <span>•</span>
            <span className="text-slate-400">Zero Surge Guarantee</span>
            <span>•</span>
            <span className="text-slate-400">All-India Container Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
