export interface RateCardRow {
  moveType: string;
  withinCity: string;
  upto400km: string;
  upto1000km: string;
  above1000km: string;
  packingTime: string;
}

export const domesticMovingRates: RateCardRow[] = [
  {
    moveType: "Few Items / 1 RK",
    withinCity: "₹3,500 - ₹6,500",
    upto400km: "₹9,500 - ₹15,000",
    upto1000km: "₹14,000 - ₹22,000",
    above1000km: "₹18,000 - ₹28,000",
    packingTime: "2 - 3 Hours",
  },
  {
    moveType: "1 BHK Shifting",
    withinCity: "₹5,500 - ₹9,500",
    upto400km: "₹14,000 - ₹22,000",
    upto1000km: "₹18,000 - ₹28,000",
    above1000km: "₹24,000 - ₹36,000",
    packingTime: "3 - 5 Hours",
  },
  {
    moveType: "2 BHK Shifting",
    withinCity: "₹9,000 - ₹14,500",
    upto400km: "₹28,000 - ₹38,000",
    upto1000km: "₹34,000 - ₹48,000",
    above1000km: "₹42,000 - ₹60,000",
    packingTime: "5 - 7 Hours",
  },
  {
    moveType: "3 BHK Shifting",
    withinCity: "₹14,000 - ₹21,000",
    upto400km: "₹36,000 - ₹52,000",
    upto1000km: "₹44,000 - ₹65,000",
    above1000km: "₹55,000 - ₹85,000",
    packingTime: "6 - 9 Hours",
  },
  {
    moveType: "4 BHK / Villa",
    withinCity: "₹19,000 - ₹32,000",
    upto400km: "₹48,000 - ₹72,000",
    upto1000km: "₹62,000 - ₹95,000",
    above1000km: "₹78,000 - ₹1,25,000",
    packingTime: "1 - 2 Days",
  },
  {
    moveType: "Office / Commercial",
    withinCity: "₹11,000 - ₹35,000+",
    upto400km: "₹35,000 - ₹85,000+",
    upto1000km: "₹55,000 - ₹1,40,000+",
    above1000km: "₹85,000 - ₹2,50,000+",
    packingTime: "Weekend SLA",
  },
];

export interface VehicleRateRow {
  vehicleType: string;
  upto400km: string;
  upto1000km: string;
  above1000km: string;
  transitMode: string;
}

export const vehicleRelocationRates: VehicleRateRow[] = [
  {
    vehicleType: "Standard Bike / Scooter",
    upto400km: "₹2,800 - ₹4,500",
    upto1000km: "₹4,500 - ₹7,500",
    above1000km: "₹6,500 - ₹10,500",
    transitMode: "Wheel-Locked Container",
  },
  {
    vehicleType: "Cruiser / Superbike (>350cc)",
    upto400km: "₹3,800 - ₹5,800",
    upto1000km: "₹6,000 - ₹9,500",
    above1000km: "₹8,500 - ₹14,000",
    transitMode: "Special Wooden Box / Lashing",
  },
  {
    vehicleType: "Hatchback Car (Swift, i10)",
    upto400km: "₹7,500 - ₹11,000",
    upto1000km: "₹11,500 - ₹16,500",
    above1000km: "₹15,000 - ₹22,000",
    transitMode: "Covered Car Carrier Trailer",
  },
  {
    vehicleType: "Sedan (City, Verna, Ciaz)",
    upto400km: "₹9,000 - ₹13,000",
    upto1000km: "₹13,500 - ₹19,000",
    above1000km: "₹18,000 - ₹26,000",
    transitMode: "Covered Car Carrier Trailer",
  },
  {
    vehicleType: "SUV / Luxury (Creta, Fortuner, BMW)",
    upto400km: "₹11,000 - ₹16,000",
    upto1000km: "₹16,000 - ₹24,000",
    above1000km: "₹22,000 - ₹34,000",
    transitMode: "Hydraulic Single/Covered Car Trailer",
  },
];

export interface EstimatorResult {
  minPrice: number;
  maxPrice: number;
  recommendedVehicle: string;
  estimatedTransitTime: string;
}

export function calculateEstimatedPrice(
  moveSize: string,
  distanceKm: number,
  vehicleAddon: "none" | "bike" | "car" | "both" = "none"
): EstimatorResult {
  let baseMin = 4500;
  let baseMax = 7500;
  let vehicle = "14ft Closed Container";
  let transitDays = "Same Day (Local)";

  // Distance tiers
  if (distanceKm <= 50) {
    // Local move
    if (moveSize.includes("Few") || moveSize.includes("1 RK")) {
      baseMin = 3500;
      baseMax = 6500;
      vehicle = "Tata Ace / Bolero Pickup";
    } else if (moveSize.includes("1 BHK")) {
      baseMin = 5500;
      baseMax = 9500;
      vehicle = "14ft Closed Container";
    } else if (moveSize.includes("2 BHK")) {
      baseMin = 9000;
      baseMax = 14500;
      vehicle = "17ft Closed Container";
    } else if (moveSize.includes("3 BHK")) {
      baseMin = 14000;
      baseMax = 21000;
      vehicle = "19ft Container Truck";
    } else if (moveSize.includes("4 BHK") || moveSize.includes("Villa")) {
      baseMin = 19000;
      baseMax = 32000;
      vehicle = "22ft Container or 2 Trucks";
    } else {
      baseMin = 12000;
      baseMax = 28000;
      vehicle = "Commercial 19ft Container";
    }
    transitDays = "Within 6 - 8 Hours";
  } else if (distanceKm <= 400) {
    // Regional move (e.g. Chennai to Bangalore/Coimbatore)
    if (moveSize.includes("Few") || moveSize.includes("1 RK")) {
      baseMin = 9500;
      baseMax = 15000;
    } else if (moveSize.includes("1 BHK")) {
      baseMin = 14000;
      baseMax = 22000;
    } else if (moveSize.includes("2 BHK")) {
      baseMin = 28000;
      baseMax = 38000;
    } else if (moveSize.includes("3 BHK")) {
      baseMin = 36000;
      baseMax = 52000;
    } else if (moveSize.includes("4 BHK") || moveSize.includes("Villa")) {
      baseMin = 48000;
      baseMax = 72000;
    } else {
      baseMin = 35000;
      baseMax = 65000;
    }
    transitDays = "24 - 36 Hours";
  } else if (distanceKm <= 1000) {
    // Mid distance (e.g. Chennai to Hyderabad/Pune/Goa)
    if (moveSize.includes("Few") || moveSize.includes("1 RK")) {
      baseMin = 14000;
      baseMax = 22000;
    } else if (moveSize.includes("1 BHK")) {
      baseMin = 18000;
      baseMax = 28000;
    } else if (moveSize.includes("2 BHK")) {
      baseMin = 34000;
      baseMax = 48000;
    } else if (moveSize.includes("3 BHK")) {
      baseMin = 44000;
      baseMax = 65000;
    } else if (moveSize.includes("4 BHK") || moveSize.includes("Villa")) {
      baseMin = 62000;
      baseMax = 95000;
    } else {
      baseMin = 55000;
      baseMax = 110000;
    }
    transitDays = "2 - 3 Days";
  } else {
    // Long distance (e.g. Chennai to Delhi/Mumbai/Kolkata)
    if (moveSize.includes("Few") || moveSize.includes("1 RK")) {
      baseMin = 18000;
      baseMax = 28000;
    } else if (moveSize.includes("1 BHK")) {
      baseMin = 24000;
      baseMax = 36000;
    } else if (moveSize.includes("2 BHK")) {
      baseMin = 42000;
      baseMax = 60000;
    } else if (moveSize.includes("3 BHK")) {
      baseMin = 55000;
      baseMax = 85000;
    } else if (moveSize.includes("4 BHK") || moveSize.includes("Villa")) {
      baseMin = 78000;
      baseMax = 125000;
    } else {
      baseMin = 85000;
      baseMax = 180000;
    }
    transitDays = "4 - 6 Days";
  }

  // Vehicle addons
  let addonCostMin = 0;
  let addonCostMax = 0;
  if (vehicleAddon === "bike" || moveSize.toLowerCase().includes("bike")) {
    addonCostMin += distanceKm <= 400 ? 3000 : distanceKm <= 1000 ? 5500 : 8000;
    addonCostMax += distanceKm <= 400 ? 4500 : distanceKm <= 1000 ? 7500 : 10500;
  }
  if (vehicleAddon === "car" || moveSize.toLowerCase().includes("car")) {
    addonCostMin += distanceKm <= 400 ? 8000 : distanceKm <= 1000 ? 14000 : 20000;
    addonCostMax += distanceKm <= 400 ? 12000 : distanceKm <= 1000 ? 20000 : 28000;
  }
  if (vehicleAddon === "both") {
    addonCostMin += distanceKm <= 400 ? 10500 : distanceKm <= 1000 ? 19000 : 27000;
    addonCostMax += distanceKm <= 400 ? 16000 : distanceKm <= 1000 ? 27000 : 38000;
  }

  return {
    minPrice: baseMin + addonCostMin,
    maxPrice: baseMax + addonCostMax,
    recommendedVehicle: vehicle,
    estimatedTransitTime: transitDays,
  };
}
