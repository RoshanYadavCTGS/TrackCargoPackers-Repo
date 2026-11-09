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
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                  className="h-9 sm:h-10 md:h-11 lg:h-11 xl:h-12 w-auto object-contain"
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
                  <div className="absolute top-full -left-16 xl:-left-36 w-[580px] xl:w-[640px] max-w-[calc(100vw-2rem)] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
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
                        {servicesList.map((srv) => {
                          const IconComp = srv.icon;
                          return (
                            <Link
                              key={srv.slug}
                              href={`/${srv.slug}`}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/25 flex items-center justify-center shrink-0 text-orange group-hover:bg-orange group-hover:text-white group-hover:scale-105 transition-all duration-200">
                                <IconComp className="w-5 h-5" />
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
                          );
                        })}
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
      </header>

      {/* Mobile Fullscreen Navigation Drawer (Mounted outside <header> to prevent backdrop-filter stacking context bugs) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] pb-24 z-40 bg-[#07122A] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="p-4 sm:p-6 space-y-3">
            {/* Direct Navigation Links */}
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation Links">
              <Link
                href="/"
                className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition ${
                  pathname === "/"
                    ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                    : "bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>

              <Link
                href="/about-us"
                className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition ${
                  pathname === "/about-us" || pathname.startsWith("/about")
                    ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                    : "bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>

              {/* Services Accordion Item */}
              <div className="rounded-2xl bg-white/5 overflow-hidden border border-white/5">
                <div className="flex items-center justify-between px-4 py-3">
                  <Link
                    href="/service"
                    className={`font-bold text-sm transition flex-grow ${
                      pathname === "/service" || pathname.startsWith("/service")
                        ? "text-orange"
                        : "text-slate-100"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 cursor-pointer"
                    aria-label="Toggle all relocation services"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180 text-orange" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-black/25">
                    {servicesList.map((srv) => {
                      const IconComp = srv.icon;
                      return (
                        <Link
                          key={srv.slug}
                          href={`/${srv.slug}`}
                          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 text-slate-200 text-xs transition group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange/15 border border-orange/20 flex items-center justify-center shrink-0 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="font-medium truncate text-xs group-hover:text-white transition-colors">
                            {srv.title}
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/service"
                      className="col-span-full text-center text-xs font-bold text-orange py-2 hover:underline"
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/branches"
                className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition ${
                  pathname === "/branches"
                    ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                    : "bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                <span>Branches</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>

              <Link
                href="/gallery"
                className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition ${
                  pathname === "/gallery"
                    ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                    : "bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                <span>Gallery</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>

              <Link
                href="/enquiry"
                className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition ${
                  pathname === "/enquiry"
                    ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                    : "bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                <span>Enquiry</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>

              <Link
                href="/contact-us"
                className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition ${
                  pathname === "/contact-us" || pathname === "/contact"
                    ? "bg-gradient-to-r from-orange to-amber text-white shadow-glow-orange"
                    : "bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>
            </nav>
          </div>

          {/* Bottom Actions Cluster */}
          <div className="p-4 sm:p-6 bg-navy-900 border-t border-white/10 space-y-3 shrink-0 pb-16 sm:pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteOpen(true);
              }}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-orange flex items-center justify-center gap-2 cursor-pointer transition active:scale-98"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${companyData.phones.primary}`}
                className="py-3 px-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition active:scale-98"
              >
                <Phone className="w-3.5 h-3.5 text-orange" />
                <span>Call Direct</span>
              </a>
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition active:scale-98"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
