export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  subline: string;
  description: string;
  address: {
    shop: string;
    street: string;
    area: string;
    annexe: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phones: {
    primary: string;
    primaryFormatted: string;
    secondary: string;
    secondaryFormatted: string;
  };
  email: string;
  whatsappUrl: string;
  workingHours: string;
  stats: {
    yearsExperience: string;
    vehicles: string;
    deliveriesPerYear: string;
    satisfiedClients: string;
    googleRating: number;
    totalReviews: string;
  };
  trustChips: string[];
}

export const companyData: CompanyInfo = {
  name: "Track Cargo Packers & Movers",
  shortName: "Track Cargo",
  tagline: "Moving Made Effortless. Delivered Across India.",
  subline:
    "15+ years. 165K+ happy customers. Insured, on-time, stress-free moving services for homes, vehicles, and enterprises.",
  description:
    "Track Cargo Packers & Movers is Chennai's leading logistics and relocation company, operating an extensive container fleet across all major Indian cities with 100% transit insurance and real-time tracking.",
  address: {
    shop: "Shop No 24",
    street: "3rd St, Thiverkadu Co-operative Nagar",
    annexe: "Shanmuga Nagar Annexe",
    locality: "Thiruverkadu",
    area: "Thiruverkadu Co-operative Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600077",
    full: "Shop No 24, 3rd St, Thiverkadu Co-operative Nagar, Shanmuga Nagar Annexe, Thiruverkadu, Chennai 600077",
  },
  phones: {
    primary: "+919350895820",
    primaryFormatted: "+91-9350895820",
    secondary: "+916381218005",
    secondaryFormatted: "+91-6381218005",
  },
  email: "info@trackcargopackers.in",
  whatsappUrl:
    "https://wa.me/9350895820?text=Hello%20I%20Need%20Shifting%20Services",
  workingHours: "24x7 Customer Support & Dispatch Operations",
  stats: {
    yearsExperience: "15+",
    vehicles: "20,000+",
    deliveriesPerYear: "22,000+",
    satisfiedClients: "165,000+",
    googleRating: 4.8,
    totalReviews: "1,200+",
  },
  trustChips: [
    "100% Insured Goods",
    "24x7 Dedicated Support",
    "Real-Time GPS Tracking",
    "Zero Hidden Charges",
  ],
};
