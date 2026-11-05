export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number; // e.g. 5.0, 4.5, 4.0, 3.5
  moveType: string;
  comment: string;
  verified: boolean;
  date: string;
  avatar: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "palak",
    name: "Palak Sharma",
    role: "Senior Product Manager",
    location: "Chennai to Bangalore",
    rating: 5.0,
    moveType: "3 BHK Premium Relocation",
    comment:
      "Relocated our 3 BHK from Anna Nagar, Chennai to Indiranagar, Bangalore seamlessly. The team was exceptionally disciplined, used 4-layer packaging for our glassware and modular TV unit, and delivered right on time without a single scratch.",
    verified: true,
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "rutika",
    name: "Rutika Deshmukh",
    role: "Architect & Interior Designer",
    location: "Chennai to Pune",
    rating: 4.5,
    moveType: "2 BHK Shifting + Royal Enfield 350",
    comment:
      "Very prompt bike and household shifting. The packing quality exceeded expectations, especially the custom wheel-clamp crate used for my motorcycle. Transit was tracked via WhatsApp updates throughout.",
    verified: true,
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "abhijit",
    name: "Abhijit Roy",
    role: "Operations Director",
    location: "Chennai to Hyderabad",
    rating: 4.0,
    moveType: "Household Shifting & Furniture Assembly",
    comment:
      "Professional team and punctual arrival at our Thiruverkadu home. The loading crew worked with proper hydraulic lifts and floor mats. Everything arrived safely in Hyderabad. Solid, transparent pricing with no surprises.",
    verified: true,
    date: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "ankit",
    name: "Ankit Verma",
    role: "Founder & CTO",
    location: "Chennai Tech Corridor to Gurugram",
    rating: 3.5,
    moveType: "Office IT Equipment Relocation",
    comment:
      "Moved our startup's 25-workstation office during a weekend. The electrostatic packaging for our server racks and monitor screens was handled with great care. Transit took one extra day due to highway weather, but the customer coordinator stayed in constant touch.",
    verified: true,
    date: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
  },
];
