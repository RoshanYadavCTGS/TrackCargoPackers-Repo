"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Package,
  Truck,
  Home,
  Building2,
  Bike,
  Car,
  Globe,
  Warehouse,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { companyData } from "@/data/company";
import QuoteModal from "@/components/shared/QuoteModal";

const servicesList = [
  {
    title: "Packing & Moving",
    slug: "packing-moving",
    icon: Package,
    image: "/services/packingmoving.jpg",
    desc: "4-layer multi-bubble & corrugated heavy-duty packing",
  },
  {
    title: "Loading & Unloading",
    slug: "loading-unloading",
    icon: Truck,
    image: "/services/loadinunloading.jpg",
    desc: "Hydraulic lifters, floor ramps & certified rigging crews",
  },
  {
    title: "Household Shifting",
    slug: "household-shifting",
    icon: Home,
    image: "/services/household.jpg",
    desc: "Complete home relocation with furniture dismantling",
  },
  {
    title: "Office Shifting",
    slug: "office-shifting",
    icon: Building2,
    image: "/services/office.jpg",
    desc: "Zero-downtime weekend moves for IT and corporate setups",
  },
  {
    title: "Bike Transport",
    slug: "bike-transport",
    icon: Bike,
    image: "/services/biketransport.jpg",
    desc: "Wheel-locked metal crate and scratch-proof transit",
  },
  {
    title: "Car Transport",
    slug: "car-transport",
    icon: Car,
    image: "/services/cartransport.jpg",
    desc: "Covered hydraulic auto carriers with live GPS tracking",
  },
  {
    title: "International Shifting",
    slug: "international-shifting",
    icon: Globe,
    image: "/services/internationalrelocation.jpg",
    desc: "Ocean & air freight forwarding with customs clearance",
  },
  {
    title: "Warehousing & Storage",
    slug: "warehousing-services",
    icon: Warehouse,
    image: "/services/warehouse.jpg",
    desc: "CCTV-monitored, moisture-proof storage facilities",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-1.5 sm:py-2 shadow-lg shadow-navy-900/10"
            : "bg-navy/95 backdrop-blur-md py-2 sm:py-2.5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group py-0.5 shrink-0" aria-label="Track Cargo Home">
              <div className="bg-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-xl shadow-md flex items-center group-hover:scale-102 transition-transform">
                <Image
                  src="/heder-logo.png"
                  alt="Track Cargo Packers & Movers"
                  width={240}
                  height={60}
                  priority
                  className="h-9 sm:h-11 md:h-12 lg:h-13 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`inline-flex items-center justify-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                  pathname === "/"
                    ? "text-orange bg-white/10 font-bold shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/8"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className={`inline-flex items-center justify-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                  pathname === "/about-us" || pathname.startsWith("/about")
                    ? "text-orange bg-white/10 font-bold shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/8"
                }`}
              >
                About Us
              </Link>

              {/* Services Mega-menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/service"
                  className={`inline-flex items-center justify-center gap-1 px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                    pathname === "/service" || pathname.startsWith("/service")
                      ? "text-orange bg-white/10 font-bold shadow-xs"
                      : "text-slate-200 hover:text-white hover:bg-white/8"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-orange" : "text-slate-400"
                    }`}
                  />
                </Link>

                {servicesOpen && (
                  <div className="absolute top-full -left-28 xl:-left-40 w-[640px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-navy-900/98 rounded-2xl p-5 border border-white/10 shadow-2xl backdrop-blur-2xl">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <span className="text-xs font-semibold text-orange uppercase tracking-wider">
                          All Relocation Services
                        </span>
                        <Link
                          href="/service"
                          className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium group"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {servicesList.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/${srv.slug}`}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition group"
                          >
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                              <Image
                                src={srv.image}
                                alt={srv.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="48px"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="text-sm font-semibold text-white group-hover:text-orange transition-colors truncate">
                                {srv.title}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1">
                                {srv.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between bg-white/5 rounded-xl p-3">
                        <div className="flex items-center gap-2 text-xs text-slate-300">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>All services include full transit insurance & certified crews</span>
                        </div>
                        <button
                          onClick={() => {
                            setServicesOpen(false);
                            setIsQuoteOpen(true);
                          }}
                          className="text-xs font-bold text-orange hover:text-amber transition flex items-center gap-1"
                        >
                          Book Custom Shifting →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/branches"
                className={`inline-flex items-center justify-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                  pathname === "/branches"
                    ? "text-orange bg-white/10 font-bold shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/8"
                }`}
              >
                Branches
              </Link>

              <Link
                href="/gallery"
                className={`inline-flex items-center justify-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                  pathname === "/gallery"
                    ? "text-orange bg-white/10 font-bold shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/8"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/enquiry"
                className={`inline-flex items-center justify-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                  pathname === "/enquiry"
                    ? "text-orange bg-white/10 font-bold shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/8"
                }`}
              >
                Enquiry
              </Link>

              <Link
                href="/contact-us"
                className={`inline-flex items-center justify-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-150 ${
                  pathname === "/contact-us" || pathname === "/contact"
                    ? "text-orange bg-white/10 font-bold shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/8"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right Action Cluster */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0">
              {/* Direct Phone Link - completely unboxed */}
              <a
                href={`tel:${companyData.phones.primary}`}
                className="flex items-center gap-1.5 text-xs xl:text-sm font-bold text-white hover:text-orange transition-colors tracking-wide whitespace-nowrap group py-1"
                aria-label={`Call ${companyData.phones.primaryFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-orange shrink-0 fill-orange/30 group-hover:scale-110 transition-transform" />
                <span className="tabular-nums">{companyData.phones.primaryFormatted}</span>
              </a>

              {/* Get Free Quote CTA */}
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-3.5 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-orange hover:shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center gap-1.5 group cursor-pointer whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${companyData.phones.primary}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange/20 text-orange text-xs font-bold border border-orange/30 active:scale-95 transition"
                aria-label={`Call ${companyData.phones.primaryFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-navy-900/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto px-4 py-6 flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="bg-white px-1.5 py-0.5 rounded-lg shadow-sm">
                  <Image
                    src="/heder-logo.png"
                    alt="Track Cargo Packers & Movers"
                    width={150}
                    height={45}
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <span className="text-xs text-slate-400 font-medium">Chennai • Pan-India</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  className="p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10"
                >
                  About Us
                </Link>
                <Link
                  href="/service"
                  className="p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10"
                >
                  Services
                </Link>
                <Link
                  href="/branches"
                  className="p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10"
                >
                  Branches
                </Link>
                <Link
                  href="/gallery"
                  className="p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10"
                >
                  Gallery
                </Link>
                <Link
                  href="/enquiry"
                  className="p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10"
                >
                  Enquiry
                </Link>
                <Link
                  href="/contact-us"
                  className="col-span-2 p-2.5 rounded-xl bg-white/5 text-white font-semibold text-sm hover:bg-white/10 text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Services quick links on mobile */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Our Relocation Services
                  </span>
                  <Link
                    href="/service"
                    className="text-xs text-orange font-bold hover:underline"
                  >
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {servicesList.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/${srv.slug}`}
                      className="p-2 rounded-xl bg-white/5 text-slate-200 text-xs flex items-center gap-2 hover:bg-white/10 transition"
                    >
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10">
                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                      <span className="font-medium text-[11px] truncate leading-tight">
                        {srv.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-3 bg-gradient-to-r from-orange to-amber text-white font-bold text-sm uppercase rounded-full shadow-glow-orange flex items-center justify-center gap-2"
              >
                <span>Get Instant Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${companyData.phones.primary}`}
                  className="py-2.5 px-3 bg-white/10 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-orange" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600/90 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
