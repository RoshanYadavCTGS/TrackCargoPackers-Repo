import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { citiesData } from "@/data/cities";
import { citywiseItems, getCitywiseBySlug } from "@/data/citywise";
import { companyData } from "@/data/company";
import CityQuoteForm from "@/components/cities/CityQuoteForm";
import {
  MapPin,
  Star,
  ShieldCheck,
  Phone,
  Truck,
  ArrowRight,
  CheckCircle2,
  Navigation,
  Clock,
  Layers,
  HelpCircle,
  MessageCircle,
  Building2,
  Calendar,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all defined cities and all 140+ citywise items
export async function generateStaticParams() {
  const citySlugs = citiesData.map((c) => ({ slug: c.slug }));
  const citywiseSlugs = citywiseItems.map((c) => ({ slug: c.slug }));

  const slugSet = new Set([
    ...citySlugs.map((s) => s.slug),
    ...citywiseSlugs.map((s) => s.slug),
  ]);
  return Array.from(slugSet).map((slug) => ({ slug }));
}

// Helper to resolve city or route data
function resolveLocationData(slug: string) {
  const normalized = slug.toLowerCase().trim();

  // 1. Check in citiesData
  const city = citiesData.find(
    (c) =>
      c.slug.toLowerCase() === normalized ||
      c.slug.toLowerCase() === normalized.replace(/^in-/, "") ||
      `in-${c.slug.toLowerCase()}` === normalized
  );

  // 2. Check in citywiseItems
  const citywise = getCitywiseBySlug(normalized);

  if (city) {
    return {
      title: `Packers and Movers in ${city.cityName}`,
      cityName: city.cityName,
      state: city.state,
      hubLocation: city.hubLocation,
      phone: city.phone || companyData.phones.primary,
      rating: city.rating,
      reviewCount: city.reviewCount,
      intro: city.intro,
      keyLocalities: city.keyLocalities,
      popularRoutes: city.popularRoutes,
      metaTitle: city.metaTitle,
      metaDescription: city.metaDescription,
      type: "city" as const,
      startingPrice: "₹4,500",
      distance: undefined,
      transitTime: "Same Day / Scheduled",
      origin: undefined,
      destination: undefined,
    };
  }

  if (citywise) {
    const isRoute = citywise.type === "route";
    return {
      title: citywise.title,
      cityName: citywise.cityName,
      state: citywise.state || "India",
      hubLocation: isRoute
        ? `${citywise.origin} Hub & ${citywise.destination} Regional Depot`
        : `${citywise.cityName} Regional Logistics Hub`,
      phone: companyData.phones.primary,
      rating: 4.9,
      reviewCount: "420+",
      intro:
        citywise.description ||
        `Hire verified packers and movers for ${citywise.title}. Track Cargo provides ISO-certified packaging, sealed GPS-tracked container trucks, and transparent rates with zero damage guarantee.`,
      keyLocalities: isRoute
        ? [
            `${citywise.origin} Terminal`,
            `${citywise.destination} Delivery Hub`,
            "Doorstep Pickup",
            "Express Highway Transit",
            "Direct Doorstep Unloading",
            "Hydraulic Ramp Placement",
          ]
        : [
            `${citywise.cityName} Central`,
            "Residential Sectors",
            "IT Parks & Commercial Hubs",
            "Apartment Complexes",
            "Gated Communities",
            "Local Dispatch Depots",
          ],
      popularRoutes: isRoute
        ? [
            `${citywise.origin} to ${citywise.destination}`,
            `${citywise.destination} to ${citywise.origin} (Return Route)`,
            `${citywise.origin} to Regional Metros`,
            "National Express Transit Corridor",
          ]
        : [
            `${citywise.cityName} to Chennai`,
            `${citywise.cityName} to Bangalore`,
            `${citywise.cityName} to Hyderabad`,
            `${citywise.cityName} to Mumbai`,
            `${citywise.cityName} to Delhi NCR`,
          ],
      metaTitle: `${citywise.title} - 100% Insured & Verified | Track Cargo`,
      metaDescription: `Professional ${citywise.title} with Track Cargo Packers & Movers. Instant quotes, 4-layer safe packing, 24x7 GPS tracking, starting from ${
        citywise.startingPrice || "₹3,500"
      }. Call +91-9350895820.`,
      type: citywise.type,
      startingPrice: citywise.startingPrice || "₹3,500",
      distance: citywise.distance,
      transitTime: citywise.transitTime || "Same Day / 24-48 Hours",
      origin: citywise.origin,
      destination: citywise.destination,
    };
  }

  // 3. Fallback for any dynamic or future slug
  const cleanName = slug
    .replace(/^in-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const isRoute = slug.includes("-to-");
  let origin = "Chennai";
  let destination = cleanName;
  if (isRoute) {
    const parts = cleanName.split(" To ");
    origin = parts[0] || "Chennai";
    destination = parts[1] || "Destination";
  }

  const title = isRoute
    ? `Packers and Movers ${origin} to ${destination}`
    : `Packers and Movers in ${cleanName}`;

  return {
    title,
    cityName: cleanName,
    state: "India",
    hubLocation: "Regional Express Logistics Depot",
    phone: companyData.phones.primary,
    rating: 4.8,
    reviewCount: "350+",
    intro: `Looking for reliable, cost-effective ${title}? Track Cargo Packers & Movers guarantees zero-damage container shifting, multi-layer cushioning, and certified on-ground handling staff.`,
    keyLocalities: [
      "Doorstep Pickup",
      "All Residential Sectors",
      "Commercial & Industrial Belts",
      "Express Highway Dispatch",
      "Secure Multi-Layer Packing",
      "End-to-End Placement",
    ],
    popularRoutes: [
      `${cleanName} to Chennai`,
      `${cleanName} to Bangalore`,
      `${cleanName} to Hyderabad`,
      `${cleanName} to Delhi NCR`,
    ],
    metaTitle: `${title} - Verified & Insured | Track Cargo`,
    metaDescription: `Best ${title}. Safe household and vehicle relocation with 100% insurance and live GPS tracking. Call +91-9350895820.`,
    type: (isRoute ? "route" : "city") as "route" | "city" | "locality",
    startingPrice: "₹4,500",
    distance: isRoute ? "Scheduled Interstate Corridor" : undefined,
    transitTime: isRoute ? "2 - 3 Days" : "Same Day Dispatch",
    origin: isRoute ? origin : undefined,
    destination: isRoute ? destination : undefined,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = resolveLocationData(slug);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [
      data.title,
      `packers and movers ${data.cityName}`,
      "household shifting",
      "bike transport",
      "car carrier",
      "track cargo packers and movers",
    ],
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      locale: "en_IN",
      url: `https://trackcargopackers.in/packers-and-movers-${slug}`,
    },
  };
}

export default async function CityLandingPage({ params }: Props) {
  const { slug } = await params;
  const data = resolveLocationData(slug);

  const isIntercity = data.type === "route" || data.distance !== undefined;
  const rateEstimates = [
    {
      type: "1 BHK Shifting",
      price: isIntercity ? "₹8,500 - ₹14,000" : "₹4,500 - ₹7,500",
      includes: "Dismantling, 3-layer packing, loading, transit & basic setup",
    },
    {
      type: "2 BHK Shifting",
      price: isIntercity ? "₹13,500 - ₹22,000" : "₹7,000 - ₹12,000",
      includes: "Full home packaging, carton boxes, bubble wrap & hydraulic loading",
    },
    {
      type: "3 BHK / Villa Shifting",
      price: isIntercity ? "₹18,500 - ₹32,000" : "₹11,000 - ₹18,000",
      includes: "Comprehensive packaging, wooden crating for fragile items & placement",
    },
    {
      type: "Bike / Two-Wheeler Transport",
      price: isIntercity ? "₹4,500 - ₹7,500" : "₹2,000 - ₹3,500",
      includes: "Wheel lock, bubble wrap, scratch-proof corrugated packing",
    },
    {
      type: "Car Relocation (Covered Carrier)",
      price: isIntercity ? "₹9,500 - ₹18,000" : "₹4,500 - ₹8,000",
      includes: "Door-to-door hydraulic closed car carrier with GPS tracking",
    },
    {
      type: "Corporate & Office Shifting",
      price: "Custom Estimate",
      includes: "IT servers, workstations, modular cabins & weekend zero-downtime move",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* ========================================================================= */}
      {/* Hero Section (Truck Image Background Overlay matching user's Image 1) */}
      {/* ========================================================================= */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-navy-900">
        {/* Logistics Truck Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/gal1.jpeg"
            alt="Track Cargo Logistics Fleet"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark Navy / Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy/88 to-navy-900/80 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb matching user's Image 1 */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              <Link href="/" className="hover:text-orange transition">
                HOME
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-orange" />
              <Link href="/branches" className="hover:text-orange transition">
                Branches
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-orange" />
              <span className="text-white truncate">{data.title}</span>
            </div>

            {/* Big Bold White Title matching user's Image 1 */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              {data.title}
            </h1>

            <p className="text-slate-200 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
              {data.intro}
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-200">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-white">{data.rating} / 5.0</span>
                <span className="text-slate-300 font-normal">({data.reviewCount} Reviews)</span>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                100% Comprehensive Transit Insurance
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Truck className="w-4 h-4 text-orange" />
                {data.transitTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Main Two-Column Layout (Matching User's Images 2, 3, 4) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ------------------------------------------------------------------- */}
            {/* Left Column: Request A Free Quote Form Sidebar (Image 2 & 3) */}
            {/* ------------------------------------------------------------------- */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <CityQuoteForm
                cityName={data.cityName}
                defaultFrom={data.origin || data.cityName}
                defaultTo={data.destination || ""}
              />

              {/* Quick Trust Highlights */}
              <div className="mt-6 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-3">
                <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange" />
                  <span>Why Choose Track Cargo?</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero Midway Transshipment Guaranteed</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Real-time GPS Satellite Tracking on All Trucks</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Certified In-House Packaging Specialists</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>IBA Approved Transit Bills & Paperless Insurance</span>
                </div>
              </div>
            </aside>

            {/* ------------------------------------------------------------------- */}
            {/* Right Column: Google Map + Detailed Content (Images 2, 3, 4) */}
            {/* ------------------------------------------------------------------- */}
            <main className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Heading */}
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight">
                  {data.title}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange to-amber rounded-full mt-2.5"></div>
              </div>

              {/* Google Map Embed (Matching Image 2) */}
              <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-soft overflow-hidden">
                <div className="flex items-center justify-between pb-3 px-2 text-xs font-semibold text-slate-600 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-1.5 text-navy font-bold">
                    <MapPin className="w-4 h-4 text-orange" />
                    <span>Location Map: {data.cityName}</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                    Active Operational Zone
                  </span>
                </div>
                <div className="relative w-full h-72 sm:h-84 rounded-2xl overflow-hidden bg-slate-100">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      data.cityName
                    )}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map of ${data.cityName}`}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Rich Comprehensive Relocation Content (Matching User's Screenshots 2, 3, 4) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  We&apos;re the best packers and movers in{" "}
                  <strong className="text-navy">{data.cityName}</strong> and also ensure 100% safe
                  handling while delivering{" "}
                  <Link
                    href="/international-shifting"
                    className="text-orange font-bold hover:underline"
                  >
                    international shifting services in {data.cityName}
                  </Link>
                  . The products into transportation vehicle: we have a special crew of packing, unpacking,
                  and unloading who are well-experienced in their field. After reaching at your new
                  destination, our team will unload and set goods at your required place. Our unpacking
                  service not required any quite special material; it is often done easily by using
                  knife or blade. Transportation of cars involving safe measures features together of
                  the most task: we offer the power of transferring your cars at the foremost
                  economical prices. We&apos;re using brilliant mode of transportation like small & heavy
                  trucks, tailors, containerized trucks & car services. We transport cars by providing
                  specially covered car trailers, everywhere in India. We provide complete services from
                  one place to another place.
                </p>

                <p>
                  Track Cargo Packers and Movers in{" "}
                  <strong className="text-navy">{data.cityName}</strong> may be a largely reputed and
                  commanding{" "}
                  <Link
                    href="/loading-unloading"
                    className="text-orange font-bold hover:underline"
                  >
                    loading services in {data.cityName}
                  </Link>
                  . Packers and Movers in {data.cityName} conducts all shifting jobs without pain. We
                  understand that an automobile is your precious possession and other people frequently
                  vacillate to hand it over to moving companies. Our dependable and secure staff has
                  one thing in mind: your vehicle&apos;s safety and your peace of mind. We pack your vehicle
                  precisely to avoid any scrapes or dents during relocation process. We give competitive
                  rates when it involves dispatching your car or bike.
                </p>

                <p>
                  Shifting from one place to another place becomes more stressful if there is lack of
                  befitting planning, top quality packaging and time saving transporting. So, don&apos;t
                  worry! We&apos;re there to form you free from all of your worries and to supply you
                  cheerful moves.{" "}
                  <Link
                    href="/bike-transport"
                    className="text-orange font-bold hover:underline"
                  >
                    bike transport services in {data.cityName}
                  </Link>{" "}
                  on local move, even on moving from any neighborhood of India. You&apos;d wish to only
                  &ldquo;send query&rdquo; or &ldquo;call us&rdquo;. We possess all kinds of moves,
                  whether it&apos;s residential move, corporate move, office move, vehicle transportation,
                  or transnational move, we&apos;re with you from beginning to end, to dislocate you in any
                  area of {data.cityName} through our several connected branches.
                </p>

                <p>
                  Track Cargo Packers and Movers should be chosen with the proper reviews, in order that
                  all the cash that you simply invest in relocation services is paid off at the top. Put
                  the simplest purpose,{" "}
                  <Link
                    href="/household-shifting"
                    className="text-orange font-bold hover:underline"
                  >
                    home shifting services in {data.cityName}
                  </Link>{" "}
                  are cost efficient, providing you with the simplest price quotations. This is often
                  not only helpful in supplying you with the simplest services, but also helping you to
                  urge the utmost satisfaction. We work closely with the clients so as to know their
                  exact requirements. We&apos;re ready to deliver exactly what the client wants in terms of
                  quality, time, and planning. Thus, you will believe these professionals to assist you
                  relocate easily. You will contact us to urge the simplest quotations on household
                  shifting,{" "}
                  <Link
                    href="/office-shifting"
                    className="text-orange font-bold hover:underline"
                  >
                    office shifting services in {data.cityName}
                  </Link>
                  , car transportation, and more.
                </p>
              </div>

              {/* Standard Tariff Breakdown */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-2 border border-orange/20 w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Estimated Relocation Tariff</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                  Moving Rates for {data.cityName}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {rateEstimates.map((rate, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange/50 transition flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {rate.type}
                        </div>
                        <div className="text-xl font-extrabold text-navy my-2 font-heading">
                          {rate.price}
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {rate.includes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Layer Packaging Architecture */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-2 border border-orange/20 w-fit">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Damage-Proof Engineering</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                  Our 4-Layer Packaging Architecture
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange/10 text-orange font-extrabold flex items-center justify-center shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-navy">Stretch Wrap & Film</h4>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Protects polished furniture and electronics from dust, moisture, and scratches.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange/10 text-orange font-extrabold flex items-center justify-center shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-navy">Air Bubble Cushioning</h4>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Double-layer bubble wrap protecting glassware, screens, and kitchen appliances.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange/10 text-orange font-extrabold flex items-center justify-center shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-navy">5-Ply Corrugated Sheets</h4>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Heavy-duty cardboard edge guards shielding against highway bumps and drops.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange/10 text-orange font-extrabold flex items-center justify-center shrink-0">
                      04
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-navy">Sealed Container Belting</h4>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Industrial ratchet straps locking goods securely inside weatherproof container trucks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Localities & Popular Corridors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Coverage Areas</span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-navy mb-3">
                    Localities in {data.cityName}
                  </h4>
                  <div className="space-y-2">
                    {data.keyLocalities.slice(0, 6).map((loc, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange uppercase tracking-wider mb-2">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Connected Corridors</span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-navy mb-3">
                    Popular Routes from {data.cityName}
                  </h4>
                  <div className="space-y-2">
                    {data.popularRoutes.slice(0, 6).map((route, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center justify-between"
                      >
                        <span className="truncate">{route}</span>
                        <Truck className="w-3.5 h-3.5 text-orange shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-2 border border-orange/20 w-fit">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy">
                  Got Questions About Shifting in {data.cityName}?
                </h3>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h5 className="font-bold text-xs sm:text-sm text-navy mb-1.5">
                      How are relocation charges calculated in {data.cityName}?
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Costs depend on volume of items, packaging grade, floor levels, lift availability, and distance. We guarantee 100% upfront pricing with zero hidden add-ons.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h5 className="font-bold text-xs sm:text-sm text-navy mb-1.5">
                      Are household goods insured during transit?
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Yes. Track Cargo offers 100% comprehensive transit insurance policy covering accidental damages, road perils, and fire hazards.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h5 className="font-bold text-xs sm:text-sm text-navy mb-1.5">
                      Can I transport my bike or car together with household luggage?
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Yes. We utilize dedicated hydraulic car carrier trailers and wheel-clamp container trucks for scratch-free vehicle transit.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-navy text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-3">
            Ready for a Hassle-Free Move in {data.cityName}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Speak directly with our senior relocation coordinator for an instant quote and free pre-move survey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/enquiry?city=${encodeURIComponent(data.cityName)}`}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider transition shadow-glow-orange flex items-center gap-2"
            >
              <span>Get Free Moving Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.phones.primary}`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange" />
              <span>Call Helpline: {companyData.phones.primaryFormatted}</span>
            </a>

            <Link
              href="/branches"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs border border-white/10 transition flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-orange" />
              <span>Browse All 11 Branches</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
