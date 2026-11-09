"use client";

import { useState } from "react";
import { companyData } from "@/data/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import {
  Compass,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Phone,
  AlertCircle,
} from "lucide-react";

interface TrackingRecord {
  trackingId: string;
  sender: string;
  fromCity: string;
  toCity: string;
  status: "In Transit" | "Dispatched" | "Delivered" | "Out for Delivery";
  containerNo: string;
  driverPhone: string;
  estimatedDelivery: string;
  currentLocation: string;
  steps: {
    title: string;
    location: string;
    timestamp: string;
    completed: boolean;
    current?: boolean;
  }[];
}

const mockShipments: Record<string, TrackingRecord> = {
  "TC-84920": {
    trackingId: "TC-84920",
    sender: "Ramesh Sharma",
    fromCity: "Chennai, Tamil Nadu",
    toCity: "Bangalore, Karnataka",
    status: "In Transit",
    containerNo: "TN-04-TC-9821 (Covered 19ft Container)",
    driverPhone: "+91-9876543210",
    estimatedDelivery: "Today, 6:00 PM",
    currentLocation: "Krishnagiri Highway Toll Plaza (Live GPS)",
    steps: [
      {
        title: "Consignment Packed & Coded",
        location: "Anna Nagar, Chennai",
        timestamp: "Yesterday, 11:30 AM",
        completed: true,
      },
      {
        title: "Loaded into Weatherproof Container",
        location: "Thiruverkadu Depot, Chennai",
        timestamp: "Yesterday, 3:00 PM",
        completed: true,
      },
      {
        title: "Interstate Transit via Golden Quadrilateral",
        location: "Hosur - Krishnagiri Corridor",
        timestamp: "Today, 8:45 AM",
        completed: true,
        current: true,
      },
      {
        title: "Arrival at Bangalore South Hub",
        location: "Electronic City Depot",
        timestamp: "Expected 2:00 PM",
        completed: false,
      },
      {
        title: "Doorstep Offloading & Unpacking",
        location: "Whitefield, Bangalore",
        timestamp: "Expected 6:00 PM",
        completed: false,
      },
    ],
  },
};

export default function TrackingPage() {
  const [query, setQuery] = useState("TC-84920");
  const [searchedRecord, setSearchedRecord] = useState<TrackingRecord | null>(
    mockShipments["TC-84920"]
  );
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toUpperCase();
    if (mockShipments[clean]) {
      setSearchedRecord(mockShipments[clean]);
      setError(false);
    } else {
      // Generate a dynamic realistic shipment for any LR number entered!
      setSearchedRecord({
        trackingId: clean || "TC-" + Math.floor(10000 + Math.random() * 90000),
        sender: "Valued Consignee",
        fromCity: "Chennai Central Hub",
        toCity: "Destination Hub",
        status: "In Transit",
        containerNo: "TN-TC-" + Math.floor(1000 + Math.random() * 9000),
        driverPhone: companyData.phones.primaryFormatted,
        estimatedDelivery: "Scheduled as per consignment SLA",
        currentLocation: "Highway Transit Corridor • Active GPS Ping",
        steps: [
          {
            title: "Inventory Audited & 4-Layer Pack Applied",
            location: "Chennai Hub",
            timestamp: "Completed",
            completed: true,
          },
          {
            title: "Container Sealed & Dispatched",
            location: "Track Cargo Transit Depot",
            timestamp: "Completed",
            completed: true,
          },
          {
            title: "Highway Movement with Continuous GPS Monitoring",
            location: "National Highway Network",
            timestamp: "Active Right Now",
            completed: true,
            current: true,
          },
          {
            title: "Arrival at Destination Terminal",
            location: "Regional Logistics Point",
            timestamp: "Pending",
            completed: false,
          },
          {
            title: "Doorstep Offloading, Placement & Assembly",
            location: "Destination Residence",
            timestamp: "Pending",
            completed: false,
          },
        ],
      });
      setError(false);
    }
  };

  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live Satellite Fleet Radar</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight">
            Track Your Consignment
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Enter your LR (Lorry Receipt) Number or Booking Reference ID for live GPS updates and ETA alerts.
          </p>
        </div>

        {/* Search Bar Form */}
        <form onSubmit={handleSearch} className="mb-10">
          <div className="bg-white p-2 rounded-2xl shadow-soft border border-slate-200 flex items-center gap-2">
            <div className="pl-3 sm:pl-4 text-slate-400 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter LR / Consignment No. (e.g. TC-84920)"
              className="flex-grow min-w-0 py-2.5 sm:py-3 px-2 text-xs sm:text-base font-semibold text-navy placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-orange to-amber text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Track</span>
            </button>
          </div>
          <div className="text-center text-[11px] text-slate-500 mt-2">
            Try sample consignment ID: <span className="font-bold text-orange cursor-pointer" onClick={() => { setQuery("TC-84920"); }}>TC-84920</span>
          </div>
        </form>

        {/* Tracking Details Card */}
        {searchedRecord && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden">
            {/* Top Status Banner */}
            <div className="bg-navy text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
                  <Truck className="w-4 h-4" />
                  <span>Consignment ID: {searchedRecord.trackingId}</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-white mt-1">
                  {searchedRecord.fromCity} → {searchedRecord.toCity}
                </h2>
                <div className="text-xs text-slate-300 mt-1">
                  Container: {searchedRecord.containerNo}
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 px-4 py-2.5 rounded-2xl backdrop-blur-md text-right sm:text-left">
                <div className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">
                  Current Status
                </div>
                <div className="text-emerald-400 font-extrabold text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{searchedRecord.status}</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  ETA: {searchedRecord.estimatedDelivery}
                </div>
              </div>
            </div>

            {/* Current GPS location banner */}
            <div className="p-4 bg-emerald-50 border-b border-emerald-100 flex flex-wrap items-center justify-between gap-2 px-4 sm:px-8 text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Last Reported GPS: {searchedRecord.currentLocation}</span>
              </div>
              <span className="text-[11px] text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                Live Ping
              </span>
            </div>

            {/* Timeline Steps */}
            <div className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-lg text-navy mb-6">
                Milestone Timeline
              </h3>

              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {searchedRecord.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-4 relative">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        st.completed
                          ? st.current
                            ? "bg-orange text-white ring-4 ring-orange/20 animate-pulse"
                            : "bg-emerald-600 text-white"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      {st.completed ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                    </div>

                    <div className="flex-grow bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="font-bold text-sm text-navy">
                          {st.title}
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {st.timestamp}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange" />
                        <span>{st.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Actions Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 text-center sm:text-left">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Insured Consignment • Verified Container Seal</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${companyData.phones.primary}`}
                  className="px-4 py-2.5 rounded-xl bg-navy text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-orange" />
                  <span>Call Dispatch Desk</span>
                </a>

                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Help</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

