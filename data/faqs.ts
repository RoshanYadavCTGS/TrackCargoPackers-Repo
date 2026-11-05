export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "pricing" | "insurance" | "process" | "vehicles";
}

export const masterFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How are moving and packing charges calculated?",
    answer:
      "Our charges are calculated transparently based on three primary factors: (1) Total cubic volume/weight of goods (move size), (2) Road distance between origin and destination, and (3) Specialized services required such as customized wooden crating, vehicle transport, or multi-story stair carrying when elevators are unavailable.",
    category: "pricing",
  },
  {
    id: "faq-2",
    question: "Does Track Cargo Packers & Movers provide comprehensive transit insurance?",
    answer:
      "Yes. We offer 100% full-value transit insurance covering goods against accidental damage, highway incidents, fire, and natural perils during movement. Our move coordinators handle all insurance documentation and declarations prior to dispatch.",
    category: "insurance",
  },
  {
    id: "faq-3",
    question: "How far in advance should I schedule my moving date?",
    answer:
      "We recommend booking at least 3 to 7 days in advance for intercity domestic moves, and 24 to 48 hours for local moves within Chennai. However, we also maintain emergency dispatch units for same-day urgent relocations based on fleet availability.",
    category: "process",
  },
  {
    id: "faq-4",
    question: "What items are prohibited from being transported?",
    answer:
      "For legal and safety compliance, we cannot transport flammable materials (gas cylinders, kerosene, petrol), explosives, fireworks, illegal substances, perishable food items, live pets, cash, jewelry, and unregistered firearms.",
    category: "process",
  },
  {
    id: "faq-5",
    question: "How do you ensure cars and bikes are shifted without damage?",
    answer:
      "Two-wheelers are wrapped in 3-layer protective sheets and secured with high-tensile ratchet straps onto wheel-clamp stands inside covered trucks. Cars are loaded via specialized hydraulic ramps onto enclosed container car-carriers with 4-wheel chocks and underbody locks.",
    category: "vehicles",
  },
  {
    id: "faq-6",
    question: "Can I track my consignment live during transit?",
    answer:
      "Yes. Every long-distance container vehicle is equipped with live GPS hardware. You receive a dedicated tracking link and automated SMS/WhatsApp milestone alerts as your consignment clears key transit hubs.",
    category: "process",
  },
  {
    id: "faq-7",
    question: "Do you provide unpacking and furniture reassembly at destination?",
    answer:
      "Yes. Our comprehensive shifting packages include doorstep offloading, unpacking, placement into designated rooms, and reassembly of standard beds, dining tables, and modular furniture by skilled carpenters.",
    category: "process",
  },
  {
    id: "faq-8",
    question: "Are there any hidden costs or surprise fees on move day?",
    answer:
      "Zero hidden fees. Our formal quotation is all-inclusive, covering packing materials, labor, loading, container freight, tolls, and taxes. Any optional extras (such as specialized AC technician uninstallation or crane lifting) are explicitly itemized upfront.",
    category: "pricing",
  },
];
