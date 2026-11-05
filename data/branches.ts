export interface BranchLocation {
  id: string;
  city: string;
  isHeadquarters?: boolean;
  branchName: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  fleetCapacity: string;
}

export const branchLocations: BranchLocation[] = [
  {
    id: "hyderabad-office",
    city: "Hyderabad",
    branchName: "Hyderabad Office",
    address:
      "Shop No. 8-7-131/2 , Near Gouri Nagar Masjid, Old Bowenpally, Secunderabad- 500011 Telangana .",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "24x7 Operations & Transit Desk",
    fleetCapacity: "35+ Container Vehicles",
  },
  {
    id: "mumbai-office",
    city: "Mumbai",
    branchName: "Mumbai Office",
    address:
      "Office No. 4,Chintamani CHS, Plot No. E-68,Sector 9, Airoli, Navi Mumbai 400708, Maharashtra .",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "24x7 Transit & Local Shifting Hub",
    fleetCapacity: "40+ Express Container Trucks",
  },
  {
    id: "chennai-office",
    city: "Chennai",
    isHeadquarters: true,
    branchName: "Chennai Office",
    address:
      "Shop No, 24, 3rd St, Thiverkadu Co-operative Nagar, Shanmuga Nagar Annexe, Thiruverkadu, Chennai, Tamil Nadu 600077",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "24x7 Operations & Dispatch",
    fleetCapacity: "65+ Container Vehicles & Hydraulic Carriers",
  },
  {
    id: "ahmedabad-isanpur",
    city: "Ahmedabad",
    branchName: "Ahmedabad Office",
    address:
      "Varahi Park V2,Behind Mony Hotel,Navrang Tenament, Isanpur, Ahmedabad, 382443, Gujarat .",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "8:00 AM - 10:00 PM Daily",
    fleetCapacity: "25+ Local & Interstate Trucks",
  },
  {
    id: "bangalore-office",
    city: "Bangalore",
    branchName: "Bangalore Office",
    address:
      "2nd Cross Road , Kalasipalayam, New Extension Bangalore-560002 .",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "24x7 Dispatch Operations",
    fleetCapacity: "45+ Express Container Trucks",
  },
  {
    id: "delhi-office",
    city: "Delhi",
    branchName: "Delhi Office",
    address:
      "Rangpuri Extn. B block Street No.7, Mahipalpur, Delhi .",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "24x7 National Highway Corridor",
    fleetCapacity: "50+ Heavy Container Trucks",
  },
  {
    id: "jaipur-office",
    city: "Jaipur",
    branchName: "Jaipur Office",
    address:
      "Plot No. 118, Rajani Vihar, Near Heera Pura Power House, Ajmer Road, Jaipur Pin Code - 302024.",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "8:00 AM - 9:00 PM Daily",
    fleetCapacity: "20+ Express Shifting Vehicles",
  },
  {
    id: "faridabad-office",
    city: "Faridabad",
    branchName: "Faridabad Office",
    address:
      "17, Mathura Rd, Sarpanch Colony, Sector 20B, Faridabad, Haryana 121001.",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "8:00 AM - 9:00 PM Daily",
    fleetCapacity: "25+ NCR Logistics Trucks",
  },
  {
    id: "chandigarh-office",
    city: "Chandigarh",
    branchName: "Chandigarh Office",
    address:
      "Plot No. 37, Sector 26 ,Transport Nagar ,Chandigarh .",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "24x7 Northern Transit Point",
    fleetCapacity: "30+ Intercity Fleet Trucks",
  },
  {
    id: "visakhapatnam-office",
    city: "Visakhapatnam",
    branchName: "Visakhapatnam Office",
    address:
      "Door No. 30-66-25 , Kanithi Colony, Vadlapudi RHC, New Krishna Temple, Visakhapatnam - 530046.",
    phone: "+91-9350895820",
    email: "info@trackcargopackers.in",
    workingHours: "8:00 AM - 10:00 PM Daily",
    fleetCapacity: "Coastal Andhra Logistics Fleet",
  },
  {
    id: "ahmedabad-narol",
    city: "Ahmedabad (Narol)",
    branchName: "Ahmedabad Office",
    address:
      "Shop 5 jainam residency near swaminarayan park 1 narol aslali highway narol Ahmedabad 382405.",
    phone: "+91-9638601000",
    email: "info@trackcargopackers.in",
    workingHours: "8:00 AM - 10:00 PM Daily",
    fleetCapacity: "Highway Transporter Fleet",
  },
];
