export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortBenefit: string;
  tagline: string;
  description: string;
  icon: string; // Lucide icon identifier
  image: string;
  features: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  pricingRange: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "packing-moving",
    slug: "packing-moving",
    title: "Packing & Moving",
    shortBenefit: "4-layer protective packing with heavy-duty corrugated cartons & bubble wrap.",
    tagline: "Industrial-grade packaging engineered to withstand cross-country highway transit.",
    description:
      "Our premier packing and moving solution uses multi-layer defense mechanisms: air-bubble wraps, waterproof stretch film, edge guards, and heavy-duty corrugated boxes. Every item is coded and itemized before transit.",
    icon: "PackageCheck",
    image: "/services/packingmoving.jpg",
    features: [
      "5-ply & 7-ply heavy-duty corrugated carton boxes",
      "Specialized antistatic wrap for delicate electronics",
      "Custom wooden crating for crystal, artwork, and marble",
      "Itemized barcode labeling for 100% inventory accuracy",
    ],
    processSteps: [
      { title: "Virtual or Doorstep Survey", desc: "Detailed volumetric assessment and material planning." },
      { title: "Systematic Multi-Layer Packing", desc: "Room-by-room packing with specialized packaging materials." },
      { title: "Secured Container Loading", desc: "Careful loading with weight distribution and safety harness straps." },
      { title: "Unpacking & Waste Removal", desc: "Unboxing at destination with complete packaging debris clearance." },
    ],
    faqs: [
      {
        question: "What packing materials do you use for fragile kitchenware?",
        answer: "We use high-density bubble wrap, foam sheets, newsprint paper, and partitioned cellular boxes for glassware and china.",
      },
      {
        question: "Do you supply the packing boxes or should I buy them?",
        answer: "Track Cargo provides all packaging materials, including cartons, bubble wrap, tapes, and wardrobe boxes as part of the quotation.",
      },
    ],
    pricingRange: "From ₹4,500 for local Chennai moves",
  },
  {
    id: "loading-unloading",
    slug: "loading-unloading",
    title: "Loading & Unloading",
    shortBenefit: "Hydraulic lifters, floor ramps, and certified heavy-lift crews.",
    tagline: "Precision material handling with zero impact on doorframes, floors, or furniture.",
    description:
      "Avoid property damage and personal strain with our certified loading crews. We deploy hydraulic tailgates, specialized furniture dollies, stair-climbing hand trucks, and floor protective neoprene runners.",
    icon: "Truck",
    image: "/services/loadinunloading.jpg",
    features: [
      "Staircase neoprene runners and elevator wall pads",
      "Hydraulic tailgates on long-haul transport vehicles",
      "Ergonomic forearm forklifts and furniture sliders",
      "Strict safety protocols overseen by site supervisor",
    ],
    processSteps: [
      { title: "Pathway Protection", desc: "Laying protective runners on hardwood floors and masking doorways." },
      { title: "Weight-Balanced Staging", desc: "Categorizing heavy bases and fragile upper stacks." },
      { title: "Strap-Down Lashing", desc: "Ratchet-locking cargo inside closed-body container trucks." },
      { title: "Destination Placement", desc: "Carrying items to designated rooms on arrival." },
    ],
    faqs: [
      {
        question: "What if my building has no elevator?",
        answer: "Our crews are trained in multi-story manual rigging and stair handling. Please mention the floor number during your quote calculation.",
      },
      {
        question: "Are your loaders insured?",
        answer: "Yes, all personnel are directly employed, background-checked, and covered by comprehensive employer liability insurance.",
      },
    ],
    pricingRange: "Included in all moving packages or standalone from ₹2,500",
  },
  {
    id: "household-shifting",
    slug: "household-shifting",
    title: "Household Shifting",
    shortBenefit: "Complete home relocation: dismantling, transit, and furniture reassembly.",
    tagline: "From 1 BHK apartments to multi-story villas — turnkey relocation with zero stress.",
    description:
      "Relocate your family without disruption. We handle your entire home: dismantling modular beds, wardrobing clothes wrinkle-free in mobile wardrobe cartons, packing fragile chinaware, and reassembling everything at your new doorstep.",
    icon: "Home",
    image: "/services/household.jpg",
    features: [
      "Dismantling & reassembly of cots, dining tables, and modular furniture",
      "Custom wardrobe hanging cartons for wrinkle-free clothes transit",
      "Specialized appliance disconnection and transit bolt installation",
      "Full transit insurance covering damage or theft",
    ],
    processSteps: [
      { title: "Survey & Pre-Move Briefing", desc: "Detailed inventory listing and move-day schedule alignment." },
      { title: "Dismantling & Packing", desc: "Skilled carpenters dismantle large items and pack individual parts." },
      { title: "Secure Transit", desc: "GPS-enabled container transport across city or interstate." },
      { title: "Reassembly & Settling In", desc: "Complete reassembly and room-wise furniture positioning." },
    ],
    faqs: [
      {
        question: "Can you install split ACs and TV wall mounts?",
        answer: "We offer basic appliance setup and partner with certified electricians and AC technicians upon request.",
      },
      {
        question: "How long does a local household move take?",
        answer: "A standard 2 BHK or 3 BHK move within Chennai is typically completed within 6 to 9 hours on the same day.",
      },
    ],
    pricingRange: "1 BHK from ₹6,500 | 2 BHK from ₹11,000 | 3 BHK from ₹16,500",
  },
  {
    id: "office-shifting",
    slug: "office-shifting",
    title: "Office & Corporate Shifting",
    shortBenefit: "Weekend & overnight moves with zero downtime for IT servers & workstations.",
    tagline: "Corporate relocation engineered around your business continuity.",
    description:
      "Relocating an office demands surgical precision. We execute weekend and overnight relocations for IT infrastructure, modular desks, server racks, and confidential records with tagged asset mapping so your team resumes work on Monday 9 AM.",
    icon: "Building2",
    image: "/services/office.jpg",
    features: [
      "Anti-static foam packing for servers, switches, and desktop setups",
      "Numbered workstation bin system for individual employee items",
      "Secure tamper-evident crates for confidential legal/HR files",
      "Weekend and night scheduling to prevent operational downtime",
    ],
    processSteps: [
      { title: "Facility Audit & Floor Mapping", desc: "Reviewing existing and target layouts with IT/facility leads." },
      { title: "Color-Coded Asset Tagging", desc: "Tagging monitors, cables, and desks by zone and employee ID." },
      { title: "Escorted Secure Transit", desc: "Sealed container movement with optional client representative escort." },
      { title: "Floor-Plan Reconstruction", desc: "Positioning desks, monitors, and servers according to blue-print." },
    ],
    faqs: [
      {
        question: "Can you handle high-density server rack relocations?",
        answer: "Yes, we de-rack, pack with antistatic cushioning, and move servers using air-ride suspension container trucks.",
      },
      {
        question: "Do you sign Non-Disclosure Agreements (NDAs)?",
        answer: "Yes, corporate NDAs and data confidentiality compliance agreements are standard practice for our corporate moves.",
      },
    ],
    pricingRange: "Custom corporate quote based on workstation count and IT specs",
  },
  {
    id: "bike-transport",
    slug: "bike-transport",
    title: "Bike Transport",
    shortBenefit: "Wheel-locked metal crate packing and scratch-proof bubble wrapping.",
    tagline: "Dedicated two-wheeler relocation across India with zero odometer addition.",
    description:
      "Transport your motorcycle, scooter, or superbike anywhere in India safely. We inspect and drain petrol, protect mirrors, indicators, and exhaust with triple-layer bubble wrap, and lash the bike inside enclosed auto-carriers.",
    icon: "Bike",
    image: "/services/biketransport.jpg",
    features: [
      "Customized wheel-clamps preventing bike movement during transit",
      "Triple-layer scratch protection on fuel tank, mirrors, and exhaust",
      "Enclosed weather-proof container vehicles",
      "Door-to-door delivery with inspection checklist",
    ],
    processSteps: [
      { title: "Physical Inspection", desc: "Recording existing scratches/scuffs with photographs on the job sheet." },
      { title: "Fuel Drainage & Protective Wrapping", desc: "Emptying tank to safety levels and wrapping vulnerable parts." },
      { title: "Carrier Loading & Lashing", desc: "Locking wheels onto the vehicle floor with dual ratchet belts." },
      { title: "Doorstep Delivery", desc: "Offloading, unboxing, and joint inspection before handover." },
    ],
    faqs: [
      {
        question: "Do I need to empty the petrol tank before pickup?",
        answer: "For safety regulations, please keep less than 1 liter of fuel. Our crew assists with final draining during loading.",
      },
      {
        question: "What documents are required for inter-state bike transport?",
        answer: "Copy of Registration Certificate (RC), valid insurance copy, pollution certificate (PUC), and owner government ID proof.",
      },
    ],
    pricingRange: "From ₹2,800 local/regional | From ₹5,500 inter-state",
  },
  {
    id: "car-transport",
    slug: "car-transport",
    title: "Car Transport",
    shortBenefit: "Enclosed hydraulic car-carrier trailers with real-time GPS tracking.",
    tagline: "White-glove automobile relocation for hatchbacks, sedans, SUVs, and luxury cars.",
    description:
      "Never put highway wear-and-tear on your personal car. We transport vehicles in specialized multi-car hydraulic carrier trailers or dedicated single-car covered containers, equipped with real-time GPS tracking and comprehensive car transit insurance.",
    icon: "Car",
    image: "/services/cartransport.jpg",
    features: [
      "Covered car carrier trucks shielding from stone chips and rain",
      "Hydraulic ramps ensuring zero scrape on low-ground clearance bumpers",
      "Comprehensive vehicle transit insurance against all transit perils",
      "Live GPS tracking link sent to the vehicle owner",
    ],
    processSteps: [
      { title: "Detailed Vehicle Condition Report", desc: "Detailed inspection of exterior, odometer reading, and tires." },
      { title: "Hydraulic Ramp Ramp-On", desc: "Driving vehicle into the carrier under expert guidance." },
      { title: "4-Wheel Locking Straps", desc: "High-tensile straps securing each wheel to the trailer chassis." },
      { title: "Punctual Delivery & Handover", desc: "Cleaning, exterior inspection, and key handover." },
    ],
    faqs: [
      {
        question: "Can I leave personal belongings inside the car?",
        answer: "We recommend keeping only the spare tire and car jack. Flammable items, electronics, and valuables must not be kept inside.",
      },
      {
        question: "How long does car transit take from Chennai to Delhi?",
        answer: "Enclosed car trailers typically deliver within 5 to 7 days depending on national highway logistics checkpoints.",
      },
    ],
    pricingRange: "From ₹8,500 (South India) | From ₹16,000 (Chennai to North/West India)",
  },
  {
    id: "international-shifting",
    slug: "international-shifting",
    title: "International Shifting",
    shortBenefit: "FCL/LCL ocean freight, air cargo, and customs clearance support.",
    tagline: "Global relocations to over 50 countries with seamless customs clearance.",
    description:
      "Moving abroad from India? Track Cargo manages international moves with global freight partners: export-grade fumigated wooden crating, sea freight (FCL/LCL) containers, air cargo, and complete door-to-door customs documentation.",
    icon: "Globe",
    image: "/services/internationalrelocation.jpg",
    features: [
      "Fumigated heat-treated wooden crates meeting ISPM-15 standards",
      "Full Container Load (FCL) and Less than Container Load (LCL) options",
      "Dedicated customs documentation officers at Chennai Port & Airport",
      "Global destination agent network for doorstep delivery and unpacking",
    ],
    processSteps: [
      { title: "International Survey & Feasibility", desc: "Assessing overseas volume, customs duties, and forbidden goods." },
      { title: "Export Packaging & Inventory", desc: "Bilingual itemized packing lists for international customs." },
      { title: "Port Clearance & Ocean Transit", desc: "Handling bill of lading, customs inspection, and vessel booking." },
      { title: "Overseas Customs & Delivery", desc: "Port-of-entry clearance and direct delivery to your foreign home." },
    ],
    faqs: [
      {
        question: "Which countries do you shift goods to?",
        answer: "We manage regular routes to the UAE, Singapore, UK, USA, Canada, Australia, and European countries.",
      },
      {
        question: "What documents are required for international relocation?",
        answer: "Original passport with valid visa, work permit, transfer-of-residence declaration, and detailed inventory packing list.",
      },
    ],
    pricingRange: "Custom freight calculation based on cubic meters (CBM) and destination",
  },
  {
    id: "warehousing",
    slug: "warehousing-services",
    title: "Warehousing & Secure Storage",
    shortBenefit: "CCTV-monitored, moisture-proof storage with flexible monthly terms.",
    tagline: "Short-term and long-term secure storage for household goods and business inventory.",
    description:
      "Need temporary storage while renovating or traveling abroad? Store your household goods, office furniture, or commercial stock in our secure, pest-controlled, CCTV-monitored warehouse facilities located in Chennai and major transport hubs.",
    icon: "Warehouse",
    image: "/services/warehouse.jpg",
    features: [
      "24/7 CCTV surveillance and biometric access-controlled premises",
      "Moisture-proof, pest-controlled, and fire-retardant storage bays",
      "Flexible monthly contracts with no lock-in periods",
      "Complete inventory barcoding with retrieval on 24-hour notice",
    ],
    processSteps: [
      { title: "Goods Pick-Up & Inventory", desc: "Packing goods for long-term storage and issuing warehouse receipt." },
      { title: "Palletizing & Bay Allocation", desc: "Sealing boxes on wooden pallets wrapped in anti-dust stretch film." },
      { title: "Continuous Monitoring", desc: "Periodic pest control spray and 24x7 security monitoring." },
      { title: "Doorstep Redelivery", desc: "Delivering your stored goods whenever your new home is ready." },
    ],
    faqs: [
      {
        question: "Can I inspect my goods while they are in storage?",
        answer: "Yes, you can schedule a warehouse visit during standard business hours with your registered consignment slip.",
      },
      {
        question: "What is the minimum storage duration?",
        answer: "Our minimum storage period is 15 days, with monthly billing thereafter.",
      },
    ],
    pricingRange: "From ₹1,800/month for single room items | From ₹3,500/month for 2 BHK",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const norm = slug.toLowerCase().trim();
  return (
    servicesData.find((s) => s.slug === norm || s.id === norm) ||
    servicesData.find((s) => {
      if (norm === "packing-and-moving" && s.slug === "packing-moving") return true;
      if (norm === "loading-and-unloading" && s.slug === "loading-unloading") return true;
      if (norm === "warehousing" && s.slug === "warehousing-services") return true;
      return false;
    })
  );
}
