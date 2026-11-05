export interface CityData {
  slug: string; // e.g. "chennai", "bangalore"
  cityName: string;
  state: string;
  hubLocation: string;
  phone: string;
  rating: number;
  reviewCount: string;
  popularRoutes: string[];
  keyLocalities: string[];
  intro: string;
  metaTitle: string;
  metaDescription: string;
}

export const citiesData: CityData[] = [
  {
    slug: "chennai",
    cityName: "Chennai",
    state: "Tamil Nadu",
    hubLocation: "Thiruverkadu & Anna Nagar Hubs",
    phone: "+91-9350895820",
    rating: 4.9,
    reviewCount: "840+",
    popularRoutes: [
      "Chennai to Bangalore",
      "Chennai to Hyderabad",
      "Chennai to Mumbai",
      "Chennai to Delhi",
      "Chennai to Coimbatore",
    ],
    keyLocalities: [
      "Anna Nagar",
      "Thiruverkadu",
      "Velachery",
      "OMR / IT Corridor",
      "Tambaram",
      "T. Nagar",
      "Adyar",
      "Porur",
      "Ambattur",
      "Madipakkam",
    ],
    intro:
      "Looking for verified, top-rated packers and movers in Chennai? Track Cargo Packers & Movers provides end-to-end relocation services across Chennai metropolitan area, offering multi-layer packaging, container vehicles, and skilled moving specialists.",
    metaTitle: "Best Packers and Movers in Chennai - Verified & Insured | Track Cargo",
    metaDescription:
      "Hire professional packers and movers in Chennai for household shifting, bike & car transport, and office relocation. 100% insured, transparent rates, 24x7 tracking.",
  },
  {
    slug: "bangalore",
    cityName: "Bangalore",
    state: "Karnataka",
    hubLocation: "Electronic City & Whitefield Logistics Depot",
    phone: "+91-9350895820",
    rating: 4.8,
    reviewCount: "620+",
    popularRoutes: [
      "Bangalore to Chennai",
      "Bangalore to Hyderabad",
      "Bangalore to Pune",
      "Bangalore to Mumbai",
    ],
    keyLocalities: [
      "Whitefield",
      "Electronic City",
      "Indiranagar",
      "Koramangala",
      "HSR Layout",
      "Marathahalli",
      "Hebbal",
      "Jayanagar",
    ],
    intro:
      "Reliable packers and movers in Bangalore for fast, secure home and tech office relocations. We run daily express container routes between Bangalore, Chennai, and other metro corridors.",
    metaTitle: "Packers and Movers in Bangalore - Safe Home Shifting | Track Cargo",
    metaDescription:
      "Top-rated Bangalore packers and movers. Daily container transit to Chennai, Hyderabad, Mumbai. Get an instant quote with zero hidden charges.",
  },
  {
    slug: "hyderabad",
    cityName: "Hyderabad",
    state: "Telangana",
    hubLocation: "Madhapur & Gachibowli Transit Station",
    phone: "+91-9350895820",
    rating: 4.8,
    reviewCount: "480+",
    popularRoutes: [
      "Hyderabad to Chennai",
      "Hyderabad to Bangalore",
      "Hyderabad to Pune",
      "Hyderabad to Delhi",
    ],
    keyLocalities: [
      "Gachibowli",
      "HITEC City",
      "Madhapur",
      "Kukatpally",
      "Jubilee Hills",
      "Banjara Hills",
      "Secunderabad",
      "Kondapur",
    ],
    intro:
      "Premier household shifting and corporate relocation services in Hyderabad. Certified packers, hydraulic container fleet, and dedicated move coordinators for seamless domestic transit.",
    metaTitle: "Packers and Movers in Hyderabad - Fast & Insured | Track Cargo",
    metaDescription:
      "Trust Track Cargo for effortless home and vehicle shifting in Hyderabad. Door-to-door relocation with full insurance and live GPS tracking.",
  },
  {
    slug: "delhi",
    cityName: "Delhi-NCR",
    state: "Delhi / NCR",
    hubLocation: "Gurugram & Okhla Industrial Logistics Hub",
    phone: "+91-9350895820",
    rating: 4.7,
    reviewCount: "590+",
    popularRoutes: [
      "Delhi to Chennai",
      "Delhi to Bangalore",
      "Delhi to Mumbai",
      "Delhi to Kolkata",
    ],
    keyLocalities: [
      "South Delhi",
      "Dwarka",
      "Gurugram Cyber City",
      "Noida Sector 62",
      "Rohini",
      "Janakpuri",
      "Vasant Kunj",
      "Faridabad",
    ],
    intro:
      "Long-haul interstate shifting specialists connecting Delhi-NCR to Southern and Western India. Heavy-duty packing, tamper-proof seals, and committed highway transit timelines.",
    metaTitle: "Packers and Movers in Delhi NCR - Domestic Shifting | Track Cargo",
    metaDescription:
      "Experienced packers and movers in Delhi NCR. Specializing in intercity moves from Delhi to Chennai, Bangalore, and Mumbai with full transit insurance.",
  },
  {
    slug: "mumbai",
    cityName: "Mumbai",
    state: "Maharashtra",
    hubLocation: "Bhiwandi Logistics Hub & Navi Mumbai",
    phone: "+91-9350895820",
    rating: 4.8,
    reviewCount: "710+",
    popularRoutes: [
      "Mumbai to Chennai",
      "Mumbai to Bangalore",
      "Mumbai to Pune",
      "Mumbai to Ahmedabad",
    ],
    keyLocalities: [
      "Andheri",
      "Bandra",
      "Navi Mumbai",
      "Thane",
      "Powai",
      "Borivali",
      "Worli",
      "Goregaon",
    ],
    intro:
      "Fast, insured shifting solutions for apartments, high-rises, and corporate offices in Mumbai. Equipped with specialized rigging and elevator protection padding.",
    metaTitle: "Packers and Movers in Mumbai - Trusted Shifting | Track Cargo",
    metaDescription:
      "Professional home shifting, car carrier, and bike relocation in Mumbai. Real-time GPS tracking, transparent rates, zero damage guarantee.",
  },
  {
    slug: "pune",
    cityName: "Pune",
    state: "Maharashtra",
    hubLocation: "Hinjawadi IT Depot & Wakad Hub",
    phone: "+91-9350895820",
    rating: 4.8,
    reviewCount: "390+",
    popularRoutes: [
      "Pune to Bangalore",
      "Pune to Chennai",
      "Pune to Mumbai",
      "Pune to Hyderabad",
    ],
    keyLocalities: [
      "Hinjawadi",
      "Wakad",
      "Kothrud",
      "Baner",
      "Viman Nagar",
      "Hadapsar",
      "Magarpatta",
      "Aundh",
    ],
    intro:
      "Tech-enabled shifting services for IT professionals and families in Pune. Safe packing, on-time container movement, and hassle-free destination unpacking.",
    metaTitle: "Packers and Movers in Pune - Affordable & Reliable | Track Cargo",
    metaDescription:
      "Hire top-rated packers and movers in Pune for intercity and local shifting. Specialized IT equipment and vehicle transportation.",
  },
  {
    slug: "kolkata",
    cityName: "Kolkata",
    state: "West Bengal",
    hubLocation: "Howrah & Rajarhat New Town Center",
    phone: "+91-9350895820",
    rating: 4.7,
    reviewCount: "310+",
    popularRoutes: [
      "Kolkata to Chennai",
      "Kolkata to Delhi",
      "Kolkata to Bangalore",
      "Kolkata to Bhubaneswar",
    ],
    keyLocalities: [
      "Salt Lake",
      "New Town",
      "Howrah",
      "Alipore",
      "Ballygunge",
      "Rajarhat",
      "Garia",
      "Behala",
    ],
    intro:
      "Eastern India gateway logistics. Seamless domestic shifting connecting Kolkata with Chennai, Bangalore, and nationwide transport networks.",
    metaTitle: "Packers and Movers in Kolkata - Safe Shifting | Track Cargo",
    metaDescription:
      "Experienced Kolkata packers and movers. Intercity container movement with complete packing, loading, and transit protection.",
  },
  {
    slug: "coimbatore",
    cityName: "Coimbatore",
    state: "Tamil Nadu",
    hubLocation: "Peelamedu & Gandhipuram Transport Depot",
    phone: "+91-9350895820",
    rating: 4.9,
    reviewCount: "340+",
    popularRoutes: [
      "Coimbatore to Chennai",
      "Coimbatore to Bangalore",
      "Coimbatore to Kochi",
      "Coimbatore to Madurai",
    ],
    keyLocalities: [
      "RS Puram",
      "Gandhipuram",
      "Peelamedu",
      "Saravanampatti",
      "Saibaba Colony",
      "Singanallur",
    ],
    intro:
      "Daily express trucks between Coimbatore and Chennai. Affordable rates, 24-hour turnaround, and professional packing for homes and textile industries.",
    metaTitle: "Packers and Movers in Coimbatore - Fast Express | Track Cargo",
    metaDescription:
      "Reliable Coimbatore packers and movers for local and interstate relocation. Daily container trucks to Chennai and Bangalore.",
  },
];
